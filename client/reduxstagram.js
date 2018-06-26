import React from 'react';
import css from './styles/style.styl';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import Main from './components/Main';
import Single from './components/Single';
import store from './store.js';


const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <div>
          <h1><Link to="/">Reduxtagram</Link></h1>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/view/:code" component={Single} />
          </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  )
};


render(<App/>, document.getElementById('root'));