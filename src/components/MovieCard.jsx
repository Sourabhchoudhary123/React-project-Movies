import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
  return (
    <div className='mainposter'>
    <Link to={`/movie/${movie.imdbID}`} className="poster">
      <img src={movie.Poster} alt={movie.Title} className="img" />
      <h2 className="text-lg font-bold mt-2">{movie.Title}</h2>
      <p>{movie.Year}</p>
    </Link>
    </div>
  );
}