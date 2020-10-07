import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import './app.css';
import store from '../state/store/store'
import RouteContainer from '../components/router_container/route_container';
import Navigation from '../components/navigation/navigation.container';
import ScrollToTop from '../helpers/scroll_to_top/scroll_to_top';

const App = () => {
    return (
      <Provider store={store}>
          <Router>
            <Navigation />
            <RouteContainer />
            <ScrollToTop />
          </Router>
      </Provider>
    )
}

export default App;
