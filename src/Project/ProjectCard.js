import React from 'react';
import GenericCard from '../Components/GenericCard';


class ProjectCard extends React.Component {
    render() {
        const content = (
            <div>
                <h3>{this.props.title}</h3>
                <h4>{this.props.location}</h4>
                <h4>{this.props.description}</h4>
            </div>
        )
        return (
            <GenericCard 
            color="white"
            width="318px"
            height="270px"
            borderRadius="4px"
            content={content}
          />
        )
    }
}

export default (ProjectCard);