import React, { useState, useEffect } from 'react';
import './QuizForm.scss';
import ssQuizData from '../../data/ssQuiz.json'

function QuizForm() {
  const [ssQuiz, setSsQuiz] = useState([]);

  useEffect(() => {
    setSsQuiz(ssQuizData);    
  }, []);

  return (
    <form className="container quiz-container quiz-container--margin-bottom glowing-box">
      { ssQuiz.map( (question, i) => {
        return    <div className="form-check">
                    <label className="quiz-container__label quiz-container--margin-bottom"> {question.label} </label>
                    { 
                      question.answers.map( (answer, i) => {
                        return <div className="custom-control custom-radio quiz-container--margin-bottom">
                                  <input className="custom-control-input" type="radio" name="exampleRadios" id="customRadio" value="option1" checked/>
                                  <label className="custom-control-label" for="customRadio">
                                    {answer}
                                  </label>
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
  );
}

export default QuizForm;
