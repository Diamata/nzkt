import React from 'react';
import "./style.css";

const Loader = () => {
  return (
      <div style={{position: 'relative', marginBottom: '3rem'}}>
        <div className="loader-wrapper">
          <div className="loader"/>
        </div>
      </div>

  );
};

export default Loader;