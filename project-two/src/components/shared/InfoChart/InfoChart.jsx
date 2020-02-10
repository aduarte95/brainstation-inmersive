import React from 'react';
import './InfoChart.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

function InfoChart({children, className}) {
  
  return (
    <ReactCSSTransitionGroup
      transitionName="info-chart"
      transitionAppear={true}
      transitionAppearTimeout={10000}
      transitionEnter={false}
      transitionLeave={false}>
      <div className={"info-chart-container glowing-box " + className}>
          <p className="info-chart-container__text">
              {children}
          </p>
      </div>
    </ReactCSSTransitionGroup>
  );
}

export default InfoChart;
