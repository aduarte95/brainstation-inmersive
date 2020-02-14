import React from 'react';
import './info.scss'

function Info({children, info}) {

    return ( 
        <div className="col-6">
            <h2 className="label">{children}</h2>
            <p className="info">{info}</p>
        </div>
    );
};

export default Info;