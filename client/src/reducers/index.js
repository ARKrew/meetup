import { combineReducers } from 'redux';
import authReducer from './authReducer';
import landingReducer from './landingReducer';
import quizReducer from './quizReducer';

export default combineReducers({
  auth: authReducer,
  landing: landingReducer,
  quiz: quizReducer
});
