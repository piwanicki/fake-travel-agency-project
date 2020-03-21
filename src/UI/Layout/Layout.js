import React, { Component } from 'react';
import classes from './Layout.module.css'
import NavigationHeader from '../../components/Navigation/NavigationHeader/NavigationHeader';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import OffersContainer from '../../components/OffersContainer/OffersContainer';
import Offers from '../../components/OffersContainer/Offers';


class Layout extends Component {

  render() {
    return (
      <div className={classes.Layout}>
        <NavigationHeader />
        <SearchPanel />
        <OffersContainer offers={Offers}/>
        {this.props.children}
      </div>
    )
  }
}

export default Layout;
