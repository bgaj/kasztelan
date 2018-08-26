import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import 'moment/locale/pl';
import { Provider } from 'react-redux'
import store from './store'

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Provider store={store}><Routes /></Provider>, document.getElementById('root'),
    )
});