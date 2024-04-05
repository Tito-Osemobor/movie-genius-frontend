import fetchApi from "./fetch";

const BASE_URL = process.env.REACT_APP_BASE_URL + "/api/v1/auth";

const auth = {
  userExists : async (email) => {
    return fetchApi(`${BASE_URL}/exists`,{
      headers: {
        email: email
      }
    })
  }
}

export default auth;
