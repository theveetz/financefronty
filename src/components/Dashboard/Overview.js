import React from 'react';

const Overview = () => {
  const handleButtonClick = () => {
    alert('Button Clicked!');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Overview</h1>
      <button 
        className="rounded bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-4"
        onClick={handleButtonClick}
      >
        Click Me
      </button>
    </div>
  );
};

export default Overview;
