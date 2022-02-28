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
      <Statistics good={good} neutral={neutral} bad={bad}/>
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

  if (props.good || props.neutral || props.bad) {
    return (
      <>
        <h2>
            Stats
          </h2>
          <table>
            <tbody>
              <StatisticsLine text="good" value={props.good} />
              <StatisticsLine text="neutral" value={props.neutral} />
              <StatisticsLine text="bad" value={props.bad} />
              <StatisticsLine text="all" value={props.good + props.neutral + props.bad} />
              <StatisticsLine text="average" value={calculateAvg()} />
              <StatisticsLine text="positive" value={calculatePositivePercent()} />
            </tbody>
          </table>
        </>
    )
  }
  return (
    <p>
      No feedback given
    </p>
  );
};

const StatisticsLine = (props) => {
  const value = (props.text === 'positive') ? props.value + '%' : props.value;

  return (
    <tr>
      <td>
        {props.text}
      </td> 
      <td>
        {value}
      </td>
    </tr>
  );
};

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
};

export default App;