import React from "react";
// import SearchIcon from "@mui/icons-material/Search";

function Movies()  {
  return (

    <div className="container">
      <div className="row">
        <div className="moviespage__wrapper">
          <h1 className="home-h1">Browse our Movies</h1>
          <div className="moviespage__keyword--search">
            <input
              className="moviespage__keyword--input"
              type="text"
              placeholder="search by movie name"
            />
          </div>
          <div className="button-container">
            {/* <button className="searchicon">
              <SearchIcon />
            </button> */}
          </div>
        </div>
        <h1 className="home-h3">Search Results:</h1>
        <hr></hr>
        <div className="movie__wrapper">
          
        </div>
      </div>
    </div>
  );
}

export default Movies;