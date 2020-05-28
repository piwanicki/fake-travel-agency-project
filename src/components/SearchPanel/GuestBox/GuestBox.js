import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusSquare, faMinusSquare} from "@fortawesome/free-solid-svg-icons";
import classes from "./GuestBox.module.scss";
// import { connect } from "react-redux";

class GuestBox extends Component {
  state = {
    adults: 2,
    kids: 0,
  };

  addAdultHandler = () => {
    const adults = this.state.adults;
    this.setState({
      adults: adults + 1,
    });
  };

  removeAdultHandler = () => {
    const adults = this.state.adults;
    if (adults > 0) this.setState({adults: adults - 1});
  };

  addKidHandler = () => {
    const kids = this.state.kids;
    this.setState({
      kids: kids + 1,
    });
  };

  removeKidHandler = () => {
    const kids = this.state.kids;
    if (kids > 0) this.setState({kids: kids - 1});
  };

  render() {
    const customDivStyle = this.props.customDivStyle;

    return (
      <div className={classes.GuestBox} style={this.props.customStyle}>
        <div>Guests</div>
        <div style={customDivStyle}>
          <span>
            <p>Adult</p>
          </span>
          <FontAwesomeIcon icon={faPlusSquare} onClick={this.addAdultHandler} />
          <p>{this.state.adults}</p>
          <FontAwesomeIcon
            icon={faMinusSquare}
            onClick={this.removeAdultHandler}
          />
        </div>

        <div style={customDivStyle}>
          <span>
            <p>Kids</p>
          </span>
          <FontAwesomeIcon icon={faPlusSquare} onClick={this.addKidHandler} />
          <p>{this.state.kids}</p>
          <FontAwesomeIcon
            icon={faMinusSquare}
            onClick={this.removeKidHandler}
          />
        </div>
      </div>
    );
  }
}
export default GuestBox;

// const mapStateToProps = state => {
//   return {
//     adults: state.adults,
//     kids: state.kids
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     addAdultHandler: () => dispatch({ type: "ADD_ADULT" }),
//     removeAdultHandler: () => dispatch({ type: "REMOVE_ADULT" }),
//     addKidHandler: () => dispatch({ type: "ADD_KID" }),
//     removeKidHandler: () => dispatch({ type: "REMOVE_KID" })
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(GuestBox);
