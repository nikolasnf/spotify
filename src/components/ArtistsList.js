import React from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';
import music from '../images/music.jpeg';

const ArtistsList = ({ artists }) => {
  return (
    <React.Fragment className="content">
      {Object.keys(artists).length > 0 && (
        <div className="artists container">
          {artists.items.map((artist, index) => {
            return (
              <React.Fragment key={index}>
                <Card className="disc">
                  <a
                    target="_blank"
                    href={artist.external_urls.spotify}
                    rel="noopener noreferrer"
                    className="card-image-link"
                  >
                    {!_.isEmpty(artist.images) ? (
                      <Card.Img
                        variant="top"
                        src={artist.images[0].url}
                        alt=""
                      />
                    ) : (
                      <img src={music} alt="" />
                    )}
                  </a>
                  <Card.Body>
                    <Card.Title className="artist">{artist.name}</Card.Title>
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

export default ArtistsList;
