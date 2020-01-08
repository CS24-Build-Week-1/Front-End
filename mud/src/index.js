import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <Router>
        <App className='app' />
    </Router>,
    document.getElementById('root')
);
