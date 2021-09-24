import { combineReducers } from 'redux';

import newtask from './newTask';
import tasks from './tasks';

export default combineReducers({
    newtask,
    tasks,
});