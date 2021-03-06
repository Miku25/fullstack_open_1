import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0])

  let randomNumber = Math.random()*5

  while (Math.round(randomNumber) === selected) {
      randomNumber = Math.random()*5
  }

  console.log(Math.round(randomNumber))

  const handleNextClick = () => {
    return () => {
        setSelected(Math.round(randomNumber))
    }
  }

  const handleVoteClick = () => {
    return () => {
        const copy = votes.slice()
        copy[selected] += 1
        setVotes(copy)
    }
  }

  const indexOfMaxValue = votes.indexOf(Math.max.apply(Math, votes))

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {props.anecdotes[selected]}
      <br></br>
      has {votes[selected]} votes
      <br></br>
      <button onClick={handleVoteClick()} type="button">vote</button>
      <button onClick={handleNextClick()} type="button">next anecdote</button>
      <h2>Anecdote with most votes</h2>
      {props.anecdotes[indexOfMaxValue]}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)