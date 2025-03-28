import React from 'react';

const StatItem = ({ number, label, color }) => {
  return (
    <div className="w-1/3 text-center">
      <h3 
        style={{ 
          color: color,
          fontSize: number === 'Nv1' ? '50px' : '60px',
          lineHeight: 0.85,
          fontWeight: 800,
          fontFamily: 'Impact, Arial, sans-serif',
          marginBottom: '5px',
          textAlign: 'center',
        }}
      >
        {number}
      </h3>
      <p className="text-white text-[30px]">{label}</p>
    </div>
  );
};

export default StatItem; 