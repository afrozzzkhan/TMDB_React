import { useState, useEffect, memo } from 'react';
import MovieCard from '../MovieCard';
import './Movies.css';

function Movies() {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=766d2d6220e8db331beee00459b205ce`).then((res) => {
      return res.json();
    }).then((res) => {
      console.log(res);
      setMovies(res.results);
    })
  }, []);
  return (
    <>
      <h1>Trending Movies</h1>
      
        <div className='card-parent'>

        {
          movies.map((movie) => {
            return (<MovieCard movie={movie} key={movie.id} />)
          })
        }
        </div>
      
      
    </>
  )
}

export default Movies;