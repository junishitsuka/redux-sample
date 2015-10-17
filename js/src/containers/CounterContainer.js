import * as counterActions from "../actions/CounterAction";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CounterView from '../components/CounterView.jsx';
import CounterReducer from '../reducers/CounterReducer';

function mapDispatchToProps(dispatch) {
    return bindActionCreators(counterActions, dispatch);
}

function mapStateToProps(state) {
    const { CounterReducer } = state;
    return {
        routerState: state.router,
        CounterReducer
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterView);
