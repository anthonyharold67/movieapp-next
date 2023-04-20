import React from 'react'

import Movies from "@/mocks/movies";
import FeaturedMovie from '@/components/featured-movie';
import Categories from '@/components/categories';

import Genres from "@/mocks/genres";
import MoviesSection from '@/components/movies-section';

const HomeContainer = ({topRatedMovies = [], popularMovies = [], categories = [],selectedCategory}) => {
  return (
    <div>
        <FeaturedMovie movie={topRatedMovies?.[0]}/>
        <Categories categories={categories.slice(0,5)} />
        {
          selectedCategory.movies.length > 0 && (
            <MoviesSection title={categories.find(c => c.id === +selectedCategory.id).name} movies={selectedCategory.movies} />
          )
        }
        <MoviesSection title="Popular Films" movies={topRatedMovies.slice(1,7)} />
        <MoviesSection title="Your Favorites" movies={popularMovies.slice(7,13)} />
    </div>
  )
}

export default HomeContainer