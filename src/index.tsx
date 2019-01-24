import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as Sentry from "@sentry/browser";
import {version} from "../package.json"

ReactDOM.render(<App />, document.getElementById('root'));

Sentry.init({
    dsn: "https://cd1cddbeff664ad1aed5d1a882c01d25@sentry.io/1370243",
    release : version
  });
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
