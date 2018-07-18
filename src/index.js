import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import configureStore from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

const isAuthenticated = localStorage.getItem("isAuthenticated")
isAuthenticated && store.dispatch({ type: 'LOG_IN' })


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
