import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { updateAnecdotes } from '../request'
import NotificationContext from '../context/anecdoteContext'


const Display = ({anecdotes}) => {
   const {dispatch } = useContext(NotificationContext)
   const queryClient = useQueryClient()

   const updateMutation = useMutation({
      mutationFn: updateAnecdotes,
      onSuccess: () => {
       queryClient .invalidateQueries({queryKey: ['anecdotes']})
      }
    })

    const handleVote = (anecdote) => {
    updateMutation.mutate({...anecdote, votes: anecdote.votes + 1})
    dispatch({type: 'SHOW', payload: `anecdote ${anecdote.content} voted`})
   }

   
  return (
    <div>
      {anecdotes?.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Display