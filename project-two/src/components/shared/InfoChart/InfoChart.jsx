import React from 'react';
import './InfoChart.scss';

function InfoChart({children}) {
  
  return (
    <div className="info-chart-container">
        <p className="info-chart-container__text">
            {children}
        </p>
  </div>
  );
}

export default InfoChart;
