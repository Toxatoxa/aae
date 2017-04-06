import { combineReducers } from 'redux';
import AudioReducer from './AudioReducer';
// import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  audio: AudioReducer
});

export default rootReducer;
