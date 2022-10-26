import React from 'react'
import styled from 'styled-components'
import NewsItem from './NewsItem'
import { useState, useEffect } from 'react'
import axios from 'axios'
import usePromise from '../lib/usePromise'

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
  const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${NEWS_API_KEY}`
    )
  }, [category])

  if (loading) {
    return <NewsList>불러오는 중...</NewsList>
  }
  if (!response) {
    return null
  }
  if (error) {
    return <NewsListBlock>오류가 발생했습니다.</NewsListBlock>
  }
  const { articles } = response.data
  return (
    <NewsListBlock>
      {articles.map(article => {
        return <NewsItem article={article} key={article.url}></NewsItem>
      })}
    </NewsListBlock>
  )
}

export default NewsList
