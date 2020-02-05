import React from 'react';
import './Card.scss';

function Card({facts}) {
      
  return (   
    <div className="container-fluid py-3 fact-card">
      <div className="d-flex justify-content-center flex-wrap">
      { facts && facts.map( (fact, i) => {
         return <div className="row fact-card__row">
                        <div className="col-md-3 d-flex align-items-center fact-card__col">
                            <img src="https://media1.giphy.com/media/d7CQt3sSdbwdtNE5ET/giphy.gif" alt="star" className="w-100"/>
                        </div>
                    
                        <div className="col d-flex align-items-center">
                            <p className="fact-card__text" key={`fact-${i}`}>{fact.fact}</p>
                        </div>
                </div>
          })
        }
        </div>
    </div>
  );
}

export default Card;
