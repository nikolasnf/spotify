import React from 'react'

const RightAlbum: React.FC = () => {
  return (
    <div className='col-right album'>
      <p>
        <a href='/'>
          <b>&laquo;</b>Voltar
        </a>
      </p>
      <div className='disc col-left'>
        <div className='box'></div>
        <p className='album'>Nome do &aacute;lbum</p>
        <p className='artist'>Nome do artista</p>
      </div>
      <div className='col-right'>
        <ol>
          <li>
            <a href='#'>Nome da Faixa</a>
            <abbr>3:33</abbr>
          </li>
        </ol>
      </div>
    </div>
  )
}
export default RightAlbum
