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

class CarOfferDetails extends Component {
  state = {
    showGallery: false,
    photoIndex: 0,
    images: null,
    activeTab: "rentDetails",
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
    document
      .getElementById(this.state.activeTab)
      .classList.add(classes.SelectedTab);
    this.setState({images: imagesList});
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

  render() {
    const carBrand = this.props.match.params.carBrand;
    const carModel = this.props.match.params.carModel;
    const carModelSplitted = carModel.includes("_")
      ? `${carModel.split("_")[0]} ${carModel.split("_")[1]}`
      : carModel;

    console.log(carBrand);
    console.log(carModel);

    console.log(carBrand);
    console.log(carModel);

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
                style={{fontSize: "2em", marginTop: "0", marginBottom: "0.2em"}}
              >
                {carBrand}
              </p>
              <span style={{fontSize: "1.5em"}}>{carModelSplitted}</span>
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
          <div
            className={classes.DescriptionTabs}
            onClick={(e) => this.selectTabHandler(e.target.id)}
          >
            <div className={classes.Tab} id="rentDetails">
              Details
            </div>
            <div className={classes.Tab} id="rentForm">
              Rent Form
            </div>
          </div>
          <div className={classes.DescriptionText}>
            <div className={classes.Dates}>
              Date :
              <span>
                From :
                <input type="date" ref={(el) => (this.fromDateRef = el)} />
              </span>
              <span>
                To :
                <input type="date" ref={(el) => (this.toDateRef = el)} />
              </span>
            </div>
          </div>
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
