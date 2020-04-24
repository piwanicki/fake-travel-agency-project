import React, {Component} from "react";
import classes from "./ImageModal.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

class ImageModal extends Component {
  state = {
    mainPhoto: undefined,
  };

  componentDidMount = () => {
    document.body.style.overflow = "hidden";
    this.setState({
      mainPhoto: this.props.mainPhoto,
    });
  };

  componentWillUnmount = () => {
    document.body.style.overflow = "";
  };

  changeImageHandler = (index) => {
    this.setState({
      mainPhoto: this.props.photos[index],
    });
  };

  nextImageHandler = () => {
    let currentIndex = this.props.photos.indexOf(this.state.mainPhoto);
    currentIndex =
      currentIndex + 1 === this.props.photos.length ? 0 : currentIndex + 1;

    // this.props.photos[this.state.mainPhoto].classList.remove(
    //   classes.SelectedImg
    // );
    // this.state.images[currentIndex].classList.add(classes.SelectedImg);
    this.setState({
      mainPhoto: this.props.photos[currentIndex],
    });
  };

  previousImageHandler = () => {
    let currentIndex = this.props.photos.indexOf(this.state.mainPhoto);
    currentIndex = currentIndex - 1 < 0 ? 0 : currentIndex - 1;
    // this.props.photos[this.state.mainPhoto].classList.remove(
    //   classes.SelectedImg
    // );
    // this.state.images[currentIndex].classList.add(classes.SelectedImg);
    this.setState({
      mainPhoto: this.props.photos[currentIndex],
    });
  };

  render() {
    const leftArrowClass = [classes.Arrow, classes.Left].join(" ");
    const rightArrowClass = [classes.Arrow, classes.Right].join(" ");

    const photos = this.props.photos.map((photo, index) => (
      <li key={index}>
        <img
          src={photo}
          alt={photo}
          onClick={() => this.changeImageHandler(index)}
        />
      </li>
    ));

    return (
      <div className={classes.ImageModal}>
        <div className={classes.ImageControls}>
          <span className={leftArrowClass} onClick={this.previousImageHandler}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </span>
          <img
            className={classes.MainImage}
            src={this.state.mainPhoto}
            alt={`main`}
          ></img>
          <FontAwesomeIcon
            icon={faTimes}
            className={classes.ClosingBtn}
            onClick={this.props.showModal}
          />
          <span className={rightArrowClass} onClick={this.nextImageHandler}>
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
            {photos}
            <li onClick={this.props.nextImagesList}>
              <button
                disabled={this.props.listSite === this.props.photos.length - 5}
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
