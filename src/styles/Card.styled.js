import styled from "styled-components";

export const StyledCard = styled.div`
  width: 31%;
  display: flex;
  padding: 40px;
  gap: 25px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 95%;
    flex-direction: column;
    gap: 5px;

    h2 {
      text-align: center;
    }
  }

  @media (min-width: ${({ theme }) => theme.mobile}) and (max-width: ${({
      theme,
    }) => theme.tablet}) {
    width: 45%;
  }
`;
