import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux'
import Single from './Single';
import * as actions from '../actions/main';



class Main extends React.Component {

  constructor (props) {
    super(props);
  }

  getPosts(event) {
   // event.preventDefault()
    console.log(this.props)
    this.props.getData();
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1><Link to="/">Reduxtagram</Link></h1>
        <Link to="/view"> single </Link>
        <button onClick={this.getPosts.bind(this)}>kliknij</button>
      </div>
    )
  };
};

const mapStateToProps = (state) => ({...state});
const mapDispatchToProps = (dispatch) => {
  return {
      getData: ()  => dispatch(actions.getData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main)
