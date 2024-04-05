const fetchApi = async (endpoint, options = {}, auth = false) => {
  try {
    // const authToken = getAuthToken();
    const authToken = process.env.REACT_APP_AUTH_TOKEN

    const response = await fetch(endpoint, {
      ...options,
      headers: auth ? {
        ...options.headers,
        'Authorization': `Bearer ${authToken}`,
      } : options.headers
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error making API request:", error);
    throw error;
  }
};

export default fetchApi;
