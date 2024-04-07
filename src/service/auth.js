import fetchApi from "./fetch";

const BASE_URL = process.env.REACT_APP_BASE_URL + "/api/v1/auth";

const auth = {
  login : async (data) => {
    return fetchApi(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  },
  userExists : async (email) => {
    return fetchApi(`${BASE_URL}/exists`,{
      headers: {
        email: email
      }
    })
  }
}

export default auth;
