import axios from 'axios';

const instance = axios.create({
  baseURL: "https://fake-travel-agency-db.firebaseio.com"
})

export default instance;