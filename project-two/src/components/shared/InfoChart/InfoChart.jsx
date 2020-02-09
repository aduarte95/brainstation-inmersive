import React from 'react';
import './InfoChart.scss';

function InfoChart({children, className}) {
  
  return (
    <div className={"info-chart-container glowing-box " + className}>
        <p className="info-chart-container__text">
            {children}
        </p>
  </div>
  );
}

export default InfoChart;
