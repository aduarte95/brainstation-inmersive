import React, { useState, useRef, useEffect } from 'react';
import './Card.scss';

function showFact(totalFacts, cont, setCont) {
  if(cont < totalFacts) {
      setCont(cont + 1);
  }  
}

function Card({facts, cont, totalFacts, setCont}) {
  const div = useRef();

  useEffect(() => div.current && div.current.scrollIntoView({ behavior: "smooth" }));


  return (   
    <div className="fact-card-container container-fluid py-3">
      <div  className="d-flex justify-content-center flex-wrap">
      { facts && facts.map( (fact, i) => {
         return  cont > i && <div key={`fact-card-${i}`} className="fact-card-container__row glowing-box">
                        <div className="fact-card-container__bullet margin-bottom d-flex justify-content-center">
                          <i class="far fa-star"></i>
                        </div>
                    
                        <div className="d-flex justify-content-center">
                            <p className="fact-card-container__text" key={`fact-${i}`}>{fact.fact}</p>
                        </div>
                </div>
          })
        }
        <div ref={div} className="fact-card-container__clickable-star d-flex align-items-center justify-content-center ">
            <img onClick={() => showFact(totalFacts, cont, setCont) } className="fact-card-container__img-star" src="https://media1.giphy.com/media/d7CQt3sSdbwdtNE5ET/giphy.gif" alt="star"/>
            <p className="fact-card-container__clickable-text">{cont} / {totalFacts}</p>
        </div>
      </div>  
    </div>
  );
}

export default Card;
