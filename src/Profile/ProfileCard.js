import React from 'react';
import { Link } from "react-router-dom";
import GenericCard from '../Components/GenericCard';

class ProfileCard extends React.Component {

    render() {
        console.log(this.props);
        if (this.props.token === "") {
            return (<Link to="/login">Log in</Link>);
        }

        const content = (
            <div>
                <h3>{this.props.username}</h3>
                <h4>{this.props.email}</h4>
                <h4>{this.props.token}</h4>
            </div>
        )
        return (
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <GenericCard 
                color="white"
                width="318px"
                height="270px"
                borderRadius="4px"
                content={content}
                />
            </div>
        );
    }
}

export default ProfileCard;