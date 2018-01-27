import React, { Component } from 'react';
import { Segment, Container, Grid, Header, List, Visibility, Transition } from 'semantic-ui-react';
import handleVisibility from '../utils/handleVisible';

class Footer extends Component {
  constructor() {
    super();

    this.handleVisibility = handleVisibility.bind(this);
  }

  state = {
    animation: null,
    visible: false,
    pass: 'slide up',
    reverse: 'slide down'
  };

  render() {
    const { animation, visible, pass, reverse } = this.state;

    return (
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Visibility
          onTopVisible={() => this.handleVisibility(pass, true)}
          onTopVisibleReverse={() => this.handleVisibility(reverse, false)}
          once={false}
        >
          <div style={{ height: '10px', width: '10px' }} />
        </Visibility>
        <Transition animation={animation} visible={visible} duration={700}>
          <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
              <Grid divided inverted stackable>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Header inverted as="h4" content="About" />
                    <List link inverted>
                      <List.Item as="a">Sitemap</List.Item>
                      <List.Item as="a">Contact Us</List.Item>
                      <List.Item as="a">Religious Ceremonies</List.Item>
                      <List.Item as="a">Gazebo Plans</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header inverted as="h4" content="Services" />
                    <List link inverted>
                      <List.Item as="a">Banana Pre-Order</List.Item>
                      <List.Item as="a">DNA FAQ</List.Item>
                      <List.Item as="a">How To Access</List.Item>
                      <List.Item as="a">Favorite X-Men</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={7}>
                    <Header as="h4" inverted>
                      Footer Header
                    </Header>
                    <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        </Transition>
      </Container>
    );
  }
}

export default Footer;
