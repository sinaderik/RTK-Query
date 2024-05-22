import React from 'react'
import TodoList from './features/TodoList'


// To run the json server paste this line of code in terminal
// json-server --watch src/data/db.json --port 3500
const App = () => {
  
  return (
    <div>
      <TodoList />
    </div>
  )
}

export default App