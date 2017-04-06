import { CHANGE_AUDIO } from '../actions/index';

export default function (state = [], action) {
  // console.log('Action received', action);
  switch (action.type) {
    case CHANGE_AUDIO:
      //return state.concat([action.payload.data]);
      console.log('AudioReducer');
      console.log(action.payload);
      return [ action.payload, ...state ];
  }

  return state;
}
