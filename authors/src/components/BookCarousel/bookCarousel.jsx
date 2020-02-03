import React from 'react';
import './bookCarousel.scss';
import { Link } from 'react-router-dom';


function BookCarousel({authorId, books}) {
    
    return (
        <div className="container carousel">
            <div className="d-flex justify-content-between">
            {books.map( ({imgUrl, name, id}, i) => {
                return <Link to={`/author/${authorId}/book/${id}`} key={`author-book-${i}`}>
                            <figure className="figure">
                                <img className="figure-img rounded container__book-image" src={imgUrl} alt={name}/>
                                <figcaption className="figure-caption">{name}</figcaption>
                            </figure>
                        </Link>
                    })}
                    <Link to={`/author/${authorId}/add-book`} className="container__add-book d-flex align-items-center"><div className="col">+ Add Book</div></Link>                    
            </div>
        </div>    
    );
};

export default BookCarousel;