import React, { useState, useEffect } from 'react';
import './QuizForm.scss';
import ssQuizData from '../../data/ssQuiz.json'

function QuizForm() {
  const [ssQuiz, setSsQuiz] = useState([]);

  useEffect(() => {
    setSsQuiz(ssQuizData);    
  }, []);

  return (
    <form>
      { ssQuiz.map( (question, i) => {
        return    <div class="form-check">
                    <label> {question.label} </label>
                    { 
                      question.answers.map( (answer, i) => {
                        return <div>
                                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                                  <label class="form-check-label" for="exampleRadios1">
                                    {answer}
                                  </label>
                                </div>
                      })
                    }
                  </div>
      })
      }
      <button type="submit" class="btn btn-primary">Submit</button>
    </form> 
  );
}

export default QuizForm;
