import { connect } from 'react-redux';

import Tasks from '../components/Tasks';

const mapStateToProps = (state) => ({
    todo: state.tasks.todotask,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);