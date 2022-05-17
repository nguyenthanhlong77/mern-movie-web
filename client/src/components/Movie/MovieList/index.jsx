import React from 'react';
import PropTypes from 'prop-types';
import Movie from '../Movie';
import "./style.scss"

MovieList.propTypes = {
    movieList: PropTypes.array,
    movieListTitle: PropTypes.string,
};



function MovieList(props) {
    return (
        <div className='movie-list'>
            {/* <div className="title-cate">
                <h2>{props.movieListTitle}</h2>
            </div>
            <div className="movies">
                {
                    props.movieList.map((item) => {
                        return (
                            
                            <Movie 
                                name={item.name}
                                other_name={item.other_name}
                                views={item.views}
                                rate={item.rate}
                                episode={item.episode}
                                URL_image={item.URL_image}
                            />
                        )
                    })
                }
            </div> */}
            <div className="title-cate">
                <h2>Phim lẻ</h2>
            </div>
            <div className="movies row">
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
            </div>
        </div>
    );
}

export default MovieList;