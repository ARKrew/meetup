import React, { Component } from 'react';
import { Card, Container, Transition } from 'semantic-ui-react';
import SectionHead from './SectionHead';

class About extends Component {
  render() {
    return (
      <Container className="about-main">
        <SectionHead name="Our Story" />
				<Container textAlign='center' text style={{ position: 'relative' }}>
					<div className='about-text'><h1>01</h1></div>					
					<div style={{ backgroundColor: '#2f2f2f', width: '70px', height: '2px' }} />
					<div><p>text goes here</p></div>
				</Container>
      </Container>
    );
  }
}

export default About;
