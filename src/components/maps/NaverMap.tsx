import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

const Map = styled.div`
  width: 100%;
  height: calc(100vh - 130px);
`;

function NaverMap() {
  useEffect(() => {
    let map;
    const initMap = () => {
      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(37.511337, 127.012084),
        zoom: 13,
      });
    };
    initMap();
  }, []);
  return <Map id="map"></Map>;
}

export default NaverMap;
