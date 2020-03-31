import React, { Component } from "react";
import classes from "./Layout.module.css";
import NavigationHeader from "../../components/Navigation/NavigationHeader/NavigationHeader";
import ContactInfoBar from "../../components/ContactInfoBar/ContactInfoBar";
import Footer from "../../components/Navigation/Footer/Footer";
import MainPage from "../../components/MainPage/MainPage";
import { Switch, Route, Redirect } from "react-router-dom";
import OfferDetails from "../../components/OffersContainer/Offer/OfferDetails/OfferDetails";

class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <NavigationHeader />

        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/offerDetails/:city" component={OfferDetails} />
          <Redirect from="/" to="/" />
        </Switch>

        <ContactInfoBar />
        <Footer />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
