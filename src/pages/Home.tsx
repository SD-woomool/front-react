import React from "react";
import NaverMap from "../components/maps/NaverMap";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div>
      <SearchBar></SearchBar>
      <NaverMap />
    </div>
  );
}

export default Home;
