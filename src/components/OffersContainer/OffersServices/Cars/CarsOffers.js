//maserati images
import levantePhoto1 from "./carsPhotos/Maserati-Levante_01-min.jpg";
import levantePhoto2 from "./carsPhotos/Maserati-Levante_02-min.jpg";
import levantePhoto3 from "./carsPhotos/Maserati-Levante_03-min.jpg";
import levantePhoto4 from "./carsPhotos/Maserati-Levante_04-min.jpg";
import levantePhoto5 from "./carsPhotos/Maserati-Levante_05-min.jpg";
import levantePhoto6 from "./carsPhotos/Maserati-Levante_06-min.jpg";
import ghibliPhoto1 from "./carsPhotos/Maserati-Ghibli-min.jpg";
//volkswagen images
import golf7Photo1 from "./carsPhotos/golf7-min.jpg";
import golf8Photo1 from "./carsPhotos/golf8-min.jpg";
import jettaPhoto1 from "./carsPhotos/volkswagen-jetta-min.jpg";
import jettaPhoto2 from "./carsPhotos/volkswagen-jetta2-min.jpg";
//mercedes images
import mbClassAPhoto1 from "./carsPhotos/mb-classA-min.jpg";
import mbClassAPhoto2 from "./carsPhotos/mb-classA2-min.jpg";
import mbClassAPhoto3 from "./carsPhotos/mb-classA3-min.jpg";
//Audi images
import audiA5Photo1 from "./carsPhotos/audiA5-min.jpg";
import audiA5Photo2 from "./carsPhotos/audiA5_2-min.jpg";
import audiA4Photo1 from "./carsPhotos/audiA4-min.jpg";
import audiA4AvantPhoto1 from "./carsPhotos/audiA4Avant-min.jpg";
import audiA3Photo1 from "./carsPhotos/audiA3-min.jpg";

//brands logos
import audiLogo from "./carsPhotos/audiLogo.png";
import vwLogo from "./carsPhotos/vwLogo.png";
import mbLogo from "./carsPhotos/mercedesLogo.png";
import maseratiLogo from "./carsPhotos/maseratiLogo.png";

const CarsOffers = {
  Maserati: {
    logo: maseratiLogo,
    brand: 'Maserati',
    models: {
      Levante: {
        vehicle: "Car",
        model: 'Levante',
        type: "Suv",
        price: 500,
        photos: [
          levantePhoto1,
          levantePhoto2,
          levantePhoto3,
          levantePhoto4,
          levantePhoto5,
          levantePhoto6,
        ],
        details: [
          "Engine Layout : V6 Benz.",
          "Displacement : 2979 cc",
          "Acceleration : 6.0 sec",
          "Max speed : 251 km/h",
          "Max power : 350 HP",
          "Traction : AWD",
        ],
        fuelConsumption: [
          "Mixed cycle : 11,5 l/100km",
          "Road : 10.2 l/100km",
          "Urban : 15.4 l/100km",
        ],
      },
      Ghibli: {
        vehicle: "Car",
        type: "Sedan",
        model: 'Ghibli',
        price: 450,
        photos: [ghibliPhoto1],
        details: [
          "Engine Layout : V6 Benz.",
          "Displacement : 2979 cc",
          "Acceleration : 5.5 sec",
          "Max speed : 267 km/h",
          "Max power : 350 HP",
          "Traction : RWD",
        ],
        fuelConsumption: [
          "Mixed cycle : 11,2 l/100km",
          "Road : 9.8 l/100km",
          "Urban : 15,0 l/100km",
        ],
      },
    },
  },

  Volkswagen: {
    logo: vwLogo,
    brand: 'Volkswagen',
    models: {
      Golf_7: {
        vehicle: "Car",
        model: 'Golf VII',
        type: "Hatchback",
        price: 150,
        photos: [golf7Photo1],
        details: [
          "Engine Layout : R4 Benz.",
          "Displacement : 1984 cc",
          "Acceleration : 6.2 sec",
          "Max speed : 250  km/h",
          "Max power : 245 HP",
          "Traction : FWD",
        ],
        fuelConsumption: [
          "Mixed cycle : 4,2 l/100km",
          "Road : 3,8 l/100km",
          "Urban : 5,0 l/100km",
        ],
      },
      Golf_8: {
        vehicle: "Car",
        model: 'Golf VIII',
        type: "Hatchback",
        price: 250,
        photos: [golf8Photo1],
        details: [
          "Engine Layout : R4 Benz.",
          "Displacement : 1498 cc",
          "Acceleration : 9.2 sec",
          "Max speed : 214   km/h",
          "Max power : 130  HP",
          "Traction : FWD",
        ],
        fuelConsumption: [
          "Mixed cycle : 4,2 l/100km",
          "Road : 3,8 l/100km",
          "Urban : 5,0 l/100km",
        ],
      },

      Jetta: {
        vehicle: "Car",
        type: "Sedan",
        model: 'Jetta',
        price: 200,
        photos: [jettaPhoto1, jettaPhoto2],
        details: [
          "Engine Layout : R4 Diesel",
          "Displacement : 1968  cc",
          "Acceleration : 8,9 sec",
          "Max speed : 220  km/h",
          "Max power : 150 HP",
          "Traction : FWD",
        ],
        fuelConsumption: [
          "Mixed cycle : 4,2 l/100km",
          "Road : 3,8 l/100km",
          "Urban : 5,0 l/100km",
        ],
      },
    },
  },

  Audi: {
    logo: audiLogo,
    brand: 'Audi',
    models: {
      A3: {
        vehicle: "Car",
        model: 'A3',
        type: "Hatchback",
        price: 100,
        photos: [audiA3Photo1],
        details: [
          "Engine Layout : R4",
          "Displacement : 1395  cc",
          "Acceleration : 8.1 sec",
          "Max speed : 220 km/h",
          "Max power : 150 HP",
          "Traction : AWD",
        ],
        fuelConsumption: [
          "Mixed cycle : 4,2 l/100km",
          "Road : 3,8 l/100km",
          "Urban : 5,0 l/100km",
        ],
      },

      A4: {
        vehicle: "Car",
        type: "Sedan",
        model: 'A4',
        price: 130,
        photos: [audiA4Photo1],
        details: [
          "Engine Layout : V6",
          "Displacement : 2979 cc",
          "Acceleration : 6.0 sec",
          "Max speed : 251 km/h",
          "Max power : 350 HP",
          "Traction : AWD",
        ],
        fuelConsumption: [
          "Mixed cycle : 4,2 l/100km",
          "Road : 3,8 l/100km",
          "Urban : 5,0 l/100km",
        ],
      },

      A4_Avant: {
        vehicle: "Car",
        type: "Combi",
        model: 'A4 Avant',
        price: 130,
        photos: [audiA4AvantPhoto1],
        details: [
          "Engine Layout : V6",
          "Displacement : 2979 cc",
          "Acceleration : 6.0 sec",
          "Max speed : 251 km/h",
          "Max power : 350 HP",
          "Traction : AWD",
        ],
        fuelConsumption: [
          "Mixed cycle : 4,2 l/100km",
          "Road : 3,8 l/100km",
          "Urban : 5,0 l/100km",
        ],
      },

      A5: {
        vehicle: "Car",
        type: "Sedan",
        model: 'A5',
        price: 130,
        photos: [audiA5Photo1, audiA5Photo2],
        details: [
          "Engine Layout : V6",
          "Displacement : 2979 cc",
          "Acceleration : 6.0 sec",
          "Max speed : 251 km/h",
          "Max power : 350 HP",
          "Traction : AWD",
        ],
        fuelConsumption: [
          "Mixed cycle : 4,2 l/100km",
          "Road : 3,8 l/100km",
          "Urban : 5,0 l/100km",
        ],
      },
    },
  },

  Mercedes: {
    logo: mbLogo,
    brand: 'Mercedes',
    models: {
      Class_A: {
        model: 'Class A',
        vehicle: "Car",
        type: "Hatchback",
        price: 120,
        photos: [mbClassAPhoto1, mbClassAPhoto2, mbClassAPhoto3],
        details: [
          "Engine Layout : V6",
          "Displacement : 2979 cc",
          "Acceleration : 6.0 sec",
          "Max speed : 251 km/h",
          "Max power : 350 HP",
          "Traction : AWD",
        ],
        fuelConsumption: [
          "Mixed cycle : 4,2 l/100km",
          "Road : 3,8 l/100km",
          "Urban : 5,0 l/100km",
        ],
      },
    },
  },
};

export default CarsOffers;
