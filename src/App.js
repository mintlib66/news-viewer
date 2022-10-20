import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import axios from 'axios'
import NewsItem from './components/NewsItem'

function App() {
  const [data, setData] = useState(null)

  const API_KEY = process.env.REACT_APP_NEWS_API_KEY

  const onClick = async () => {
    try {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`
        )
        .then(res => {
          setData(res.data)
        })
    } catch (e) {
      console.log('error: ' + e)
    }
  }
  return (
    <div className="App">
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          row={15}
          col={10}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        ></textarea>
      )}
    </div>
  )
}

export default App
