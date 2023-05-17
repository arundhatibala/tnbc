import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditableContour = () => {
  const [contourData, setContourData] = useState([]);

  useEffect(() => {
    // Fetch contour data from the server
    const fetchContourData = async () => {
      try {
        const response = await axios.get('/api/contours');
        setContourData(response.data);
      } catch (error) {
        console.error('Error fetching contour data:', error);
      }
    };

    fetchContourData();
  }, []);

  const handlePointDrag = (index, newX, newY) => {
    // Update the position of a contour point
    const updatedContourData = [...contourData];
    updatedContourData[index].x = newX;
    updatedContourData[index].y = newY;
    setContourData(updatedContourData);
  };

  const handlePointDelete = (index) => {
    // Delete a contour point
    const updatedContourData = [...contourData];
    updatedContourData.splice(index, 1);
    setContourData(updatedContourData);
  };

  const handleSVGClick = (event) => {
    // Add a new contour point on SVG click
    const { offsetX, offsetY } = event.nativeEvent;
    const newPoint = { x: offsetX, y: offsetY };
    setContourData([...contourData, newPoint]);
  };

  const renderContourLines = () => {
    return contourData.map((point, index) => (
      <circle
        key={index}
        cx={point.x}
        cy={point.y}
        r="5"
        fill="red"
        onMouseDown={(e) => e.preventDefault()}
        onMouseMove={(e) => {
          if (e.buttons === 1) {
            handlePointDrag(index, e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          }
        }}
      />
    ));
  };

  return (
    <svg
      width="500"
      height="500"
      viewBox="0 0 500 500"
      onClick={handleSVGClick}
      style={{ border: '1px solid black' }}
    >
      {renderContourLines()}
    </svg>
  );
};

export default EditableContour;