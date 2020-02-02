import React from 'react';
import './bookCarousel.scss';
import { Link } from 'react-router-dom';


function BookCarousel({books}) {
    return (
        <div className="container carousel">
            <div className="d-flex justify-content-start">
            {books.map( book => {
                return <Link to="/" className="col">
                            <img className="book-image" src={book} alt="Third slide"/>
                        </Link>
                    })}
            </div>
        </div>    
    );
};

export default BookCarousel;