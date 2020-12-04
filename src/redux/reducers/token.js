import { SET_TOKEN } from '../actions/actionType';

let localToken = window.localStorage.getItem('key');
const initialState = '';

export default function token(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN: {
      return action.payload.token;
    }

    default:
      return state;
  }
}
