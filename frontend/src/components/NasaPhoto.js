import React, { useEffect, useState } from 'react';
import './NasaPhotoStyle.css';

export default function NasaPhoto() {
  // Define state variables to hold the data
  const [photoData, setPhotoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the APOD data from the backend
  useEffect(() => {
    async function fetchPhoto() {
      try {
        const response = await fetch('/api/apod'); // Proxy will direct this to http://localhost:5000/api/apod
        const data = await response.json();
        setPhotoData(data); // Save the data to the state
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch APOD data:', err);
        setError('Failed to fetch data');
        setLoading(false);
      }
    }

    fetchPhoto();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  if (loading) return <p>Loading...</p>;
  if (error) return <h1>{error}</h1>;

  return (
    <div className="main-container">
      <h1>{photoData.title}</h1>
      <div className="photo-container">
        <img className="photo-image" 
          src={photoData.url} 
          alt={photoData.title} 
          style={{ width: '100%', maxHeight: '600px', objectFit: 'cover' }} 
        />
        <div className="photo-text">
          <p>{photoData.explanation}</p>
        </div>
      </div>
    </div>
  );
}
