import React, {Component} from "react";
import classes from "./SearchPanel.module.scss";
import GuestBox from "./GuestBox/GuestBox";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlane, faBus, faTaxi} from "@fortawesome/free-solid-svg-icons";

class SearchPanel extends Component {
  state = {
    startDate: new Date(),
    endDate: new Date(),
  };

  startDateHandleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  endDateHandleChange = (date) => {
    this.setState({
      endDate: date,
    });
  };

  componentDidMount = () => {
    const startDate = this.state.startDate.getDate();
    const endDate = this.state.endDate;
    endDate.setDate(startDate + 7);
    this.setState({endDate: endDate});
  };

  render() {
    const options = [
      {
        value: "fly",
        label: (
          <span>
            <FontAwesomeIcon icon={faPlane} /> Fly
          </span>
        ),
      },
      {
        value: "bus",
        label: (
          <span>
            <FontAwesomeIcon icon={faBus} /> Bus
          </span>
        ),
      },
      {
        value: "onYourOwn",
        label: (
          <span>
            <FontAwesomeIcon icon={faTaxi} /> On your Own
          </span>
        ),
      },
    ];

    return (
      <div className={classes.SearchContainer}>
        <p className={classes.SearchHeader}>Find your dreamy vacation!</p>
        <div className={classes.SearchBox}>
          <div className={classes.SearchPanel}>
            <div>
              <p>Transport</p>
              <Select options={options} />
            </div>

            <div>
              <p>Until when</p>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.startDateHandleChange}
                todayButton="Today"
                placeholderText="Click to select a date"
              />
            </div>

            <GuestBox />

            <div className={classes.GridButton}>
              <button type="button" className={classes.SearchButton}>
                {" "}
                Search{" "}
              </button>
            </div>

            <div>
              <p>Where</p>
              <input type="text" placeholder="Direction" width="2em" />
            </div>
            <div>
              <p>Since when</p>
              <DatePicker
                selected={this.state.endDate}
                onChange={this.endDateHandleChange}
                todayButton="Today"
                placeholderText="Click to select a date"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPanel;
