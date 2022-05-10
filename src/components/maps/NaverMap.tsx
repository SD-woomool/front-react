import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import cafeSvg from "../../assets/cafe.svg";

const Map = styled.div`
  width: 100%;
  height: calc(100vh - 130px);
  :focus {
    outline: none;
  }
`;

function NaverMap() {
  useEffect(() => {
    let map;
    const initMap = () => {
      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(37.511337, 127.012084),
        zoom: 13,
      });
      // cafe 마커 예시 => 현재는 최초 렌더링 시 실행되는 코드 블럭 안에 넣어두었지만, 위치 이동시켜야 함
      var cafeMarker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.363777, 127.1174332),
        map: map,
        icon: {
          content: `
            <div id="content" style="background:#ffffff;width:24px;height:24px;border:3px solid #387FEA;border-radius:50%;position:absolute;top:-2px;left:-1.5px;display:flex;justify-content:center;align-items:center;">
              <img style="width:16px;" src="${cafeSvg}">
            </div>
            <svg width="27" height="36" viewBox="0 0 18 24" fill="#387FEA" xmlns="http://www.w3.org/2000/svg"><path d="M8.99988 0C4.20103 0 0.325928 3.8751 0.325928 8.67395C0.325928 10.3472 0.860424 11.9448 1.60407 13.2578L7.25695 23.0413C7.61135 23.6804 8.32595 23.9999 8.99988 23.9999C9.67387 23.9999 10.3535 23.6804 10.7428 23.0413L16.3957 13.2636C17.1451 11.9505 17.6738 10.3819 17.6738 8.67964C17.6738 3.88091 13.7987 0 8.99988 0ZM8.99988 11.236C7.25695 11.236 5.83357 9.81266 5.83357 8.06974C5.83357 6.32681 7.25695 4.90343 8.99988 4.90343C10.7428 4.90343 12.1662 6.32681 12.1662 8.06974C12.1662 9.81847 10.7428 11.236 8.99988 11.236Z"></path></svg>
          `,
          size: new naver.maps.Size(38, 58),
          anchor: new naver.maps.Point(19, 58),
        },
      });
      console.log(cafeSvg);
    };
    initMap();
  }, []);
  return <Map id="map"></Map>;
}

export default NaverMap;
