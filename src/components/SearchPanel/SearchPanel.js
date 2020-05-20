import React, {Component} from "react";
import classes from "./SearchPanel.module.scss";
import GuestBox from "./GuestBox/GuestBox";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SelectSearch from "react-select-search";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faPlane, faBus, faTaxi} from "@fortawesome/free-solid-svg-icons";
import Offers from "../OffersContainer/Offers";
import "./SearchSelect.css";

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
    const transportOptions = [
      {
        value: "fly",
        name: (
          // <span>
          //   <FontAwesomeIcon icon={faPlane} /> Fly
          // </span>
          'fly'
        ),
      },
      {
        value: "bus",
        name: (
          // <span>
          //   <FontAwesomeIcon icon={faBus} /> Bus
          // </span>
          "bus"
        ),
      },
      {
        value: "onYourOwn",
        name: (
          // <span>
          // <><FontAwesomeIcon icon={faTaxi} /> On your Own</>
          // </span>
          // 'f1ba'
          'On Your own'
        ),
      },
    ];

    const whereOptions = Object.keys(Offers).map((country) => {
      return {name: country, value: country.toLowerCase()};
    });

    return (
      <div className={classes.SearchContainer}>
        <p className={classes.SearchHeader}>Find your dreamy vacation!</p>
        <div className={classes.SearchBox}>
          <div className={classes.SearchPanel}>
            <div style={{width: "60%", margin: "auto"}}>
              <p>Transport</p>
              <SelectSearch
                options={transportOptions}
                placeholder={"Select"}
                search={false}
              />
            </div>

            <div className={classes.DatePickerWrapper}>
              <p>Until when</p>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.startDateHandleChange}
                placeholderText="Click to select a date"
              />
            </div>

            <GuestBox />

            <div className={classes.GridButton}>
              <button type="button" className={classes.SearchButton}>
                Search
              </button>
            </div>

            <div style={{width: "60%", margin: "auto"}}>
              <p>Where</p>
              <SelectSearch
                options={whereOptions}
                placeholder="Search destination..."
                search={true}
              />
            </div>
            <div className={classes.DatePickerWrapper}>
              <p>Since when</p>
              <DatePicker
                selected={this.state.endDate}
                onChange={this.endDateHandleChange}
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
