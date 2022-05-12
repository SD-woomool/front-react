import React from "react";
import styled from "styled-components";

const StyledCompleteBtn = styled.button`
  width: 560px;
  height: 40px;
  text-align: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid rgb(227, 227, 227);
  font-size: 18px;
  color: rgb(170, 170, 170);
`;

function CompleteBtn() {
  return <StyledCompleteBtn>작성완료</StyledCompleteBtn>;
}

export default CompleteBtn;
