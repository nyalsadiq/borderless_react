import React, { Component } from 'react';
import ProjectCard from './ProjectCard';


export class Projects extends Component {

  constructor(props){
    super(props);
    this.state = {
      error : null,
      isLoaded : false,
      list_data : [],
    };
  }
  
  componentDidMount() {
    fetch("https://borderless.herokuapp.com/projects/")
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

    const error = this.state.error;
    const isLoaded = this.state.isLoaded;
    const list_data = this.state.list_data;
    const project_list = [];

    if (error) {
      return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
      return <div>loading...</div>;
    }
    else {
      for (const data of list_data) {
        let obj = {
          key: String(data.id),
          title: data.title,
          location: data.location,
          owner: data.owner,
          description: data.description,
          comments: data.comments,
          likes: data.likes,
          comment_count: data.comment_count,
        };
        project_list.push(obj);
      }
      //map projects to project card components
      const project_cards = project_list.map(
        p => <ProjectCard 
                key={p.key} 
                title={p.title} 
                owner={p.owner} 
                location={p.location} 
                description={p.description}
                comments={p.comments}
                likes={p.likes}
                comment_count={p.comment_count}
              />
      );

      return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{display: 'grid', gridAutoFlow: 'column', gridAutoColumns: '320px', gridTemplateRows: 'repeat(4, 272px)', gridGap: '4px'}}>
              {project_cards}
          </div>
        </div>
      );
    }
  }
}