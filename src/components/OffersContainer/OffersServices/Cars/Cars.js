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

  filterList = (method,value) => {
    console.log(method)
    console.log(value)
    // const value = 'vo-sx'
    const valueSplit = value.split('-');
    // const method = valueSplit[0];
    const methodValue = valueSplit[1];
    let outputList = [];
    const allModels = [...this.state.allModels];
    const filterModels = [...this.state.filterModels];

    if (method === "sorting") {
      const arrayToSort =
        this.state.filterModels.length > 0 ? filterModels : allModels;
      switch (methodValue) {
        case "alphabetical": {
          outputList = this.sortByKey("key", arrayToSort);
          console.log(outputList);

          this.state.filterModels.length > 0
            ? this.setState({filterModels: outputList})
            : this.setState({allModels: outputList});
          break;
        }

        case "price ascending": {
          console.log(`price ascending`);
          outputList = this.sortByPrice("ascending", arrayToSort);
          this.state.filterModels.length > 0
            ? this.setState({filterModels: outputList})
            : this.setState({allModels: outputList});
          break;
        }

        case "price descending": {
          console.log(`price descending`);
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
    } else {
      switch (method) {
        case "brandFilter": {
          outputList = allModels.filter(
            (car) => car.props.brand === methodValue
          );
          this.setState({filterModels: outputList});
          break;
        }

        case "vehicleFilter": {
          console.log(methodValue);
          outputList = allModels.filter(
            (car) => car.props["model"].vehicle === methodValue
          );
          this.setState({filterModels: outputList});
          break;
        }

        case "vehicleTypeFilter": {
          outputList = allModels.filter(
            (car) => car.props["model"].type === methodValue
          );
          this.setState({filterModels: outputList});
          break;
        }

        default: {
          this.setState({filterModels: []});
        }
      }
    }
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
        />
        {this.state.filterModels.length === 0
          ? this.state.allModels
          : this.state.filterModels}
      </div>
    );
  }
}

export default Cars;
