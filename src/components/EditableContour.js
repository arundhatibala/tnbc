import React, { useState, useEffect } from 'react';
import {ReactSVG} from 'react-svg';
import data from './data.json';
// import axios from 'axios';

const EditableContour = () => {
  const [contourData, setContourData] = useState();
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(data); // Replace with your JSON file path
        const jsonData = await response.json();
        setDataArray(jsonData);
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
    };

    fetchData();
  }, []);
  console.log(data);

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

  // const handleSVGClick = (event) => {
  //   // Add a new contour point on SVG click
  //   const { offsetX, offsetY } = event.nativeEvent;
  //   const newPoint = { x: offsetX, y: offsetY };
  //   setContourData([...contourData, newPoint]);
  // };
  
  return (
      <svg width="100%" height="100%" viewBox="0 0 572 462">
      <polyline></polyline>
      </svg>
  )
};


export default EditableContour;