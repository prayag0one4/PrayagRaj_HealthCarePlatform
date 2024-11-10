import React, { useState } from "react";
import ImageUploader from "../../imagecomponents/ImageUploader";
import OCR from "../../imagecomponents/OCR";

function Image() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Medicine Information Scanner
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Upload a clear image of your medicine label to extract important
            information instantly. Our scanner helps you understand your
            medication details better.
          </p>

          <div className="mt-8 space-y-4">
            <button
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg 
                         transition-colors duration-200 ease-in-out shadow-md hover:shadow-lg
                         flex items-center justify-center mx-auto space-x-2"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>Choose Image to Scan</span>
            </button>

            <input
              id="fileInput"
              type="file"
              className="hidden"
              onChange={(e) => setSelectedImage(e.target.files[0])}
              accept="image/*"
            />
          </div>

          {selectedImage && (
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  Selected file: {selectedImage.name}
                </p>
              </div>

              {/* Image preview */}
              <div className="mt-4">
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected medicine"
                  className="max-w-full h-auto mx-auto rounded-lg shadow-md"
                  style={{ maxHeight: "400px" }}
                />
              </div>

              {/* OCR Results */}
              <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Extracted Information
                </h2>
                <div className="text-left">
                  <OCR image={selectedImage} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Image;
