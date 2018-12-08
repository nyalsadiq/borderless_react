import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import LoginContainer from './Auth/LoginContainer';
import ProfileContainer from './Profile/ProfileContainer';
import Home from './Home/Home';
import Header from "./Header/HeaderContainer";
import { Projects } from './Project/Projects';

const MainRouter = ({ store }) => (
<Provider store={store}>
  <Router>
    <div style={{width: "100%", height: "100%"}}>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/me" component={ProfilePage} />
    </div>
  </Router>
</Provider>);

const HomePage = () => (<Home />);
const ProjectsPage = () => (<Projects />);
const LoginPage = () => (<LoginContainer />);
const ProfilePage = () => (<ProfileContainer />);

export default MainRouter;