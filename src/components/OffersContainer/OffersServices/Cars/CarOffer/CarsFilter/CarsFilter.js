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
    {
      value: "all",
      name: "All",
    },
    {
      value: "car",
      name: "Car",
    },
    {
      value: "motorcycle",
      name: "Motorcycle",
    },
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
        <SelectSearch options={vehicleOptions} placeholder={"Vehicle"} onChange={props.filterList}/>
      </div>

      <div className={classes.VehicleBrand}>
        <SelectSearch options={brandsOptions} placeholder={"Brands"} />
      </div>

      <div className={classes.VehicleType}>
        <SelectSearch
          options={vehicleTypeOptions}
          placeholder={"Vehicle Type"}
        />
      </div>

      <div className={classes.SortBy}>
        <SelectSearch options={sortOptions} placeholder={"Sort by"} />
      </div>

      <span onClick={props.clearFilters}>
        <FontAwesomeIcon icon={faFilter} />
        Clear Filters
      </span>
    </div>
  );
};

export default CarsFilter;
