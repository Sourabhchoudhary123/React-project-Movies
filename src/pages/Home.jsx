import { useState, useEffect } from 'react';
import { fetchMovies } from '../services/omdbService';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';

export default function Home() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    if (query) {
      fetchMovies(query, page, type).then((data) => {
        if (data.Response === 'True') {
          setMovies(data.Search);
          setTotalResults(parseInt(data.totalResults));
          setError('');
        } else {
          setMovies([]);
          setError(data.Error);
        }
      });
    }
  }, [query, page, type]);

  return (
    <div className="Movie-detail">
      <SearchBar onSearch={setQuery} />
      <FilterDropdown onSelect={setType} />
      {error && <p className="para">{error}</p>}
      <div className="Movie-details">
        {movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)}
      </div>
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(totalResults / 10)}
        onPageChange={setPage}
      />
    </div>
  );
}