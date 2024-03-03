const BASE_URL = process.env.REACT_APP_MOVIE_BASE_URL

const fetchApi = async (endpoint, options = {}) => {
  try {
    // const authToken = getAuthToken();
    const authToken = process.env.REACT_APP_AUTH_TOKEN

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
