import { useMutation,  useQueryClient } from "@tanstack/react-query"
import { createAnecdotes } from "../request"
import { useContext } from "react"
import NotificationContext from "../context/anecdoteContext"



const AnecdoteForm = () => {
  const { dispatch } = useContext(NotificationContext)
  const queryClient = useQueryClient()

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdotes,
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnecdote))
      dispatch({type: "SHOW", payload : `Added "${newAnecdote.content}"`})
    },
    onError: (error) => {
      console.log(error)
      dispatch({type: "ERROR", payload : error.response.data.error})
    }
  })

  setTimeout(() => {
    dispatch({type: 'CLEAR'})
  }, 5000);


  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({content})
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
