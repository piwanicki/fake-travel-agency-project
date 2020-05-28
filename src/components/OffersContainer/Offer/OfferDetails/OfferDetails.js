import React, {Component} from "react";
import classes from "./OfferDetails.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import Offers from "../../Offers";
import GuestBox from "../../../SearchPanel/GuestBox/GuestBox";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import LocalizationMap from "./LocalizationMap/LocalizationMap";
import DescriptionText from "./DescriptionText/DescriptionText";
import OfferReview from "./OfferReview/OfferReview";
import OfferGuide from "./OfferGuide/OfferGuide";
import ImageModal from "../../../../UI/ImageModal/ImageModal";
import CheckingTermModal from "./CheckingTermModal/CheckingTermModal";
import {animateScroll as scroll} from "react-scroll";
// import CustomSelect from "../../../../UI/CustomSelect/CustomSelect";
import DescriptionTabs from "../../../../UI/DescriptionTabs/DescriptionTabs";
import Tab from "../../../../UI/DescriptionTabs/Tab/Tab";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SelectSearch from "react-select-search";

class OfferDetails extends Component {
  state = {
    photoIndex: 0,
    images: [],
    descContent: "desc",
    showImgModal: false,
    modalPhotoIndex: 0,
    listSite: 1,
    photosList: null,
    checkingTerm: false,
    termStatus: false,
    startDate: new Date(),
    endDate: new Date(),
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
    return date.split("-").reverse().join("-");
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
    const offer = Offers[this.props.match.params.city];
    const from = offer.details["term"][key].from;
    const to = offer.details["term"][key].to;

    setTimeout(() => {
      this.setState({termStatus: true});
    }, 1000);
    setTimeout(() => {
      this.setState({checkingTerm: false});
      scroll.scrollToTop();
      this.toDateRef.classList.add(classes.SlideBckCenter);
      this.fromDateRef.classList.add(classes.SlideBckCenter);
      this.toDateRef.value = this.reformatDate(to);
      this.fromDateRef.value = this.reformatDate(from);
    }, 2000);
    setTimeout(() => {
      this.setState({termStatus: false});
      this.toDateRef.classList.remove(classes.SlideBckCenter);
      this.fromDateRef.classList.remove(classes.SlideBckCenter);
    }, 7000);
  };

  updateContent = (id) => {
    this.setState({descContent: id});
  };

  render() {
    const cityOffer = this.props.match.params.city;
    const offerDetails = Offers[cityOffer];
    // const fromDt = this.reformatDate(offerDetails.from);
    // const toDt = this.reformatDate(offerDetails.to);
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

    switch (this.state.descContent) {
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
          <OfferGuide
            city={cityOffer}
            country={offerDetails.country}
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

    const fromOptions = [
      {
        value: "somewhere1",
        name: "Somewhere 1",
      },
      {
        value: "somewhere2",
        name: "Somewhere 2",
      },
      {
        value: "somewhere3",
        name: "Somewhere 3",
      },
    ];

    const roomOptions = [
      {
        value: "singleRoom",
        name: "Single room",
      },
      {
        value: "doubleRoom",
        name: "Double Room",
      },
      {
        value: "tripleRoom",
        name: "Triple Room",
      },
    ];
    const mealOptions = [
      {
        value: "onlyBreakfasts",
        name: "Only Breakfasts",
      },
      {
        value: "onlyDinners",
        name: "Only Dinners",
      },
      {
        value: "fullFeeding",
        name: "Full Feeding",
      },
    ];

    // const customSelectStyles = {
    //   margin: '2em'
    // }

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
                disabled={this.state.listSite === 1}
              >
                <FontAwesomeIcon icon={faChevronCircleLeft} />
              </button>
              <div className={classes.PhotosListDiv}>
                <ul className="PhotosList">{photos}</ul>
              </div>

              <button
                onClick={this.nextImageListItem}
                disabled={this.state.listSite + 5 === offerPhotos.length}
              >
                <FontAwesomeIcon icon={faChevronCircleRight} />
              </button>
            </div>
          </div>
          <div className={classes.DetailsContainer}>
            <div className={classes.Dates}>
              <p>Date :</p>
              <div className={classes.DatePickerBox}>
                <FontAwesomeIcon icon={faCalendarAlt} />
                Start
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.startDateHandleChange}
                  placeholderText="Start Date"
                  className={classes.DatePicker}
                />
              </div>
              <div className={classes.DatePickerBox}>
                <FontAwesomeIcon icon={faCalendarAlt} />
                End
                <DatePicker
                  selected={this.state.endDate}
                  onChange={this.endDateHandleChange}
                  placeholderText="End Date"
                  className={classes.DatePicker}
                />
              </div>
            </div>

            <GuestBox customStyle={{color: "black"}} />

            <div className={classes.CustomOptions}>
              <span>From: </span>
              <SelectSearch options={fromOptions} />
              <br />
              <span>Room: </span>
              <SelectSearch options={roomOptions} />
              <br />
              <span>Meal: </span>
              <SelectSearch options={mealOptions} />
            </div>

            <div className={classes.PricingDetails}>
              <div>
                Adult :<p>{offerDetails.price} $</p>
              </div>
              <div>
                Kid :<p>{offerDetails.kidPrice} $</p>
              </div>

              <div className={classes.SummaryPrice}>
                <span style={{fontSize: "0.9em"}}> Summary :</span>
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
          <DescriptionTabs
            width="680px"
            updateContent={this.updateContent}
            activeTab={this.state.descContent}
          >
            <Tab tabTitle="Description" id="desc" />
            <Tab tabTitle="Localization" id="loc" />
            <Tab tabTitle="Guide" id="guide" />
            <Tab tabTitle="Reviews" id="rev" />
          </DescriptionTabs>

          <div className={classes.DescriptionText}>{descriptionContent}</div>

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
