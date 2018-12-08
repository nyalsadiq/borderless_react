import React, { Component } from 'react';
import { Redirect } from "react-router-dom";


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '', 
            password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        this.props.onSubmit(this.state.username, this.state.password);
        event.preventDefault();
    }

    render() {
        if (this.props.token !== "") {
            return (<Redirect push to="/me"/>);
        }

        return (
            <div style={{margin: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <div style={styles.card}>
                <form onSubmit={this.handleSubmit}>
                    <h3>Username</h3>
                    <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
                    <br />
                    <h3>Password:</h3>
                    <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
                    <br />
                    <input type="submit" value="Log In"/>
                </form>
                </div>
            </div>
        );
    }
}

const styles = {
    card: {
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        height: "270px", 
        width: "318px", 
        backgroundColor: "white", 
        borderRadius: "4px",
        margin: '2px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default LoginForm;