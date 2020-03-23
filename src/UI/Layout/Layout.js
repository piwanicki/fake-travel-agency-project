import React, { Component } from 'react';
import classes from './Layout.module.css'
import NavigationHeader from '../../components/Navigation/NavigationHeader/NavigationHeader';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import OffersContainer from '../../components/OffersContainer/OffersContainer';
import Offers from '../../components/OffersContainer/Offers';
import OffersServices from '../../components/OffersContainer/OffersServices/OffersServices';
import Underline from '../Underline/Underline';
import SummerOffers from '../../components/OffersContainer/SummerOffers/SummerOffers';
import InspirationOffers from '../../components/InspirationSection/InspirationOffers/InspirationOffers'
import NewsContainer from '../../components/NewsSection/NewsContainer/NewsContainer';

class Layout extends Component {

  render() {
    return (
      <div className={classes.Layout}>
        <NavigationHeader />
        <SearchPanel />
        <OffersContainer offers={Offers}/>
        <Underline />
        <OffersServices />
        <Underline />
        <SummerOffers />
        <Underline />
        <InspirationOffers />
        <NewsContainer />
        {this.props.children}
      </div>
    )
  }
}

export default Layout;
