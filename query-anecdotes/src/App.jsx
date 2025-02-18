import { useQuery} from '@tanstack/react-query'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { getAnecdotes } from './request'
import Display from './components/Display'

const App = () => {
  
  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    refetchOnWindowFocus: false,
    retry: 1,
    onError: (error) => {
      console.log("Error fetching anecdotes:", error)
    }
  }) 

  if(result.isLoading) {
    return <div><strong>loading data...</strong></div>
  }

  if(result.isError) {
    return <div><strong>anecdotes service is not available due to problems in server</strong></div>
  }

  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
      <Notification />
      <AnecdoteForm />
      <Display anecdotes={anecdotes}/> 
    </div>
  )
}

export default App
