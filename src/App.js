import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import axios from 'axios'
import NewsList from './components/NewsList'

function App() {
  return <div className="App">{<NewsList />}</div>
}

export default App
