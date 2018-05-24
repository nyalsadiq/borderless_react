import { connect } from 'react-redux';
import { set_token } from './redux/actions/actions.js';
import LoginForm from './LoginForm.js';
import axios from 'axios';

function get_token(username, password, dispatch) {
    axios.post('http://127.0.0.1:8000/api-token-auth/',{
        username: username,
        password: password
    }).then((response) => {
        dispatch(set_token(response.data.token));
    }).catch((error) => {
        console.log(error);
    });
}

const mapStateToProps = state => {
    if (state != null) {
        return {token: state.token}
    }
    return {token: null}
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