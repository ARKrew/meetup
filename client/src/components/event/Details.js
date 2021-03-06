import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { DayPickerSingleDateController } from 'react-dates';
import { Button, Popup, Card, Embed } from 'semantic-ui-react';
import 'react-dates/lib/css/_datepicker.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class Details extends Component {
  constructor(props) {
    super(props);
    this.copyAddress = this.copyAddress.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.calcEventDate = this.calcEventDate.bind(this);
    this.calcGoogleMapsQueries = this.calcGoogleMapsQueries.bind(this);
  }

  state = {
    copyAddress: 'Click to copy!'
  };

  copyAddress() {
    this.setState({ copyAddress: 'Copied!' });
    return <Button icon="world" bordered color="teal" />;
  }

  renderButton() {
    return (
      <CopyToClipboard text={this.props.event.location}>
        <Button icon="world" bordered color="teal" />
      </CopyToClipboard>
    );
  }

  calcEventDate(eventDate) {
    let newDate = moment()
      .add({ day: 10, months: 3 })
      .format('MMMM Do YYYY');
    // if (this.props.event.date) {
    //   const date = eventDate.substring(0, 10);
    //   newdate = moment(date).add({day: 10, months: 3}).format('MMMM Do YYYY');
    // }
    return newDate;
  }

  calcGoogleMapsQueries(eventAddress) {
    // Default URL
    let url =
      'https://www.google.com/maps/embed/v1/place?key=AIzaSyBnwpbLJU6xN2xDKaCvYE_QmtoHyzW9DnI&q=Eiffel+Tower,Paris+France';

    if (eventAddress) {
      // Fires when event address exists
      const eventLocation = eventAddress.replace(/ /g, '+');
      url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBnwpbLJU6xN2xDKaCvYE_QmtoHyzW9DnI&q=${eventLocation}`;
    }
    return url;
  }

  render() {
    return (
      <div>
        <Card color="teal" style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Card.Description style={styles.cardContentItemOne}>
              <Popup
                trigger={<Button icon="calendar" bordered color="teal" />}
                on="click"
              >
                <Popup.Header>Calendar</Popup.Header>
                <Popup.Content>
                  <DayPickerSingleDateController />
                </Popup.Content>
              </Popup>
              <span style={styles.cardContentItemSpans}>
                {this.props.event.date
                  ? this.calcEventDate(this.props.event.date)
                  : this.calcEventDate()}
              </span>
            </Card.Description>
            <Card.Description style={styles.cardContentItemTwo}>
              <Popup trigger={this.renderButton()} on="click" hideOnScroll>
                <Popup.Header>
                  <i>Copied!</i>
                </Popup.Header>
              </Popup>
              <span style={styles.cardContentItemSpans}>
                {this.props.event.location}
              </span>
            </Card.Description>
          </Card.Content>
          <Embed
            active
            url={
              this.props.event.location
                ? this.calcGoogleMapsQueries(this.props.event.location)
                : this.calcGoogleMapsQueries()
            }
          />
        </Card>
      </div>
    );
  }
}

const styles = {
  card: {
    backgroundColor: '#f6f7f8',
    boxShadow: '0 0 0 0px #d4d4d5, 0 2px 0 0 #00b5ad, 0 1px 3px 0 #d4d4d5'
  },
  cardContent: {
    margin: '0',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  cardContentItemOne: {
    marginBottom: '1em',
    display: 'flex',
    order: '1',
    textAlign: 'left'
  },
  cardContentItemTwo: {
    marginBottom: '1.125em',
    display: 'flex',
    order: '2',
    textAlign: 'left'
  },
  cardContentItemSpans: {
    textAlign: 'left',
    marginLeft: '0.5em'
  }
};

export default Details;
