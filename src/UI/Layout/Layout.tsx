import * as React from 'react'
import classes from './Layout.module.scss'
import NavigationHeader from '../../components/Navigation/NavigationHeader/NavigationHeader'
import ContactInfoBar from '../../components/ContactInfoBar/ContactInfoBar'
import Footer from '../../components/Navigation/Footer/Footer'
import MainPage from '../../components/MainPage/MainPage'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import DemoAlert from '../DemoAlert/DemoAlert'
import Wrapper from './Wrapper/Wrapper'
import { connect } from 'react-redux'
import {
  getWeathers,
  getIsFetching,
  getWeathersError
} from '../../reducers/weathers'
import { chekWeathersState } from '../../actions/fetchWeathers'
import { chekAuthState } from '../../actions/auth'
import asyncComponent from '../../containers/asyncComponent'
import { RootReducer } from '../..'

// lazy loading
const asyncLastMinuteOffersList = asyncComponent(() => {
  return import(
    '../../components/OffersContainer/LastMinuteModule/LastMinuteOffersList/LastMinuteOffersList'
  )
})
const asyncCarsList = asyncComponent(() => {
  return import('../../components/OffersContainer/OffersServices/Cars/CarsList')
})
const asyncCarOfferDetails = asyncComponent(() => {
  return import(
    '../../components/OffersContainer/OffersServices/Cars/CarOffer/CarOfferDetails/CarOfferDetails'
  )
})
const asyncOfferDetails = asyncComponent(() => {
  return import(
    '../../components/OffersContainer/Offer/OfferDetails/OfferDetails'
  )
})
const asyncUserPanel = asyncComponent(() => {
  return import('../../components/Auth/UserPanel')
})
const asyncSignUpForm = asyncComponent(() => {
  return import('../../components/Auth/SingUpForm')
})
const asyncSignInForm = asyncComponent(() => {
  return import('../../components/Auth/SignInForm')
})

interface MapStateToPropsTypes {
  error: string
  weathers: any
  pending: boolean
  userLogged: boolean
}

interface MapDispatchToPropsTypes {
  chekWeathersState: () => void
  onTryAutoLogin: () => void
}

interface IProps {
  // Component Props
}

interface IState {
  showDemoAlert: boolean
}

class Layout extends React.Component<
  IProps & MapStateToPropsTypes & MapDispatchToPropsTypes,
  IState
> {
  state: IState = {
    showDemoAlert: true
  }

  showDemoAlertHandler = () => {
    this.setState(previousState => ({
      showDemoAlert: !previousState.showDemoAlert
    }))
  }

  componentDidMount = () => {
    this.props.chekWeathersState()
    this.props.onTryAutoLogin()
  }

  render () {
    return (
      <div className={classes.Layout}>
        {this.state.showDemoAlert ? (
          <DemoAlert onClick={this.showDemoAlertHandler} />
        ) : null}

        <NavigationHeader />
        <Wrapper>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/offerServices/cars' component={asyncCarsList} />
            <Route
              exact
              path='/lastMinute'
              component={asyncLastMinuteOffersList}
            />
            <Route
              exact
              path='/:offer/offerDetails/:city'
              component={asyncOfferDetails}
            />
            <Route
              exact
              path='/offerServices/cars/:carBrand/:carModel'
              component={asyncCarOfferDetails}
            />
            <Route path='/Login/SignUp' component={asyncSignUpForm} />
            <Route path='/Login/SignIn' component={asyncSignInForm} />
            {this.props.userLogged ? (
              <Route
                path='/userPanel/:content'
                component={asyncUserPanel}
                exact
              />
            ) : (
              <Redirect to='/' />
            )}
            <Redirect to='/' />
          </Switch>

          <ContactInfoBar />
          <Footer />
        </Wrapper>

        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state: RootReducer) => ({
  error: getWeathersError(state),
  weathers: getWeathers(state),
  pending: getIsFetching(state),
  userLogged: state.auth['userLogged']
})

const mapDispatchToProps = (dispatch: any) => {
  return {
    //fetchWeathers: () => dispatch(fetchWeathersHandler()),
    onTryAutoLogin: () => dispatch(chekAuthState()),
    chekWeathersState: () => dispatch(chekWeathersState())
  }
}

export default withRouter(
  connect<MapStateToPropsTypes, MapDispatchToPropsTypes, IProps, RootReducer>(
    mapStateToProps,
    mapDispatchToProps
  )(Layout)
)
