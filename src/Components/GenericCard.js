import React, { Component } from 'react';
import { Redirect } from 'react-router';

class GenericCard extends Component {
    
    constructor(props) {
        super(props);
        this.state = { redirect: false }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler = e => {
        e.preventDefault();
        this.setState({redirect: !this.state.redirect})
    }

    render() {
        
        const {
            height,
            width,
            color,
            borderRadius,
            image,
            linkTo,
            content
         } = this.props;

        if (this.state.redirect && linkTo !== undefined) {
            this.setState({redirect: false});
            return (<Redirect push to={linkTo} />);
        }

        return (
            <div onClick={this.clickHandler} style={
                {
                    backgroundImage: "url(" + image + ")", 
                    backgroundPosition: 'center', 
                    backgroundSize: 'cover', 
                    height: height, 
                    width: width, 
                    backgroundColor: color, 
                    borderRadius: borderRadius,
                    margin: '2px',
                }
            }>
            {content}
            </div>
        );
    }
}


export default GenericCard;