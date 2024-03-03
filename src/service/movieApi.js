const BASE_URL = "http://localhost:8080/moviegenius/movies";

const fetchApi = async (endpoint, options = {}) => {
  try {
    // const authToken = getAuthToken();
    const authToken = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjRAYWRtaW4uY29tIiwiaWF0IjoxNzA5MDMwMTEyLCJleHAiOjE3MDk2MzQ5MTJ9.LlK5iLWnP3WkkZRAfqQQI64bdSr6KbLvKyH_eFJMkoI";

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        ...options.headers,
        'Authorization': `Bearer ${authToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error making API request:", error);
    throw error;
  }
};

const movieApi = {
  getRandomPosters : async () => {
    return fetchApi("/posters");
  }
}

export default movieApi;
