import {MovieListItem} from "../shared/components/MovieListItem/MovieListItem";
import {DEMO_MOVIE} from "../shared/constants";

export default function Home() {
    return (
        <MovieListItem movie={DEMO_MOVIE}/>
    )
}