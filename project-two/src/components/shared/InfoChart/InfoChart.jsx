import React from 'react';
import './InfoChart.scss';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

function InfoChart({children, className}) {
  
  return (
    <CSSTransitionGroup
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
    </CSSTransitionGroup>
  );
}

export default InfoChart;
