import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Blog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    axios
      .get('http://localhost:9000/sync') // Make sure to use the correct URL for your backend
      .then((response) => {
        setData(response.data);
        console.log("Successfully fetched data");
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <div key={index}>
            <h1>{item.name}</h1>
            <p>Username: {item.username}</p>
            <p>Title: {item.title}</p>
            <p>Content: {item.content}</p>
            <img
              src={item.imageUrl}
              alt={item.name}
              width="200" // Adjust the width as needed
              height="200" // Adjust the height as needed
            />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Blog;