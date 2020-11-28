import React from 'react';
import ReactDOM from 'react-dom';
import { connectReduxDevtools } from 'mst-middlewares';
import { App } from './App';
import { Provider, rootStore } from './models/Root';

// eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-extraneous-dependencies
connectReduxDevtools(require('remotedev'), rootStore);

ReactDOM.render(
    <Provider value={rootStore}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
