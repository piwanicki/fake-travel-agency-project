import React from 'react'
import classes from './SummerOffer.module.scss'
import LoadingSpinner from '../../../../UI/LoadingSpinner/LoadingSpinner'
import { RootReducer } from '../../../../index'
import { connect } from 'react-redux'

interface IProps {
  price: number
  oldPrice: number
  country: string
  discount: number
}

interface MapStateToPropsTypes {
  weathers: Map<String, any>
  city: string
  isFetching: boolean
}

const SummerOffer: React.FC<IProps & MapStateToPropsTypes> = props => {
  const { country, price, discount } = props
  let weatherIconUrl: string = ''
  let weatherDegree: number | undefined
  if (localStorage.getItem('Madrid') !== null) {
    // weatherIconUrl = props.weathers.get(props.city).current.weather_icons[0]
    // weatherDegree = props.weathers.get(props.city).current.temperature
    const weatherJson = JSON.parse(localStorage.getItem('Madrid')!)
    weatherIconUrl = weatherJson.current.weather_icons[0]
    weatherDegree = weatherJson.current.temperature
  }

  return (
    <div className={classes.SummerOffer}>
      <div className={classes.ImgContainer}>
        <img
          src={`images/summerOffers/${country}.jpg`}
          alt={`summer offer ${country}`}
        />
      </div>

      <div className={classes.SummerOfferDetailsBox}>
        <div>
          <h3>{country}</h3>
        </div>
        <div className={classes.WeatherBox}>
          {props.isFetching ? (
            <LoadingSpinner />
          ) : (
            <>
              <img src={weatherIconUrl} alt='weather' />
              <h3>{weatherDegree} &#186; C</h3>
            </>
          )}
        </div>
        <div>
          <span>-{discount}</span>
          <p>{price}</p>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootReducer) => {
  return {
    weathers: state.weather.weathers,
    IsFetching: state.weather.isFetching
  }
}

export default connect(mapStateToProps, null)(SummerOffer)
