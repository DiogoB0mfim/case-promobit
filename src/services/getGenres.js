import axios from "axios";
import { BASE_URL } from "../constants/url";
import { API_KEY } from "../constants/apiKey";

export const getGenres = (setState) => {
  axios
    .get(`${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`)

    .then((response) => {
      setState(response.data.genres);
    })

    .catch((error) => {
      console.log(error.message);
    });
};
