import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Demo = () => {
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
      setSections(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Crime Description:</h1>

      <textarea style={{marginLeft:"450px"}}
        rows="5"
        cols="50"
        value={crimeDescription}
        onChange={handleCrimeDescriptionChange}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <h2>IPC Sections:</h2>
      <ul>
        {sections.slice(0, 4).map((section, index) => ( // Slice the array to get only the first 4 elements
          <li key={index}>
            <Link to={`/details/${section}`}>{section}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Demo;
