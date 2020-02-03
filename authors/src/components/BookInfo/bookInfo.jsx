import React from 'react';
import './bookInfo.scss';
import Info from '../shared/Info/info'

function BookInfo({book}) {
    const { isbn, publicationYear, genres, topic } = book;

    return (
        <div className="container__info">
            <div className="row">
                <Info info={isbn.toUpperCase()}>ISBN:</Info>
                <Info info={publicationYear}>Publication year:</Info>
            </div>
            <div className="row">
                <Info info={genres}>Genres</Info>
                <Info info={topic}>Topic:</Info>
            </div>
        </div>
    );
};

export default BookInfo;