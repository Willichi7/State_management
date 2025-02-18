import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'


export const getAnecdotes = () =>
  axios.get(baseUrl).then(res => res.data)

export const createAnecdotes = newAnecdotes => 
   axios.post(baseUrl, newAnecdotes).then(res => res.data)


export const updateAnecdotes = updatedAnec =>
  axios.put(`${baseUrl}/${updatedAnec.id}`, updatedAnec).then(res => res.data)