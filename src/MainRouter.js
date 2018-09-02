import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import LoginContainer from './Auth/LoginContainer';
import ProfileContainer from './Profile/ProfileContainer';
import { App } from './App';
import { Header } from "./Header/Header";

const MainRouter = ({ store }) => (<Provider store={store}>
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={App} />
      <Route path="/me" component={Profile} />
    </div>
  </Router>
</Provider>);

const Home = () => (<LoginContainer />);
const Profile = () => (<ProfileContainer />);

export default MainRouter;