import axios from "axios";
import { API_KEY } from "../constants/apiKey";
import { BASE_URL } from "../constants/url";

export const getRecommendations = (param, setState) => {
  axios
    .get(`${BASE_URL}movie/${param}/recommendations?api_key=${API_KEY}&language=en-US&page=1`)

    .then((response) => {
      setState(response.data.results);
    })

    .catch((error) => {
      console.log(error.message);
    });
};
