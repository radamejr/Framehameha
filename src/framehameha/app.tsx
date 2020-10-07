import './app.css';

import Navigation from '../components/navigation/navigation.container';
import { Provider } from 'react-redux';
import React from 'react';
import RouteContainer from '../components/router_container/route_container';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from '../helpers/scroll_to_top/scroll_to_top';
import UserDialog from '../components/dialog/user_dialog/user_dialog';
import store from '../state/store/store'

const App = () => {
    return (
      <Provider store={store}>
          <Router>
            <Navigation />
            <RouteContainer />
            <ScrollToTop />
            <UserDialog />
          </Router>
      </Provider>
    )
}

export default App;
