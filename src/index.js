import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
   <React.StrictMode>
    <App tab="home" /> 
   </React.StrictMode>,
  // document.getElementById('root')
  
); 



