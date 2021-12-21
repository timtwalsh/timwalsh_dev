import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Resume from "./pages/Resume";

const root = document.getElementById('root')

ReactDOM.render((
    <BrowserRouter>
        <Route exact path='/' component={Home}/>
        <Route exact path='/resume' component={Resume}/>
    </BrowserRouter>
    ),
    root,
);


reportWebVitals();
