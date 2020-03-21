import React, { Component } from "react";
import classes from "./SearchPanel.module.css";

class SearchPanel extends Component {
  render() {
    return (
      <div className={classes.SearchContainer}>
        <div className={classes.SearchBox}>
          <p style={{ fontSize: "2.2em", margin: "1em" }}>
            Find your dreamy vacation!
          </p>
          <div className={classes.SearchPanel}>
            <div>
              <p>Transport</p>
              <select>
                <option> Fly </option>
                <option> Bus </option>
                <option> Own car </option>
              </select>
            </div>

            <div>
              <p>Where</p>
              <input type="text" placeholder="Direction" />
            </div>

            <div>
              <p>Since when</p>
              <input type="date" placeholder="From" />
            </div>

            <div>
              <p>Until when</p>
              <input type="date" placeholder="To" />
            </div>

            <button type="button"> Search </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPanel;
