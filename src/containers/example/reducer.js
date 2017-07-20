import {
  MESSAGE_RECEIVED
} from './actions';

const initialState = {
  helloMessage: null,
};

function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case MESSAGE_RECEIVED:
      return Object.assign({}, state, {
        helloMessage: action.message
      });
    default:
      return state;
  }
}

export default exampleReducer;
