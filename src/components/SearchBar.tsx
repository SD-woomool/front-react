import React from "react";
import styled from "styled-components";

const StyledSearchBar = styled.div`
  input {
    border: 1px solid rgb(255, 255, 255);
    padding: 5px 10px;
    font-size: 16px;
    color: rgb(92, 92, 92);
    min-width: 70%;
  }
`;

function SearchBar() {
  return (
    <StyledSearchBar>
      <input type="text" placeholder="필터를 이용하여 검색도 가능합니다." />
      <button>1</button>
      <button>2</button>
    </StyledSearchBar>
  );
}

export default SearchBar;
