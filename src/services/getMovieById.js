import axios from "axios";
import { API_KEY } from "../constants/apiKey";
import { BASE_URL } from "../constants/url";

export const getMovieById = (id, setState) => {
  axios
    .get(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`)

    .then((response) => {
      setState(response.data);
    })

    .catch((error) => {
      console.log(error.message);
    });
};
