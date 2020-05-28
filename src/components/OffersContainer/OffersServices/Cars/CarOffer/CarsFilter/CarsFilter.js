import React from "react";
import classes from "./CarsFilter.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter} from "@fortawesome/free-solid-svg-icons";
import SelectSearch from "react-select-search";

const CarsFilter = (props) => {
  const brandsOptions = props.brands.map((brand) => ({
    value: brand,
    name: brand,
  }));

  const vehicleOptions = [
    {name: "All", value: "All"},
    {name: "Car", value: "Car"},
    {name: "Motorcycle", value: "Motorcycle"},
  ];

  const vehicleTypeOptions = [
    {
      value: "Sedan",
      name: "Sedan",
    },
    {
      value: "Combi",
      name: "Combi",
    },
    {
      value: "Suv",
      name: "Suv",
    },
    {
      value: "Hatchback",
      name: "Hatchback",
    },
  ];

  const sortOptions = [
    {
      value: "default",
      name: "Default",
    },
    {
      value: "alphabetical",
      name: "Alphabetical",
    },
    {
      value: "price ascending",
      name: "Price ascending",
    },
    {
      value: "price descending",
      name: "Price descending",
    },
  ];

  return (
    <div className={classes.CarsFilter} onChange={props.filterList}>
      <div className={classes.Vehicle}>
        <SelectSearch
          options={vehicleOptions}
          placeholder={"Vehicle"}
          onChange={props.filterByVehicle}
        />
      </div>

      <div className={classes.VehicleBrand}>
        <SelectSearch
          options={brandsOptions}
          placeholder={"Brands"}
          onChange={props.filterByBrand}
        />
      </div>

      <div className={classes.VehicleType}>
        <SelectSearch
          options={vehicleTypeOptions}
          placeholder={"Vehicle Type"}
          onChange={props.filterByVehicleType}
        />
      </div>

      <div className={classes.SortBy}>
        <SelectSearch
          options={sortOptions}
          placeholder={"Sort by"}
          onChange={props.sortList}
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
