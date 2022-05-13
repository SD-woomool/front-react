import React from "react";
import TopPlacesBar from "./TopPlacesBar";
import SearchPlaces from "./SearchPlaces";
import PlacesTags from "./PlacesTags";

function Places() {
  return (
    <div>
      <TopPlacesBar />
      <SearchPlaces />
      <PlacesTags />
    </div>
  );
}

export default Places;
