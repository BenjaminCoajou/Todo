import { connect } from "react-redux";
import { newTask } from "../actions/newTask";
import NewTask from "../components/NewTask"

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
    inputSubmit: (task) => {
        dispatch(newTask(task))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTask);