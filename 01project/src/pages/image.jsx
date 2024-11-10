// src/App.js
import React, { useState } from 'react';
import ImageUploader from '../../imagecomponents/ImageUploader';
import OCR from '../../imagecomponents/OCR';

function Image() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Text Extraction from Image</h1>
            <ImageUploader onImageSelect={setSelectedImage} />
            {selectedImage && <OCR image={selectedImage} />}
        </div>
    );
}

export default Image;
