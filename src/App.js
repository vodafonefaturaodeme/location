import React from 'react';
import HomePage from './components/homepage';
import Tos from './components/satis';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (

    <Router>
       <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/tos" component={Tos} />
          {/* Diğer sayfalar için de benzer şekilde Route ekleyebilirsiniz */}
        </Switch>
   
    </Router>
    
  );
}

export default App;