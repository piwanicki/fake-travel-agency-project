import React from 'react'
import classes from './RecommendedOffer.module.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingSpinner from '../../../UI/LoadingSpinner/LoadingSpinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { RootReducer } from '../../../index'

interface IProps {
  country: string
  date: string
  from: string
  to: string
  city: string
  price: number
  cntrImgUrl: string
}

interface MapStateToPropsTypes {
  weathers: Map<String, any>
  isFetching: boolean
}

const RecommendedOffer: React.FC<IProps & MapStateToPropsTypes> = props => {
  let weatherIconUrl: string = ''
  let weatherDegree: number | undefined
  if (props.weathers.get(props.city) !== undefined) {
    weatherIconUrl = props.weathers.get(props.city).current.weather_icons[0]
    weatherDegree = props.weathers.get(props.city).current.temperature
  }

  return (
    <div className={classes.RecommendedOffer}>
      <div className={classes.ImgContainer}>
        <Link to={`recommended/offerDetails/${props.city}`}>
          <img
            src={`images/${props.cntrImgUrl}`}
            alt={`${props.city} landscape`}
          />
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <div>
              <h3>{props.country}</h3>
              <p>
                <strong>{props.city}</strong>
              </p>
              <h2>{props.price}</h2>
            </div>
          </li>
          <li className={classes.WeatherBox}>
            {props.isFetching ? (
              <LoadingSpinner />
            ) : (
              <>
                <img src={weatherIconUrl} alt='weather' />
                <h3>{weatherDegree} &#186; C</h3>
              </>
            )}
          </li>
          <li className={classes.DateBox}>
            <span>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </span>
            <span>
              <p>{props.from}</p>
              <p>{props.to}</p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootReducer) => {
  return {
    weathers: state.weather.weathers,
    isFetching: state.weather.isFetching
  }
}

export default connect(mapStateToProps, null)(RecommendedOffer)
