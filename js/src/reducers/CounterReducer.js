import { PUSH_PLUS_BUTTON, PUSH_MINUS_BUTTON } from "../actions/CounterAction";

const initialState = {
    count: 0
};

export default function CounterReducer(state = initialState, action) {
    switch (action.type) {
    case PUSH_PLUS_BUTTON:
        return Object.assign({}, state, {
            count: state.count + 1
        });
    case PUSH_MINUS_BUTTON:
        return Object.assign({}, state, {
            count: state.count - 1
        });
    default:
        return state;
    }
};
