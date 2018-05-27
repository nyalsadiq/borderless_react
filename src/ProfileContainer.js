import { connect } from 'react-redux';
import { set_token, set_profile } from './redux/actions/actions.js';
import LoginForm from './LoginForm.js';
import axios from 'axios';
import ProfileCard from './ProfileCard.js';

const mapStateToProps = state => {
    return {
            token: state.jwt_token, 
            username: state.profile.username,
            email: state.profile.email,
            profile: state.profile.profile,
        }
}

const ProfileContainer = connect(
    mapStateToProps
)(ProfileCard)

export default ProfileContainer;