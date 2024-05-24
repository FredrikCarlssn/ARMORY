import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

import gamelogo from "../img/crg/con-flat.svg";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
`;

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <div className="menu-bar desktop">
          <div className="menu-logo-separator">
            <div className="menu-logo">
              <NavLink to={"/"}>
                <img src={gamelogo} alt="Logo" />
              </NavLink>
            </div>
            <div className="menu-separator"></div>
          </div>
          <div className="menu-items-and-buttons">
            <div className="menu-items-container">
              <NavLink className="menu-item" to={"/"}>
                Home
              </NavLink>
              <NavLink className="menu-item" to={"/browse"}>
                Browse
              </NavLink>
              <NavLink className="menu-item" to={"/profile"}>
                Profile
              </NavLink>
              <NavLink className="menu-item" to={"/about"}>
                About
              </NavLink>
            </div>
          </div>
        </div>
      </StyledHeader>
    </>
  );
};
