import React from 'react'

const Right: React.FC = () => {
  return (
    <div className='col-right'>
      <p>Busque por artistas, &aacute;lbuns ou m&uacute;sicas</p>
      <input
        type='text'
        className='search'
        name='search'
        id='search'
        placeholder='Comece a escrever...'
      />
      <div className='content'>
        <h3>&Aacute;lbuns buscados recentemente</h3>
        <div className='container'>
          <div className='disc'>
            <a className='box' href='/albums/teste'></a>
            <p className='album'>Nome do &aacute;lbum</p>
            <p className='artist'>Nome do artista</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Right
