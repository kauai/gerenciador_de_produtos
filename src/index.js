import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Api from './componentes/Api'

ReactDOM.render(<App api={Api}/>, document.getElementById('root'));
