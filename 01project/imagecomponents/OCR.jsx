import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

function OCR({ image }) {
    const [medicineName, setMedicineName] = useState('');
    const [warnings, setWarnings] = useState([]);
    const [fullText, setFullText] = useState('');
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState('');

    // Helper function to find the most prominent text (medicine name)
    const findProminentText = (result) => {
        if (!result.data.words || result.data.words.length === 0) {
            return null;
        }

        // Sort words by confidence and font size (estimated by height of bounding box)
        const words = result.data.words
            .filter(word => {
                const text = word.text.trim();
                return (
                    text.length > 2 && 
                    /^[A-Za-z0-9\s-]+$/i.test(text) &&
                    word.confidence > 60 &&
                    !/^(warning|caution|note|ingredients|composition|manufactured|marketed|for|the|and|symbol)$/i.test(text)
                );
            })
            .map(word => ({
                text: word.text,
                confidence: word.confidence,
                height: word.bbox.y1 - word.bbox.y0,
                width: word.bbox.x1 - word.bbox.x0,
                yPosition: word.bbox.y0,
                area: (word.bbox.y1 - word.bbox.y0) * (word.bbox.x1 - word.bbox.x0)
            }));

        // Group words that are on the same line
        const lines = [];
        let currentLine = [words[0]];
        const yThreshold = Math.max(...words.map(w => w.height)) / 2;

        for (let i = 1; i < words.length; i++) {
            const prevWord = currentLine[currentLine.length - 1];
            const currentWord = words[i];
            
            if (Math.abs(prevWord.yPosition - currentWord.yPosition) < yThreshold) {
                currentLine.push(currentWord);
            } else {
                lines.push([...currentLine]);
                currentLine = [currentWord];
            }
        }
        lines.push(currentLine);

        // Score each line based on multiple factors
        const scoredLines = lines.map(line => {
            const avgHeight = line.reduce((sum, word) => sum + word.height, 0) / line.length;
            const avgConfidence = line.reduce((sum, word) => sum + word.confidence, 0) / line.length;
            const avgArea = line.reduce((sum, word) => sum + word.area, 0) / line.length;
            const text = line.map(word => word.text).join(' ');
            const yPosition = line[0].yPosition;
            
            return {
                text,
                score: (avgHeight * avgArea * (avgConfidence / 100) * (1 - yPosition / 2000)),
                height: avgHeight,
                yPosition
            };
        });

        // Sort by score and filter out unlikely medicine names
        scoredLines.sort((a, b) => b.score - a.score);
        return scoredLines.find(line => 
            line.text.length >= 3 && 
            line.text.length <= 50 && 
            !/^(warning|caution|note|ingredients|composition|manufactured|marketed)$/i.test(line.text)
        )?.text || null;
    };

    // Helper function to find warnings and cautions
    const findWarningsAndCautions = (result) => {
        const warningIndicators = [
            /warning/i,
            /caution/i,
            /alert/i,
            /danger/i,
            /\*\s*important/i,
            /side\s*effects?/i,
            /precautions?/i,
            /keep\s*out\s*of\s*reach/i,
            /not\s*for\s*children/i,
            /store\s*in\s*a\s*cool/i,
            /avoid/i,
            /do\s*not/i,
            /contraindications?/i,
            /overdose/i,
            /discontinue/i,
            /consult\s*doctor/i,
            /if\s*symptoms\s*persist/i
        ];

        const warnings = new Set(); // Use Set to avoid duplicates
        const lines = result.data.text.split('\n');
        let currentWarning = '';
        let isCollectingWarning = false;

        for (const line of lines) {
            const trimmedLine = line.trim();
            
            // Check if line starts with a warning indicator
            if (warningIndicators.some(pattern => pattern.test(trimmedLine))) {
                if (currentWarning) {
                    warnings.add(currentWarning.trim());
                }
                currentWarning = trimmedLine;
                isCollectingWarning = true;
            }
            // Continue collecting multi-line warnings
            else if (isCollectingWarning && trimmedLine && 
                    trimmedLine.length > 3 &&
                    !/^(manufactured|marketed|composition|ingredients)$/i.test(trimmedLine)) {
                currentWarning += ' ' + trimmedLine;
                // Stop collecting if line ends with punctuation
                if (/[.!?]$/.test(trimmedLine)) {
                    warnings.add(currentWarning.trim());
                    currentWarning = '';
                    isCollectingWarning = false;
                }
            }
            else {
                if (currentWarning) {
                    warnings.add(currentWarning.trim());
                }
                currentWarning = '';
                isCollectingWarning = false;
            }
        }

        // Add final warning if exists
        if (currentWarning) {
            warnings.add(currentWarning.trim());
        }

        return Array.from(warnings)
            .map(warning => warning.replace(/^\*+\s*/, '').trim())
            .filter(warning => warning.length > 5);
    };

    const processMedicineImage = async () => {
        if (!image) {
            setError('Please provide an image');
            return;
        }

        try {
            setError('');
            setProgress(0);
            setWarnings([]);
            setFullText('');
            
            const result = await Tesseract.recognize(image, 'eng', {
                logger: (m) => {
                    if (m.status === 'recognizing text') {
                        setProgress(m.progress);
                    }
                },
                tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 -.,():*/',
                tessedit_pageseg_mode: '3',
                tessjs_create_hocr: '1',
            });

            const extractedName = findProminentText(result);
            const extractedWarnings = findWarningsAndCautions(result);
            
            if (extractedName) {
                setMedicineName(extractedName);
                setWarnings(extractedWarnings);
                setFullText(result.data.text);
            } else {
                setError('Could not identify medicine name. Please ensure the image shows the medicine packaging clearly.');
            }

            setProgress(1);

        } catch (error) {
            console.error("Error processing image:", error);
            setError('Failed to process image. Please try again with a clearer image.');
            setProgress(0);
        }
    };

    return (
        <div className="p-4 border rounded shadow-sm">
            <button 
                onClick={processMedicineImage}
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Extract Medicine Information
            </button>

            {progress > 0 && progress < 1 && (
                <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded">
                        <div 
                            className="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded"
                            style={{ width: `${Math.round(progress * 100)}%` }}
                        >
                            {Math.round(progress * 100)}%
                        </div>
                    </div>
                </div>
            )}

            {error && (
                <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
                    {error}
                </div>
            )}

            {medicineName && (
                <div className="mt-4">
                    <h3 className="font-bold text-lg">Medicine Name:</h3>
                    <p className="text-xl mt-2 p-2 bg-gray-50 rounded font-bold">
                        {medicineName}
                    </p>
                </div>
            )}

            {warnings.length > 0 && (
                <div className="mt-4">
                    <h3 className="font-bold text-lg text-red-600">Warnings & Cautions:</h3>
                    <div className="mt-2 p-2 bg-red-50 rounded">
                        {warnings.map((warning, index) => (
                            <p key={index} className="text-red-700 mb-2">
                                • {warning}
                            </p>
                        ))}
                    </div>
                </div>
            )}

            {fullText && (
                <div className="mt-4">
                    <h3 className="font-bold text-lg">Full Text from Image:</h3>
                    <details className="mt-2">
                        <summary className="cursor-pointer text-blue-600">Click to view full text</summary>
                        <div className="mt-2 p-2 bg-gray-50 rounded whitespace-pre-wrap text-sm">
                            {fullText}
                        </div>
                    </details>
                </div>
            )}
        </div>
    );
}

export default OCR;