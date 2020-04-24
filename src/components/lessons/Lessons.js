import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  start,
  submitAnswer,
  selectCard,
  selectAnswer,
  selectYourscore,
  nextQuestion,
  selectMessage,
  selectSource
} from '../../features/lessons/lessonsSlice';
import styles from './Lessons.module.css';

export function Lessons() {
  const card = useSelector(selectCard);
  const yourScore = useSelector(selectYourscore);
  const message = useSelector(selectMessage);
  const source = useSelector(selectSource);
  const answer = "Tap here '" + useSelector(selectAnswer) + "'";
  const dispatch = useDispatch();
  const [myAnswer, setMyAnswer] = useState('tap here your answer');
  function handleSubmit(event) {
    // this.setState({youranswer: event.target.value});
    // console.log(this.state.youranswer);
    event.preventDefault();
    dispatch(submitAnswer({ yourAnswer: myAnswer }));
    setTimeout(()=>{
      dispatch(nextQuestion())
    }, 1000)
  }

  return (
    <div className="div">
    <img src={source} className="App-logo" alt="logo" />
      <div className={styles.row}>
      <span>{message}</span>
      <span>Your Score : {yourScore}</span>
        <button
        className="start"
        onClick={()=> dispatch(start())}>
        Let's start lessons
        </button>
        <div
            style={{display: "none"}}
            className="coucou">
          <div className="question">
            <p>{card}</p>
          </div>
          <form
          onSubmit={handleSubmit}>
            <label>
              <input
                className={styles.textbox}
                aria-label="Set answer"
                placeholder={answer}
                // value={myAnswer}
                onChange={e => setMyAnswer(e.target.value)}
              />
            </label>
            <input
            type="submit"
            value="submit answer"
            />
            <button
            className="nextQuestion"
            style={{display: "none", opacity: "0"}}
          onClick={()=> dispatch(nextQuestion())}
            >
              NextQuestion
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
