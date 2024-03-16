import React from 'react';
import HomePage from './Screen/Home/homepage';
import SSSPage from './Screen/SSS/ssspage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (

    <div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sss" element={<SSSPage />} />
    </Routes>
  </div>

   
    
  );
}

export default App;