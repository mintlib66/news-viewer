import React from 'react'
import NewsList from './NewsList'
import Categories from './Categories'
import { useParams } from 'react-router-dom'

function NewsPage() {
  const params = useParams()
  const category = params.category || 'all'
  console.log(category)

  return (
    <div>
      <Categories />
      <NewsList category={category} />
    </div>
  )
}

export default NewsPage
