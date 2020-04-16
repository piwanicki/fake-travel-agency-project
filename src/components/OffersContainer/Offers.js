// Dubrovnik images
import dubrovnik1 from "./offerDetailsPhotos/dubrovnikPhotos/dubrovnik1.jpg";
import dubrovnik2 from "./offerDetailsPhotos/dubrovnikPhotos/dubrovnik2.jpg";
import dubrovnik3 from "./offerDetailsPhotos/dubrovnikPhotos/dubrovnik3.jpg";
import dubrovnik4 from "./offerDetailsPhotos/dubrovnikPhotos/dubrovnik4.jpg";
import dubrovnik5 from "./offerDetailsPhotos/dubrovnikPhotos/dubrovnik5.jpg";

// Rome images
import rome1 from "./offerDetailsPhotos/romePhotos/rome1.jpg";
import rome2 from "./offerDetailsPhotos/romePhotos/rome2.jpg";
import rome3 from "./offerDetailsPhotos/romePhotos/rome3.jpg";
import rome4 from "./offerDetailsPhotos/romePhotos/rome4.jpg";
import rome5 from "./offerDetailsPhotos/romePhotos/rome5.jpg";

const Offers = {
  Dubrovnik: {
    country: "Croatia",
    city: "Dubrovnik",
    lat: "42.651",
    lon: "18.091",
    from: "15-07-2020",
    to: "01-08-2020",
    date: "15-07-2020 -> 01-08-2020",
    price: 500,
    kidPrice: 240,
    details: {
      desc:
        "Located in the center of Sunny Beach, just 250 meters from the sea and close to shops, bars and restaurants.",

      rooms:
        "Double (with the possibility of an extra bed), spacious, tastefully furnished, with a bathroom (toilet, bath tub or shower, hair dryer). Equipment: individually controlled air-conditioning, heating, telephone, satellite TV, fridge with mini bar (extra content), balcony or terrace.",

      facilities: [
        "reception, safe deposit 6 BGN / day",
        "swimming pool, pool bar",
        "restaurant, 2 bars",
        "playground, paddling pool",
        "massages, billiards, gym, spa (extra charge)",
        "Wi-Fi payable (1 hour - 2.4 BGN; 1 day - 12 BGN; 3 days - 24 BGN; 7 days - 36 BGN)",
      ],

      facilitiesIcons: [
        ['faWifi','Free Wifi'],['faSwimmingPool','Swimming Pool'],['faParking','Free Parking'],['faGlassCheers','Open Bar'],['faWheelchair','Adapted for disabled persons'],['faBaby','Baby Room'],['faTableTennis','Play Room']
      ],

      meals: [
        "ALL INCLUSIVE - breakfasts, lunches and dinners, soft drinks and local alcohols",
        "ONLY DINNERS - lunches and dinners",
        "ONLY BREAKFAST - breakfasts",
      ],

      baggage: `
      For flights with charter flights, the price includes hand baggage of 5 kg and 20 kg of main luggage
      The price includes hand baggage (40x20x25)
      Customers can buy additional luggage weighing 10 kg (55x40x20)
      - EXBAG service - PLN 125 / person,
      You can also buy checked baggage with a weight of each booking;
      - 20 kg - 245 PLN
      Warning! If luggage is added after confirming the booking, its price will be higher. Katowice (WizzAir);
      The price includes hand baggage (40x30x20);
      Customers can buy additional luggage weighing 10 kg (55x40x23)
      - EXBAG service - PLN 110 / person
      You can also buy checked baggage with a weight of each booking;
      - 20 kg - PLN 340
      - 32 kg - 470 PLN
      Warning! If luggage or additional services are added after confirming the booking, their price will be higher
      Warsaw (WizzAir);
      The price includes hand baggage (40x30x20);
      Customers can buy additional luggage weighing 10 kg (55x40x23)
      - EXBAG service - PLN 110 / person
      You can also buy checked baggage with a weight of each booking;
      - 20 kg - PLN 340
      - 32 kg - 470 PLN
      Warning! If luggage or additional services are added after confirming the booking, their price will be higher`,

      term: [
        {from: "15-07-2020", to: "01-08-2020"},
        {from: "16-07-2020", to: "02-08-2020"},
        {from: "17-07-2020", to: "03-08-2020"},
        {from: "18-07-2020", to: "04-08-2020"},
        {from: "19-07-2020", to: "05-08-2020"},
      ],

      flights: {
        RyanAir: {
          Katowice: {
            departure: ['15:35',"15-07-2020"],
            arrival: ['15:35',"01-08-2020"]
          },
          Gdansk: {
            departure: ['12:30',"16-07-2020"],
            arrival: ['12:30',"02-08-2020"],
          },
          Warszawa: {
            departure: ['17:30',"17-07-2020"],
            arrival:   ['12:30',"03-08-2020"],
          },

          Krakow: {
            departure:['17:30',"18-07-2020"],
            arrival:  ['12:30',"04-08-2020"],
          },

          Wroclaw: {
            departure:['17:30',"19-07-2020"],
            arrival:  ['12:30',"05-08-2020"],
          },
        },

        WizzAir: {
          Wroclaw: {
            departure: ['17:30',"19-07-2020",],
            arrival:   ['12:30',"05-08-2020"],
          },
          Krakow: {
            departure: ['17:30','18-07-2020'],
            arrival:   ['12:30','04-08-2020'],
          },
        },
      },
    },
    photos: [dubrovnik1, dubrovnik2, dubrovnik3, dubrovnik4, dubrovnik5],
  },

  Rome: {
    country: "Italy",
    city: "Rome",
    lat: "41.900",
    lon: "12.483",
    from: "17-07-2020",
    to: " 28-08-2020",
    date: "17-07-2020 -> 28-08-2020",
    price: 600,
    kidPrice: 240,
    details: {
      desc:
        "Located in the center of Sunny Beach, just 250 meters from the sea and close to shops, bars and restaurants.",

      rooms:
        "Double (with the possibility of an extra bed), spacious, tastefully furnished, with a bathroom (toilet, bath tub or shower, hair dryer). Equipment: individually controlled air-conditioning, heating, telephone, satellite TV, fridge with mini bar (extra content), balcony or terrace.",

      facilities: [
        "reception, safe deposit 6 BGN / day",
        "swimming pool, pool bar",
        "restaurant, 2 bars",
        "playground, paddling pool",
        "massages, billiards, gym, spa (extra charge)",
        "Wi-Fi payable (1 hour - 2.4 BGN; 1 day - 12 BGN; 3 days - 24 BGN; 7 days - 36 BGN)",
      ],

      facilitiesIcons: [
        ['faWifi','Free Wifi'],['faSwimmingPool','Swimming Pool'],['faParking','Free Parking'],['faGlassCheers','Open Bar'] 
      ],

      meals: [
        "ALL INCLUSIVE - breakfasts, lunches and dinners, soft drinks and local alcohols",
        "ONLY DINNERS - lunches and dinners",
        "ONLY BREAKFAST - breakfasts",
      ],

      baggage: `
      For flights with charter flights, the price includes hand baggage of 5 kg and 20 kg of main luggage
      The price includes hand baggage (40x20x25)
      Customers can buy additional luggage weighing 10 kg (55x40x20)
      - EXBAG service - PLN 125 / person,
      You can also buy checked baggage with a weight of each booking;
      - 20 kg - 245 PLN
      Warning! If luggage is added after confirming the booking, its price will be higher. Katowice (WizzAir);
      The price includes hand baggage (40x30x20);
      Customers can buy additional luggage weighing 10 kg (55x40x23)
      - EXBAG service - PLN 110 / person
      You can also buy checked baggage with a weight of each booking;
      - 20 kg - PLN 340
      - 32 kg - 470 PLN
      Warning! If luggage or additional services are added after confirming the booking, their price will be higher
      Warsaw (WizzAir);
      The price includes hand baggage (40x30x20);
      Customers can buy additional luggage weighing 10 kg (55x40x23)
      - EXBAG service - PLN 110 / person
      You can also buy checked baggage with a weight of each booking;
      - 20 kg - PLN 340
      - 32 kg - 470 PLN
      Warning! If luggage or additional services are added after confirming the booking, their price will be higher`,

      term: [
        {from: "15-07-2020", to: "01-08-2020"},
        {from: "16-07-2020", to: "02-08-2020"},
        {from: "17-07-2020", to: "03-08-2020"},
        {from: "18-07-2020", to: "04-08-2020"},
        {from: "19-07-2020", to: "05-08-2020"},
      ],

      flights: {
        RyanAir: {
          Katowice: {
            departure: ['15:35',"15-07-2020"],
            arrival: ['15:35',"01-08-2020"]
          },
          Gdansk: {
            departure: ['12:30',"16-07-2020"],
            arrival: ['12:30',"02-08-2020"],
          },
          Warszawa: {
            departure: ['17:30',"17-07-2020"],
            arrival:   ['12:30',"03-08-2020"],
          },

          Krakow: {
            departure:['17:30',"18-07-2020"],
            arrival:  ['12:30',"04-08-2020"],
          },

          Wroclaw: {
            departure:['17:30',"19-07-2020"],
            arrival:  ['12:30',"05-08-2020"],
          },
        },

        WizzAir: {
          Wroclaw: {
            departure: ['17:30',"19-07-2020",],
            arrival:   ['12:30',"05-08-2020"],
          },
          Krakow: {
            departure: ['17:30','18-07-2020'],
            arrival:   ['12:30','04-08-2020'],
          },
        },
      },
    },
    photos: [rome1, rome2, rome3, rome4, rome5],
  },
  Madrid: {
    country: "Spain",
    city: "Madrid",
    lat: "40.400",
    lon: "-3.683",
    from: "1-07-2020",
    to: "01-08-2020",
    date: "1-07-2020 -> 01-08-2020",
    price: 300,
    kidPrice: 240,
    details: {
      desc:
        "Located in the center of Sunny Beach, just 250 meters from the sea and close to shops, bars and restaurants.",

      rooms:
        "Double (with the possibility of an extra bed), spacious, tastefully furnished, with a bathroom (toilet, bath tub or shower, hair dryer). Equipment: individually controlled air-conditioning, heating, telephone, satellite TV, fridge with mini bar (extra content), balcony or terrace.",

      facilities: [
        "reception, safe deposit 6 BGN / day",
        "swimming pool, pool bar",
        "restaurant, 2 bars",
        "playground, paddling pool",
        "massages, billiards, gym, spa (extra charge)",
        "Wi-Fi payable (1 hour - 2.4 BGN; 1 day - 12 BGN; 3 days - 24 BGN; 7 days - 36 BGN)",
      ],

      facilitiesIcons: [
        ['faWifi','Free Wifi'],['faGlassCheers','Open Bar'],['faWheelchair','Adapted for disabled persons'],['faBaby','Baby Room'],['faTableTennis','Play Room']
      ],

      meals: [
        "ALL INCLUSIVE - breakfasts, lunches and dinners, soft drinks and local alcohols",
        "ONLY DINNERS - lunches and dinners",
        "ONLY BREAKFAST - breakfasts",
      ],

      baggage: `
      For flights with charter flights, the price includes hand baggage of 5 kg and 20 kg of main luggage
      The price includes hand baggage (40x20x25)
      Customers can buy additional luggage weighing 10 kg (55x40x20)
      - EXBAG service - PLN 125 / person,
      You can also buy checked baggage with a weight of each booking;
      - 20 kg - 245 PLN
      Warning! If luggage is added after confirming the booking, its price will be higher. Katowice (WizzAir);
      The price includes hand baggage (40x30x20);
      Customers can buy additional luggage weighing 10 kg (55x40x23)
      - EXBAG service - PLN 110 / person
      You can also buy checked baggage with a weight of each booking;
      - 20 kg - PLN 340
      - 32 kg - 470 PLN
      Warning! If luggage or additional services are added after confirming the booking, their price will be higher
      Warsaw (WizzAir);
      The price includes hand baggage (40x30x20);
      Customers can buy additional luggage weighing 10 kg (55x40x23)
      - EXBAG service - PLN 110 / person
      You can also buy checked baggage with a weight of each booking;
      - 20 kg - PLN 340
      - 32 kg - 470 PLN
      Warning! If luggage or additional services are added after confirming the booking, their price will be higher`,

      term: [
        {from: "15-07-2020", to: "01-08-2020"},
        {from: "16-07-2020", to: "02-08-2020"},
        {from: "17-07-2020", to: "03-08-2020"},
        {from: "18-07-2020", to: "04-08-2020"},
        {from: "19-07-2020", to: "05-08-2020"},
      ],

      flights: {
        RyanAir: {
          Katowice: {
            departure: ['15:35',"15-07-2020"],
            arrival: ['15:35',"01-08-2020"]
          },
          Gdansk: {
            departure: ['12:30',"16-07-2020"],
            arrival: ['12:30',"02-08-2020"],
          },
          Warszawa: {
            departure: ['17:30',"17-07-2020"],
            arrival:   ['12:30',"03-08-2020"],
          },

          Krakow: {
            departure:['17:30',"18-07-2020"],
            arrival:  ['12:30',"04-08-2020"],
          },

          Wroclaw: {
            departure:['17:30',"19-07-2020"],
            arrival:  ['12:30',"05-08-2020"],
          },
        },

        WizzAir: {
          Wroclaw: {
            departure: ['17:30',"19-07-2020",],
            arrival:   ['12:30',"05-08-2020"],
          },
          Krakow: {
            departure: ['17:30','18-07-2020'],
            arrival:   ['12:30','04-08-2020'],
          },
        },
      },
    },
    photos: [dubrovnik1, dubrovnik2, dubrovnik3, dubrovnik4, dubrovnik5],
  },
  Paris: {
    country: "France",
    city: "Paris",
    lat: "48.867",
    lon: "2.333",
    from: "15-08-2020",
    to: "01-08-2020",
    date: "15-08-2020 -> 01-08-2020",
    price: 400,
    kidPrice: 240,
    details: "",
    photos: [dubrovnik1, dubrovnik2, dubrovnik3, dubrovnik4, dubrovnik5],
  },
  Lisboa: {
    country: "Portugal",
    city: "Lisboa",
    from: "18-07-2020",
    to: "01-08-2020",
    date: "18-07-2020 -> 01-08-2020",
    price: 900,
    kidPrice: 240,
    details: {
      desc:
        "Located in the center of Sunny Beach, just 250 meters from the sea and close to shops, bars and restaurants.",

      rooms:
        "Double (with the possibility of an extra bed), spacious, tastefully furnished, with a bathroom (toilet, bath tub or shower, hair dryer). Equipment: individually controlled air-conditioning, heating, telephone, satellite TV, fridge with mini bar (extra content), balcony or terrace.",

      facilities: [
        "reception, safe deposit 6 BGN / day",
        "swimming pool, pool bar",
        "restaurant, 2 bars",
        "playground, paddling pool",
        "massages, billiards, gym, spa (extra charge)",
        "Wi-Fi payable (1 hour - 2.4 BGN; 1 day - 12 BGN; 3 days - 24 BGN; 7 days - 36 BGN)",
      ],

      facilitiesIcons: [
        ['faWifi','Free Wifi'],['faSwimmingPool','Swimming Pool'],['faParking','Free Parking'],['faWheelchair','Adapted For disabled persons'],['faTableTennis','Play Room']
      ],

      meals: [
        "ALL INCLUSIVE - breakfasts, lunches and dinners, soft drinks and local alcohols",
        "ONLY DINNERS - lunches and dinners",
        "ONLY BREAKFAST - breakfasts",
      ],

      baggage: `
      For flights with charter flights, the price includes hand baggage of 5 kg and 20 kg of main luggage
      The price includes hand baggage (40x20x25)
      Customers can buy additional luggage weighing 10 kg (55x40x20)
      - EXBAG service - PLN 125 / person,
      You can also buy checked baggage with a weight of each booking;
      - 20 kg - 245 PLN
      Warning! If luggage is added after confirming the booking, its price will be higher. Katowice (WizzAir);
      The price includes hand baggage (40x30x20);
      Customers can buy additional luggage weighing 10 kg (55x40x23)
      - EXBAG service - PLN 110 / person
      You can also buy checked baggage with a weight of each booking;
      - 20 kg - PLN 340
      - 32 kg - 470 PLN
      Warning! If luggage or additional services are added after confirming the booking, their price will be higher
      Warsaw (WizzAir);
      The price includes hand baggage (40x30x20);
      Customers can buy additional luggage weighing 10 kg (55x40x23)
      - EXBAG service - PLN 110 / person
      You can also buy checked baggage with a weight of each booking;
      - 20 kg - PLN 340
      - 32 kg - 470 PLN
      Warning! If luggage or additional services are added after confirming the booking, their price will be higher`,

      term: [
        {from: "15-07-2020", to: "01-08-2020"},
        {from: "16-07-2020", to: "02-08-2020"},
        {from: "17-07-2020", to: "03-08-2020"},
        {from: "18-07-2020", to: "04-08-2020"},
        {from: "19-07-2020", to: "05-08-2020"},
      ],

      flights: {
        RyanAir: {
          Katowice: {
            departure: ['15:35',"15-07-2020"],
            arrival: ['15:35',"01-08-2020"]
          },
          Gdansk: {
            departure: ['12:30',"16-07-2020"],
            arrival: ['12:30',"02-08-2020"],
          },
          Warszawa: {
            departure: ['17:30',"17-07-2020"],
            arrival:   ['12:30',"03-08-2020"],
          },

          Krakow: {
            departure:['17:30',"18-07-2020"],
            arrival:  ['12:30',"04-08-2020"],
          },

          Wroclaw: {
            departure:['17:30',"19-07-2020"],
            arrival:  ['12:30',"05-08-2020"],
          },
        },

        WizzAir: {
          Wroclaw: {
            departure: ['17:30',"19-07-2020",],
            arrival:   ['12:30',"05-08-2020"],
          },
          Krakow: {
            departure: ['17:30','18-07-2020'],
            arrival:   ['12:30','04-08-2020'],
          },
        },
      },
    },
    photos: [dubrovnik1, dubrovnik2, dubrovnik3, dubrovnik4, dubrovnik5],
  },
  Tokyo: {
    country: "Japan",
    city: "Tokyo",
    lat: "35.690",
    lon: "139.692",
    from: "16-08-2020",
    to: "01-08-2020",
    date: "16-08-2020 -> 01-08-2020",
    price: 530,
    kidPrice: 240,
    details: {
      desc:
        "Located in the center of Sunny Beach, just 250 meters from the sea and close to shops, bars and restaurants.",

      rooms:
        "Double (with the possibility of an extra bed), spacious, tastefully furnished, with a bathroom (toilet, bath tub or shower, hair dryer). Equipment: individually controlled air-conditioning, heating, telephone, satellite TV, fridge with mini bar (extra content), balcony or terrace.",

      facilities: [
        "reception, safe deposit 6 BGN / day",
        "swimming pool, pool bar",
        "restaurant, 2 bars",
        "playground, paddling pool",
        "massages, billiards, gym, spa (extra charge)",
        "Wi-Fi payable (1 hour - 2.4 BGN; 1 day - 12 BGN; 3 days - 24 BGN; 7 days - 36 BGN)",
      ],


      facilitiesIcons: [
        ['faWifi','Free Wifi'],['faSwimmingPool','Swimming Pool'],['faParking','Free Parking'],['faGlassCheers','Open Bar']
      ],

      meals: [
        "ALL INCLUSIVE - breakfasts, lunches and dinners, soft drinks and local alcohols",
        "ONLY DINNERS - lunches and dinners",
        "ONLY BREAKFAST - breakfasts",
      ],

      baggage: `
      For flights with charter flights, the price includes hand baggage of 5 kg and 20 kg of main luggage
      The price includes hand baggage (40x20x25)
      Customers can buy additional luggage weighing 10 kg (55x40x20)
      - EXBAG service - PLN 125 / person,
      You can also buy checked baggage with a weight of each booking;
      - 20 kg - 245 PLN
      Warning! If luggage is added after confirming the booking, its price will be higher. Katowice (WizzAir);
      The price includes hand baggage (40x30x20);
      Customers can buy additional luggage weighing 10 kg (55x40x23)
      - EXBAG service - PLN 110 / person
      You can also buy checked baggage with a weight of each booking;
      - 20 kg - PLN 340
      - 32 kg - 470 PLN
      Warning! If luggage or additional services are added after confirming the booking, their price will be higher
      Warsaw (WizzAir);
      The price includes hand baggage (40x30x20);
      Customers can buy additional luggage weighing 10 kg (55x40x23)
      - EXBAG service - PLN 110 / person
      You can also buy checked baggage with a weight of each booking;
      - 20 kg - PLN 340
      - 32 kg - 470 PLN
      Warning! If luggage or additional services are added after confirming the booking, their price will be higher`,

      term: [
        {from: "15-07-2020", to: "01-08-2020"},
        {from: "16-07-2020", to: "02-08-2020"},
        {from: "17-07-2020", to: "03-08-2020"},
        {from: "18-07-2020", to: "04-08-2020"},
        {from: "19-07-2020", to: "05-08-2020"},
      ],

      flights: {
        RyanAir: {
          Katowice: {
            departure: ['15:35',"15-07-2020"],
            arrival: ['15:35',"01-08-2020"]
          },
          Gdansk: {
            departure: ['12:30',"16-07-2020"],
            arrival: ['12:30',"02-08-2020"],
          },
          Warszawa: {
            departure: ['17:30',"17-07-2020"],
            arrival:   ['12:30',"03-08-2020"],
          },

          Krakow: {
            departure:['17:30',"18-07-2020"],
            arrival:  ['12:30',"04-08-2020"],
          },

          Wroclaw: {
            departure:['17:30',"19-07-2020"],
            arrival:  ['12:30',"05-08-2020"],
          },
        },

        WizzAir: {
          Wroclaw: {
            departure: ['17:30',"19-07-2020",],
            arrival:   ['12:30',"05-08-2020"],
          },
          Krakow: {
            departure: ['17:30','18-07-2020'],
            arrival:   ['12:30','04-08-2020'],
          },
        },
      },
    },
    photos: [dubrovnik1, dubrovnik2, dubrovnik3, dubrovnik4, dubrovnik5],
  },
};

export default Offers;
