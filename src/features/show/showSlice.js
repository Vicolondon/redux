import { createSlice } from '@reduxjs/toolkit';
import cards from '../../app/cards.json';

export const card = createSlice({
  name: 'show',
  initialState: {
    value: cards.tinycards[Object.keys(cards.tinycards)[0]].question,
    answer: cards.tinycards[Object.keys(cards.tinycards)[0]].answer,
    randomNumber: 0,
    yourAnswer: ""
  },
  reducers: {
    showquestion: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = cards.tinycards[Object.keys(cards.tinycards)[state.randomNumber]].question;
    },
    showanswer: state => {
      // state.value = cards.tinycards.question1.answer;
      state.value = cards.tinycards[Object.keys(cards.tinycards)[state.randomNumber]].answer;
    },
    changeQuestion: state => {
      let lengthOfJsonObject = Object.keys(cards.tinycards).length;
      state.randomNumber = Math.floor(Math.random() * (lengthOfJsonObject));
      let keys = Object.keys(cards.tinycards);
      state.value = cards.tinycards[keys[state.randomNumber]].question;
      state.answer = cards.tinycards[keys[state.randomNumber]].answer;
    },
    submitAnswer: (state,{ payload }) => {
      state.yourAnswer = payload.yourAnswer;
      console.log('submit answer');
      console.log(payload.yourAnswer);
    },
  },
});

export const { showquestion, showanswer, changeQuestion, submitAnswer} = card.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCard = state => state.card.value;
export const selectAnswer = state => state.card.answer;
export const selectYourAnswer = state => state.card.selectYourAnswer;

export default card.reducer;
