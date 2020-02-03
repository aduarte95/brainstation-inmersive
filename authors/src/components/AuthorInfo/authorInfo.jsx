import React from 'react';
import './authorInfo.scss';
import Info from '../shared/Info/info'

function AuthorInfo({author}) {
    const {fullName, birthDate, deathDate, nationality} = author;

    return (
        <div className="container__info">
            <div className="row">
                <Info info={fullName}>Full name:</Info>
                <Info info={birthDate}>Birth date:</Info>
            </div>
            <div className="row">
                <Info info={deathDate}>Death date:</Info>
                <Info info={nationality}>Nationality:</Info>
            </div>
        </div>
    );
};

export default AuthorInfo;