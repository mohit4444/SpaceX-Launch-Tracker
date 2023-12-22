import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.primarybackground};
    color: ${({ theme }) => theme.colors.primarytext};
    font-family: Arial;
    font-size: 1.15em;
    margin: 0;
  }

  p {
    line-height: 1.5;
  }

  img {
    max-width: 100%;
  }

  h1 {
    text-align: center;
    font-family: BankGothic, sans-serif;
  }
  
  h2 {
    text-decoration: underline;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.primarybackground};
  }

  ::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 5px;
    height: 80px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.secondarybackground};
  }
  
`;

export default GlobalStyles;
