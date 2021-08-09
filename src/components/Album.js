import React, {useState} from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';
import music from '../images/music.jpeg';
import Left from './Left';
import {
  initiateTrack
} from '../actions/result';


const Album = (props) => {
  const album = initiateTrack(props.match.params.id);
  return ( 
    <React.Fragment className="content">
    <Left />
    <div className='col-right album'>
        <p className='back'>
          <a href='/'>
            <b>&laquo;</b>Voltar
          </a>
        </p>
        <div className='disc col-left'>
          <div className='box'><img src={album.image}/></div>
 
         <p className='album'>Nome do &aacute;lbum</p>
          <p className='artist'>Nome do artista</p>
        </div>
        <div className='col-right'>
          <ol>
            <li className='track'>
              <a href='#'>Nome da Faixa</a>
              <abbr>3:33</abbr>
            </li>
          </ol>
        </div>
    </div>
    </React.Fragment>
    )
};

export default Album;
