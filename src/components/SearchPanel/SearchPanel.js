import React, { Component } from 'react';
import classes from './SearchPanel.module.css';

class SearchPanel extends Component {
  render() {
    return (
      <div className={classes.SearchContainer}>
          <div className={classes.SearchPanel}>
          <p>Find your dreamy vacation!</p>
            <select>
              <option> Fly </option>
              <option> Bus </option>
              <option> Own car </option>
            </select>
            <input type='text' placeholder='Direction' />
            <input type='date' placeholder='From' /> 
            <input type='date' placeholder='To' /> 
            <button type='button'> Search </button>
          </div>
      </div>
    )
  }
};

export default SearchPanel;