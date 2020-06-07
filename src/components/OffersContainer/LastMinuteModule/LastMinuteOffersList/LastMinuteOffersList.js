import React, { Component } from 'react'
import classes from './LastMinuteOffersList.module.scss'
import { LastMinuteData } from '../LastMinuteOffersData'
import LastMinFilters from './LastMinFilters/LastMinFilters'
import LastMinuteOffer from './LastMinuteOffer/LastMinuteOffer'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'

const ListSitesDiv = styled.div`
  border-top: 2px solid grey;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;

  svg {
    margin: 0 1em;
    cursor: pointer;
    font-size: 1.5em;

    &:hover {
      transform: scale(1.2);
    }
  }

  span {
    margin: 0 0.5em;
    font-size: 1.3em;
    cursor: pointer;
  }

  .activePage {
    color: blue;
    border-bottom: 2px solid blue;
  }
`

class LastMinuteOffersList extends Component {
  state = {
    allOffers: [],
    countries: Object.keys(LastMinuteData),
    page: 1,
    pages: null,
    pageIndex: 0
  }

  componentDidMount = () => {
    const lastMinuteOffers = Object.keys(LastMinuteData)
    const offers = lastMinuteOffers.map((offer, index) => (
      <LastMinuteOffer offer={LastMinuteData[offer]} key={index} />
    ))

    const offersToRender = [...offers].splice(0, 5)
    let listPages = []
    const pages = Math.ceil(offers.length / 5)
    for (let i = 0; i < pages; i++) {
      listPages.push(
        <span key={i} id={`page-${i + 1}`}>
          {i + 1}
        </span>
      )
    }
    console.log(listPages[0])
    // listPages[0].classList.add('activePage');
    this.setState({
      allOffers: offers,
      pages: listPages.splice(0, 5),
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
    // document
    //   .querySelectorAll("#styledSelect1")
    //   .forEach((select) => (select.selectedIndex = 0));
    // this.setState({filterModels: []});
  }

  selectPageHandler = e => {
    console.log(e.target)
    const page = e.target.innerHTML !== '' ? parseInt(e.target.innerHTML) : null
    if (page) {
      const allOffers = this.state.allOffers
      const offersToRender = [...allOffers].splice((page - 1) * 5, 5)
      this.setState({ offersToRender: offersToRender })
      const activePage = document.getElementById(`page-${page}`)
      console.log(activePage)
      activePage.classList.add('activePage')
    }
  }

  render () {
    return (
      <div className={classes.LastMinuteList}>
        <LastMinFilters countries={this.state.countries} />
        {this.state.offersToRender}
        <ListSitesDiv>
          <div
            className='listControls'
            onClick={e => this.selectPageHandler(e)}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
            {this.state.pages}
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </ListSitesDiv>
      </div>
    )
  }
}

export default LastMinuteOffersList
