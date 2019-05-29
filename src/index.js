import React from 'react';
import ReactDOM from 'react-dom';
import MovieCard from './components/MovieCard';


const jurassicWorldGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];

ReactDOM.render(
  <MovieCard
    title="Jurassic World"
    genres={jurassicWorldGenres} 
  />,
  document.getElementById('root')
);




