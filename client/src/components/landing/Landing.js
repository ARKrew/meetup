import React, { Component } from 'react';
import { Divider, Visibility } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { scroll } from '../../actions';
import Video from './Video';
import Events from './Events';
import About from './About';

class Landing extends Component {
  constructor() {
		super();
		
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, 10);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
		const scrollValue = window.scrollY;

    this.props.scroll(scrollValue);
  }

  render() {
    return (
      <Visibility style={{ height: '100%' }}>
        <Video />
        <Divider horizontal inverted />
				<About />
				<Divider horizontal inverted />
        <Events />
        <Divider horizontal inverted />
      </Visibility>
    );
  }
}

export default connect(null, {scroll})(Landing);
