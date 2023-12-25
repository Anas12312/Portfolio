import React, { useState } from 'react';

const BacklightCircle = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse move event handler
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <div className="backlight-circle" onMouseMove={handleMouseMove}>
      {/* Circle element */}
      <div
        className="circle"
        style={{
          left: mousePosition.x + 'px',
          top: mousePosition.y + 'px',
        }}
      ></div>
    </div>
  );
};

export default BacklightCircle;