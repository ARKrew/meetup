import React, { Component } from 'react';
import { Button, Label, Header, Icon, Modal } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class AttendeeModal extends Component {
  state = { modalOpen: false };

  componentDidMount() {
    const eventId = this.props.match.params.eventId;
    this.setState({ eventId });
  }

  handleOpen = () => this.setState({ modalOpen: true });

  handleQuiz = () => {
    this.props.history.push('/quiz');
    this.setState({ modalOpen: false });
  };

  handleRecruiter = () => {
    this.props.history.push('/recruiter');
    this.setState({ modalOpen: false });
  };

  render() {
    console.log(this.state.eventId);
    return (
      <Modal
        className="scrolling"
        trigger={
          <Button
            className="attendButton"
            onClick={this.handleOpen}
            as="div"
            labelPosition="right"
          >
            <Button color="teal">
              <Icon name="fork" />
              Attend
            </Button>
            <Label as="a" basic color="teal" pointing="left">
              228
            </Label>
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size="small"
      >
        <Header icon="browser" content="Meetup" />
        <Modal.Content>
          <h3>Are you an attendee or a recruiter?</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleQuiz} inverted>
            Attendee
          </Button>
          <Button onClick={this.handleRecruiter} inverted>
            Recruiter
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default withRouter(AttendeeModal);
