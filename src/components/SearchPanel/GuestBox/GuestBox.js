import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import classes from "./GuestBox.module.scss";
import { connect } from "react-redux";

class GuestBox extends Component {
  // state = {
  //   adults: 0,
  //   kids: 0
  // };

  // addAdultHandler = () => {
  //   const adults = this.state.adults;
  //   this.setState({
  //     adults: adults + 1
  //   });
  // };

  // removeAdultHandler = () => {
  //   const adults = this.state.adults;
  //   if (adults > 0) this.setState({ adults: adults - 1 });
  // };

  // addKidHandler = () => {
  //   const kids = this.state.kids;
  //   this.setState({
  //     kids: kids + 1
  //   });
  // };

  // removeKidHandler = () => {
  //   const kids = this.state.kids;
  //   if (kids > 0) this.setState({ kids: kids - 1 });
  // };

  render() {
    return (
      <div className={classes.GuestBox} style={{ margin: "1em auto" }}>
        <p>Guests</p>
        <div>
          <span>
            <p>Adult</p>
          </span>
          <FontAwesomeIcon
            icon={faPlusSquare}
            onClick={this.props.addAdultHandler}
          />
          <p>{this.props.adults}</p>
          <FontAwesomeIcon
            icon={faMinusSquare}
            onClick={this.props.removeAdultHandler}
          />
        </div>

        <div>
          <span>
            <p>Kids</p>
          </span>
          <FontAwesomeIcon
            icon={faPlusSquare}
            onClick={this.props.addKidHandler}
          />
          <p>{this.props.kids}</p>
          <FontAwesomeIcon
            icon={faMinusSquare}
            onClick={this.props.removeKidHandler}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    adults: state.adults,
    kids: state.kids
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAdultHandler: () => dispatch({ type: "ADD_ADULT" }),
    removeAdultHandler: () => dispatch({ type: "REMOVE_ADULT" }),
    addKidHandler: () => dispatch({ type: "ADD_KID" }),
    removeKidHandler: () => dispatch({ type: "REMOVE_KID" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GuestBox);
