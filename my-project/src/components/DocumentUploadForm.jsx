import React, { useState } from "react";

const DocumentUploadForm = () => {
  // State for each document
  const [aadharImage, setAadharImage] = useState(null);
  const [panImage, setPanImage] = useState(null);
  const [drivingLicenceImage, setDrivingLicenceImage] = useState(null);
  const [blankCheckImage, setBlankCheckImage] = useState(null);
  const [personalPhoto, setPersonalPhoto] = useState(null);

  // State for form validation errors
  const [error, setError] = useState("");

  // Handle file change for each document
  const handleFileChange = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setError(""); // Clear error on file select
    }
  };

  // Check if all documents are uploaded
  const isFormValid = () => {
    return aadharImage && panImage && drivingLicenceImage && blankCheckImage && personalPhoto;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      setError("All documents are required.");
      return;
    }

    // Handle form submission (send to server or process the data)
    console.log("Form submitted with:", {
      aadharImage,
      panImage,
      drivingLicenceImage,
      blankCheckImage,
      personalPhoto,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Upload Documents</h2>
        <form onSubmit={handleSubmit}>
          {/* Aadhar Upload */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Aadhar Card:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, setAadharImage)}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none"
            />
          </div>

          {/* PAN Upload */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">PAN Card:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, setPanImage)}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none"
            />
          </div>

          {/* Driving Licence Upload */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Driving License:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, setDrivingLicenceImage)}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none"
            />
          </div>

          {/* Blank Check Upload */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Blank Check:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, setBlankCheckImage)}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none"
            />
          </div>

          {/* Personal Photo Upload */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Personal Photo:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, setPersonalPhoto)}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none"
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full px-4 py-2 rounded-lg text-white font-semibold ${
              isFormValid() ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isFormValid()}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default DocumentUploadForm;
