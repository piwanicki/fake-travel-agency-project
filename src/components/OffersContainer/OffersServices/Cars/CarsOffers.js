import levantePhoto1 from "./carsPhotos/Maserati-Levante_01.jpg";
import ghibliPhoto1 from "./carsPhotos/Maserati-Ghibli.jpg";
import golf7Photo1 from "./carsPhotos/golf7.jpg";
import golf8Photo1 from "./carsPhotos/golf8.jpg";
import jettaPhoto1 from "./carsPhotos/volkswagen-jetta.jpg";
import jettaPhoto2 from "./carsPhotos/volkswagen-jetta2.jpg";

const CarsOffers = {
  Maserati: {
    Levante: {
      price: "500$ / 24h",
      photos: [levantePhoto1],
      desc: [
        "Engine Layout : V6",
        "Displacement : 2979 cc",
        "Acceleration : 6.0 sec",
        "Max speed : 251 km/h",
        "Max power : 350 HP",
        "Traction : AWD",
      ],
      /* 
          Engine Layout: V6
          Displacement : 2979 cc
          Acceleration : 6.0 sec
          Max speed : 251 km/h
          Max power : 350 HP
          Traction : AWD
      */
    },
    Ghibli: {
      price: "450$ / 24h",
      photos: [ghibliPhoto1],
      desc: [
        "Engine Layout: V6",
        "Displacement : 2979 cc",
        "Acceleration : 5.5 sec",
        "Max speed : 267 km/h",
        "Max power : 350 HP",
        "Traction : RWD",
      ],
    },
  },

  Volkswagen: {
    Golf7: {
      price: "150$ / 24h",
      photos: [golf7Photo1],
    },
    Golf8: {
      price: "250$ / 24h",
      photos: [golf8Photo1],
    },

    Jetta: {
      price: "200$ / 24h",
      photos: [jettaPhoto1, jettaPhoto2],
    },
  },

  Audi: {
    A3: {
      price: "100$ / 24h",
      photos: [jettaPhoto1, jettaPhoto2],
    },

    A5: {
      price: "130$ / 24h",
      photos: [jettaPhoto1, jettaPhoto2],
    },
  },
};

export default CarsOffers;
