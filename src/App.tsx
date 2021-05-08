import React, { ReactElement } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Videos from './pages/Videos/Videos';
import Navbar from './components/Navbar/Navbar';

import VideoPlayer from './pages/VideoPlayer/VideoPlayer';

const App: React.FC = (): ReactElement => {

  return (
    <Router>
      <Switch>
        <Route path="/video/:id">
          <VideoPlayer />
        </Route>
        <Route path="/">
        <Navbar />
          <Videos />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
