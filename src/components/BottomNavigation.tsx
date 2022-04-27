import React from "react";
import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Home } from "../assets/home.svg";
import { ReactComponent as Community } from "../assets/community.svg";
import { ReactComponent as Account } from "../assets/account.svg";

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 0 100px;
  margin: 0 auto;
  width: 400px;
  height: 45px;
  bottom: 0;
  right: 0;
  left: 0;
  border-top: 1px solid rgb(227, 227, 227);
  .active {
    fill: rgb(56, 127, 234);
    cursor: pointer;
  }
`;

function BottomNavigation() {
  const moveToHome = useMatch("/");
  const moveToCommunity = useMatch("community");
  const moveToAccount = useMatch("account");
  return (
    <Navigation>
      <Link to="/">
        <Home className={moveToHome ? "active" : undefined} />
      </Link>
      <Link to="/community">
        <Community className={moveToCommunity ? "active" : undefined} />
      </Link>
      <Link to="/account">
        <Account className={moveToAccount ? "active" : undefined} />
      </Link>
    </Navigation>
  );
}

export default BottomNavigation;
