import "./App.css"
import { Stack } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

// export const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:4000/api" : "/api"
export const BASE_URL = "http://localhost:4000/api"

function App() {

  return (
    <>
      <Stack h="100vh">
        <Navbar />
        <div className="container">
          <TodoForm />
          <TodoList />
        </div>
      </Stack>
    </>
  )
}

export default App
