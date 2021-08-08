import React from 'react'
import { MovieCard } from './MovieCard'

export const MovieList = ({movies, FilterTitel, FilterRating }) => {
    return (
        <div style={{display:"flex", flexWrap:"wrap",justifyContent:"space-around" ,marginTop:"20px" ,alignContent:"center" 
         }}>
            {movies
            
          .filter((movie)=>
           
           movie.name.toLowerCase().trim().includes(FilterTitel.toLowerCase().trim())&&
           movie.rating >= FilterRating
            
           )
        
            .map((movie)=>(
                <MovieCard movie={movie} key={movie.id}/>
            )
            )}
        </div>
    )
}
