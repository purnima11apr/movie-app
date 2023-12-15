import React from "react";
import moviesData from "../data/moviesData";

const MovieList = ({updateSelectedMovie}) => {

    return(
        <div className="movieList">
            {
            moviesData.map((movie , index) =>{
              
              return <h3 key={index} onClick={() => updateSelectedMovie(movie)}
              >{movie.title}</h3>
            }) }
       
       
       
        </div>
    )
}



export default MovieList;