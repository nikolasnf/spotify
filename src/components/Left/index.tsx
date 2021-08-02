import React from 'react'

const Left: React.FC = () => {
  return (
    <div className='col-left'>
      <a href='/' id='logo'>
        <img src={'/logo-spotify.png'} alt='Logo Spotify' />
      </a>
    </div>
  )
}
export default Left
