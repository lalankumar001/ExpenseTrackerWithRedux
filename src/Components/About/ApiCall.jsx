import React, { useEffect, useState } from 'react'

const ApiCall = () => {
  const [movies , setMovies] = useState([]);
  const [isLoading , setIsLoading] = useState(false);
  const [error , setError] = useState(null);

  useEffect(()=>{
    fetchMoviesHandl();
  },[]);
    async function fetchMoviesHandl(){
        setIsLoading(true);
        setError(null);
        try{
    const response = await fetch('https://swapi.dev/api/films/')
    const data = await response.json()
    
    const transformedMovies = data.results.map((moviedata) =>{
        return{
            id: moviedata.id,
            title: moviedata.title,
            poster_path: moviedata.poster_path,
            release_date: moviedata.release_date
        } 
        })
      setMovies(transformedMovies); 
      setIsLoading(false); 
  }catch(error){
    setError(error.message);
    setIsLoading(false);
  }
}
  return(
    <div>
        <form action="" className='mt-2' >
            <input type="text" name="search" placeholder="Search" />
            <button type="submit">Add Movie</button>
        </form>
      <h1>Api Call</h1>
      <button onClick={fetchMoviesHandl}>Fetch Movies</button>
      {isLoading && <p>Loading...</p>}
      {!isLoading && error && <p>'Something went wrong ....Retrying' or Erro h Api Check Karo</p>}
      <ul>
        <li>A New Movies added through add btn</li>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
     </div>
  )
}

export default ApiCall