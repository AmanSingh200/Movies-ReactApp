import React, { Component } from 'react'
import { movies } from './getmovies'
export default class Banner extends Component {
  render() {
      let movie=movies.results[0]
      
    return (
        <>
        {
            movie==" "?
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only"></span>
            </div> :
             <div className="card  banner-card">
             <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}   alt={movie.title} className="card-img-top banner-img"/>
            {/* {<div className="card-body">} */}
                <h1 class="card-title banner-title">{movie.original_title}</h1>
                <p class="card-text banner-text">{movie.overview}</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            {/* </div> */}
        </div>
  }
        </>
    )
  }
}
