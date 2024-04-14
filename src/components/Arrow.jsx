import React from 'react';

const Arrow = ({ id }) => {
  return (
   
    <div id={id} style={{ textAlign: 'center' }}>
      <svg width="50" height="50" transform="rotate(180)">
        <line x1="25" y1="0" x2="25" y2="40" style={{ stroke: 'black', strokeWidth: 2 }} />
        <polygon points="20,40 30,40 25,50" style={{ fill: 'black' }} />
      </svg>
     
    </div>
   
  
    
  );
};

export default Arrow;