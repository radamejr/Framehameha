import './app.css';

import Navigation from '../components/navigation/navigation.container';
import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from '../helpers/scroll_to_top/scroll_to_top';
import UserDialog from '../components/dialog/overlay';
import store from '../state/store/store'
import StartUp from './startup';
import ToastContainer from '../components/toast/toast';

const App = () => {
    return (
      <Provider store={store}>
          <StartUp />
          <ScrollToTop />
          <UserDialog />
          <ToastContainer />
          <Router>
            <Navigation />
          </Router>
      </Provider>
    )
}

export default App;
