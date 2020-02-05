import React from 'react';
import './TestMe.scss';
import QuizForm from '../QuizForm/QuizForm';
import Title from '../shared/Title/Title';

function TestMe() {
      
  return (  
      <div className="test-me-container">
        <Title> Let's prove your knowledge. You got this!
            <span>
                <img className="test-me-container__img" alt="friendly planet" src="https://spaceplace.nasa.gov/review/planets/planets-13.en.png" />
            </span>
        </Title> 
        <QuizForm />
      </div>
  );
}

export default TestMe;
