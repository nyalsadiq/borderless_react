import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Header from './Header';

const mapStateToProps = state => {
    return {
            token: state.jwt_token,
            username: state.profile.username,
            email: state.profile.email,
            profile: state.profile.profile,
        }
}

const HeaderContainer = connect(
    mapStateToProps
)(Header)

export default withRouter(HeaderContainer);