import React from "react";
import classes from "./CarsFilter.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFilter} from '@fortawesome/free-solid-svg-icons'

const CarsFilter = (props) => {
  const brands = props.brands.sort().map((brand, key) => (
    <option value={brand} key={key}>
      {brand}
    </option>
  ));

  return (
    <div className={classes.CarsFilter} onChange={(e) => props.filterList(e)}>
      <div className={classes.Vehicle}>
        <p>Vehicle</p>
        <label className={classes.customSelect} htmlFor="styledSelect1">
          <select id="styledSelect1" data-filter="vehicle">
            <option >All</option>
            <option>Car</option>
            <option >Motorcycle</option>
          </select>
        </label>
      </div>

      <div className={classes.VehicleBrand}>
        <p>Brand</p>
        <label className={classes.customSelect} htmlFor="styledSelect1">
          <select id="styledSelect1" data-filter="vehicleBrand">
            <option defaultValue>All</option>
            {brands}
          </select>
        </label>
      </div>

      <div className={classes.VehicleType}>
        <p>Vehicle</p>
        <label className={classes.customSelect} htmlFor="styledSelect1">
          <select id="styledSelect1" data-filter="vehicleType">
            <option defaultValue>All</option>
            <option>Sedan</option>
            <option>Combi</option>
            <option>Suv</option>
            <option>Hatchback</option>
          </select>
        </label>
      </div>

      <div className={classes.SortBy}>
        <p>Sort by</p>
        <label className={classes.customSelect} htmlFor="styledSelect1">
          <select id="styledSelect1" data-filter="sorting">
            <option defaultValue>default</option>
            <option>alphabetical</option>
            <option>price ascending</option>
            <option>price descending</option>
          </select>
        </label>
      </div>

      <span onClick={props.clearFilters}><FontAwesomeIcon icon={faFilter}/>Clear Filters</span>
    </div>
  );
};

export default CarsFilter;
