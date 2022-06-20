import {MovieListItem} from "../MovieListItem/MovieListItem";
import {Container} from "react-bootstrap";

export default function MovieList({movies}) {
    return (
        <Container>
            <div className="movie-list">
                <div className="movie-list-entry">
                    {
                        movies.map((movie, index) => {
                            return <>
                                <MovieListItem key={movie.id} movie={movie}/>
                                {index + 1 < movies.length && <hr/>}
                            </>
                        })
                    }
                </div>
            </div>
        </Container>
    )
}
