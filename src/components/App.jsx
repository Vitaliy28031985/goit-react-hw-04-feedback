import React from "react";

import {Section} from 'components/Section/Section';
import {FeedbackOptions} from 'components/FeedbackOptions/FeedbackOptions';
import {Statistics} from 'components/Statistics/Statistics'
import {Notification} from 'components/Notification/Notification'

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  };

  handleFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState(prevState => {
    return { [feedback]: prevState[feedback] + 1 };
    });
  };

  countPositiveFeedbackPercentage = () => {
    let total = this.countTotalFeedback();
    const {good} = this.state;
    return total ? Math.round((good / total) * 100) : 0;
  };



  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
  
  
  return (
   <>
  <Section title={'Please leave feedback'}>
  <FeedbackOptions options={this.state} onFeedback={this.handleFeedback}/>
  </Section>
  <Section title={'Statistics'}>
  {total ? (
  <Statistics 
  good={good} 
  neutral={neutral} 
  bad={bad} 
  total={total} 
  positivePercentage={positivePercentage}/>) : 
  (<Notification message='There is no feedback'/>)}
 
  </Section>
    </>
    
  );
}
};

