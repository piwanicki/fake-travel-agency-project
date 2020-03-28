import React, { Component } from "react";
import classes from "./SearchPanel.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";

class SearchPanel extends Component {
  state = {
    adults: 0,
    kids: 0
  };

  addAdultHandler = () => {
    const adults = this.state.adults;
    this.setState({
      adults: adults + 1
    });
  };

  removeAdultHandler = () => {
    const adults = this.state.adults;
    if (adults > 0) this.setState({ adults: adults - 1 });
  };

  addKidHandler = () => {
    const kids = this.state.kids;
    this.setState({
      kids: kids + 1
    });
  };

  removeKidHandler = () => {
    const kids = this.state.kids;
    if (kids > 0) this.setState({ kids: kids - 1 });
  };

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

            <div className={classes.GuestBox} style={{ marginLeft: "0" }}>
              <p>Guests</p>
              <div>
                <span>
                  <p>Adult</p>
                </span>
                <FontAwesomeIcon
                  icon={faPlusSquare}
                  onClick={this.addAdultHandler}
                />
                <p>{this.state.adults}</p>
                <FontAwesomeIcon
                  icon={faMinusSquare}
                  onClick={this.removeAdultHandler}
                />
              </div>

              <div>
                <span>
                  <p>Kids</p>
                </span>
                <FontAwesomeIcon
                  icon={faPlusSquare}
                  onClick={this.addKidHandler}
                />
                <p>{this.state.kids}</p>
                <FontAwesomeIcon
                  icon={faMinusSquare}
                  onClick={this.removeKidHandler}
                />
              </div>
            </div>

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
