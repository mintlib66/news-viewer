import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NewsPage from './components/NewsPage'

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<NewsPage />} />
      <Route path=":country" exact element={<NewsPage />} />
      <Route path=":country/:category" element={<NewsPage />} />
    </Routes>
  )
}

export default App
