import React from 'react';
import Home from './components/Home/Home';
import UserIndex from './components/UserIndex/UserIndex';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyle, Wrapper } from './components/GlobalStyle/GlobalStyle.styles';
import UserDetail from './components/UserDetail/UserDetail';
import NewUser from './components/NewUser/NewUser';

export default function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user-index" exact component={UserIndex} />
          <Route path="/user-detail/:id" exact component={UserDetail} />
          <Route path="/create-a-user" exact component={NewUser} />
        </Switch>
      </BrowserRouter>
    </Wrapper>
  );
}
