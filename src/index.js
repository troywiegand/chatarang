import React from 'react'
import ReactDOM from 'react-dom'
import {BroswerRouter as Router} from 'react-router-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <Router>
    <App />
    </Router>, 
    document.getElementById('root')
);
registerServiceWorker()
