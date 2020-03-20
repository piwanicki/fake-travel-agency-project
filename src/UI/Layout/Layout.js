import React, { Component } from 'react';
import classes from './Layout.module.css'
import NavigationHeader from '../../components/Navigation/NavigationHeader/NavigationHeader';
import SearchPanel from '../../components/SearchPanel/SearchPanel';



class Layout extends Component {

  render() {
    return (
      <div className={classes.Layout}>
        <NavigationHeader />
        <SearchPanel />

        {this.props.children}
      </div>
    )
  }
}

export default Layout;
