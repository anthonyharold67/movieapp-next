import React from "react";
import MovieContainer from "@/containers/movie";
import { notFound } from "next/navigation";

// import movies from "@/mocks/movies";

// const API_URL = "https://api.themoviedb.org/3";

// const getMovie = async (id) => {
//   const response = await fetch(
//     `${API_URL}/movie/${id}?api_key=${process.env.API_KEY}&page=1`
//   );
//   const data = await response.json();

//   return data;
// };
import { getMovie } from "@/services/movie";

const MoviePage = async ({ params,searchParams}) => {
  // const movieDetail = movies.results.find((movie) => movie.id === +params.id); //params ile gelen veriler string olarak gelir
  const movieDetail =  await getMovie(params.id) ;
  console.log(movieDetail)
  if (movieDetail.status_code === 34) {
    notFound();
  }

  // if (searchParams.error === "true") {
  //   throw new Error("Something went wrong!");
  // }

  return <MovieContainer movie={movieDetail} />;
};

export default MoviePage;
