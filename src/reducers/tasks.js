import {SUBMIT_TASK} from '../actions/newTask';

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
      default:
        return state;
    }
  };
  
  export default tasks;