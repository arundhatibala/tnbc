import React, { useState, useEffect } from 'react';
import {ReactSVG} from 'react-svg';
import data from './data.json';
// import axios from 'axios';

const EditableContour = () => {
  const [contourData, setContourData] = useState();
  const [dataArray, setDataArray] = useState([]);

  for (let i = 0; i < 60; i++) {
    dataArray.push(data[i]);
  }
  // console.log(dataArray)

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

  const img = new Image();
  img.src = './media/downsample.jpg';
  img.onload = () => {
    console.log(img.height);
    console.log(img.width);
  };

  // const handleSVGClick = (event) => {
  //   // Add a new contour point on SVG click
  //   const { offsetX, offsetY } = event.nativeEvent;
  //   const newPoint = { x: offsetX, y: offsetY };
  //   setContourData([...contourData, newPoint]);
  // };

//   var img = document.getElementById('imageid'); 
// //or however you get a handle to the IMG
//   var width = img.clientWidth;
//   var height = img.clientHeight;
  
  return (

    <svg width="286" height="231">    
      {dataArray.map((coord, index) => {
        const points = coord.split(' ');
        return (
          <polyline
            key={index}
            points={points}
            fill="none"
            stroke="blue"
            strokeWidth="1"
          />
        );
      })}
    </svg>
  )
};


export default EditableContour;