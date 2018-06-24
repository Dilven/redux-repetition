import React from 'react';
import css from './styles/style.styl';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import Main from './components/Main';
import store from './store.js';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Route path="/" component={Main} />
        </Router>
      </div>
    </Provider>
  )
};


render(<App/>, document.getElementById('root'));