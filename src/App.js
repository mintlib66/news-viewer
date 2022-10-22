import logo from './logo.svg'
import './App.css'
import NewsList from './components/NewsList'
import Categories from './components/Categories'
import { useCallback, useState } from 'react'

function App() {
  const [categorySelect, setCategorySelect] = useState('all')
  const onSelect = useCallback(category => setCategorySelect(category), [])

  return (
    <div className="App">
      <Categories categorySelect={categorySelect} onSelect={onSelect} />
      <NewsList category={categorySelect} />
    </div>
  )
}

export default App
