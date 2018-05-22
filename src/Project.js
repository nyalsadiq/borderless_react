import React, { Component } from 'react';

class Project extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        projects: []
      };
    }
  
    componentDidMount() {
      fetch("http://127.0.0.1:8000/projects/")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded : true,
              projects : result
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

    render () {
        const { error, isLoaded, projects } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <ul>
                    {projects.map(project => (
                        <li key={project.id}>
                            {project.title} {project.owner}
                        </li>
                    ))}
                </ul>
            );
        }
    }
  }
  
  export default Project;
  