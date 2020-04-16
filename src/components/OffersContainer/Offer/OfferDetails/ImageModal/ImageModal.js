import React from "react";
import classes from "./ImageModal.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ImageModal = (props) => {
  const leftArrowClass = [classes.Arrow, classes.Left].join(" ");
  const rightArrowClass = [classes.Arrow, classes.Right].join(" ");

  return (
    <div className={classes.ImageModal}>
      <div className={classes.ImageControls}>
        <span className={leftArrowClass} onClick={props.previousImage}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </span>
        <img
          className={classes.MainImage}
          src={props.mainImage}
          alt={`main`}
        ></img>
        <FontAwesomeIcon
          icon={faTimes}
          className={classes.ClosingBtn}
          onClick={props.showModal}
        />
        <span className={rightArrowClass} onClick={props.nextImage}>
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      </div>

      <div className={classes.ImagesList}>
        <ul>{props.photos}</ul>
      </div>
    </div>
  );
};

export default ImageModal;
