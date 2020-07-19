import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import store from '../state/store/store'
import RouteContainer from '../components/router_container/route_container';

const App = () => {
    return (
      <Provider store={store}>
          <Router>
            <RouteContainer />
          </Router>
      </Provider>
    )
}

export default App;
