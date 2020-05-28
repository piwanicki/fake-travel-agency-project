import React, {Component} from "react";
import classes from "./Cars.module.scss";
import CarOffer from "./CarOffer/CarOffer";
import CarsFilter from "./CarOffer/CarsFilter/CarsFilter";
import CarsOffers from "./CarsOffers";

class Cars extends Component {
  state = {
    allModels: [],
    vehicleBrands: [],
    filterModels: [],
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
        models.map((modelName) => {
          return (
            <CarOffer
              key={modelName}
              brand={brand}
              model={brandsModels.models[modelName]}
              modelName={modelName}
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

  sortByKey = (key, array) => {
    return array.sort((a, b) => {
      const val1 = a[key];
      const val2 = b[key];
      return val1 < val2 ? -1 : val1 > val2 ? 1 : 0;
    });
  };

  sortByPrice = (how, array) => {
    return array.sort((a, b) => {
      const model1 = a.props["model"].price;
      const model2 = b.props["model"].price;
      let sorted;
      if (how === "ascending")
        sorted = model1 < model2 ? -1 : model1 > model2 ? 1 : 0;
      if (how === "descending")
        sorted = model1 > model2 ? -1 : model1 < model2 ? 1 : 0;
      return sorted;
    });
  };

  sortList = (by) => {
    let outputList = [];
    const allModels = [...this.state.allModels];
    const filterModels = [...this.state.filterModels];
    const arrayToSort =
      this.state.filterModels.length > 0 ? filterModels : allModels;
    switch (by) {
      case "alphabetical": {
        outputList = this.sortByKey("key", arrayToSort);
        this.state.filterModels.length > 0
          ? this.setState({filterModels: outputList})
          : this.setState({allModels: outputList});
        break;
      }

      case "price ascending": {
        outputList = this.sortByPrice("ascending", arrayToSort);
        this.state.filterModels.length > 0
          ? this.setState({filterModels: outputList})
          : this.setState({allModels: outputList});
        break;
      }

      case "price descending": {
        outputList = this.sortByPrice("descending", arrayToSort);
        this.state.filterModels.length > 0
          ? this.setState({filterModels: outputList})
          : this.setState({allModels: outputList});
        break;
      }

      default: {
        this.setState({filterModels: []});
      }
    }
  };

  filterByVehicle = (vehicle) => {
    console.log(`filter by vehicle ${vehicle}`);
    let outputList = [];
    const allModels = [...this.state.allModels];
    outputList = allModels.filter(
      (car) => car.props["model"].vehicle === vehicle
    );
    console.log(outputList);
    this.setState({filterModels: outputList});
  };

  filterByBrand = (brand) => {
    console.log(`filter by brand ${brand}`);
    let outputList = [];
    const allModels = [...this.state.allModels];
    console.log(allModels);
    outputList = allModels.filter((car) => car.props.brand === brand);
    console.log(outputList);
    this.setState({filterModels: outputList});
  };

  filterByVehicleType = (vehicleType) => {
    console.log(`filter by vehicleType ${vehicleType}`);
    let outputList = [];
    const allModels = [...this.state.allModels];
    outputList = allModels.filter((car) => car.props.type === vehicleType);
    console.log(outputList);
    this.setState({filterModels: outputList});
  };

  clearFilters = () => {
    document
      .querySelectorAll("#styledSelect1")
      .forEach((select) => (select.selectedIndex = 0));
    this.setState({filterModels: []});
  };

  render() {
    return (
      <div className={classes.Cars}>
        <CarsFilter
          brands={this.state.vehicleBrands}
          filterList={this.filterList}
          clearFilters={this.clearFilters}
          sortList={this.sortList}
          filterByVehicle={this.filterByVehicle}
          filterByVehicleType={this.filterByVehicleType}
          filterByBrand={this.filterByBrand}
        />
        {this.state.filterModels.length === 0
          ? this.state.allModels
          : this.state.filterModels}
      </div>
    );
  }
}

export default Cars;
