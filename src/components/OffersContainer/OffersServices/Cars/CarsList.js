import React, {Component} from "react";
import classes from "./CarsList.module.scss";
import CarOffer from "./CarOffer/CarOffer";
import CarsFilter from "./CarOffer/CarsFilter/CarsFilter";
import CarsOffers from "./CarsOffers";
import ListComponent from "../../../../UI/ListComponent/ListComponent";

class CarsList extends Component {
  state = {
    allModels: [],
    vehicleBrands: [],
    filterModels: [],
    page: 1,
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

    const pages = Math.ceil(allModels.length / 5);
    this.setState({
      pages: pages,
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
    outputList = allModels.filter((car) => car.props.brand === brand);
    const pages = Math.ceil(outputList.length / 5);
    this.setState({filterModels: outputList, pages: pages});
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
    this.setState({filterModels: []});
    const pages = Math.ceil(this.state.allModels.length / 5);
    this.setState({
      pages: pages,
    });
  };

  selectPageHandler = (e) => {
    const page =
      e.target.innerHTML !== "" ? parseInt(e.target.innerHTML) : null;
    if (page && page !== this.state.page) {
      this.setState({page: page});
      this.addActivePageClass(page);
    }
  };

  addActivePageClass = (page) => {
    const activePage = document.querySelector(`#page-${this.state.page}`);
    const nextActivePage = document.querySelector(`#page-${page}`);
    activePage.classList.remove("activePage");
    nextActivePage.classList.add("activePage");
  };

  nextPageHandler = () => {
    const page = this.state.page;
    if (page === this.state.pages) return;
    this.addActivePageClass(page + 1);
    this.setState({page: page + 1});
  };

  previousPageHandler = () => {
    const page = this.state.page;
    if (page === 1) return;
    this.addActivePageClass(page - 1);
    this.setState({page: page - 1});
  };

  render() {
    const allOffers = this.state.allModels;
    const offersToRender =
      this.state.filterModels.length === 0
        ? [...allOffers].splice((this.state.page - 1) * 5, 5)
        : this.state.filterModels.splice((this.state.page - 1) * 5, 5);
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
        <ListComponent
          selectPageHandler={this.selectPageHandler}
          nextPageHandler={this.nextPageHandler}
          previousPageHandler={this.previousPageHandler}
          itemsToRender={offersToRender}
          pages={this.state.pages}
          page={this.state.page}
        />
      </div>
    );
  }
}

export default CarsList;
