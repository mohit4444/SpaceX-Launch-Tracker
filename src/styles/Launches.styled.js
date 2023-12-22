import styled from "styled-components";

export const LaunchesContainer = styled.div`
  margin-bottom: 100px;
`;

export const LaunchesResults = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const LaunchesFilter = styled.div`
  margin-top: 40px;
  padding: 20px;
  display: flex;
  gap: 30px;
  justify-content: center;

  label {
    margin-bottom: 5px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  select {
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 20px;
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) and (max-width: ${({
      theme,
    }) => theme.tablet}) {
    flex-direction: row;
  }
`;
