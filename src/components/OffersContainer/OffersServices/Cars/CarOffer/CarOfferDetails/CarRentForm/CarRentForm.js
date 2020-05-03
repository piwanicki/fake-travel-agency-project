import React from 'react';
import classes from './CarRentForm.module.scss';

const CarRentForm = props => {
  return (
    <div className={classes.CarRentForm}>

      
      <input type='text' placeholder='Name'/>
      <input type='text' placeholder='Surname'/>
      <select>
        
      </select>

          <div className={classes.Dates}>
              Date :
              <span>
                From :
                <input type="date" />
              </span>
              <span>
                To :
                <input type="date" />
              </span>
            </div>
    </div>
  )
}

export default CarRentForm;