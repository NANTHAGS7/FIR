import React, { useState } from "react";
import Navbar from "../Components/Nav";
import "../assets/Al.css";

const FakeFIR = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Check if a file is selected and it is a DOC file
    if (selectedFile && selectedFile.type === "application/msword") {
      // Proceed with upload logic
      alert("File upload initiated!"); // Placeholder logic, replace this with your implementation
    } else {
      alert("Please select a DOC file."); // Alert the user if no file is selected or if the selected file is not a DOC file
    }
  };

  return (
    <div>
      <Navbar />
      <br />
      

      <div className="centered-box-container">
        <div className="box">
          <h2>Upload Your DOC File</h2>
          <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
          <br />
          <button onClick={handleUpload}>Upload</button>
        </div>
      </div>
    </div>
  );
};

export default FakeFIR;
