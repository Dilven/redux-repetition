import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import Single from './Single';
import * as actions from '../actions/main';
import PhotoGrid from './PhoteGrid';



class Main extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.getData();
  }
  
  render() {
    console.log(this.props)
    return (
      <div>
        <h1><Link to="/">Reduxtagram</Link></h1>
        <PhotoGrid posts={this.props.posts}/>
      </div>
    )
  };
};

const mapStateToProps = (state) => ({...state.main});
const mapDispatchToProps = (dispatch) => {
  return {
      getData: ()  => dispatch(actions.getData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main)
