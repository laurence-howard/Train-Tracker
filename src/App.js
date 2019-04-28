import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from './components/Input/input';
import { connect } from "react-redux";
import Sidebar from './components/Sidebar/Sidebar';
import MainBody from './components/Main/main';

const mapStateToProps = (state) => {
  return {
      item: state
  }
}

class App extends Component {

  render() {

    return (
      <div className="app-outer">
      <Sidebar />
      <MainBody />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
