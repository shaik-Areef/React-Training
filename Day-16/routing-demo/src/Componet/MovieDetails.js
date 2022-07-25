import { useParams } from "react-router";
import movies from "./MockMovies";


function MovieDetail() {
    let { id } = useParams();
    id = Number(id);
    const movie = movies.find((movie) => movie.id === id);

    return (
        <div>
            <h3>{movie.name}</h3>
            <h3>type : {movie.type}</h3>
            <p>{movie.description}</p>
        </div>
    );
}
export default MovieDetail