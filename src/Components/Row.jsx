import React, { useEffect,useState } from 'react'
import tmdbAxiosInstance from '../tmdbAxiosInstance'; 
import './Row.css'


function Row({title,fetchUrl,isPoster}) {

console.log(fetchUrl);

const [allMovies,setAllMovies]=useState()
const base_url = `https://image.tmdb.org/t/p/original/`;


const fetchData=async()=> {//async function
 const {data} = await tmdbAxiosInstance.get(fetchUrl)
//  console.log(data.results);
setAllMovies(data.results)
}                  
console.log(allMovies);


useEffect(()=>{
  fetchData()
},[])//[]-dependancy array to execute program only once


  return (
    <div className='row' >  
      <h1>{title}</h1>

        <div className='movies-row'>
          {
            allMovies?.map(item=>(
              <img className={`${isPoster && 'movie-poster'} movie-img`} src={`${base_url}/${isPoster?item.poster_path:item?.backdrop_path}`} alt=" noimg1 " />
            ))
          }
          
        </div>   

 </div>
  )
}

export default Row