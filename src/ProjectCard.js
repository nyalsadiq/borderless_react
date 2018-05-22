import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class ProjectCard extends Component {

    render () {
        return (
            <Card>
                <CardHeader
                    title="Generic Profile"
                    subtitle="Looking for Opportunities"
                    avatar="jsa-128.jpg"
                />
                <CardTitle title={this.props.title} subtitle={this.props.location}/>
                <CardText>
                    Looking for a cameraguy!
                </CardText>
                <CardActions>
                    <FlatButton label="More Details"/>
                    <FlatButton label="Save"/>
                </CardActions>
            </Card>
        );
    }
}

export default ProjectCard;