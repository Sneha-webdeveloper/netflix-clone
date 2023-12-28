import React,{useEffect,useState} from 'react'
import './Banner.css'
import tmdbAxiosInstance from '../tmdbAxiosInstance';

function Banner({fetchUrl}) {

    const [movie,setMovie]=useState({})
    const base_url = `https://image.tmdb.org/t/p/original/`;
    
    
    const fetchData=async()=> {//async function
     const {data} = await tmdbAxiosInstance.get(fetchUrl)
    //  console.log(data.results[Math.floor(Math.random()*data.results.length)]);
    setMovie(data.results[Math.floor(Math.random()*data.results.length)])
   
    }                  
    console.log(movie);
    
    
    useEffect(()=>{
      fetchData()

    },[])//[]-dependancy array to execute program only once
    
    

  return (
    <div style={{
        height:"600px",
        backgroundImage:`url(${base_url}/${movie?.backdrop_path})`,
        backgroundSize:'cover',
        backgroundAttachment:'fixed'

    }}>
        <div className='banner-content'>
<h1>{movie?.name}</h1>
<h2>{movie?.overview}</h2>
<button className='btn'>play now &#9658;</button>
        </div>
    </div>
  )
}

export default Banner