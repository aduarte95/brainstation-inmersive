import React, { useState, useEffect } from 'react';
import './QuizForm.scss';
import ssQuizData from '../../data/ssQuiz.json'

function QuizForm() {
  const [ssQuiz, setSsQuiz] = useState([]);
  const [numQuestion, setNumQuestions] = useState(0);
  const [selectedAnwers, setSelectedAnswers] = useState({});
  const [showScore, setShowScore] = useState(false);

  function getScore(e) {
    e.preventDefault();
    var score = 0;

    if(ssQuiz) {
      ssQuiz.map( (q, i) => {
        if(q.correctAnswer === Number(selectedAnwers[i])) {
          score++
        }
      })
    }

    setShowScore(true);
  }

  function setAnswers(e) {
    e.persist();
    const key = e.target.name;
    var question = key.split("-");
    const id = e.target.id;
    var answer = id.split("-");
    
    setSelectedAnswers( oldObject => ({...oldObject[0], [question[1]]: answer[1]}))
  }
  
  useEffect(() => {
    setSsQuiz(ssQuizData);  
  }, []);

  

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center">
        { !showScore &&
         <div>
            <img className="quiz-container__decorator-img" src="
              https://spaceplace.nasa.gov/review/planets/planets-13.sp.png" alt="Friendly Jupiter"></img>
            <form className="quiz-container quiz-container--margin-bottom glowing-box">
              { ssQuiz.map( (question, i) => {
                return    <div key={`question-${i}`} className="form-check quiz-container--margin-bottom">
                            <label className="quiz-container__label quiz-container--margin-bottom"> {question.label} </label>
                            { 
                              question.answers.map( (a,j) => {   

                                return  <div key={`answer-${j}`} className="quiz-container--margin-bottom-1"> 
                                          <div className="custom-control custom-radio">
                                              <input type="radio" onChange={(e) => setAnswers(e)} id={`customRadio-${a.id}`} name={`customRadio-${i}`} className="custom-control-input"/>
                                              <label className="custom-control-label" htmlFor={`customRadio-${a.id}`}>{a.answer}</label>
                                            </div>
                                        </div>
                              })
                              
                            }
                          </div>})
              }
              <div className="d-flex justify-content-center quiz-container__submit-btn">
                <button type="submit" className="btn btn-primary" onClick={(e) => getScore(e)}>Submit</button>
              </div>
            </form> 
        </div> }
        { showScore &&
        <div className="score-container">Hola
        </div>

        }
      </div>
    </div>
  );
}

export default QuizForm;
