import React, { useState } from 'react';
import './Card.scss';
import { useFacts } from '../../hooks/useFacts';

function Card({facts, cont}) {
      console.log('in card' +  cont)
  return (   
    <div className="container-fluid py-3 fact-card-container">
      <div className="d-flex justify-content-center flex-wrap">
      { facts && facts.map( (fact, i) => {
         return  cont >= i && <div key={`fact-card-${i}`} className="row fact-card-container__row">
                        <div className="col-md-3 d-flex align-items-center fact-card-container__col">
                            <img src="https://media1.giphy.com/media/d7CQt3sSdbwdtNE5ET/giphy.gif" alt="star" className="w-100"/>
                        </div>
                    
                        <div className="col d-flex align-items-center">
                            <p className="fact-card-container__text" key={`fact-${i}`}>{fact.fact}</p>
                        </div>
                </div>
          })
        }
        </div>
    </div>
  );
}

export default Card;
