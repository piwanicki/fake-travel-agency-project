import React, {Component} from "react";
import classes from "./Layout.module.scss";
import NavigationHeader from "../../components/Navigation/NavigationHeader/NavigationHeader";
import ContactInfoBar from "../../components/ContactInfoBar/ContactInfoBar";
import Footer from "../../components/Navigation/Footer/Footer";
import MainPage from "../../components/MainPage/MainPage";
import {Switch, Route, Redirect} from "react-router-dom";
import OfferDetails from "../../components/OffersContainer/Offer/OfferDetails/OfferDetails";
import Cars from "../../components/OffersContainer/OffersServices/Cars/Cars";
import CarOfferDetails from "../../components/OffersContainer/OffersServices/Cars/CarOffer/CarOfferDetails/CarOfferDetails";
import DemoAlert from "../DemoAlert/DemoAlert";
import Wrapper from "./Wrapper/Wrapper";

class Layout extends Component {
  state = {
    showDemoAlert: true,
  };

  showDemoALertHandler = () => {
    const isShowing = this.state.showDemoAlert;
    this.setState({showDemoAlert: !isShowing});
  };

  render() {
    return (
      <div className={classes.Layout}>
        {this.state.showDemoAlert ? (
          <DemoAlert onClick={this.showDemoALertHandler} />
        ) : null}

        <NavigationHeader />
        <Wrapper>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/offerDetails/:city" component={OfferDetails} />
            <Route exact path="/offerServices/cars" component={Cars} />
            <Route
              exact
              path="/offerServices/cars/:carBrand/:carModel"
              component={CarOfferDetails}
            />

            <Redirect from="/" to="/" />
          </Switch>

          <ContactInfoBar />
          <Footer />
        </Wrapper>

        {this.props.children}
      </div>
    );
  }
}

export default Layout;
