import React from "react";
import eventPreview from "../../constants/eventPreview";
import pastEvents from "../../constants/pastEvents";
import { Link } from "react-router-dom";
import {
  Card,
  Image
} from "semantic-ui-react";
import "./profile.css";

const renderImages = images => {
  return images.map(image => {
    const enableLink = image.content === "Event Passed" ? false : true;

    return (
      <Card key={image.id} className="grow" color="teal" raised fluid>
        <Image
          src={image.src}
          label={{
            color: image.color,
            content: image.content,
            icon: image.icon,
            ribbon: image.ribbon
          }}
          className="img-max-width"
        />
        <Card.Content>
          <Card.Header>
            {enableLink && (
              <Link to={`/event-page/${image.id}`}>{image.title}</Link>
            )}
            {!enableLink && image.title}
          </Card.Header>
          <Card.Description>{image.description}</Card.Description>
        </Card.Content>
      </Card>
    );
  });
};

const ProfileEvents = ({ profile }) => {
  const allEvents = [...eventPreview, ...pastEvents];
  const profileEvents = profile.events.map(event => event.eventId);
  const attendingEvents = allEvents.filter(event =>
    profileEvents.includes(event.id)
  );

  return (
    <Card.Group size="medium">
      {renderImages(attendingEvents)}
    </Card.Group>
  );
};

export default ProfileEvents;
