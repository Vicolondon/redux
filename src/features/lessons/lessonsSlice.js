import { createSlice } from '@reduxjs/toolkit';
import cards from '../../app/cards.json';
import logo from '../../images/logo.svg';

export const lessons = createSlice({
  name: 'lessons',
  initialState: {
    tab: [],
    hidden: "none",
    value: "Questions",
    answer: "Answers",
    randomNumber: 0,
    yourAnswer: "",
    yourScore: 0,
    message: "Bon courage",
    source: logo
  },
  reducers: {
    start: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const peopleArray = Object.values(cards.tinycards);
      let coucou = document.getElementsByClassName('coucou')[0];
      let start = document.getElementsByClassName('start')[0];
      start.style.display = "none";
      coucou.style.display = "block";
      state.yourScore = 0;
      state.hidden = "block";
      state.tab = peopleArray;
      state.value = peopleArray[state.randomNumber].question;
      state.answer = peopleArray[state.randomNumber].answer;
    },
    nextQuestion: state => {
      let lengthOfJsonObject = Object.keys(cards.tinycards).length;
      let coucou = document.getElementsByClassName('coucou')[0];
      let nextQuestion = document.getElementsByClassName('nextQuestion')[0];
      let start = document.getElementsByClassName('start')[0];
      coucou.style.background = "rgba(0,0,0,0)";
      state.randomNumber += 1;
      nextQuestion.style.display = "none";
      console.log(state.randomNumber);
      if( state.randomNumber < lengthOfJsonObject){
        state.value = state.tab[state.randomNumber].question;
        state.answer = state.tab[state.randomNumber].answer;
      } else {
        state.randomNumber = 0;
        coucou.style.display = "none";
        state.hidden = "none";
        start.style.display = "block";
        state.value = state.tab[state.randomNumber].question;
        state.answer = state.tab[state.randomNumber].answer;
        if(state.yourScore < 2){
          state.message = "Pas dingue";
        } else if (state.yourScore > 1 && state.yourScore < 4){
          state.message = "Encore un effort";
        } else {
          state.message = "La grande classe";
        }
      }
    },
    endLessons: state => {
    },
    submitAnswer: (state,{ payload }) => {
      state.yourAnswer = payload.yourAnswer;
      let lengthOfJsonObject = Object.keys(cards.tinycards).length;
      let nextQuestion = document.getElementsByClassName('nextQuestion')[0];
      let coucou = document.getElementsByClassName('coucou')[0];
      if( state.yourAnswer === state.answer ){
        nextQuestion.style.display = "block";
        coucou.style.background = "greenyellow";
        state.yourScore +=1;
        state.message = "Nice one !";
      } else {
        coucou.style.background = "red";
        nextQuestion.style.display = "block";
        state.message = "Essaye encore jeune padawan";
      }
    },
  },
});

export const { start, nextQuestion, submitAnswer} = lessons.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCard = state => state.lessons.value;
export const selectHidden = state => state.lessons.hidden;
export const selectAnswer = state => state.lessons.answer;
export const selectYourAnswer = state => state.lessons.selectYourAnswer;
export const selectYourscore = state => state.lessons.yourScore;
export const selectMessage = state => state.lessons.message;
export const selectSource = state => state.lessons.source;


export default lessons.reducer;
