import React, {Component} from 'react';
import classes from './CustomGuestBox.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusSquare, faMinusSquare} from "@fortawesome/free-solid-svg-icons";

class CustomGuestBox extends Component {

  render() {
    const customDivStyle = this.props.customDivStyle;
    return (
      <div className={classes.CustomGuestBox} style={this.props.customStyle}>
        <div>Guests</div>
        <div style={customDivStyle}>
          <span>
            <p>Adult</p>
          </span>
          <FontAwesomeIcon icon={faPlusSquare} onClick={this.props.customAddAdultHandler} />
          <p>
            {this.props.adults}
          </p>
          <FontAwesomeIcon icon={faMinusSquare} onClick={this.props.customRmAdultHandler} />
        </div>

        <div style={customDivStyle}>
          <span>
            <p>Kids</p>
          </span>
          <FontAwesomeIcon icon={faPlusSquare} onClick={this.props.customAddKidHandler} />
          <p>
            {this.props.kids}
          </p>
          <FontAwesomeIcon icon={faMinusSquare} onClick={this.props.customRmKidHandler} />
        </div>
      </div>
    );
  }
}
export default CustomGuestBox;