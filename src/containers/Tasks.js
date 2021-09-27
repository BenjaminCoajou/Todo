import { connect } from 'react-redux';
import { doTask } from '../actions/tasks';

import Tasks from '../components/Tasks';

const mapStateToProps = (state) => ({
    todo: state.tasks.todotask,
});

const mapDispatchToProps = (dispatch) => ({
    inputClick: (payload) => {
        dispatch(doTask(payload));
    },
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);