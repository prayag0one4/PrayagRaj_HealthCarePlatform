// src/components/ImageUploader.js
import React, { useState } from 'react';

function ImageUploader({ onImageSelect }) {
    const [preview, setPreview] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
            onImageSelect(file);
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {preview && <img src={preview} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} />}
        </div>
    );
}

export default ImageUploader;
