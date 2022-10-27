import React from 'react'
import NewsList from './NewsList'
import Categories from './Categories'
import { useParams } from 'react-router-dom'

function NewsPage() {
  const params = useParams()
  const country = params.country || 'kr'
  const category = params.category || 'all'
  console.log(params)

  return (
    <div>
      <Categories country={country} />
      <NewsList country={country} category={category} />
    </div>
  )
}

export default NewsPage
