import React from "react";
import classes from "./CarRentForm.module.scss";
import CustomSelect from "../../../../../../../UI/CustomSelect/CustomSelect";

const CarRentForm = (props) => {
  return (
    <div className={classes.CarRentForm}>
      <p>
        Please fill the rent form and accept rules to complete the process...
      </p>

      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Surname" />
      <div className={classes.Dates}>
        <span>
          From :
          <input type="date" />
        </span>
        <span>
          To :
          <input type="date" />
        </span>
      </div>

      <input type="time" placeholder="Start" />
      <input type="time" placeholder="End" />

      <CustomSelect description="Location">
        <option>Somewhere1</option>
        <option>Somewhere2</option>
        <option>Somewhere3</option>
        <option>Somewhere4</option>
      </CustomSelect>

      <input type="checkbox" />

      <button type="submit"> Rent</button>
    </div>
  );
};

export default CarRentForm;
