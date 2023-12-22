import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 10px 0;
  top: 0;
  z-index: 1000;
`;

export const Logo = styled.img`
  height: 50px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 40px;
  }
`;
