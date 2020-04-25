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
  });
  brandsModels.forEach((brandsModels, brand) => {
    const models = Object.keys(brandsModels.models);
    const brandLogo = brandsModels.logo;
    allModels.push(
      models.map((model, index) => (
        <CarOffer
          key={index}
          brand={brand}
          model={brandsModels.models[model]}
          modelName={model}
          logo={brandLogo}
        />
      ))
    );
  });

  const filterList = (e) => {
    const dataSetVal = Object.values(e.target.dataset);
    const method = dataSetVal[0];
    const methodValue = e.target.value;

    if (method === "sorting") {
      console.log(`sorting method by ${methodValue}`);

      console.log(allModels)
    } else {
      console.log(`filter method by ${methodValue}`);
    }
  };

  return (
    <div className={classes.Cars}>
      <CarsFilter brands={vehicleBrands} filterList={filterList} />
      {allModels}
    </div>
  );
};

export default Cars;
