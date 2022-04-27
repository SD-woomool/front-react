import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  cursor: pointer;
  .active {
    fill: rgb(56, 127, 234);
  }
`;

// 아이콘을 클릭하면 클릭된 아이콘 색상 변경하기

function BottomNavigation() {
  const [clicked, setClicked] = useState<number>(0);
  return (
    <Navigation>
      <Link to="/" onClick={() => setClicked(0)}>
        <Home className={clicked === 0 ? "active" : undefined} id="home" />
      </Link>
      <Link to="/community" onClick={() => setClicked(1)}>
        <Community
          id="community"
          className={clicked === 1 ? "active" : undefined}
        />
      </Link>
      <Link to="/account" onClick={() => setClicked(2)}>
        <Account
          id="account"
          className={clicked === 2 ? "active" : undefined}
        />
      </Link>
    </Navigation>
  );
}

export default BottomNavigation;
