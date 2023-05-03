import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "./styles/Logo.styled";
import { StyledButton } from "./styles/Button.styled";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="header">
      <NavbarMain>
        <Logo>
          <span>Tattoo</span>finder
        </Logo>
        <NavbarList>
          <NavbarItem>
            <Link to="/">Home</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/favorites">Favorites</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/vote">Vote</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/book">Book Session</Link>
          </NavbarItem>
        </NavbarList>
        <Link to="/book">
          <StyledButton primary>Selected Tattoos {cart.length}</StyledButton>
        </Link>
      </NavbarMain>
    </div>
  );
};

export default Header;

const NavbarMain = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 2rem;
  background: rgba(245, 245, 245, 0.486);

  box-shadow: 0 4px 0.5rem -0.125rem rgba(0, 0, 0, 0.1),
    0 0.125rem 0.25rem -0.125rem rgba(0, 0, 0, 0.06);
`;

const NavbarList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavbarItem = styled.li`
  display: inline;
  margin: 1rem;
  a {
    color: var(--text1);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
