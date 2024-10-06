// const express = require('express');
// const PORT = process.env.PORT || 3001;
// const NASA_API_KEY = 'YS05qT691Pq3p27yKqs6LgAaXGT9Ma7pAypD4ujJ';
// const axios = require('axios');  
// const app = express();

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

// app.get('/api/apod', async (req, res) => {
//   try {
//     // Make a request to NASA's APOD API
//     const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
//     // Send the response data back to the client
//     res.json(response.data);

//   } catch (error) {
//     console.error('Error fetching APOD data:', error);
//     res.status(500).json({ error: 'Failed to fetch APOD data' });
//   }
// });

