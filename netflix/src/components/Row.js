import React,{useState,useEffect} from 'react'
import instance from '../baseUrl'
import './Row.css'

function Row({isLargeRow,title,fetchUrl}) {
  
   //Set movies state
   const [movies,setMovies]=useState([])

    //create a function
    async function fetchData(){
      const result = await instance.get(fetchUrl)
      console.log(result); 
        setMovies(result.data.results)
    }


    useEffect(()=>{
        fetchData()
    },[])

    console.log(movies);
    const base_url = "https://image.tmdb.org/t/p/original/";

    return (
    <div className='row'>
     <h1>{title}</h1>
     <div className='movies'>
        {
            movies.map(movie=>(
                <img className='movie' src={`${base_url}${isLargeRow ?movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
            ))
        }
     </div>
    </div>
  )
}

export default Row
