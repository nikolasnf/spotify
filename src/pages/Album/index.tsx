import React from 'react'
import { Album } from './styles'
import Left from '../../components/Left'
import RightAlbum from '../../components/RightAlbum'

const AlbumPage: React.FC = () => {
  return (
    <Album>
      <Left />
      <RightAlbum />
    </Album>
  )
}

export default AlbumPage
