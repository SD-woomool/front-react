import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Bell } from "../assets/bell.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";

const StyledTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  height: 45px;
`;

const StyledLogo = styled.div`
  padding-top: 9px;
  padding-left: 5px;
  width: 50px;
  font-size: 10px;
  cursor: pointer;
`;

const StyledBell = styled(motion.div)`
  cursor: pointer;
`;

function TopBar() {
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
      <StyledBell whileHover={{ rotate: 30 }}>
        <Bell onClick={moveToAccount} />
      </StyledBell>
    </StyledTopBar>
  );
}

export default TopBar;
