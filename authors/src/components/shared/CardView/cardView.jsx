import React from 'react';
import './cardView.scss'
import { Link } from 'react-router-dom';

function CardView({author}) {
    const {id, name, imgUrl} = author;
    
    return (
        <div>
            <Link to={`/author/${id}`}>
                <div className="card">
                    <img className="card-img-top" src={imgUrl} alt={name}/>
                    <div className="card-body">
                        <h5 className="card-title"> {name} </h5>
                    </div>
                </div>
            </Link>
        </div>
      );
};

export default CardView;