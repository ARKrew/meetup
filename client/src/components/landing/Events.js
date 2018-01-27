import React, { Component } from 'react';
import { Container, List } from 'semantic-ui-react';
import Images from '../../constants/eventPreview';
import EventItem from './EventItem';
import SectionHead from './SectionHead';

require('./landing.css');

class Events extends Component {
  renderImages() {
    const listItems = Images.map((image, index) => (
      <List.Item id={index}>
        <EventItem
          image={image}
          index={index}
        />
      </List.Item>
    ));

    return listItems;
  }

  render() {
    return (
      <Container>
        <SectionHead name="About" />

        <SectionHead name="Events" />

        <List ref="listNode">{this.renderImages()}</List>
      </Container>
    );
  }
}

export default Events;
