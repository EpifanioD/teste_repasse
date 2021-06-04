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
import Products from './Products/Products';

const PagesRoot = () => (
  <Router>

    <StoreProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <Navbar>
          <Route path="/" component={Home} />
          <Route path="/products" component={Products} />
        </Navbar>
      </Switch>
    </StoreProvider>
  </Router>
)


export default PagesRoot;
