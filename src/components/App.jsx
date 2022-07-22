import React from "react";
import { useState } from 'react';
import {Section} from 'components/Section/Section';
import {FeedbackOptions} from 'components/FeedbackOptions/FeedbackOptions';
import {Statistics} from 'components/Statistics/Statistics'
import {Notification} from 'components/Notification/Notification'

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

 const countTotalFeedback = () => {
  let total = 0;
  total = good + bad + neutral;
  return total;
  };

  const handleFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    switch (feedback) {

      case 'good':
      setGood(prevState => prevState + 1);
      break;
      case 'neutral':
      setNeutral(prevState => prevState + 1);
      break;
      case 'bad':
      setBad(prevState => prevState + 1);
      break;

      default:
        return;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    let total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };


    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();
  
  
  return (
   <>
  <Section title={'Please leave feedback'}>
  <FeedbackOptions 
  options={['good', 'neutral', 'bad']}
  onFeedback={handleFeedback}/>
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

};

