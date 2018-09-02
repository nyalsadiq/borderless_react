import { connect } from 'react-redux';
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