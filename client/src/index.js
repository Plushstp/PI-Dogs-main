import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import store from "./redux/store/store"

import './index.css';
import App from './App';


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      
        <App />
      
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);