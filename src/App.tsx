import React from 'react';
import Home from './components/Home/Home';
import UserIndex from './components/UserIndex/UserIndex';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyle, Wrapper } from './components/GlobalStyle/GlobalStyle.styles';

export default function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user-index" exact component={UserIndex} />
        </Switch>
      </BrowserRouter>
    </Wrapper>
  );
}
