import React, { ReactElement } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Videos from './pages/Videos/Videos';
import Navbar from './components/Navbar/Navbar';

const App: React.FC = (): ReactElement => {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/">
          <Videos />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
