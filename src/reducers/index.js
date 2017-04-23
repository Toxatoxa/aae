import {combineReducers} from 'redux';
import AudioReducer from './AudioReducer';
import SettingsReducer from './SettingsReducer';
// import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  audio: AudioReducer,
  settings: SettingsReducer,
});

export default rootReducer;
