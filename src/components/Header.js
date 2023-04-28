import React from "react";
import styled from "styled-components";

import ToggleMode from "./ToggleMode";
import reactLogo from "../icons/pikkLogo.png";

const Header = () => {
  return (
    <HeaderStyle>
      <div className="container">
        <div className="header-content">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <img className="logo" src={reactLogo} alt="logo"></img>
            </div>
          </div>

          <ToggleMode />
        </div>
      </div>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  width: 100%;
  left: 0;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  z-index: 2;

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    display: flex;
    flex-direction: column;
    font-family: "Marck Script", cursive;
    text-transform: capitalize;
    font-size: 25px;
    color: white;
  }

  .logo {
    width: 60%;
  }

  @media (max-width: 767px) {
    .logo {
      width: 90%;
    }
  }
`;

export default Header;
