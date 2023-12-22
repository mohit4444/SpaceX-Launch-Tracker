import styled from "styled-components";

export const LaunchDetailsContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  margin-bottom: 100px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 20px;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) and (max-width: ${({
      theme,
    }) => theme.tablet}) {
    padding: 40px;
  }
`;

export const Section = styled.section`
  margin-bottom: 40px;

  img {
    border-radius: 5px;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 5px;
  }

  h3 {
    a {
      padding: 2px 10px;
      font-weight: lighter;
    }
  }
  a {
    background-color: ${({ theme }) => theme.colors.primarytext};
    color: ${({ theme }) => theme.colors.primarybackground};
    padding: 5px 10px;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    margin-top: 10px;
  }

  label {
    font-weight: bold;
  }
`;
