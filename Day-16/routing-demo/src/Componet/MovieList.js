import { Link, Routes, Route } from "react-router-dom";
import MovieDetail from "./MovieDetails";

function MovieList({ movies }) {
  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`./${movie.id}`}>{movie.name}</Link>
          </li>
        ))}
      </ul>
      <div style={{ marginLeft: "40px" }}>
        <Routes>
          <Route path=":id" element={<MovieDetail />} />
        </Routes>
      </div>
    </div>
  );
}
export default MovieList