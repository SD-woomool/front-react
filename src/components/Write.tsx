import React from "react";
import styled from "styled-components";

const Body = styled.div`
  background-color: pink;
  height: 100%;
`;

function Write() {
  return (
    <Body>
      <div>
        <button>버튼아이콘</button>
        <span>코스</span>
      </div>
      <div>코스 제목을 입력해주세요.</div>
      <div>네이버 지도 들어갈 공간</div>
      <div>
        <div>코스</div>
        <div>아직 추가된 장소가 없습니다! 추가해주세요!</div>
        <button>장소추가</button>
      </div>
      <div>
        <div>설명</div>
        <div>코스에 대한 설명을 적어주세요.</div>
      </div>
      <div>
        <span>교통수단</span>
        <button>대중교통</button>
        <button>자동차</button>
      </div>
      <div>
        <span>태그</span>
        <span>(선택)</span>
        <div>
          <button>+</button>
        </div>
      </div>
      <button>작성완료</button>
    </Body>
  );
}

export default Write;
