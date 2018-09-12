import React, { Component } from 'react';
import GenericCard from '../Components/GenericCard';

export class Search extends Component {
  
  render() {
    var steve = require('../Static/images/steve.svg');
    var film = require('../Static/images/film.svg');
    var theatre = require('../Static/images/theatre.svg');
    var photography = require('../Static/images/photography.svg');
    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
        <div style={{display: 'grid', gridAutoFlow: 'column', overflow: 'wrap', gridTemplateColumns: '320px 320px', gridTemplateRows: '272px 272px', gridColumnGap: '4px', gridRowGap: '4px'}}>
          <GenericCard 
            image={steve}
            color="white"
            width="318px"
            height="270px"
            borderRadius="4px"
            linkTo="/projects"
          />
          <GenericCard 
            image={film}
            color="white"
            width="318px"
            height="270px"
            borderRadius="4px"
            linkTo="/projects"
          />
          <GenericCard 
            image={theatre}
            color="white"
            width="318px"
            height="270px"
            borderRadius="4px"
            linkTo="/projects"
          />
          <GenericCard 
            image={photography}
            color="white"
            width="318px"
            height="270px"
            borderRadius="4px"
            linkTo="/projects"
          />
          </div>
        </div>
    );
  }
}

export default Search;