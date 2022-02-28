import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length));

  const randomizeAnecdote = () => {
    const randomNum = Math.floor(Math.random() * (anecdotes.length));
    setSelected(randomNum);
  }

  const vote = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
  };

  const getMostVoted = () => {
    const pointsCopy = points;
    const mostVotes = Math.max(...pointsCopy);
    const mostVotesIndex = pointsCopy.indexOf(mostVotes);
    return mostVotesIndex
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>
        has {points[selected]} votes
      </p>
      <button onClick={vote}>
        Vote for this anecdote
      </button>
      <button onClick={randomizeAnecdote}>
        Next anecdote
      </button>
      <h1>
        Anecdote with most votes
      </h1>
      <p>
        {anecdotes[getMostVoted()]}
      </p>
      <p>
        has {points[getMostVoted()]} votes
      </p>
    </div>
  )
}

export default App