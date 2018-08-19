import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import 'moment/locale/pl';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Routes />, document.getElementById('root'),
    )
});