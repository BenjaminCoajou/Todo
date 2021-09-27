import {INPUT_CHANGE, SUBMIT_TASK} from '../actions/newTask';

const initialState = {
    task: {
        content: '',
    }
};

const newtask = (state = initialState, action = {}) => {
    switch (action.type) {
      case INPUT_CHANGE:
        return {
          ...state,
          task: {
              ...state.task,
              ...action.payload,
          }
        };
        case SUBMIT_TASK:
        return {
          ...state,
          task: {
            content:'',
          }
        };
      default:
        return state;
    }
  };
  
  export default newtask;