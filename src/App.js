import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Project from './Project.js';
import ProjectCard from './ProjectCard.js';
import NewProjectCard from './NewProjectCard.js';
import AppBar from 'material-ui/AppBar';
import Button from '@material-ui/core/Button';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


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
    const header = <Header/>;
    const {error, isLoaded, list_data } = this.state;
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
        <NewProjectCard title={p.title} owner={p.owner} location={p.location}/>
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

export default App;
