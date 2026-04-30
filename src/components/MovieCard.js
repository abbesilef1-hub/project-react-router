import React from 'react'
import './moviecard.css';
import ReactStars from 'react-stars'
import { Link } from 'react-router-dom';


function MovieCard({el}) {
  return (
    <>
    <Link to={`/trailer/${el.id}`}>
      <div className="container">
        <div className="cellphone-container">
          <div className="movie">
            <div className="menu"></div>
            <div className="movie-img">
              <img src={el.posterURL} alt='imgsmov'/>
            </div>
            <div className="text-movie-cont">
              <div className="mr-grid">
                <div className="col1 namemovie">
                  <h3>{el.titre}</h3>
                  <ul className="movie-gen">
                    <li>PG-13 /</li>
                    <li>2h 49min /</li>
                    <li>Adventure, Drama, Sci-Fi,</li>
                  </ul>
                </div>
              </div>
              <div className="mr-grid summary-row">
                <div className="col2">
                  <h5>SUMMARY</h5>
                </div>
                <div className="col2"></div>
              </div>
              <div className="mr-grid">
                <div className="col1">
                  <p className="movie-description">{el.description}</p>
                </div>
              </div>
             
                
              <div className="mr-grid action-row" >
                <div className="col2 star">
                  <div className="watch-btn">
                    <h3>
                      <i className="material-icons"></i>WATCH TRAILER
                    </h3>
          
                  </div>
                    <ReactStars count={5} size={24} color2={"#ffd700"} edit={false} value={el.note} />
                </div>
              </div>
          
            </div>
          </div>
        </div>
      </div>
      </Link>
      {/* <a href="https://dribbble.com/geehm" target="_blank">
        <img className="dribbble-link" src={el.posterurl} />
      </a> */}
    </>

  )
}

export default MovieCard