import axios from "axios"

const getData = (place) => {
    return axios.get(`https://api.weatherapi.com/v1/forecast.json?key=def8d1526e724975820160722242203&q=${place}`)
  }

export default getData