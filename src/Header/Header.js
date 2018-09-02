import React from 'react';

const styles = {
  root: {
    color: 'white',
    margin: '20px 10px 20px 40px'
  }
}

export function Header(props) {
  return (
    <div style={styles.root}>
      <h1>Borderless</h1>
    </div>
  )
}