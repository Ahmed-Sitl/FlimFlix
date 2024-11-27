import axios from "axios";

const TMDB_API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

interface TMDBResponse {
  [key: string]: any; // Define the expected structure of the TMDB response
}

interface FilterOptions {
  [key: string]: string | number | boolean; // Filters can have various types
}

/**
 * Fetches data from TMDB API with optional filters.
 * @param endpoint - The specific endpoint of the API (e.g., '/movie/popular').
 * @param language - The language for the response data, defaults to "en".
 * @param filters - Additional filters to be added as query parameters.
 * @returns Parsed JSON data from the TMDB API.
 * @throws Will throw an error if the request fails or the API key is missing.
 */
export async function fetchData(
  endpoint: string,
  language = "en",
  filters: FilterOptions = {}
): Promise<TMDBResponse> {
  if (!TMDB_API_KEY) {
    throw new Error(
      "Missing TMDB API Key. Please set NEXT_PUBLIC_API_KEY in your environment."
    );
  }

  const url = `${BASE_URL}${endpoint}`;

  try {
    const response = await axios.get<TMDBResponse>(url, {
      params: {
        api_key: TMDB_API_KEY,
        language,
        include_adult: false,
        ...filters, // Spread the filters into query parameters
      },
    });

    return response.data; // Axios automatically parses JSON
  } catch (error: any) {
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error(
        `Request failed with status: ${error.response.status} (${error.response.statusText})`,
        {
          url,
          error: error.response.data,
        }
      );
      throw new Error(
        `Error fetching data from TMDB: ${error.response.statusText}`
      );
    } else if (error.request) {
      // No response received
      console.error("No response received from TMDB API", { url, error });
      throw new Error(
        "No response received from TMDB API. Please try again later."
      );
    } else {
      // Other errors (e.g., network issues)
      console.error("Error setting up the request", { url, error });
      throw new Error(`Error setting up the request: ${error.message}`);
    }
  }
}
