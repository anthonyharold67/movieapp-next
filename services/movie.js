const API_URL = "https://api.themoviedb.org/3";

// tek bir fonksiyon oluşturup parametrelerle farklı endpointlere istek atabildik
const fetchMovieApi = async (pathname, query = "") => {
  try {
    const response = await fetch(
      `${API_URL}${pathname}?api_key=${process.env.API_KEY}${query}&page=1`
    );
    const data = await response.json();

    // if (data.status_code == 34) {
    //     throw new Error("error");
    // }
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const getSingleCategory = async (id) => {
  return fetchMovieApi("/discover/movie", `&with_genres=${id}`);
};

const getCategories = async () => {
  return fetchMovieApi("/genre/movie/list");
};

const getTopRatedMovies = async () => {
  return fetchMovieApi("/movie/top_rated");
};

const getPopularMovies = async () => {
  return fetchMovieApi("/movie/popular");
};

const getMovie = async (id) => {
  return fetchMovieApi(`/movie/${id}`);
};

export {
  getCategories,
  getPopularMovies,
  getSingleCategory,
  getTopRatedMovies,
  getMovie,
};
