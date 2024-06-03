import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './components/TodoForm'
import Table from './components/Table'

function App() {

  return (
    <div className='bg-indigo-100 px-8 min-h-screen'>
      <nav className='pt-8'>

      <h2 className='text-5xl text-center'>Hello From Bishnu Thapa</h2>
      </nav>
      <TodoForm />
      <Table />

    </div>
  )
}

export default App
