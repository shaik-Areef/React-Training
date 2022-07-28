import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import Print from './Print-Page';
// import MovieList from './Componet/MovieList';

import MovieDetail from './Componet/MovieDetails';
import movies from './Componet/MockMovies';
import { lazy, Suspense } from 'react';

const MovieList = lazy(() => import('././Componet/MovieList'));


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <NavLink to="/movies">Movies</NavLink>
              </li>
              <li>
                <Link to="/print">Print</Link>
              </li>
            </ul>
          </nav>

          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="Print" element={<Print />} />
              {/* <Route path="movies" element={<MovieList movies={movies} />} /> */}
              {/* <Route path="movies/:id" element={<MovieDetail />} /> */}
              <Route path="movies/*" element={
                <Suspense>
                  <MovieList movies={movies} />
                </Suspense>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
