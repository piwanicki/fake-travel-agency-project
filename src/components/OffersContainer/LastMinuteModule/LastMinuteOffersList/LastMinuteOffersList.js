import React, {Component} from "react";
import classes from "./LastMinuteOffersList.module.scss";
import {lastMinuteData} from "../LastMinuteOffersData";
import LastMinFilters from  './LastMinFilters/LastMinFilters'

class LastMinuteOffersList extends Component {
  state = {
    allOffers: [],
    countries: Object.keys(lastMinuteData)
  };

  componentDidMount = () => {
    const lastMinuteCountries = Object.keys(lastMinuteData);
    console.log(lastMinuteCountries)
    
    // const vehicleBrands = Object.keys(CarsOffers);
    // const brandsModels = new Map();
    // let allModels = this.state.allModels;

    // vehicleBrands.forEach((brand) => {
    //   brandsModels.set(brand, CarsOffers[brand]);
    // });
    // brandsModels.forEach((brandsModels, brand) => {
    //   const models = Object.keys(brandsModels.models);
    //   const brandLogo = brandsModels.logo;
    //   allModels = allModels.concat(
    //     models.map((modelName) => {
    //       return (
    //         <CarOffer
    //           key={modelName}
    //           brand={brand}
    //           model={brandsModels.models[modelName]}
    //           modelName={modelName}
    //           logo={brandLogo}
    //         />
    //       );
    //     })
    //   );
    // });
    // this.setState({
    //   allModels: allModels,
    //   vehicleBrands: vehicleBrands,
    // });
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
      const offer1 = a.price;
      const offer2 = b.price;
      let sorted;
      if (how === "ascending")
        sorted = offer1 < offer2 ? -1 : offer1 > offer2 ? 1 : 0;
      if (how === "descending")
        sorted = offer1 > offer2 ? -1 : offer1 < offer2 ? 1 : 0;
      return sorted;
    });
  };

  filterList = (e) => {
    const dataSetVal = Object.values(e.target.dataset);
    const method = dataSetVal[0];
    const methodValue = e.target.value;
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
        case "vehicleBrand": {
          outputList = allModels.filter(
            (car) => car.props.brand === methodValue
          );
          this.setState({filterModels: outputList});
          break;
        }

        case "vehicle": {
          console.log(`switch vehicle`);
          console.log(methodValue);
          outputList = allModels.filter(
            (car) => car.props["model"].vehicle === methodValue
          );
          this.setState({filterModels: outputList});
          break;
        }

        case "vehicleType": {
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
    // document
    //   .querySelectorAll("#styledSelect1")
    //   .forEach((select) => (select.selectedIndex = 0));
    // this.setState({filterModels: []});
  };

  render() {
    return <div className={classes.LastMinuteList}>
      <LastMinFilters 
        countries={this.state.countries}
        when={'kiedy'}
      />
    </div>;
  }
}

export default LastMinuteOffersList;
