import { QueryClient, QueryClientProvider, } from 'react-query';
import PostsComponent from './components/PostsComponent';
import './App.css'

function App() {
  const queryClient = new QueryClient();

  return (
    <>
       <QueryClientProvider client={queryClient}>
        <PostsComponent />
      </QueryClientProvider>
    </>
  )
}

export default App
