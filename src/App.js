import React, { useState, useEffect } from "react";
import "./App.css";
import MoviesList from "./components/movieslist/MoviesList";
import NavBar from "./components/navbar/NavBar";
import AddMovie from "./components/modal/AddMovie";
import { data } from "./data";
function App() {
  const [movies, setMovies] = useState(data);
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState(0);

  return (
    <div className="App">
      <NavBar setSearch={setSearch} setRate={setRate} rate={rate} />
      <section>
        <AddMovie movies={movies} setMovies={setMovies} />
        <MoviesList movies={movies} search={search} rate={rate} />
      </section>
    </div>
  );
}

export default App;
