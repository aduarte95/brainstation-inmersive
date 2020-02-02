import React from 'react';
import './titleName.scss';

function TitleName({children}) {

    return (
        <h1 className="title-name primary">{children}</h1>
    );
};

export default TitleName;