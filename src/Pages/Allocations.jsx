import  { useState } from 'react';
import axios from 'axios';
import Navbar from '../Components/Nav';
import '../assets/Al.css';

const Allocations = () => {
  const [crimeDescription, setCrimeDescription] = useState('');
  const [sections, setSections] = useState([]);

  const handleCrimeDescriptionChange = (event) => {
    setCrimeDescription(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/predict', {
        text: crimeDescription,
      });
      console.log(response);
      setSections(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <br />
      <h1 style={{ textAlign: "center" }}>Section Allocations</h1>
      <br /><br />
      <div className="app-container">
        <div className="flex-container">
          <div className="input-section">
            {/* Left side: Input text */}
            <h2 style={{ textAlign: "center" }}>Crime Description:</h2>
            <textarea
              style={{ marginLeft: "70px" }}
              rows="5"
              cols="50"
              value={crimeDescription}
              onChange={handleCrimeDescriptionChange}
            />
            <button style={{ marginLeft: "220px", marginTop: "20px" }} onClick={handleSubmit}>Submit</button>
          </div>
          <div className="box">
  <h2 style={{ textAlign: "center" }}>Predicted IPC Sections:</h2>
  {sections.map((section, index) => (
    <div className="card" key={index}>
      <div className="card-title"> IPC-Section {section}</div>
    </div>
  ))}
</div>

        </div>
      </div>
    </>
  );
}

export default Allocations;
