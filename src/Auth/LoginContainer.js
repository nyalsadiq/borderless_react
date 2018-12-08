import { connect } from 'react-redux';
import { set_token, set_profile } from '../Redux/actions/actions.js';
import LoginForm from './LoginForm.js';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function get_token(username, password, dispatch) {
    axios.post('https://borderless.herokuapp.com/api-token-auth/',{
        username: username,
        password: password
    }).then((response) => {
        dispatch(set_token(response.data.token));
        getProfileDetails(response.data.token,dispatch);
        setToken(response.data.token);
    }).catch((error) => {
        console.log(error);
    });
}

function setToken(token){
    localStorage.setItem('token', token);
    localStorage.setItem('issued',String(Date.now()));
}

function getProfileDetails(token, dispatch) {
    axios.get('https://borderless.herokuapp.com/profiles/me/',
    {headers: {
            'Authorization': 'jwt ' + token,
            }
    }).then((response) => {
        console.log(response.data);
        dispatch(set_profile(response.data));
    }).catch((error) => {
        console.log(error);
    });
}

const mapStateToProps = state => {
    return {token: state.jwt_token, profile: state.profile}
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (username, password) => get_token(username,password,dispatch)
    }
}

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm)

export default withRouter(LoginContainer);