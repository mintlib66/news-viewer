import React from 'react'
import styled from 'styled-components'
import NewsItem from './NewsItem'
import { useState, useEffect } from 'react'
import axios from 'axios'

const NewsListBlock = styled.div`
  box-sizing: border-box;
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 3rem;

  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 0 1rem 3rem;
  }
`

function NewsList({ category }) {
  const [articles, setArticles] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY
    const fetchData = async () => {
      setLoading(true)
      try {
        const query = category === 'all' ? '' : `&category=${category}`
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${NEWS_API_KEY}`
        )
        setArticles(res.data.articles)
      } catch (e) {
        console.log('error: ' + e)
      }
      setLoading(false)
    }
    fetchData()
  }, [category])

  if (loading) {
    return <NewsList>불러오는 중...</NewsList>
  }
  if (!articles) {
    return null
  }
  return (
    <NewsListBlock>
      {articles.map(article => {
        return <NewsItem article={article} key={article.url}></NewsItem>
      })}
    </NewsListBlock>
  )
}

export default NewsList
