import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render () {
    console.log(this.props);
    return (
        <div style={styles.root}>
          <img src={require('../Static/images/logo.svg')} alt="logo" />
          <Link to="/">
            <p style={styles.item}>Explore</p>
          </Link>
          {this.props.token === "" ? 
            <Link to="/login">
              <p style={styles.item}>Login</p>
            </Link>
            :
            <Link to="/me">
              <p style={styles.item}>Profile</p>
            </Link>
          }
      </div>
    )
  }
}

const styles = {
  root: {
    color: 'white',
    margin: '40px 10px 20px 40px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  item: {
    color: 'white',
    fontStyle: 'normal',
    fontSize: '25px',
    fontWeight: 'normal',
    margin: '0px 40px 0px 40px'
  }
}

export default Header;