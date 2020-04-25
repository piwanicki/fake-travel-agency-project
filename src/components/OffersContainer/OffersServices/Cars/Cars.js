import React, { Component } from "react";
import classes from "./Cars.module.scss";
import CarOffer from "./CarOffer/CarOffer";
import CarsFilter from "./CarOffer/CarsFilter/CarsFilter";
import CarsOffers from "./CarsOffers";

class Cars extends Component {
  state = {
    allModels: [],
    vehicleBrands: [],
  };

  componentDidMount = () => {
    const vehicleBrands = Object.keys(CarsOffers);
    const brandsModels = new Map();
    let allModels = this.state.allModels;

    vehicleBrands.forEach((brand) => {
      brandsModels.set(brand, CarsOffers[brand]);
    });
    brandsModels.forEach((brandsModels, brand) => {
      const models = Object.keys(brandsModels.models);
      const brandLogo = brandsModels.logo;
      allModels = allModels.concat(
        models.map((model) => {
          return (
            <CarOffer
              key={model}
              brand={brand}
              model={brandsModels.models[model]}
              modelName={model}
              logo={brandLogo}
            />
          );
        })
      );
    });
    this.setState({
      allModels: allModels,
      vehicleBrands: vehicleBrands,
    });
  };

  filterList = (e) => {
    const dataSetVal = Object.values(e.target.dataset);
    const method = dataSetVal[0];
    const methodValue = e.target.value;
    let outputList = [];
    const allModels = [...this.state.allModels];
    console.log(allModels);

    if (method === "sorting") {
      console.log(`sorting method by ${methodValue}`);
      outputList = allModels.sort((a, b) => {
        return a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
      });
      console.log(outputList);
      this.setState({ allModels: outputList });
    } else {
      console.log(`filter method by ${methodValue}`);
    }
  };

  render() {
    return (
      <div className={classes.Cars}>
        <CarsFilter
          brands={this.state.vehicleBrands}
          filterList={this.filterList}
        />
        {this.state.allModels}
      </div>
    );
  }
}

export default Cars;
