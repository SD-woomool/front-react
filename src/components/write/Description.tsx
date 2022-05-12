import React from "react";
import styled from "styled-components";

const StyledDescription = styled.div`
  margin-bottom: 20px;
  box-sizing: border-box;
  @media screen and (max-width: 600px) {
    width: calc(100vw - 50px);
  }
`;

const Name = styled.div`
  margin-bottom: 10px;
  color: rgb(124, 124, 124);
`;

const TextArea = styled.textarea`
  min-height: 200px;
  width: calc(100% - 20px);
  padding: 10px;
  border: 1px solid rgb(227, 227, 227);
  border-radius: 10px;
  resize: none;
  ::placeholder {
    color: rgb(170, 170, 170);
    font-size: 14px;
  }
  :focus {
    border-color: rgb(56, 127, 234);
    outline: none;
  }
`;

function Description() {
  return (
    <StyledDescription>
      <Name>설명</Name>
      <TextArea placeholder="코스에 대한 설명을 적어주세요." />
    </StyledDescription>
  );
}

export default Description;
