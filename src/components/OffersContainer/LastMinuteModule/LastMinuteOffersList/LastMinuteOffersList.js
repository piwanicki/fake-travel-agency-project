import React, { Component } from 'react'
import classes from './LastMinuteOffersList.module.scss'
import { LastMinuteData } from '../LastMinuteOffersData'
import LastMinFilters from './LastMinFilters/LastMinFilters'
import LastMinuteOffer from './LastMinuteOffer/LastMinuteOffer'
import ListComponent from '../../../../UI/ListComponent/ListComponent'

class LastMinuteOffersList extends Component {
  state = {
    allOffers: [],
    countries: Object.keys(LastMinuteData),
    page: 1,
    pages: 0,
    pageIndex: 0
  }

  componentDidMount = () => {
    const lastMinuteOffers = Object.keys(LastMinuteData)
    const offers = lastMinuteOffers.map((offer, index) => (
      <LastMinuteOffer offer={LastMinuteData[offer]} key={index} />
    ))
    const offersToRender = [...offers].splice(0, 5)
    const pages = Math.ceil(lastMinuteOffers.length / 5)
    this.setState({
      allOffers: offers,
      pages: pages,
      offersToRender: offersToRender
    })
  }

  sortByKey = (key, array) => {
    return array.sort((a, b) => {
      const val1 = a[key]
      const val2 = b[key]
      return val1 < val2 ? -1 : val1 > val2 ? 1 : 0
    })
  }

  sortByPrice = (how, array) => {
    return array.sort((a, b) => {
      const offer1 = a.price
      const offer2 = b.price
      let sorted
      if (how === 'ascending')
        sorted = offer1 < offer2 ? -1 : offer1 > offer2 ? 1 : 0
      if (how === 'descending')
        sorted = offer1 > offer2 ? -1 : offer1 < offer2 ? 1 : 0
      return sorted
    })
  }

  filterList = e => {
    const dataSetVal = Object.values(e.target.dataset)
    const method = dataSetVal[0]
    const methodValue = e.target.value
    let outputList = []
    const allModels = [...this.state.allModels]
    const filterModels = [...this.state.filterModels]

    if (method === 'sorting') {
      const arrayToSort =
        this.state.filterModels.length > 0 ? filterModels : allModels
      switch (methodValue) {
        case 'alphabetical': {
          outputList = this.sortByKey('key', arrayToSort)
          console.log(outputList)

          this.state.filterModels.length > 0
            ? this.setState({ filterModels: outputList })
            : this.setState({ allModels: outputList })
          break
        }

        case 'price ascending': {
          console.log(`price ascending`)
          outputList = this.sortByPrice('ascending', arrayToSort)
          this.state.filterModels.length > 0
            ? this.setState({ filterModels: outputList })
            : this.setState({ allModels: outputList })
          break
        }

        case 'price descending': {
          console.log(`price descending`)
          outputList = this.sortByPrice('descending', arrayToSort)
          this.state.filterModels.length > 0
            ? this.setState({ filterModels: outputList })
            : this.setState({ allModels: outputList })
          break
        }

        default: {
          this.setState({ filterModels: [] })
        }
      }
    } else {
      switch (method) {
        case 'vehicleBrand': {
          outputList = allModels.filter(car => car.props.brand === methodValue)
          this.setState({ filterModels: outputList })
          break
        }

        case 'vehicle': {
          console.log(`switch vehicle`)
          console.log(methodValue)
          outputList = allModels.filter(
            car => car.props['model'].vehicle === methodValue
          )
          this.setState({ filterModels: outputList })
          break
        }

        case 'vehicleType': {
          outputList = allModels.filter(
            car => car.props['model'].type === methodValue
          )
          this.setState({ filterModels: outputList })
          break
        }

        default: {
          this.setState({ filterModels: [] })
        }
      }
    }
  }

  clearFilters = () => {
    console.log(`clear filters`)
  }

  selectPageHandler = e => {
    const page = e.target.innerHTML !== '' ? parseInt(e.target.innerHTML) : null
    if (page && page !== this.state.page) {
      this.setState({ page: page })
      this.addActivePageClass(page)
    }
  }

  addActivePageClass = page => {
    const activePage = document.querySelector(`#page-${this.state.page}`)
    const nextActivePage = document.querySelector(`#page-${page}`)
    activePage.classList.remove('activePage')
    nextActivePage.classList.add('activePage')
  }

  nextPageHandler = () => {
    const page = this.state.page
    if (page === this.state.pages) return
    this.addActivePageClass(page + 1)
    this.setState({ page: page + 1 })
  }

  previousPageHandler = () => {
    const page = this.state.page
    if (page === 1) return
    this.addActivePageClass(page - 1)
    this.setState({ page: page - 1 })
  }

  filterByWhereHandler = val => {
    console.log(val)
  }

  filterByTypeHandler = val => {
    console.log(val)
  }

  filterByTransportHandler = val => {
    console.log(val)
  }

  filterByStartDateHandler = val => {
    console.log(val)
  }

  filterByEndDateHandler = val => {
    console.log(val)
  }

  render () {
    const allOffers = this.state.allOffers
    const offersToRender = [...allOffers].splice((this.state.page - 1) * 5, 5)

    return (
      <div className={classes.LastMinuteList}>
        <LastMinFilters
          countries={this.state.countries}
          filterByWhere={this.filterByWhereHandler}
          filterByType={this.filterByTypeHandler}
          filterByTransport={this.filterByTransportHandler}
          filterByStartDate={this.filterByStartDateHandler}
          filterByEndDate={this.filterByEndDateHandler}
          clearFilters={this.clearFilters}
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
    )
  }
}

export default LastMinuteOffersList
