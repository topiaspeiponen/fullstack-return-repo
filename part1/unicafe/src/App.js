import { useState } from 'react';

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const calculateAvg = () => {
    const avg = (good - bad) / (good + neutral + bad);

    if (avg) {
      return avg;
    }
    return 0;
  };

  const calculatePositivePercent = () => {
      const positivePercent = (good / (good + neutral + bad)) * 100;

      if (positivePercent) {
        return positivePercent
      } 
      return 0;
  };

  return (
    <div>
      <h1>
        Unicafe feedback
      </h1>
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="bad"/>

      <h2>
        Stats
      </h2>
      <p>
        good {good}
      </p>
      <p>
        neutral {neutral}
      </p>
      <p>
        bad {bad}
      </p>
      <p>
        all {good + neutral + bad}
      </p>
      <p>
        average {calculateAvg()}
      </p>
      <p>
        positive {calculatePositivePercent()} %
      </p>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
};

export default App;