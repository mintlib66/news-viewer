import React from 'react'
import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

const categories = [
  { name: 'all', text: '전체보기' },
  { name: 'business', text: '비즈니스' },
  { name: 'entertainment', text: '연예' },
  { name: 'health', text: '건강' },
  { name: 'science', text: '과학' },
  { name: 'sports', text: '스포츠' },
  { name: 'technology', text: '기술' },
]

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 800px;
  margin: 0;
  @media screen and (max-width: 800px) {
    width: 100%;
    overflow-x: auto;
  }
`
const Category = styled(NavLink)`
  cursor: pointer;
  white-space: pre;
  padding-bottom: 0.25rem;
  text-decoration: none;

  &:hover {
    color: #495057;
  }
  & + & {
    margin-left: 1rem;
  }
  ${props =>
    props.active &&
    css`
      font-weight: 600;
      color: #22b8cf;
      text-decoration: underline;
      &:hover {
        color: #3bc9db;
      }
    `}
`
function Categories() {
  return (
    <CategoriesBlock>
      {categories.map(item => {
        return (
          <Category
            key={item.name}
            className={'active'}
            to={item.name === 'all' ? '/' : `/${item.name}`}
          >
            {item.text}
          </Category>
        )
      })}
    </CategoriesBlock>
  )
}

export default Categories
