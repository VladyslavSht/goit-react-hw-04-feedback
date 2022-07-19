import React, { useReducer } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

const feedbackReducer = (state, action) => {
  const { good, neutral, bad } = state;

  switch (action.type) {
    case 'good':
      return { ...state, good: good + 1 };
    case 'neutral':
      return { ...state, neutral: neutral + 1 };
    case 'bad':
      return { ...state, bad: bad + 1 };
    default:
      throw new Error();
  }
};

const App = () => {

  const [feedback, dispatch] = useReducer(feedbackReducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

    const { good, neutral, bad } = feedback;
    const total = good + neutral + bad;

    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(feedback)}
            OnLeaveFeedback={dispatch}
          />
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
            />
          )}
        </Section>
      </div>
    );
  }

  export default App;
