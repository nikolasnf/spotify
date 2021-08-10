import React from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';
import music from '../images/music.jpeg';

const AlbumsList = ({ albums }) => {
  return (
    <React.Fragment className="content">
      {Object.keys(albums).length > 0 && (
        <div className="container">
          {albums.items.map((album, index) => {
            return (
              <React.Fragment key={index}>
                <Card className='disc'>
                  <a
                    target="_self"
                    href={album.external_urls.spotify}
                    rel="noopener noreferrer"
                    className="box"
                  >
                    {!_.isEmpty(album.images) ? (
                      <Card.Img
                        variant="top"
                        src={album.images[0].url}
                        alt=""
                      />
                    ) : (
                      <img src={music} alt="" />
                    )}
                  </a>
                  <Card.Body>
                    <Card.Title className='album'>{album.name}</Card.Title>
                    <Card.Text className='artist'>
                        {album.artists.map((artist) => artist.name).join(', ')}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default AlbumsList;
