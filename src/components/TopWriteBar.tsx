import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Bell } from "../assets/bell.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";

const StyledTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  top: 0px;
  padding: 0 8px;
`;

const StyledLogo = styled.div`
  height: 14px;
  cursor: pointer;
`;

const StyledBell = styled(Bell)`
  height: 22px;
  min-width: 19px;
  transition: all 0.3s ease-in-out 0s;
  :hover {
    transform: rotate(30deg);
    transition: all 0.3s ease-in-out 0s;
  }
  cursor: pointer;
`;

function TopWriteBar() {
  const navigate = useNavigate();
  const moveToHome = () => {
    navigate(`/`);
  };
  const moveToAccount = () => {
    navigate(`account`);
  };
  return (
    <StyledTopBar>
      <StyledLogo>
        <Logo onClick={moveToHome} />
      </StyledLogo>
      <StyledBell onClick={moveToAccount} />
    </StyledTopBar>
  );
}

export default TopWriteBar;
