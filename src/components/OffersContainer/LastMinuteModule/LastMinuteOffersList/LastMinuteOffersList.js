import React, {Component} from "react";
import classes from "./LastMinuteOffersList.module.scss";
import {LastMinuteData} from "../LastMinuteOffersData";
import LastMinFilters from "./LastMinFilters/LastMinFilters";
import LastMinuteOffer from "./LastMinuteOffer/LastMinuteOffer";
import ListComponent from "../../../../UI/ListComponent/ListComponent";

class LastMinuteOffersList extends Component {
  state = {
    allOffers: [],
    filteredOffers: [],
    countries: [],
    types: [],
    transport: [],
    page: 1,
    pages: 0,
    pageIndex: 0,
  };

  componentDidMount = () => {
    const lastMinuteOffers = Object.keys(LastMinuteData);
    const offers = lastMinuteOffers.map((offer, index) => (
      <LastMinuteOffer offer={LastMinuteData[offer]} key={index} />
    ));
    const offersToRender = [...offers].splice(0, 5);
    const pages = Math.ceil(lastMinuteOffers.length / 5);

    const countries = [
      ...new Set(lastMinuteOffers.map((city) => LastMinuteData[city].country)),
    ];
    const types = [
      ...new Set(lastMinuteOffers.map((city) => LastMinuteData[city].type)),
    ];
    const transport = [
      ...new Set(
        lastMinuteOffers.map((city) => LastMinuteData[city].transport)
      ),
    ];
    this.setState({
      allOffers: offers,
      pages: pages,
      offersToRender: offersToRender,
      countries: countries,
      types: types,
      transport: transport,
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

  clearFilters = () => {
    const pages = Math.ceil(this.state.allOffers.length / 5);
    this.setState({filteredOffers: [], pages: pages});
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

  updatePages = (arr) => {
    const pages = Math.ceil(arr.length / 5);
    this.setState({page: 1, pages: pages});
  };

  filterByWhereHandler = (val) => {
    const filteredOffers = [...this.state.allOffers].filter(
      (offer) => offer.props.offer.country === val
    );
    this.updatePages(filteredOffers);
    this.setState({filteredOffers: filteredOffers});
  };

  filterByTypeHandler = (val) => {
    const filteredOffers = [...this.state.allOffers].filter(
      (offer) => offer.props.offer.type === val
    );
    this.updatePages(filteredOffers);
    this.setState({filteredOffers: filteredOffers});
  };

  filterByTransportHandler = (val) => {
    const filteredOffers = [...this.state.allOffers].filter(
      (offer) => offer.props.offer.transport === val
    );
    this.updatePages(filteredOffers);
    this.setState({filteredOffers: filteredOffers});
  };

  reformatDate = (date) => {
    return date.split("-").reverse().join("-");
  };

  filterByStartDateHandler = (val) => {
    const filteredOffers = [...this.state.allOffers].filter((offer) => {
      const fromDt = new Date(this.reformatDate(offer.props.offer.from));
      const toDt = new Date(this.reformatDate(offer.props.offer.to));
      return val <= fromDt && val <= toDt;
    });
    this.updatePages(filteredOffers);
    this.setState({filteredOffers: filteredOffers});
  };

  filterByEndDateHandler = (val) => {
    const filteredOffers = [...this.state.allOffers].filter((offer) => {
      const toDt = new Date(this.reformatDate(offer.props.offer.to));
      return val <= toDt;
    });
    this.updatePages(filteredOffers);
    this.setState({filteredOffers: filteredOffers});
  };

  filterByGuestsHandler = (isAdult, val) => {
    let filteredOffers = [...this.state.allOffers];
    if (isAdult) {
      filteredOffers = filteredOffers.filter((offer) => {
        return val <= offer.props.offer.guests.adults;
      });
    } else {
      filteredOffers = filteredOffers.filter(
        (offer) => val <= offer.props.offer.guests.kids
      );
    }
    this.updatePages(filteredOffers);
    this.setState({filteredOffers: filteredOffers});
  };

  render() {
    const allOffers =
      this.state.filteredOffers.length > 0
        ? this.state.filteredOffers
        : this.state.allOffers;
    const offersToRender = [...allOffers].splice((this.state.page - 1) * 5, 5);

    return (
      <div className={classes.LastMinuteList}>
        <LastMinFilters
          countries={this.state.countries}
          transport={this.state.transport}
          types={this.state.types}
          filterByWhere={this.filterByWhereHandler}
          filterByType={this.filterByTypeHandler}
          filterByTransport={this.filterByTransportHandler}
          filterByStartDate={this.filterByStartDateHandler}
          filterByEndDate={this.filterByEndDateHandler}
          filterByGuests={this.filterByGuestsHandler}
          clearFilters={this.clearFilters}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
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

export default LastMinuteOffersList;
