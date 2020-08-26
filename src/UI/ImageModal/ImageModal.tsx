import React, { Component } from "react";
import classes from "./ImageModal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface IProps {
  mainPhoto: string;
  photos: Array<string>;
  showModal: () => void;
  previousImagesList: () => void;
  nextImagesList: () => void;
  listSite: number;
}
interface IState {
  mainPhoto: string;
}

class ImageModal extends Component<IProps, IState> {
  state: IState = {
    mainPhoto: "",
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

  nextPrevImageHandler = (arrow) => {
    let currentIndex = this.props.photos.indexOf(this.state.mainPhoto);
    if (arrow === classes["Left"]) {
      currentIndex = currentIndex - 1 < 0 ? 0 : currentIndex - 1;
    } else {
      currentIndex =
        currentIndex + 1 === this.props.photos.length ? 0 : currentIndex + 1;
    }
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
          <span
            className={leftArrowClass}
            onClick={() => this.nextPrevImageHandler(classes["Left"])}
          >
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
          <span
            className={rightArrowClass}
            onClick={() => this.nextPrevImageHandler(classes["Right"])}
          >
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
