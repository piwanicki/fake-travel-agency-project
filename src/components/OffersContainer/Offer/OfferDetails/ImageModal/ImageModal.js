import React, {Component} from "react";
import classes from "./ImageModal.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

class ImageModal extends Component {
  componentDidMount = () => {
    document.body.style.overflow = "hidden";
  };

  componentWillUnmount = () => {
    document.body.style.overflow = "";
  };

  render() {
    const leftArrowClass = [classes.Arrow, classes.Left].join(" ");
    const rightArrowClass = [classes.Arrow, classes.Right].join(" ");

    return (
      <div className={classes.ImageModal}>
        <div className={classes.ImageControls}>
          <span className={leftArrowClass} onClick={this.props.previousImage}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </span>
          <img
            className={classes.MainImage}
            src={this.props.mainImage}
            alt={`main`}
          ></img>
          <FontAwesomeIcon
            icon={faTimes}
            className={classes.ClosingBtn}
            onClick={this.props.showModal}
          />
          <span className={rightArrowClass} onClick={this.props.nextImage}>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </div>

        <div className={classes.ImagesList}>
          <ul>
            <li onClick={this.props.previousImagesList}>
              <button disabled={this.props.listSite === 0}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            </li>
            {this.props.photos}
            <li onClick={this.props.nextImagesList}>
              <button
                disabled={
                  this.props.listSite === this.props.offerPhotos.length - 5
                }
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ImageModal;
