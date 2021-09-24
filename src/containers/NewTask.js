import { connect } from "react-redux";
import {inputChange, submitTask} from '../actions/newTask';
import NewTask from "../components/NewTask"

const mapStateToProps = (state) => ({
    content: state.newtask.task.content,
});

const mapDispatchToProps = (dispatch) => ({
    inputChange: (payload) => {
        dispatch(inputChange(payload));
    },
    handleSubmit: (payload) => {
        dispatch(submitTask(payload));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTask);