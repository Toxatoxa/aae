//import { CHANGE_AUDIO } from '../actions/index';
import {CHANGE_FONT} from '../actions/index';

const INITIAL_STATE = {
    fontSize: 18,
    audioSpeed: 1.0
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CHANGE_FONT':
            return {
                ...state,
                fontSize: action.payload
            };
            break;
        default:
            return state;
    }
}
