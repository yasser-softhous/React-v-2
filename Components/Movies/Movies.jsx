import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from '../Card/Card'

export const Movies = () => {

const [movieList,setMovieList]=useState([])
const getApiData=async (url,options)=>{
    try {
          const res= await axios.get(url,options)
            setMovieList(res.data.results)
    } catch (error) {
        console.log(error)
    }
  
}

useEffect(()=>{
    const details = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTAwMTVlOTVkOTNiNmVkNjE1YWEzODZjOGZlMGExMSIsIm5iZiI6MTcyNzcyNTMyNS43OTkxODcsInN1YiI6IjY2Zjk3NDY3ZjVkNTZlOWVkOGEyNTVmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pxwoEZroolqt2nB_9Mwvb3Ns104OrPj6owmFNpDu1uo'
        }
      }
    getApiData('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',details)
},[])
  return (
    <>
      <div  className="row container">
    {
        movieList.map((item,index)=>{
            return <Card key={item.id}  index={index} item={item} />

        })
    }

    </div>
 
    </>
  )
}
