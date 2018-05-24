import React, { Component } from 'react';
import './App.css';
import { store } from './index.js';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '', 
            password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getStore = this.getStore.bind(this);
    }
    getStore(event) {
        event.preventDefault();
        alert(store.getState());
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
                        <input name="password" type="text" value={this.state.password} onChange={this.handleInputChange}/>
                    </label>
                    <br />
                    <input type="submit" value="Login"/>
                </form>
                <button onClick={this.getStore}>Token</button>
            </div>
        );
    }
}

export default LoginForm;