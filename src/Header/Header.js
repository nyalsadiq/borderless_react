import React from 'react';
import { Link } from 'react-router-dom';

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

export function Header(props) {
  return (
    <div style={styles.root}>
      <img src={require('../Static/images/logo.svg')} alt="logo" />
      <Link to="/home">
        <p style={styles.item}>Explore</p>
      </Link>
    </div>
  )
}