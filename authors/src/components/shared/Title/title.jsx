import React from 'react';
import './title.scss'

function Title({children}) {
    
    return (
        <h1 className="home-title primary"> {children} </h1>
      );
};

export default Title;