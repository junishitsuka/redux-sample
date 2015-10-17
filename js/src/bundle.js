import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import counterContainer from './containers/CounterContainer';
import configStore from './store/configStore';

const store = configStore();

render(
    <Provider store={store}>
        <counterContainer />
    </Provider>,
    document.getElementById('content')
);
