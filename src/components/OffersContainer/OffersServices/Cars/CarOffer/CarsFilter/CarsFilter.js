import React from "react";
import classes from "./CarsFilter.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter} from "@fortawesome/free-solid-svg-icons";
import SelectSearch from "react-select-search";

const CarsFilter = (props) => {
  const brandsOptions = props.brands
    .sort()
    .map((brand, key) => ({value: brand.toLowerCase(), name: brand}));

  const vehicleOptions = [
    {name: "All", value: "all",},
    {name: "Car", value: "car"},
    {name: "Motorcycle", value: "motorcycle"},
  ];

  const vehicleTypeOptions = [
    {
      value: "sedan",
      name: "Sedan",
    },
    {
      value: "combi",
      name: "Combi",
    },
    {
      value: "suv",
      name: "Suv",
    },
    {
      value: "hatchback",
      name: "Hatchback",
    },
  ];

  const sortOptions = [
    {
      value: "so-default",
      name: "Default",
    },
    {
      value: "so-alphabetical",
      name: "Alphabetical",
    },
    {
      value: "so-price ascending",
      name: "Price ascending",
    },
    {
      value: "so-price descending",
      name: "Price descending",
    },
  ];

  return (
    <div className={classes.CarsFilter} onChange={props.filterList}>
      <div className={classes.Vehicle}>
        <SelectSearch
          options={vehicleOptions}
          placeholder={"Vehicle"}
        />
      </div>

      <div className={classes.VehicleBrand}>
        <SelectSearch
          options={brandsOptions}
          placeholder={"Brands"}
          
        />
      </div>

      <div className={classes.VehicleType}>
        <SelectSearch
          options={vehicleTypeOptions}
          placeholder={"Vehicle Type"}
          // onChange={props.filterList}
        />
      </div>

      <div className={classes.SortBy}>
        <SelectSearch
          options={sortOptions}
          placeholder={"Sort by"}
          // onChange={props.filterList}
        />
      </div>

      <span onClick={props.clearFilters}>
        <FontAwesomeIcon icon={faFilter} />
        Clear Filters
      </span>
    </div>
  );
};

export default CarsFilter;
