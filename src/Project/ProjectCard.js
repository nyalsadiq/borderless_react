import React from 'react';
import Paper from '@material-ui/core/Paper';

const card = {
    root: {
        margin: '40px',
        width: '30%'
    }
}

class ProjectCard extends React.Component {
    render() {
        return (
            <Paper style={card.root} elevation={2}>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
            </Paper>
        )
    }
}

export default (ProjectCard);