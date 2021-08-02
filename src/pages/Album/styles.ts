import styled from 'styled-components'
import { AlbumContainer } from '../../styles/AlbumContainer'

export const Album = styled(AlbumContainer)`
  div.album {
    div.box {
      width: 300px;
      height: 300px;
    }
    b {
      font-size: 24px;
      padding: 0 10px 0 0;
    }
    div.col-left {
      padding: 0;
      margin: 0;
      width: 40%;
      max-width: 300px;
    }
    p.album,
    p.artist {
      width: 300px;
    }
    div.col-right {
      width: 60%;
    }
    a {
      color: #fff;
      text-decoration: none;
    }
    li {
      font-size: 16px;
      color: #999;
      padding-left: 20px;
    }
    li span {
      color: #fff;
    }
    li abbr {
      float: right;
    }
  }
`
