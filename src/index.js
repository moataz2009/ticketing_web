import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import Layout from './components/layout/Layout';

document.title = "Ticketing sysyrm";

ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);

