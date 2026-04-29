import React from 'react'
import './movielist.css';
import MovieCard from './MovieCard';
import AddMovie from './AddMovie';

function MovieList({movies = [], showAdd, setadd, text, rate}) {
const search = text ? text.toLowerCase() : "";

  return (
    <>
    {showAdd && (
    <div className='add'>
      <AddMovie movies={movies} setadd={setadd} />
    </div>
      )}
    {/* <div className='parent'>
       {movies.map((el)=><MovieCard el={el}/>)}
        {movies.filter((el)=>(el.titre).toLowerCase().includes(text.toLowerCase()) && el.rating>=rate).map((el)=><MovieCard el={el}/>)}
    </div> */}
    <div className='parent'>
    {movies
  .filter((el) =>
    (el?.titre || "").toLowerCase().includes(search) &&
    (el?.note || 0) >= rate
  )
  .map((el) => (
    <MovieCard key={el.id || el.titre} el={el} />
  ))
}
</div>
  
    </>
  )
}

export default MovieList


