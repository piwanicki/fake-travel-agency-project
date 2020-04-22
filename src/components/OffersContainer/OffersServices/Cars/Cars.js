import React from "react";
import classes from "./Cars.module.scss";
import CarOffer from "./CarOffer/CarOffer";
import CarsFilter from "./CarOffer/CarsFilter/CarsFilter";
import CarsOffers from "./CarsOffers";

const Cars = (props) => {
  const vehicleBrands = Object.keys(CarsOffers);
  const brandsModels = new Map();

  let allModels = [];
  vehicleBrands.forEach((brand) => {
    brandsModels.set(brand, CarsOffers[brand]);
    console.log(brandsModels);
  });
  brandsModels.forEach((brandsModels, brand) => {
    const models = Object.keys(brandsModels);
    allModels.push(
      models.map((model) => (
        <CarOffer brand={brand} model={brandsModels[model]} />
      ))
    );
  });

  return (
    <div className={classes.Cars}>
      <CarsFilter brands={vehicleBrands} />
      {allModels}
    </div>
  );
};

export default Cars;
