import React from "react";
import classes from "./LastMinuteOffer.module.scss";
import {Link } from 'react-router-dom';
import ImageModal from '../../../../../UI/ImageModal/ImageModal';

const LastMinuteOffer = (props) => {
  return (
    <div className={classes.LastMinuteOffer}>
      <div className={classes.ImageZoom}>
        <img
          src={''}
          alt={''}
          onClick={this.openGalleryHandler}
        />
      </div>
    
      <div className={classes.Pricing}>
        <p style={{textAlign: "end", marginBottom: "0", paddingTop: "15%"}}>
          Price from <br />
          <span
            style={{
              fontSize: "1.8em",
              color: "#cd0000",
              marginTop: "0.5em",
            }}
          >
            {this.props.model.price}$ / 24h
          </span>
        </p>
        <span>
          <Link
            to={`/lasMinute/${props.offerID}`}
          >
            <button>Details</button>
          </Link>
        </span>
      </div>

      {this.state.galleryIsOpen ? (
        <ImageModal
          mainPhoto={''}
          showModal={this.openGalleryHandler}
          photos={this.props.model["photos"]}
        />
      ) : null}
    </div>
  );
};

export default LastMinuteOffer;
