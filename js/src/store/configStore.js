import { createStore, applyMiddleware, compose } from 'redux';
import CounterReducer from '../reducers/CounterReducer';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { createHistory } from 'history';
import { routerStateReducer, reduxReactRouter } from 'redux-router';

const logger = createLogger();
const createAppStore = compose(
    applyMiddleware(thunk, logger),
    reduxReactRouter({createHistory})
)(createStore);

export default function configStore() {
    return createAppStore(CounterReducer);
}
