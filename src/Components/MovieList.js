import React from "react";

function MovieList({ movies }) {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Genre</td>
            <td>Year</td>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.title}>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieList;
