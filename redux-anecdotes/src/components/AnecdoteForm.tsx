import React from 'react'
import {  useDispatch } from 'react-redux'
import { addedAnecdotes } from '../reducers/anecdoteReducer'


const AnecdoteForm = () => {
   const dispatch = useDispatch()
   
   const addAnecdote = async (e) => {
      e.preventDefault()
      const content = e.target.content.value
      e.target.content.value = ''
      dispatch<any>(addedAnecdotes(content))
    }
  
  return (
    <div>
       <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name='content' />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm