import { NEW_TASK } from "../actions/newTask";

const initialState = {
    task: [],
};

const newTask = (state = initialState, action = {}) => {
    switch(action.type) {
        case NEW_TASK:
            return {
                ...state,
                task: [action.payload],
            };
            default:
                return state;
    }
};

export default newTask;