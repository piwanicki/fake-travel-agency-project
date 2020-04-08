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
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel eros leo. Integer convallis eleifend nulla, sed ornare mauris convallis eu. Fusce pellentesque cursus ornare. Donec volutpat varius posuere. Vivamus fringilla leo vel ipsum sollicitudin, id eleifend magna sodales. Etiam eget feugiat arcu, vel commodo orci. Maecenas lacinia, lacus ut hendrerit consequat, tortor risus dapibus augue, vel accumsan tortor diam ac erat. Ut ante mauris, pellentesque nec posuere eget, interdum ac tellus. Quisque justo diam, pharetra ullamcorper libero at, efficitur tincidunt libero. Vestibulum non tincidunt ligula. Aliquam congue efficitur arcu.",
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
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel eros leo. Integer convallis eleifend nulla, sed ornare mauris convallis eu. Fusce pellentesque cursus ornare. Donec volutpat varius posuere. Vivamus fringilla leo vel ipsum sollicitudin, id eleifend magna sodales. Etiam eget feugiat arcu, vel commodo orci. Maecenas lacinia, lacus ut hendrerit consequat, tortor risus dapibus augue, vel accumsan tortor diam ac erat. Ut ante mauris, pellentesque nec posuere eget, interdum ac tellus. Quisque justo diam, pharetra ullamcorper libero at, efficitur tincidunt libero. Vestibulum non tincidunt ligula. Aliquam congue efficitur arcu.",
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
    details: "",
    photos: [dubrovnik1, dubrovnik2, dubrovnik3, dubrovnik4, dubrovnik5]
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
    photos: [dubrovnik1, dubrovnik2, dubrovnik3, dubrovnik4, dubrovnik5]
  },
  Lisboa: {
    country: "Portugal",
    city: "Lisboa",
    from: "18-07-2020",
    to: "01-08-2020",
    date: "18-07-2020 -> 01-08-2020",
    price: 900,
    kidPrice: 240,
    details: "",
    photos: [dubrovnik1, dubrovnik2, dubrovnik3, dubrovnik4, dubrovnik5]
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
    details: "",
    photos: [dubrovnik1, dubrovnik2, dubrovnik3, dubrovnik4, dubrovnik5]
  },
};

export default Offers;
