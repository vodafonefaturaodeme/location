import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Tos from "./components/satis"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/tos">
        <Tos />
      </Route>
      
      <Route path="/">
        <App />
      </Route>
    </Switch>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
