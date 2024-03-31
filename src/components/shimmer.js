import React from 'react';
import '../styling/cardimage.css';
const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(10).fill("").map((_, index) => (
        <div key={index} className="cardcontainer">
          <div className="cardcontainer-shimmer"></div>
          <div className="text-shimmer"></div>
          <div className="restradetails-shimmer"></div>
        </div>
      ))}
    </div>
  );
}

export default Shimmer;
