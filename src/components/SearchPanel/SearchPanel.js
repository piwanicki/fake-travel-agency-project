import React, { Component } from "react";
import classes from "./SearchPanel.module.scss";

import GuestBox from "./GuestBox/GuestBox";

class SearchPanel extends Component {
  render() {
    return (
      <div className={classes.SearchContainer}>
        <p className={classes.SearchHeader}>Find your dreamy vacation!</p>
        <div className={classes.SearchBox}>
          <div className={classes.SearchPanel}>
            <div>
              <p>Transport</p>
              <select>
                <option>Fly </option>
                <option>Bus </option>
                <option>Own car </option>
              </select>
            </div>

            <div>
              <p>Until when</p>
              <input type="date" placeholder="To" />
            </div>

            <GuestBox />

            <div className={classes.GridButton}>
              <button type="button"> Search </button>
            </div>

            <div>
              <p>Where</p>
              <input type="text" placeholder="Direction" width="2em" />
            </div>
            <div>
              <p>Since when</p>
              <input type="date" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPanel;
