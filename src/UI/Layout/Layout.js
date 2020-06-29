import React, {Component} from "react";
import classes from "./Layout.module.scss";
import NavigationHeader from "../../components/Navigation/NavigationHeader/NavigationHeader";
import ContactInfoBar from "../../components/ContactInfoBar/ContactInfoBar";
import Footer from "../../components/Navigation/Footer/Footer";
import MainPage from "../../components/MainPage/MainPage";
import {Switch, Route, Redirect} from "react-router-dom";
import OfferDetails from "../../components/OffersContainer/Offer/OfferDetails/OfferDetails";
import CarsList from "../../components/OffersContainer/OffersServices/Cars/CarsList";
import CarOfferDetails from "../../components/OffersContainer/OffersServices/Cars/CarOffer/CarOfferDetails/CarOfferDetails";
import DemoAlert from "../DemoAlert/DemoAlert";
import Wrapper from "./Wrapper/Wrapper";
import LastMinuteOffersList from "../../components/OffersContainer/LastMinuteModule/LastMinuteOffersList/LastMinuteOffersList";
import {connect} from "react-redux";
import {
  getWeathers,
  getIsFetching,
  getWeathersError,
} from "../../reducers/weathers";
import {chekWeathersState} from "../../actions/fetchWeathers";
import {chekAuthState} from "../../actions/auth";
import SignUpForm from "../../components/Auth/SingUpForm";
import SignInForm from "../../components/Auth/SignInForm";
import UserPanel from "../../components/Auth/UserPanel";

class Layout extends Component {
  state = {
    showDemoAlert: false,
  };
  showDemoAlertHandler = () => {
    const isShowing = this.state.showDemoAlert;
    this.setState({showDemoAlert: !isShowing});
  };

  componentDidMount = () => {
    this.props.chekWeathersState();
    //this.props.fetchWeathers();
    this.props.onTryAutoLogin();
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
            <Route exact path="/offerServices/cars" component={CarsList} />
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

            <Route path="/Login/SignUp" component={SignUpForm} />

            <Route path="/Login/SignIn" component={SignInForm} />
            {this.props.userLogged ? (
              <Route path="/userPanel/:content" component={UserPanel} exact/>
            ) : <Redirect to='/' />}
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
  pending: getIsFetching(state),
  userLogged: state.auth.userLogged,
});

const mapDispatchToProps = (dispatch) => {
  return {
    //fetchWeathers: () => dispatch(fetchWeathersHandler()),
    onTryAutoLogin: () => dispatch(chekAuthState()),
    chekWeathersState: () => dispatch(chekWeathersState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
