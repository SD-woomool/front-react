import styled from "styled-components";


const StyledWrapper = styled.div`
  h1 {
    font-size: 40px;
  }
  ul {
    li {
      color: red;
    }
  }
`;

function Test () {
  return (
    <StyledWrapper>
      <h1>test</h1>
      <ul>
        <li>밥먹기</li>
        <li>당근케이크 먹기</li>
        <li>저녁은 뭐 먹지?</li>
      </ul>
    </StyledWrapper>
  );
}

export default Test;