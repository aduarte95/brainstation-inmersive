import React from 'react';
import './bookCarousel.scss';
import { Link } from 'react-router-dom';


function BookCarousel({books}) {
    return (
        <div className="container carousel">
            <div className="d-flex justify-content-between">
            {books.map( (book, i) => {
                return <Link to="/book/id" key={`author-book-${i}`}>
                            <img className="container__book-image" src={book} alt="Third slide"/>
                        </Link>
                    })}
            </div>
        </div>    
    );
};

export default BookCarousel;