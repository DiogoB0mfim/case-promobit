import axios from "axios";
import { BASE_URL } from "../constants/url";
import { API_KEY } from "../constants/apiKey";

export const getDayMovies = (setState, page) => {
  axios
    .get(`${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)

    .then((response) => {
      setState(response.data.results);
    })

    .catch((error) => {
      console.log(error.message);
    });
};
