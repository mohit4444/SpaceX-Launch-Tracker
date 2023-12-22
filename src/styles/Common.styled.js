import styled from "styled-components";

export const Banner = styled.div`
  background: linear-gradient(
      to bottom,
      transparent 80%,
      ${({ theme }) => theme.colors.primarybackground} 100%
    ),
    url(${(props) => props.$imgUrl}) no-repeat center center / cover;
  height: 75vh;
  display: flex;
  justify-content: center; //horizontally
  align-items: center; //vertically

  h1 {
    font-size: 3.5em;
    opacity: 0.8;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 2.2em;
    }
  }
`;

export const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
`;

export const Status = styled.label`
  color: ${({ $success }) =>
    $success ? "lime" : $success === null ? "lightblue" : "lightsalmon"};
  font-weight: bold;
`;
