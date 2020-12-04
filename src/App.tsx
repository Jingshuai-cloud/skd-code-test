import React from 'react';
import Home from './components/Home/Home';
import UserIndex from './components/UserIndex/UserIndex';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyle, Wrapper } from './components/GlobalStyle/GlobalStyle.styles';
import UserDetail from './components/EditUser/EditUser';
import NewUser from './components/NewUser/NewUser';
import DeleteUser from './components/DeleteUser/DeleteUser';

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
          <Route path="/delete-user/:id" exact component={DeleteUser} />
        </Switch>
      </BrowserRouter>
    </Wrapper>
  );
}
