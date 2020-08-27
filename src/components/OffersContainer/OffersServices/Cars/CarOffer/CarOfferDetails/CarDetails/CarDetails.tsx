import React from 'react'
import classes from './CarDetails.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench, faGasPump } from '@fortawesome/free-solid-svg-icons'
import CarsOffers from '../../../CarsOffers'
import CustomButton from '../../../../../../../UI/CustomButton/CustomButton'

interface IProps {
  car: CarsOffers
  brand: string
  carLogo: string
}

const CarDetails: React.FC<IProps> = props => {
    
  const car = props.car
  const carDetails = car.details

  const rentHandler = () => {
    console.log(`Redirecting to Renting`)
  }

  return (
    <div className={classes.CarDetailsContainer}>
      <img
        src={props.carLogo}
        alt={props.carLogo}
        className={classes.BrandLogo}
        style={{ marginTop: '1em' }}
      />
      <span style={{ textAlign: 'center' }}>
        <p
          style={{
            fontSize: '2em',
            marginTop: '0',
            marginBottom: '0.2em',
            color: '#000066'
          }}
        >
          {props.brand}
        </p>
        <span style={{ fontSize: '1.5em', color: '#cd0000' }}>
          {car.model}
        </span>
      </span>

      <table>
        <tbody>
          <tr>
            <th colSpan={2}>
              <FontAwesomeIcon icon={faWrench} /> Specification
            </th>
          </tr>

          {carDetails.map((detail, index) => {
            const separateDetail = detail.split(':')
            return (
              <tr key={index}>
                <td>{separateDetail[0]}</td>
                <td>{separateDetail[1]}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <th colSpan={2}>
              <FontAwesomeIcon icon={faGasPump} /> Fuel consumption
            </th>
          </tr>
          {car.fuelConsumption.map((cons, index) => {
            const separateDetail = cons.split(':')
            return (
              <tr key={index}>
                <td>{separateDetail[0]}</td>
                <td>{separateDetail[1]}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <CustomButton onClick={rentHandler} disabled={false}>Rent</CustomButton>
    </div>
  )
}

export default CarDetails;