import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader, Logo } from "../styles/Header.styled";
import { Container } from "../styles/Common.styled";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Link to="/">
          <Logo src={logo} alt="spacex logo" />
        </Link>
      </Container>
    </StyledHeader>
  );
}
