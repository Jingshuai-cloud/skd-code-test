import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}

body {
    background: #466994;
    background-size: cover;
    margin: 0;
    padding: 0 20px;
}

* {
    box-sizing: border-box;
    font-family: sans-serif;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
    font-size: larger;
  }

  h1 {
    font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    background-size: 100%;
    background-clip: text;
    font-size: 40px;
    font-weight: 400;
    text-align: center;
    margin: 50px;
  }
`;

export const CardWrapper = styled.div`
  max-width: 1100px;
  background: #f2f0ed;
  border-radius: 10px;
  border: 2px solid #5b4337;
  padding: 40px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
