import React from "react";
import HomeContainer from "@/containers/home";
import movies from "@/mocks/movies";
import {
  getCategories,
  getPopularMovies,
  getSingleCategory,
  getTopRatedMovies,
} from "@/services/movie";

// async function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// bu fonksiyonları clean code için service kısmına taşıdık
// const getSingleCategory = async (id) => {
// //   const response = await fetch(
// //     `${API_URL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=${id}&page=1`
// //   );
// //   const data = await response.json();

// //   return data;
//     return fetchMovieApi("/discover/movie", `with_genres=${id}`);
// };

// const getCategories = async () => {
// //   const response = await fetch(
// //     `${API_URL}/genre/movie/list?api_key=${process.env.API_KEY}&page=1`
// //   );
// //   const data = await response.json();

// //   return data;
//   return fetchMovieApi("/genre/movie/list");
// };

// const getTopRatedMovies = async () => {
// //   const response = await fetch(
// //     `${API_URL}/movie/top_rated?api_key=${process.env.API_KEY}&page=1`
// //   );
// //   const data = await response.json();

// //   return data;
//   return fetchMovieApi("/movie/top_rated");
// };

// const getPopularMovies = async () => {
// //   const response = await fetch(
// //     `${API_URL}/movie/popular?api_key=${process.env.API_KEY}&page=1`
// //   );
// //   const data = await response.json();

// //   return data;
// return fetchMovieApi("/movie/popular");
// };

const HomePage = async ({ params }) => {
  // await delay(4000);

//   const topRatedPromise = getTopRatedMovies();
//   const categoriesPromise = getCategories();
//   const popularPromise = getPopularMovies();
//   const [
//     { results: topRatedMovies },
//     { results: popularMovies },
//     { genres: categories },
//   ] = await Promise.all([topRatedPromise, popularPromise, categoriesPromise]);

  //   const {results:topRatedMovies} = await getTopRatedMovies();
  //   const {results:popularMovies} = await getPopularMovies();

  const [
    { results: topRatedMovies },
    { results: popularMovies },
    { genres: categories },
  ] = await Promise.all([getTopRatedMovies(), getPopularMovies(), getCategories()]);

  let selectedCategory;
  if (params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }
  return (
    <HomeContainer
      topRatedMovies={topRatedMovies}
      popularMovies={popularMovies}
      categories={categories}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory.slice(0, 7) : [],
      }}
    />
  );
};

export default HomePage;
