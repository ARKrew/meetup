import { QUIZ } from './types';

const setQuizList = (dispatch, names) => {
  dispatch({
    type: QUIZ.SET_QUIZ_LIST,
    names
  });
};

const setCurrentQuizData = (dispatch, currentQuizData) => {
  dispatch({
    type: QUIZ.SET_CURRENT_QUIZ_DATA,
    currentQuizData
  });
};

export { setQuizList, setCurrentQuizData };
