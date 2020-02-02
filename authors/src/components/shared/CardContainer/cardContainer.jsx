import React from 'react';
import './cardContainer.scss'
import { useAuthors } from "../../../hooks/useAuthors";
import CardView from '../CardView/cardView'

function CardContainer() {
    const { authors } = useAuthors();

    return (
        <div className="container">
            <div className="d-flex flex-row flex-wrap justify-content-around">
                {authors.map((pokemon, i) => {
                    return <div key={`author-card-${i}`} className="container__card"><CardView entity={pokemon}></CardView></div>;
                })}
            </div>
        </div>
      );
};

export default CardContainer;