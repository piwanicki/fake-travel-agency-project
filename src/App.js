import React, { Component } from "react";
import Layout from "./UI/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import {connect} from 'react-redux';

class  App extends Component {

  componentDidMount = () => {
    //this.props.fetchWeathers();
  }
  render () {
    return (
      <BrowserRouter>
        <Layout></Layout>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchWeathers: () => dispatch({ type: "FETCH_WEATHERS" }),
  }
}

export default connect(null, mapDispatchToProps)(App);
