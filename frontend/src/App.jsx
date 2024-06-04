import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import TodoForm from './components/TodoForm'
import Table from './components/Table'

function App() {
  const [todos, setTodos] = useState([])
  
  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = async () => {
    try{
      const response = await axios.get("http://127.0.0.1:8000/api/todo/");
      setTodos(response.data)
      console.log(response)
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <div className="bg-indigo-100 px-8 min-h-screen">
      <nav className="pt-8">
        <h2 className="text-5xl text-center pb-8">Todo List</h2>
      </nav>
      <TodoForm setTodos={setTodos} fetchData={fetchData()} />
      <Table todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App
