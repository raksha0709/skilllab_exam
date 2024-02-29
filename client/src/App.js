// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import FoodList from './components/FoodList';
import Order from './components/Order';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/food" component={FoodList} />
          <Route path="/order" component={Order} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
