import React from "react";
import classes from "./CarsFilter.module.scss";

const CarsFilter = (props) => {
  const brands = props.brands.sort().map((brand, key) => (
    <option value={brand} key={key}>
      {brand}
    </option>
  ));

  return (
    <div className={classes.CarsFilter}>
      <div className={classes.VehicleType}>
        <p>Type</p>
        <label className={classes.customSelect} htmlFor="styledSelect1">
          <select id="styledSelect1">
            <option>Car</option>
            <option>Motorcycle</option>
          </select>
        </label>
      </div>

      <div className={classes.VehicleBrand}>
        <p>Brand</p>
        <label className={classes.customSelect} htmlFor="styledSelect1">
          <select id="styledSelect1">{brands}</select>
        </label>
      </div>

      <div className={classes.SortBy}>
        <p>Sort by</p>
        <label className={classes.customSelect} htmlFor="styledSelect1">
          <select id="styledSelect1">
            <option>alphabetical</option>
            <option>price ascending</option>
            <option>price descending</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default CarsFilter;
