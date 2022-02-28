import { useState } from 'react';

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  return (
    <div>
      <h1>
        Unicafe feedback
      </h1>
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad} />
      
    </div>
  )
}

const Statistics = (props) => {
  const calculateAvg = () => {
    const avg = (props.good - props.bad) / (props.good + props.neutral + props.bad);

    if (avg) {
      return avg;
    }
    return 0;
  };

  const calculatePositivePercent = () => {
      const positivePercent = (props.good / (props.good + props.neutral + props.bad)) * 100;

      if (positivePercent) {
        return positivePercent
      } 
      return 0;
  };


  return (
    <>
      <h2>
          Stats
        </h2>
        <p>
          good {props.good}
        </p>
        <p>
          neutral {props.neutral}
        </p>
        <p>
          bad {props.bad}
        </p>
        <p>
          all {props.good + props.neutral + props.bad}
        </p>
        <p>
          average {calculateAvg()}
        </p>
        <p>
          positive {calculatePositivePercent()} %
        </p>
      </>
  )
};

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
};

export default App;