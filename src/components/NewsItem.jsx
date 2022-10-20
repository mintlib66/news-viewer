import React from 'react'
import styled from 'styled-components'

const NewsItemWrap = styled.div`
  margin: 1rem auto;
  display: flex;
  flex-direction: column;

  border-bottom: 1px solid grey;
  max-width: 800px;

  a {
    color: black;
  }

  & + & {
    margin-top: 3rem;
  }
`

function NewsItem({ article }) {
  const { title, description, url, urlToImage } = article
  return (
    <NewsItemWrap>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} rel="noreferrer noopener">
            <img src={urlToImage} alt={title} />
          </a>
        </div>
      )}
      <div className="contents">
        <a href={url} target="noreferrer noopener">
          <h3>{title}</h3>
        </a>
        <p>{description}</p>
      </div>
    </NewsItemWrap>
  )
}

export default NewsItem
