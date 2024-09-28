import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const context= createContext();
// const context2= createContext();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <context.Provider value="abhi">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </context.Provider>
);

export {context};

