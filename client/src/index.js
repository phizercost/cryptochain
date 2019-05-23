import React from 'react';
import { render } from 'react-dom'; //Allows to dynamically components to html document
import App from './components/App';
import './index.css';
 
render(
    <App />, 
    document.getElementById('root')
);