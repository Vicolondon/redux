import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  showquestion,
  showanswer,
  changeQuestion,
  selectCard,
} from '../../features/show/showSlice';
import styles from './Show.module.css';

export function Show() {
  const card = useSelector(selectCard);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.row}>
        <button
        onClick={()=> dispatch(changeQuestion())}>
        Change question
        </button>
        <button
          className={styles.button}
          aria-label="Show answer"
          onClick={() => dispatch(showanswer())}
        >
          showanswer
        </button>
        <span className={styles.value}
          onClick={() => dispatch(showquestion())}>{card}
          </span>
      </div>
    </div>
  );
}
