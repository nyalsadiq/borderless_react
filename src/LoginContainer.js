import { connect } from 'react-redux';
import { set_token, set_profile } from './redux/actions/actions.js';
import LoginForm from './LoginForm.js';
import axios from 'axios';

function get_token(username, password, dispatch) {
    axios.post('http://127.0.0.1:8000/api-token-auth/',{
        username: username,
        password: password
    }).then((response) => {
        dispatch(set_token(response.data.token));
        getProfileDetails(response.data.token,dispatch);
    }).catch((error) => {
        console.log(error);
    });
}

function getProfileDetails(token, dispatch) {
    axios.get('http://127.0.0.1:8000/profiles/me/',
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

export default LoginContainer;