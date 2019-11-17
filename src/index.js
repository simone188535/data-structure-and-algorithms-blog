import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';
import App from './App';
import ArticleTemplate from './components/ArticleTemplate';
import ReverseString from './components/pages/ReverseString';

const routing = (
    <Router>
        <div>
            <Route path="/" exact component={App} />
            <Route path="/template" component={ArticleTemplate} />
            <Route path="/reverse-string" component={ReverseString} />
        </div>
    </Router>
);
ReactDOM.render(
    routing,
    document.querySelector("#root"));