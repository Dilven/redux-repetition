import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import * as actions from '../actions/main';
import PhotoGrid from './PhoteGrid';



class Main extends React.Component {

  constructor (props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
  }

  componentDidMount () {
    this.props.getData();
  };

  handleLike(index, event) {
    this.props.giveLike(index)
  }
  
  render() {
    return (
      <div>
        <PhotoGrid handleLike={this.handleLike} posts={this.props.posts}/>
      </div>
    )
  };
};

const mapStateToProps = (state) => ({...state.main});
const mapDispatchToProps = (dispatch) => {
  return {
      getData: ()  => dispatch(actions.getData()),
      giveLike: (index) => dispatch(actions.giveLike(index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main)
