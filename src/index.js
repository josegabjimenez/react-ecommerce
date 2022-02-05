import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@styles/main.css';
import '@styles/global.scss';

var mountNode = document.getElementById('app');
ReactDOM.render(<App name="Jane" />, mountNode);
