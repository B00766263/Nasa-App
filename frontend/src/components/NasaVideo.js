import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";

export default function NasaVideo() {
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        // Fetching video data from NASA's API
        const response = await axios.get(
          "https://images-api.nasa.gov/search?q=apollo&media_type=video"
        );

        const videoItems = response.data.collection.items;

        if (videoItems.length > 0) {
          // Get the first video item and its metadata URL 
          const collectionUrl = videoItems[0].href;

          // Fetch video file links
          const metadataResponse = await axios.get(collectionUrl);

          // Find the actual video file URL
          const videoFileUrl = metadataResponse.data.find((link) =>
            link.endsWith(".mp4")
          );

          if (videoFileUrl) {
            setVideoUrl(videoFileUrl);
          } else {
            console.error("No mp4 video found in metadata.");
          }
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching video from NASA API", error);
        setLoading(false);
      }
    };

    fetchVideo();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading video...</p>
      ) : videoUrl ? (
        <ReactPlayer url={videoUrl} controls={true} width="100%" height="500px" />
      ) : (
        <p>No video available</p>
      )}
    </div>
  );
}

