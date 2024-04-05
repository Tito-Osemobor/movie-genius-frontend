import fetchApi from "./fetch";

const BASE_URL = process.env.REACT_APP_BASE_URL + "/moviegenius/movies";

const movieApi = {
  getRandomPosters : async () => {
    return fetchApi(`${BASE_URL}/posters`)
  }
}

export default movieApi;
