import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote }) => {
   const dispatch = useDispatch()
   const handleClick = () => {
      dispatch<any>(setNotification(`You voted for "${anecdote.content}"`, 5000))
      dispatch<any>(voteAnecdote(anecdote.id))
   }
   return (
      <div>
         <div>
            {anecdote.content}
         </div>
         <div>
            has {anecdote.votes}
            <button onClick={handleClick}>vote</button>
         </div>
      </div>
   )
}

const AnecdoteList = () => {
   const anecdotes = useSelector(({ filter, anecdotes }) => {
      if (filter === '') {
         return anecdotes
      }
      return anecdotes.filter(anecdote => anecdote.content.includes(filter))
   })
   return (
      <div>
         {[...anecdotes].slice()
            .sort((a, b) => b.votes - a.votes)
            .map(anecdote => (
               <Anecdote key={anecdote.id} anecdote={anecdote} />
            ))}
      </div>
   )
}

export default AnecdoteList
