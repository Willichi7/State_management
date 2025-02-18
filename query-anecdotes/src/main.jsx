import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NotificationProvider } from './context/anecdoteContext.jsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <NotificationProvider>
    <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
  </NotificationProvider>

  
  
)
