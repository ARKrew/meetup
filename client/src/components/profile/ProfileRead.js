import React, { Component } from "react";
import {
  Button,
  Card,
  Form,
  Icon,
  Image,
  Message,
  Segment,
  Table,
  Transition,
  Label
} from "semantic-ui-react";
import { connect } from "react-redux";
import profileFields from "../../constants/profileFields";
import ProfilePlaceholder from "../../assets/images/ProfilePlaceholder.png";
import "./profile.css";

class ProfileRead extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderMessage = () => (
    <Message positive>
      <Message.Header>Save successful!</Message.Header>
    </Message>
  );

  renderFields = profile =>
    profileFields.map(field => (
      <Table.Row>
        <Table.Cell>
          <Label color="teal" ribbon>
            {field.label}
          </Label>
          {profile[field.name]}
        </Table.Cell>
      </Table.Row>
    ));

  render() {
    const { profile, onUpdate, success } = this.props;

    return (
      <Card color="blue" centered raised fluid>
        {success && this.renderMessage()}
        <Image
          src={(profile && profile.bigPhotoURL) || ProfilePlaceholder}
          className="img-max-width"
        />
        <Card.Content>
          <Card.Header>{profile.displayName}</Card.Header>
          <Card.Meta>
            <span>Joined in 2018</span>
          </Card.Meta>
          <Card.Description>
            <Table celled>
              <Table.Body>{profile && this.renderFields(profile)}</Table.Body>
            </Table>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            22 Friends
          </a>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button onClick={onUpdate} basic color="teal" size="large">
              Update
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

export default ProfileRead;
