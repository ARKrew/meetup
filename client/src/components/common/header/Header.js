import React, { Component } from 'react';
import { Container, Dropdown, Image, Menu, Visibility, Transition } from 'semantic-ui-react';
import { connect } from 'react-redux';
import MainHeader from './MainHeader';
import CompactHeader from './CompactHeader';
import handleVisibility from '../../utils/handleVisible';

class FixedMenuLayout extends Component {
  constructor() {
    super();

    this.handleVisibility = handleVisibility.bind(this);
  }

  state = {
    visible: false,
    pass: 'fade down',
    reverse: 'fade up'
  };

  render() {
    const { animation, pass, reverse, visible } = this.state;

    return (
      <Container>
        <Visibility
          onBottomPassed={() => this.handleVisibility(pass, true)}
          onBottomPassedReverse={() => this.handleVisibility(reverse, false)}
          once={false}
        >
          <MainHeader {...this.props} />
        </Visibility>
        <CompactHeader animation={animation} visible={visible} {...this.props} />
      </Container>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(FixedMenuLayout);
