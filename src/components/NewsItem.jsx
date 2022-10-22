import React from 'react'
import styled from 'styled-components'

const NewsItemBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0.5rem;

  border-bottom: 1px solid grey;

  a {
    color: black;
  }

  .thumbnail img {
    width: 160px;
    margin-right: 0.5rem;
  }
  .contents {
    display: flex;
    flex-direction: column;
    text-align: left;

    & h3,
    & p {
      margin: 0.5rem 0;
    }
  }
`

function NewsItem({ article }) {
  const { title, description, url, urlToImage } = article
  return (
    <NewsItemBlock>
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
    </NewsItemBlock>
  )
}

export default NewsItem
