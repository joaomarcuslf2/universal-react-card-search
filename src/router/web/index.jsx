import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import IntroScene from '@scenes/IntroScene';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <IntroScene />
        </Route>
      </Switch>
    </Router>
  );
}
