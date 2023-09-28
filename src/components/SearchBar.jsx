import React, { useState, useEffect } from "react";
import classes from "./SearchBar.module.css";
import AnimeList from './AnimeList';

function SearchBar() {

  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");

useEffect(() => {
    fetch("https://api.jikan.moe/v4/characters?page=1&limit=15")
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        setResult(response);
      });
  }, []);

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }


  function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://api.jikan.moe/v4/characters?page=1&limit=15&q=${search}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        setResult(response);
      });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={classes.search}>
          <input type='text' onChange={handleSearchChange} placeholder="Enter name here" required />
          <button type="submit">Search</button>
        </div>
      </form>
        <hr/>
      <AnimeList anime_data={result} />
    </>
  );
}

export default SearchBar;
