import React, {Component} from "react";
import classes from "./OfferDetails.module.scss";
import Offers from "../../Offers";
import {LastMinuteData} from "../../LastMinuteModule/LastMinuteOffersData";
import ReactDOM from "react-dom";
import LocalizationMap from "./LocalizationMap/LocalizationMap";
import DescriptionText from "./DescriptionText/DescriptionText";
import OfferReview from "./OfferReview/OfferReview";
import OfferGuide from "./OfferGuide/OfferGuide";
import ImageModal from "../../../../UI/ImageModal/ImageModal";
import CheckingTermModal from "./CheckingTermModal/CheckingTermModal";
import {animateScroll as scroll} from "react-scroll";
import "react-datepicker/dist/react-datepicker.css";
import DetailsUserMenu from "./DetailsUserMenu/DetailsUserMenu";
import PhotoContainer from "./PhotoContainer/PhotoContainer";
import OfferDescription from "./OfferDescription/OfferDescription";

class OfferDetails extends Component {
  state = {
    photoIndex: 0,
    images: [],
    currentContent: "desc",
    showImgModal: false,
    modalPhotoIndex: 0,
    listSite: 1,
    photosList: null,
    checkingTerm: false,
    termStatus: false,
  };

  startDateHandleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  endDateHandleChange = (date) => {
    this.setState({
      endDate: date,
    });
  };

  reformatDate = (date) => {
    return date.split("/").reverse().join("/");
  };

  changeImageHandler = (index) => {
    this.state.images[this.state.photoIndex].classList.remove(
      classes.SelectedImg
    );
    this.state.images[index].classList.add(classes.SelectedImg);
    this.setState({
      photoIndex: index,
    });
  };

  componentDidUpdate = () => {
    const imagesList = ReactDOM.findDOMNode(this).getElementsByClassName(
      "PhotosList"
    )[0].children;
    imagesList[this.state.photoIndex].classList.add(classes.SelectedImg);
  };

  componentDidMount = () => {
    const imagesList = ReactDOM.findDOMNode(this).getElementsByClassName(
      "PhotosList"
    )[0].children;
    const photosListDiv = ReactDOM.findDOMNode(this).getElementsByClassName(
      classes.PhotosListDiv
    )[0];
    imagesList[this.state.photoIndex].classList.add(classes.SelectedImg);
    this.setState({
      images: imagesList,
      photosListDiv: photosListDiv,
    });
    const startDate = new Date();
    let endDate = new Date();
    endDate = endDate.setDate(startDate.getDate() + 7);
    this.setState({
      startDate: startDate,
      endDate: endDate,
    });
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
    const PhotosListDiv = document.querySelector(".PhotosList");
    PhotosListDiv.style.transform = `translateX(-${listSite * 180}px)`;
    PhotosListDiv.style.transition = "transform 0.5s";
    this.setState({
      listSite: listSite + 1,
    });
  };

  previousImageListItem = () => {
    let listSite = this.state.listSite;
    const currentPosition = listSite * 180 - 180;
    const PhotosListDiv = document.querySelector(".PhotosList");
    PhotosListDiv.style.transform = `translateX(-${currentPosition - 180}px)`;
    PhotosListDiv.style.transition = "transform 0.5s";
    this.setState({
      listSite: listSite - 1,
    });
  };

  checkTerminHandler = (key) => {
    this.setState({checkingTerm: true});
    const offer = Offers[this.props.match.params.city]
      ? Offers[this.props.match.params.city]
      : LastMinuteData[this.props.match.params.city];
    const from = offer.details["term"][key].from;
    const to = offer.details["term"][key].to;
    const startDate = new Date(this.reformatDate(from));
    const endDate = new Date(this.reformatDate(to));

    setTimeout(() => {
      this.setState({termStatus: true});
    }, 1000);
    setTimeout(() => {
      this.setState({
        checkingTerm: false,
        startDate: startDate,
        endDate: endDate,
      });
      scroll.scrollToTop();
    }, 2000);
    setTimeout(() => {
      this.setState({termStatus: false});
    }, 7000);
  };

  updateContent = (id) => {
    this.setState({currentContent: id});
  };

  render() {
    const cityOffer = this.props.match.params.city;
    const offerType = this.props.match.params.offer;
    let offerDetails;

    switch (offerType) {
      case "recommended": {
        offerDetails = Offers[cityOffer];
        break;
      }

      case "lastMinute": {
        offerDetails = LastMinuteData[cityOffer];
        break;
      }

      default: {
        break;
      }
    }

    const mainPhoto = offerDetails.photos[this.state.photoIndex];
    const modalMainPhoto = offerDetails.photos[this.state.modalPhotoIndex];
    const offerPhotos = offerDetails.photos;
    let descriptionContent;

    const photos = offerDetails.photos.map((photo, index) => (
      <li key={index}>
        <img
          src={photo}
          alt={photo}
          onClick={() => this.changeImageHandler(index)}
        />
      </li>
    ));

    switch (this.state.currentContent) {
      case "desc": {
        descriptionContent = (
          <DescriptionText details={offerDetails.details} type={offerType} />
        );
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
          <OfferGuide
            offer={offerDetails}
            checkTerminHandler={this.checkTerminHandler}
          />
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
          <PhotoContainer
            mainPhoto={mainPhoto}
            showImgModalHandler={this.showImgModalHandler}
            previousImageListItem={this.previousImageListItem}
            nextImageListItem={this.nextImageListItem}
            photos={photos}
            listSite={this.state.listSite}
          />

          <DetailsUserMenu
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            offerDetails={offerDetails}
            adult={this.props.adults}
            kids={this.props.kids}
            startDateHandleChange={this.startDateHandleChange}
            endDateHandleChange={this.endDateHandleChange}
          />
        </div>

        <OfferDescription
          updateContent={this.updateContent}
          activeTab={this.state.currentContent}
          descriptionContent={descriptionContent}
        />

        {this.state.showImgModal ? (
          <ImageModal
            mainPhoto={modalMainPhoto}
            photos={offerPhotos}
            photoIndex={this.state.photoIndex}
            listSite={this.state.listSite}
            showModal={this.showImgModalHandler}
          />
        ) : null}

        {this.state.checkingTerm ? (
          <CheckingTermModal status={this.state.termStatus} />
        ) : null}
      </div>
    );
  }
}

export default OfferDetails;
