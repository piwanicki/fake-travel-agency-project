import React from 'react'
import classes from './DetailsUserMenu.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import DatePicker from 'react-datepicker'
import SelectSearch from 'react-select-search'
import { fromOptions, roomOptions, mealOptions } from './SelectOptions'
import GuestBox from '../../../../SearchPanel/GuestBox/GuestBox'
import Offers from '../../../../OffersContainer/Offers'
import { connect } from 'react-redux'
import { RootReducer } from '../../../../../index'
import CustomButton from '../../../../../UI/CustomButton/CustomButton'

interface IProps {
  startDate: Date
  endDate: Date
  offerDetails: Offers
  startDateHandleChange: () => void
  endDateHandleChange: () => void
}

interface MapStateToPropsTypes {
  adults: number
  kids: number
}

const DetailsUserMenu: React.FC<IProps & MapStateToPropsTypes> = props => {
  const {
    startDate,
    startDateHandleChange,
    endDate,
    endDateHandleChange,
    offerDetails,
    adults,
    kids
  } = props

  const bookHandler = () => {
    console.log(`Redirecting to Booking...`)
  }
  return (
    <div className={classes.DetailsUserMenu}>
      <div className={classes.Dates}>
        <div className={classes.DatePickerBox}>
          <FontAwesomeIcon icon={faCalendarAlt} />
          Start
          <DatePicker
            selected={startDate}
            onChange={startDateHandleChange}
            placeholderText='Start Date'
            className={classes.DatePicker}
          />
        </div>
        <div className={classes.DatePickerBox}>
          <FontAwesomeIcon icon={faCalendarAlt} />
          End
          <DatePicker
            selected={endDate}
            onChange={endDateHandleChange}
            placeholderText='End Date'
            className={classes.DatePicker}
          />
        </div>
      </div>
      <GuestBox customStyle={{ color: 'black' }} />
      <div className={classes.CustomOptions}>
        <span>From: </span>
        <SelectSearch options={fromOptions} />
        <br />
        <span>Room: </span>
        <SelectSearch options={roomOptions} />
        <br />
        <span>Meal: </span>
        <SelectSearch options={mealOptions} />
      </div>

      <div className={classes.PricingDetails}>
        <div>
          Adult <p>{offerDetails.price} $</p>
        </div>
        <div>
          Kid <p>{offerDetails.kidPrice} $</p>
        </div>

        <div className={classes.SummaryPrice}>
          <span>Summary</span>
          <p>
            {`${adults * offerDetails.price + kids * offerDetails.kidPrice} $`}
          </p>
        </div>
      </div>
      <CustomButton onClick={bookHandler} disabled={false}>
        Book
      </CustomButton>
    </div>
  )
}

const mapStateToProps = (state: RootReducer) => {
  return {
    adults: state.guests.adults,
    kids: state.guests.kids
  }
}

export default connect(mapStateToProps, null)(DetailsUserMenu)
