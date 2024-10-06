const express = require('express');
const PORT = process.env.PORT || 3001;
const NASA_API_KEY = 'YS05qT691Pq3p27yKqs6LgAaXGT9Ma7pAypD4ujJ';
const axios = require('axios');  // Import axios for HTTP requests

const app = express();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// // *** Route for exercise 1: text
//  app.get('/api', (req, res) => {
//     res.json({
//         message: "Hello from backend express 2.js"
//     });
//  });

// *** Route for exercise 2 : Astronomy Picture of the Day
app.get('/api/apod', async (req, res) => {
  try {
    // Make a request to NASA's APOD API
    const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
    // Send the response data back to the client
    res.json(response.data);

  } catch (error) {
    console.error('Error fetching APOD data:', error);
    res.status(500).json({ error: 'Failed to fetch APOD data' });
  }
});

// app.get('/api/mars', async (req, res) => {
//     try {
//       // Make a request to NASA's Mars API
//       const response = await axios.get(` ${NASA_API_KEY}`);
//       // Send the response data back to the client
//       res.json(response.data);
  
//     } catch (error) {
//       console.error('Error fetching Mars data:', error);
//       res.status(500).json({ error: 'Failed to fetch Mars data' });
//     }
//   });

