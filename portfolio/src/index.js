import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import About from './Components/About';
import Resume from './Components/Resume';
import * as serviceWorker from './serviceWorker';

import { HashRouter, Route, Link } from "react-router-dom";

const routes = (
    <HashRouter>
        <Route exact path="/" component={App}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/about" component={About}/>
        <Route path="/resume" component={Resume}/>
    </HashRouter>
)

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
