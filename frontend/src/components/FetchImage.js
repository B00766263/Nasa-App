import React, { useState } from 'react';
import axios from 'axios';
import './FetchImage.css'

const apiKey = 'YS05qT691Pq3p27yKqs6LgAaXGT9Ma7pAypD4ujJ'; // Replace with your actual API key


export default function FetchImage() {
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");
  const [date, setDate] = useState("");

  const getImage = async (value) => {
    if (!date) {
      alert("Please enter a date.");
      return;
    }

    try {
      const response = await axios.get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`);
      const data = response.data;
      const newImageUrl = value === "hd" ? data.hdurl : data.url;
      setImageUrl(newImageUrl);
      setError("");
    } catch (err) {
      setError("Error fetching the image. Please check the date format (YYYY-MM-DD).");
    }
  };

  return (
    <div className="container">
      <div className="details-container">
        <div className="title">
          <h1>Choose a special date!</h1>
        </div>
        <div className="details">
          <div className="details-input">
            <span>Date: </span>
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
            />
          </div>
        </div>
        <button onClick={() => getImage("hd")}>Fetch Image</button>
      </div>
      <div className="image-container">
        {error && <p className="error">{error}</p>}
        {imageUrl && <img src={imageUrl} alt="NASA APOD" style={{ maxWidth: '100%', height: 'auto' }} />}
      </div>
    </div>
  );
}
