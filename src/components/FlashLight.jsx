import React, { useState } from 'react';

const Flashlight = ({children}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <div style={{ position: 'relative' }} onMouseMove={handleMouseMove}>
      {children}
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

export default Flashlight