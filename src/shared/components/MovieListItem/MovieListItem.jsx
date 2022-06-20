import "./MovieListItem.css";
import {IMAGE_API_PREFIX} from "../../constants";

export function MovieListItem({movie}) {
    const imgUrl = `${IMAGE_API_PREFIX}w300${movie["poster_path"]}`;
    const imgAlt = `${movie.title} Poster`;

    return (
        <div className="movie-list-item">
            <div className="movie-list-item__image">
                <img src={imgUrl} alt={imgAlt}/>
                {/*    Heart component here*/}
            </div>
            <div className="movie-list-item__info">
                <h4>{movie.title}</h4>
                <p className="movie-list-item__info-overview">{movie.overview}</p>
                <div className="movie-list-item__info-release-date">
                    <strong>Release Date: </strong> {movie["release_date"]}
                </div>
                <div className="movie-list-item__info-rating">
                    <strong>Rating: </strong> {movie["vote_average"]}
                </div>
            </div>
        </div>
    )
}