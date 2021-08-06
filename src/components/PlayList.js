import React from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';
import music from '../images/music.jpeg';

const PlayList = ({ playlist }) => {
  return (
    <div className="content">
      {Object.keys(playlist).length > 0 && (
        <div className="playlist container">
          {playlist.items.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Card className="disc">
                  <a
                    target="_blank"
                    href={item.external_urls.spotify}
                    rel="noopener noreferrer"
                    className="card-image-link"
                  >
                    {!_.isEmpty(item.images) ? (
                      <Card.Img variant="top" src={item.images[0].url} alt="" />
                    ) : (
                      <img src={music} alt="" />
                    )}
                  </a>
                  <Card.Body>
                    <Card.Title className="album">{item.name}</Card.Title>
                    <Card.Text className="artist">
                      {item.owner.display_name}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PlayList;
