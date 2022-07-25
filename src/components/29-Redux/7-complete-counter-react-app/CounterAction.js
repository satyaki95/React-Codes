// step 2: create actions 
//services/actions/counterActions.js
// action - increment, decrement, reset

import { DECREMENT, INCREMENT, RESET } from "../constants/counterConstants";

export const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const resetCounter = () => {
  return {
    type: RESET,
  };
};

export const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};
