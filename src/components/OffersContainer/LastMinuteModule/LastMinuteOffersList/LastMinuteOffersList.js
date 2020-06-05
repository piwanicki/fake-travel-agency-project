import React, {Component} from "react";
import classes from "./LastMinuteOffersList.module.scss";
import {LastMinuteData} from "../LastMinuteOffersData";
import LastMinFilters from "./LastMinFilters/LastMinFilters";
import LastMinuteOffer from "./LastMinuteOffer/LastMinuteOffer";
import {connect} from 'react-redux';

class LastMinuteOffersList extends Component {
  state = {
    allOffers: [],
    countries: Object.keys(LastMinuteData),
  };

  componentDidMount = () => {
    const lastMinuteOffers = Object.keys(LastMinuteData);
    const offers = lastMinuteOffers.map((offer,index) => <LastMinuteOffer offer={LastMinuteData[offer]} key={index} />);
    this.setState({allOffers: offers});
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


    return (
      <div className={classes.LastMinuteList}>
        <LastMinFilters countries={this.state.countries} when={"kiedy"} />
        {this.state.allOffers}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weathers: state.weathers,
    isFetching: state.isFetching,
  };
};

// const dispatchPropsToState = (dispatch) => {

// };


//export default LastMinuteOffersList;
export default connect(mapStateToProps, null)(LastMinuteOffersList);


