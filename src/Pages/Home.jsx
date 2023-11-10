import React from "react";
// import SearchIcon from "@mui/icons-material/Search";

function Home() {
  return (
    <section>
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1 className="home-h1">America's Most Awarded Movie Platform</h1>
            <h2 className="home-h2">Browse for your favorite movies below</h2>
            <div className="input__container">
              <input placeholder="Search For Movies Here..." />
            </div>
            <button className="btn">
              {/* <SearchIcon className="searchicon" /> */}
            </button>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Home;