import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import StoreProvider from 'components/Store/Provider';
import RoutesPrivate from 'components/Routes/Private/Private';
import Home from './Home/Home';
import Login from './Login/Login';
import Navbar from 'components/UI/Navbar/Navbar';

const PagesRoot = () => (
  <Router>
    <Navbar>
      <StoreProvider>
        <Switch>
          <Route path="/login" component={Login} />
          <RoutesPrivate path="/dashboard" component={Home} />
        </Switch>
      </StoreProvider>
    </Navbar>
  </Router>
)


export default PagesRoot;
