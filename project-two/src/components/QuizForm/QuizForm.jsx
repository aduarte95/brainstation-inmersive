import React, { useState, useEffect } from 'react';
import './QuizForm.scss';
import ssQuizData from '../../data/ssQuiz.json'

function QuizForm() {
  const [ssQuiz, setSsQuiz] = useState([]);
  let cont = 0;
  useEffect(() => {
    setSsQuiz(ssQuizData);  
  }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center">
        <img className="quiz-container__decorator-img" src="
            https://spaceplace.nasa.gov/review/planets/planets-13.sp.png" alt="Friendly Jupiter"></img>
        <form className="quiz-container quiz-container--margin-bottom glowing-box">
          { ssQuiz.map( (question, i) => {
            return    <div className="form-check quiz-container--margin-bottom">
                        <label className="quiz-container__label quiz-container--margin-bottom"> {question.label} </label>
                        { 
                          question.answers.map( (a, i) => {   

                            return  <div className="quiz-container--margin-bottom-1"> 
                                      <div className="custom-control custom-radio">
                                          <input type="radio" id={`customRadio-${a.id}`}name="customRadio" class="custom-control-input"/>
                                          <label class="custom-control-label" for={`customRadio-${a.id}`}>{a.answer}</label>
                                        </div>
                                    </div>
                          })
                          
                        }
                      </div>
          })
          }
          <div className="d-flex justify-content-center quiz-container__submit-btn">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form> 
      </div>
    </div>
  );
}

export default QuizForm;
