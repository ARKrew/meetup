import { QUIZ } from '../actions/types';
import update from 'immutability-helper';

const initQuizState = {
  names: [],
  currentQuizData: {
    name: '',
    questions: [
      {
        question: '',
        trueAnswer: '',
        answers: ['']
      }
    ]
  }
};

let newState = {};

const quizReducer = (state = initQuizState, action) => {
  switch (action.type) {
    case QUIZ.SET_QUIZ_LIST:
      newState = update(state, { names: { $set: action.names } });
      return newState;
    case QUIZ.SET_CURRENT_QUIZ_DATA:
      newState = update(state, {
        currentQuizData: { $set: action.currentQuizData }
      });
      return newState;
    default:
      return state;
  }
};

export default quizReducer;
