import React, {Component} from "react";
import classes from "./CarOfferDetails.module.scss";
import CarsOffers from "../../CarsOffers";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faWrench,
  faGasPump,
} from "@fortawesome/free-solid-svg-icons";
import ImageModal from "../../../../../../UI/ImageModal/ImageModal";
import CarRentDetails from "./CarRentDetails/CarRentDetails";
import CarRentForm from "./CarRentForm/CarRentForm";
import DescriptionTabs from "../../../../../../UI/DescriptionTabs/DescriptionTabs";
import Tab from "../../../../../../UI/DescriptionTabs/Tab/Tab";

class CarOfferDetails extends Component {
  state = {
    showGallery: false,
    photoIndex: 0,
    images: null,
    descContent: "rentForm",
  };

  showImgModalHandler = () => {
    const isShowing = this.state.showGallery;
    this.setState({showGallery: !isShowing});
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

  componentDidMount = () => {
    const imagesList = document.querySelector(".PhotosList").children;
    imagesList[this.state.photoIndex].classList.add(classes.SelectedImg);
    this.setState({images: imagesList});
    window.scrollTo(0, 0);
  };

  updateContent = (id) => {
    this.setState({descContent: id});
  };

  render() {
    const carBrand = this.props.match.params.carBrand;
    const carModel = this.props.match.params.carModel;

    const carModelSplitted = carModel.includes("_")
      ? `${carModel.split("_")[0]} ${carModel.split("_")[1]}`
      : carModel;

    const carLogo = CarsOffers[carBrand].logo;
    const Car = CarsOffers[carBrand].models[carModel];
    const CarDetails = Car.details;

    const photos = Car.photos.map((photo, index) => (
      <li key={index}>
        <img
          src={photo}
          alt={photo}
          onClick={() => this.changeImageHandler(index)}
        />
      </li>
    ));

    let descriptionContent;

    switch (this.state.descContent) {
      case "rentDetails": {
        descriptionContent = <CarRentDetails />;
        break;
      }

      case "rentForm": {
        descriptionContent = <CarRentForm />;
        break;
      }

      default: {
        descriptionContent = <CarRentDetails />;
      }
    }

    return (
      <div className={classes.CarOfferDetails}>
        <div className={classes.OfferDetails}>
          <div className={classes.PhotoContainer}>
            <img
              className={classes.MainPhoto}
              src={Car.photos[this.state.photoIndex]}
              alt={`big landscape`}
              onClick={this.showImgModalHandler}
            />
            <div className={classes.PhotosSlider}>
              <button>
                <FontAwesomeIcon icon={faChevronCircleLeft} />
              </button>
              <div className={classes.PhotosListDiv}>
                <ul className="PhotosList">{photos}</ul>
              </div>

              <button>
                <FontAwesomeIcon icon={faChevronCircleRight} />
              </button>
            </div>
          </div>
          <div className={classes.CarDetailsContainer}>
            <img
              src={carLogo}
              alt={carLogo}
              className={classes.BrandLogo}
              style={{marginTop: "1em"}}
            />
            <span style={{textAlign: "center"}}>
              <p
                style={{
                  fontSize: "2em",
                  marginTop: "0",
                  marginBottom: "0.2em",
                  color: "#000066",
                }}
              >
                {carBrand}
              </p>
              <span style={{fontSize: "1.5em", color: "#cd0000"}}>
                {carModelSplitted}
              </span>
            </span>

            <table>
              <tbody>
                <tr>
                  <th colSpan="2">
                    <FontAwesomeIcon icon={faWrench} /> Specification
                  </th>
                </tr>

                {CarDetails.map((detail, index) => {
                  const separateDetail = detail.split(":");
                  return (
                    <tr key={index}>
                      <td>{separateDetail[0]}</td>
                      <td>{separateDetail[1]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <table>
              <tbody>
                <tr>
                  <th colSpan="2">
                    <FontAwesomeIcon icon={faGasPump} /> Fuel consumption
                  </th>
                </tr>
                {Car.fuelConsumption.map((cons, index) => {
                  const separateDetail = cons.split(":");
                  return (
                    <tr key={index}>
                      <td>{separateDetail[0]}</td>
                      <td>{separateDetail[1]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <button className={classes.RentBtn}>Rent</button>
          </div>
        </div>

        <div className={classes.RentForm}>
          <DescriptionTabs
            width="340px"
            updateContent={this.updateContent}
            activeTab={this.state.descContent}
          >
            <Tab tabTitle="Details" id="rentDetails" />
            <Tab tabTitle="Rent Form" id="rentForm" />
          </DescriptionTabs>
          <div className={classes.DescriptionText}>{descriptionContent}</div>
        </div>

        {this.state.showGallery ? (
          <ImageModal
            mainPhoto={Car.photos[this.state.photoIndex]}
            showModal={this.showImgModalHandler}
            photos={Car.photos}
          />
        ) : null}
      </div>
    );
  }
}

export default CarOfferDetails;
