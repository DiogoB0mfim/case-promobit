import axios from "axios";
import { API_KEY } from "../constants/apiKey";
import { BASE_URL } from "../constants/url";

export const getTrailer = (param, setState) => {
  axios

    .get(`${BASE_URL}movie/${param}/videos?api_key=${API_KEY}&language=en-US`)

    .then((response) => {
      setState(response.data.results);
    })

    .catch((error) => {
      console.log(error.message);
    });
};
