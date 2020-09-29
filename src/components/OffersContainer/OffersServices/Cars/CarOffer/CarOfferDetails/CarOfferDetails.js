import React, {Component} from "react";
import classes from "./CarOfferDetails.module.scss";
import CarsOffers from "../../CarsOffers";
import ImageModal from "../../../../../../UI/ImageModal/ImageModal";
import CarRentDetails from "./CarRentDetails/CarRentDetails";
import CarRentForm from "./CarRentForm/CarRentForm";
import RentDescription from "./RentDescription/RentDescription";
import PhotoContainer from "../../../../../../UI/PhotoContainer/PhotoContainer";
import CarDetails from "./CarDetails/CarDetails";

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

    const carLogo = CarsOffers[carBrand].logo;
    const Car = CarsOffers[carBrand].models[carModel];

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
          <PhotoContainer
            mainPhoto={Car.photos[this.state.photoIndex]}
            listSite={this.state.listSite}
            photos={photos}
            showImgModalHandler={this.showImgModalHandler}
          />

          <CarDetails car={Car} brand={carBrand} carLogo={carLogo} />
        </div>
        <RentDescription
          updateContent={this.updateContent}
          currentContent={this.state.descContent}
          descriptionContent={descriptionContent}
        />

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
