import React, {Component} from "react";
import classes from "./OfferDetails.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import Offers from "../../Offers";
import GuestBox from "../../../SearchPanel/GuestBox/GuestBox";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import LocalizationMap from "./LocalizationMap/LocalizationMap";
import DescriptionText from "./DescriptionText/DescriptionText";
import OfferReview from "./OfferReview/OfferReview";
import OfferGuide from "./OfferGuide/OfferGuide";
import ImageModal from "./ImageModal/ImageModal";

class OfferDetails extends Component {
  state = {
    photoIndex: 0,
    images: [],
    activeTab: "guide",
    showImgModal: false,
    modalPhotoIndex: 0,
    listSite: 1,
  };

  reformatDate = (date) => {
    return date.split("-").reverse().join("-");
  };

  changeImageHandler = (index) => {
    if (this.state.showImgModal) {
      this.setState({
        modalPhotoIndex: index,
      });
    } else {
      this.state.images[this.state.photoIndex].classList.remove(
        classes.SelectedImg
      );
      this.state.images[index].classList.add(classes.SelectedImg);
      this.setState({
        photoIndex: index,
      });
    }
  };

  componentDidUpdate = () => {
    const imagesList = ReactDOM.findDOMNode(this).getElementsByClassName(
      "PhotosList"
    )[0].children;
    imagesList[this.state.photoIndex].classList.add(classes.SelectedImg);
    document
      .getElementById(this.state.activeTab)
      .classList.add(classes.SelectedTab);
  };

  componentDidMount = () => {
    const imagesList = ReactDOM.findDOMNode(this).getElementsByClassName(
      "PhotosList"
    )[0].children;
    imagesList[this.state.photoIndex].classList.add(classes.SelectedImg);
    document
      .getElementById(this.state.activeTab)
      .classList.add(classes.SelectedTab);
    this.setState({images: imagesList});
  };

  nextImageHandler = () => {
    let currentIndex = this.state.photoIndex;
    let currentPhotoModalIndex = this.state.modalPhotoIndex;
    currentIndex =
      currentIndex + 1 === this.state.images.length ? 0 : currentIndex + 1;
    currentPhotoModalIndex =
      currentPhotoModalIndex + 1 === this.state.images.length
        ? 0
        : currentPhotoModalIndex + 1;
    if (this.state.showImgModal) {
      this.setState({
        modalPhotoIndex: currentPhotoModalIndex,
      });
    } else {
      this.state.images[this.state.photoIndex].classList.remove(
        classes.SelectedImg
      );
      this.state.images[currentIndex].classList.add(classes.SelectedImg);
      this.setState({
        photoIndex: currentIndex,
      });
    }
  };

  previousImageHandler = () => {
    let currentIndex = this.state.photoIndex;
    let currentPhotoModalIndex = this.state.modalPhotoIndex;
    currentIndex = currentIndex - 1 < 0 ? 0 : currentIndex - 1;
    currentPhotoModalIndex =
      currentPhotoModalIndex - 1 < 0 ? 0 : currentPhotoModalIndex - 1;
    if (this.state.showImgModal) {
      this.setState({
        modalPhotoIndex: currentPhotoModalIndex,
      });
    } else {
      this.state.images[this.state.photoIndex].classList.remove(
        classes.SelectedImg
      );
      this.state.images[currentIndex].classList.add(classes.SelectedImg);
      this.setState({
        photoIndex: currentIndex,
      });
    }
  };

  selectTabHandler = (key) => {
    if (key !== "") {
      document
        .getElementById(this.state.activeTab)
        .classList.remove(classes.SelectedTab);
      document.getElementById(key).classList.add(classes.SelectedTab);
      this.setState({activeTab: key});
    }
  };

  showImgModalHandler = () => {
    const isShowing = this.state.showImgModal;
    const currentMainPhotoIx = this.state.photoIndex;
    this.setState({
      showImgModal: !isShowing,
      modalPhotoIndex: currentMainPhotoIx,
    });
  };

  nextImageListItem = () => {
    let listSite = this.state.listSite;
    // console.log(listSite);
    // if (listSite + 5 < Offers[this.props.match.params.city].photos.length) {
    //
    // }

    const photosList = ReactDOM.findDOMNode(this).getElementsByClassName(
      "PhotosList"
    )[0];
    photosList.style.transform = `translateX(-${listSite * 10}em)`;
    photosList.style.transition = "transform 0.5s";
    console.log(photosList);
    this.setState({
      listSite: listSite + 1,
    });
    // photosList.classList.add(classes.slideRight);

    // photosList[this.state.photoIndex].classList.add(classes.slideRight);
    // document
    //   .getElementById(this.state.activeTab)
    //   .classList.add(classes.photosList);
  };

  previousImageListItem = () => {
    let listSite = this.state.listSite;
    // console.log(listSite);
    // if (listSite - 1 >= 0) {
    //   this.setState({
    //     listSite: listSite - 1,
    //   });
    // }

    const photosList = ReactDOM.findDOMNode(this).getElementsByClassName(
      "PhotosList"
    )[0];
    photosList.style.transform = `translateX(${listSite * 10}em)`;
    photosList.style.transition = "transform 0.5s";
    console.log(photosList);
    this.setState({
      listSite: listSite - 1,
    });
  };

  render() {
    const cityOffer = this.props.match.params.city;
    const offerDetails = Offers[cityOffer];
    const fromDt = this.reformatDate(offerDetails.from);
    const toDt = this.reformatDate(offerDetails.to);
    const mainPhoto = offerDetails.photos[this.state.photoIndex];
    const modalMainPhoto = offerDetails.photos[this.state.modalPhotoIndex];
    const offerPhotos = offerDetails.photos;

    const photos = offerDetails.photos.map((photo, index) => (
      <li key={index}>
        <img
          src={photo}
          alt={photo}
          onClick={() => this.changeImageHandler(index)}
        />
      </li>
    ));
    // .splice(this.state.listSite, 5);

    let descriptionContent;

    switch (this.state.activeTab) {
      case "desc": {
        descriptionContent = <DescriptionText details={offerDetails.details} />;
        break;
      }

      case "loc": {
        descriptionContent = (
          <LocalizationMap lat={offerDetails.lat} lon={offerDetails.lon} />
        );
        break;
      }

      case "guide": {
        descriptionContent = (
          <OfferGuide city={cityOffer} country={offerDetails.country} />
        );
        break;
      }

      case "rev": {
        descriptionContent = <OfferReview />;
        break;
      }

      default: {
        descriptionContent = <DescriptionText details={offerDetails.details} />;
      }
    }

    return (
      <div className={classes.OfferDetailsContainer}>
        <div className={classes.OfferDetails}>
          <div className={classes.PhotoContainer}>
            <img
              className={classes.MainPhoto}
              src={mainPhoto}
              alt={`big landscape`}
              onClick={this.showImgModalHandler}
            />
            <div className={classes.PhotosSlider}>
              <button
                onClick={this.previousImageListItem}
                disabled={this.state.listSite === 0}
              >
                <FontAwesomeIcon icon={faChevronCircleLeft} />
              </button>
              <div className={classes.PhotosListDiv}>
                <ul className="PhotosList">{photos}</ul>
              </div>

              <button
                onClick={this.nextImageListItem}
                disabled={this.state.listSite + 4 === offerPhotos.length}
              >
                <FontAwesomeIcon icon={faChevronCircleRight} />
              </button>
            </div>
          </div>
          <div className={classes.DetailsContainer}>
            <div>
              <p>Date :</p>
              From :
              <input type="date" defaultValue={fromDt} />
              To :
              <input type="date" defaultValue={toDt} />
            </div>

            <GuestBox />

            <div>
              <p>From where?</p>
              <label className={classes.customSelect} htmlFor="styledSelect1">
                <select id="styledSelect1">
                  <option>somewhere 1</option>
                  <option>somewhere 2</option>
                  <option>somewhere 3</option>
                  <option>somewhere 4</option>
                </select>
              </label>
            </div>

            <div>
              <p>Room</p>
              <label className={classes.customSelect} htmlFor="styledSelect1">
                <select id="styledSelect1">
                  <option>Single room</option>
                  <option>Double room</option>
                  <option>Triple room</option>
                </select>
              </label>
            </div>

            <div>
              <p>Feeding</p>
              <label className={classes.customSelect} htmlFor="styledSelect1">
                <select id="styledSelect1" name="options">
                  <option>Only breakfasts</option>
                  <option>Only dinners</option>
                  <option>Full feeding</option>
                </select>
              </label>
            </div>

            <div className={classes.PricingDetails}>
              <div>
                Adult :<p>{offerDetails.price} $</p>
              </div>
              <div>
                Kid :<p>{offerDetails.kidPrice} $</p>
              </div>

              <div className={classes.SummaryPrice}>
                Summary :
                <p>
                  {this.props.adults * offerDetails.price +
                    this.props.kids * offerDetails.kidPrice}
                  $
                </p>
              </div>
            </div>
            <button className={classes.BookBtn} type="button">
              Book
            </button>
          </div>
        </div>
        <div className={classes.OfferDescription}>
          <div
            className={classes.DescriptionTabs}
            onClick={(e) => this.selectTabHandler(e.target.id)}
          >
            <div className={classes.Tab} id="desc">
              Description
            </div>
            <div className={classes.Tab} id="loc">
              Localization
            </div>
            <div className={classes.Tab} id="guide">
              Guide
            </div>
            <div className={classes.Tab} id="rev">
              Reviews
            </div>
          </div>

          <div className={classes.DescriptionText}>{descriptionContent}</div>
          {this.state.showImgModal ? (
            <ImageModal
              mainImage={modalMainPhoto}
              showModal={this.showImgModalHandler}
              photos={photos}
              previousImage={this.previousImageHandler}
              nextImage={this.nextImageHandler}
              previousImagesList={this.previousImageListItem}
              nextImagesList={this.nextImageListItem}
              offerPhotos={offerPhotos}
              listSite={this.state.listSite}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    adults: state.adults,
    kids: state.kids,
  };
};

export default connect(mapStateToProps, null)(OfferDetails);
