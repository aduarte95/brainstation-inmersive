import React from 'react';
import './authorInfo.scss';
import Info from '../shared/Info/info'

function AuthorInfo({author}) {
    return (
        <div className="container__info">
            <div className="row">
                <Info info={"insert"}>Full name:</Info>
                <Info info={"insert"}>Birth date:</Info>
            </div>
            <div className="row">
                <Info info={"insert"}>Death date:</Info>
                <Info info={"insert"}>Nationality:</Info>
            </div>
        </div>
    );
};

export default AuthorInfo;