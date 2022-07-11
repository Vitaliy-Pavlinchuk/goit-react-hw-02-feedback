import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  onLeaveFeedback1 = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 5,
      };
    });
  };

  onLeaveFeedback2 = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad - 1,
      };
    });
  };

  // onLeaveFeedback = event => {
  //   const target = event.target;
  //   console.log('Увеличить');
  //   console.log(target);
  // };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            oNgood={this.onLeaveFeedback}
            oNneutral={this.onLeaveFeedback1}
            ONbad={this.onLeaveFeedback2}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
          />
        </Section>
      </>
    );
  }
}
