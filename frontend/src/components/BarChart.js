import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import axios from "axios";
import './BarChart.css';

const NASA_API_KEY = 'YS05qT691Pq3p27yKqs6LgAaXGT9Ma7pAypD4ujJ';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function NasaChart() {
  const [chartData, setChartData] = useState(null); // Set initial state as null for loading handling

  useEffect(() => {
    const fetchAsteroidData = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-01-01&end_date=2024-01-07&api_key=${NASA_API_KEY}`
        );
        const neoData = response.data.near_earth_objects;

        // Process the data for chart (e.g., get asteroid count per day)
        let labels = Object.keys(neoData); // dates

        // Sort the labels (dates) in chronological order
        labels = labels.sort((a, b) => new Date(a) - new Date(b));

        const asteroidCount = labels.map(date => neoData[date].length); // count of objects per date

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "Near-Earth Objects per Day",
              data: asteroidCount,
              backgroundColor: "rgba(75, 192, 192, 0.6)"
            }
          ]
        });
      } catch (error) {
        console.error("Error fetching NASA data", error);
      }
    };

    fetchAsteroidData();
  }, []);

  // Loading state while data is being fetched
  if (!chartData) {
    return <div>Loading...</div>;
  }

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of Asteroids"
        }
      },
      x: {
        title: {
          display: true,
          text: "Date"
        }
      }
    }
  };

  return (
    <div className="chart-container">
      <h2 className="chart-title">Near-Earth Objects Over Time</h2>
      <Bar className="chart-canvas" data={chartData} options={options} />
    </div>
  );
}