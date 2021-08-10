import React from 'react';
import Left from './Left';
import {
  initiateTrack
} from '../actions/result';

function handAlbum(props){
  const album = initiateTrack(props.match.params.id)();
  return album;
}

const Album = (props) => {
  const album = handAlbum(props)
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
          <div className='box'><img alt='album' src={album.image}/></div>
 
         <p className='album'>Nome do &aacute;lbum</p>
          <p className='artist'>Nome do artista</p>
        </div>
        <div className='col-right'>
          <ol>
            <li className='track'>
              Nome da Faixa
              <abbr>3:33</abbr>
            </li>
          </ol>
        </div>
    </div>
    </React.Fragment>
    )
};

export default Album;
