import {SUBMIT_TASK} from '../actions/newTask';
import {DO_TASK} from '../actions/tasks';

const initialState = {
    todotask: []
};

const tasks = (state = initialState, action = {}) => {
    switch (action.type) {
      case SUBMIT_TASK:
        return {
          ...state,
          todotask: [
              ...state.todotask,
              {...action.payload,
          }]
        };
        case DO_TASK:
          return {
            ...state,
            todotask: [
              ...state.todotask,
            ]
              }
      default:
        return state;
    }
  };
  
  export default tasks;