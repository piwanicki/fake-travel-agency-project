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
import LastMinuteOffersList from "../../components/OffersContainer/LastMinuteModule/LastMinuteOffersList/LastMinuteOffersList";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {
  getWeathers,
  getWeathersPending,
  getWeathersError,
} from "../../reducers/reducers";
import fetchWeathersHandler from "../../actions/fetchWeathers";

class Layout extends Component {
  state = {
    showDemoAlert: false,
  };

  componentDidMount = () => {
   //const {fetchWeathers} = this.props;
   //fetchWeathers();
  };

  showDemoAlertHandler = () => {
    const isShowing = this.state.showDemoAlert;
    this.setState({showDemoAlert: !isShowing});
  };

  render() {
    return (
      <div className={classes.Layout}>
        {this.state.showDemoAlert ? (
          <DemoAlert onClick={this.showDemoAlertHandler} />
        ) : null}

        <NavigationHeader />
        <Wrapper>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route
              exact
              path="/:offer/offerDetails/:city"
              component={OfferDetails}
            />
            <Route exact path="/offerServices/cars" component={Cars} />
            <Route exact path="/lastMinute" component={LastMinuteOffersList} />
            <Route
              exact
              path="/:offer/offerDetails/:city"
              component={OfferDetails}
            />
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

const mapStateToProps = (state) => ({
  error: getWeathersError(state),
  weathers: getWeathers(state),
  pending: getWeathersPending(state),
});

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchWeathers: () => dispatch(fetchWeathersHandler),
//   }
// }

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchWeathers: fetchWeathersHandler,
    },
    dispatch
  );

//export default Layout;
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
