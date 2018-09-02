import React, { Component } from 'react';
import { BrowserRouter as Redirect } from "react-router-dom";


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
            return <Redirect to="me"/>;
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
                    </label>
                    <br />
                    <label>
                        Password:
                        <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
                    </label>
                    <br />
                    <input type="submit" value="Log In"/>
                </form>
            </div>
        );
    }
}

export default LoginForm;