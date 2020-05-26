import React from "react";
import classes from "./LastMinFilters.module.scss";
import SelectSearch from "react-select-search";
import GuestBox from "../../../../SearchPanel/GuestBox/GuestBox";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter} from "@fortawesome/free-solid-svg-icons";

const LastMinFilters = (props) => {
  const transportOptions = [
    {
      value: "fly",
      name: "fly",
    },
    {
      value: "bus",
      name: "fly",
    },
    {
      value: "onYourOwn",
      name: "fly",
    },
  ];

  const whereOptions = props.countries.map((country) => {
    return {name: country, value: country.toLowerCase()};
  });

  return (
    <div className={classes.LastMinFilters}>
      <div className={classes.FlexRow}>
        <span style={{width: "200px"}}>
          <SelectSearch
            options={whereOptions}
            placeholder={"Where..."}
            search={true}
          />
        </span>

        <span>
          <SelectSearch
            options={transportOptions}
            placeholder={"Type..."}
            search={true}
          />
        </span>

        <span>
          <SelectSearch
            options={transportOptions}
            placeholder={"Transport..."}
            search={true}
          />
        </span>
      </div>

      <div className={classes.FlexRow}>
        <span>
          <span>
            Start
            <DatePicker />
          </span>
          <span>
            End
            <DatePicker />
          </span>
        </span>

        <GuestBox />
        <span onClick={props.clearFilters}>
          <FontAwesomeIcon icon={faFilter} />
          Clear Filters
        </span>
      </div>
    </div>
  );
};

export default LastMinFilters;
