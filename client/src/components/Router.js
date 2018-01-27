import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './common/header/Header';
import Landing from './landing/Landing';
import EventPage from './event/EventPage';
import Quiz from './quiz/Quiz';
import Footer from './common/Footer';

class Router extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            {/* Temporary link for development */}
            <Route exact path="/event-page" component={EventPage} />
            <Route exact path="/quiz" component={Quiz} />
						<Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(Router);
