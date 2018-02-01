import { combineReducers } from 'redux';
import authReducer from './authReducer';
import landingReducer from './landingReducer';
import quizReducer from './quizReducer';
import eventReducer from './eventReducer';
import recruiterReducer from './recruiterReducer';

export default combineReducers({
  auth: authReducer,
  landing: landingReducer,
  quiz: quizReducer,
  event: eventReducer,
  recruiter: recruiterReducer
});
