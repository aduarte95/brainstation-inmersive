import React from 'react';
import './title.scss'

function Title({children}) {
    
    return (
        <h1 className="home-title primary">
          <img src="https://www.seekpng.com/png/full/266-2667147_tribal-health-feather-icon-feather-and-ink-vector.png" alt="feather"  width="60px" height="60px"/>
          {children}
        </h1>
      );
};

export default Title;