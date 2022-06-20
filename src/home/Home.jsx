import {DEMO_MOVIE} from "../shared/constants";
import MovieList from "../shared/components/MovieList/MovieList";
import {Container} from "react-bootstrap";

export default function Home() {
    return (
        <Container>
            <h1 className="page-header">Popular Movies</h1>
            <MovieList movies={[DEMO_MOVIE, DEMO_MOVIE, DEMO_MOVIE, DEMO_MOVIE, DEMO_MOVIE,]}></MovieList>
        </Container>
    )
}