import React, { Component } from 'react';
import './App.css';
import ProjectCard from './ProjectCard.js';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import LoginContainer from './LoginContainer.js';

function Header(props) {
  return (
    <MuiThemeProvider>
      <AppBar 
        title="Borderless"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    </MuiThemeProvider>
  );
}

class Projects extends Component {
  render() {
    const header = <Header/>;
    const error = this.props.error; 
    const isLoaded = this.props.isLoaded;
    const list_data = this.props.list_data;
    const project_list = [];
   
    if (error) {
      return <div>{header} Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>{header} loading...</div>
    } else {
      for (const data of list_data) {
        let obj = {
          key : String(data.id),
          title : data.title,
          location : data.location,
          owner : data.owner
        }
        project_list.push(obj);
      }
      //map projects to project card components
      const project_cards = project_list.map(p =>
        <ProjectCard title={p.title} owner={p.owner} location={p.location}/>
      );
      return (
        <MuiThemeProvider>
          {header}
          <div style={{margin: '0 auto', width: '50%'}}>
            {project_cards}
          </div>
        </MuiThemeProvider>
      );
    }
    
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      error : null,
      isLoaded : false,
      list_data : [],
    };
  }
  

  componentDidMount() {
    fetch("http://127.0.0.1:8000/projects/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded : true,
            list_data : result
          });
        },
        (error) => {
          this.setState({
            isLoaded : true,
            error
          });
        }
      )
  }

  render() {
    return (
      <Projects error={this.state.error} isLoaded={this.state.isLoaded} list_data={this.state.list_data}/>
    );
  }

 
}

const MainRouter = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li> 
            <Link to="projects">Projects</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/projects" component={App} />
      </div>
    </Router>
  </Provider>
);


const Home = () => (
  <div>
    <h2>Home</h2>
    <LoginContainer />
  </div>
);

export default MainRouter;
