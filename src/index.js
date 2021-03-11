// This file is importing information/variables from src/config.js
// React required
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
// CSS -- Global CSS // For Entire App goes to index.css
import './css/index.css';
// App - Returning Our Entire Application
import App from './App'; 
// -------------- Application Begins Bellow ------------ \\

ReactDOM.render(
    <Router>

        { /* Entire Application - Start */}
        <App />
        { /* Entire Application - End */}

    </Router>,
    document.getElementById('root')
);
