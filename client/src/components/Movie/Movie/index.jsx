import React from "react";
import ReactDOM from "react-dom"
import {Link} from "react-router-dom"
import PropTypes from "prop-types";
import "./style.scss";
Movie.propTypes = {
  name: PropTypes.string,
  other_name: PropTypes.string,
  views: PropTypes.number,
  rate: PropTypes.number,
  episode: PropTypes.array,
  URL_image: PropTypes.string,
  
};

const movie_example = {
  name: "Công tố viên chuyển sinh",
  other_name: "Again my life",
  views: "100000",
  rate: 9,
  episode: ["full"],
  URL_image: "https://static.247phim.com/164682/conversions/6256b0c0e4be2_Again-My-Life-%282022%29-190_274.jpg",
}

function change_view(views) {
  let result = 0;
  let shortView = "";
  if (views >= 1000000){
    result = views/1000000;
    result =  result.toFixed(1);
    shortView = result.toString() + "M"
  } else{
    result = views/1000;
    result =  result.toFixed(1);
    shortView = result.toString() + "K"
  }
  
  return shortView
}

function Movie(props) {


  return (
    <div className="movie">
      {/* <a href="https://247phim.com/xemphim/cong-to-vien-chuyen-sinh-23918">
        <div className="movie-img">
          <img src={props.URL_image} alt={props.other_name}/>
          <i class="bi bi-play-circle"></i>
          <span className="movive-episode">{props.episode}</span>
        </div>
        <h3 className="movie-name">{props.name}</h3>
        <p className="movie-other_name">{props.other_name}</p>
        <div className="movie-review">
            <div className="movie-views">
                <i class="bi bi-eye-fill"></i>
                <p className="count-views">{props.views}</p>
            </div>
            <div className="movie-rate">
              icon start * rate
            </div>
            
        </div>
      </a> */}




        <a className="movie-url" href="https://247phim.com/xemphim/cong-to-vien-chuyen-sinh-23918">
          <div className="movie-img">
            <img src={movie_example.URL_image} alt={movie_example.other_name}/>
            <i class="bi bi-play-circle"></i>
            <span className="movive-episode">{movie_example.episode}</span>
          </div>
          <h3 className="movie-name">{movie_example.name}</h3>
          <p className="movie-other_name">{movie_example.other_name}</p>
          <div className="movie-review row">
              <div className="movie-review-views col-md-6">
                  <i class="bi bi-eye-fill"></i>
                  <p className="count-views">{change_view(movie_example.views)}</p>
              </div>
              <div className="movie-review-rate col-md-6">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>

              </div>
              
          </div>
        </a>
      </div>
  );
}

export default Movie;
