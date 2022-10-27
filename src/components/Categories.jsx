import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import CountrySelect from './CountrySelect'

const categories = [
  { name: 'all', text: '전체보기' },
  { name: 'business', text: '비즈니스' },
  { name: 'entertainment', text: '연예' },
  { name: 'health', text: '건강' },
  { name: 'science', text: '과학' },
  { name: 'sports', text: '스포츠' },
  { name: 'technology', text: '기술' },
]
const CategoriesWrap = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    width: 100%;
    overflow-x: auto;
  }
`

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: fit-content;
  margin: 0;
`
const Category = styled(NavLink)`
  cursor: pointer;
  white-space: pre;
  padding-bottom: 0.25rem;
  text-decoration: none;
  color: black;

  &:hover {
    color: #61809e;
  }
  & + & {
    margin-left: 1rem;
  }
  &.active {
    font-weight: 600;
    color: #22b8cf;
    text-decoration: underline;
    &:hover {
      color: #3bc9db;
    }
  }
`

function Categories({ country }) {
  return (
    <CategoriesWrap>
      <CategoriesBlock>
        {categories.map(item => {
          return (
            <Category
              key={item.name}
              end={item.name === 'all'}
              to={
                item.name === 'all' ? `/${country}` : `/${country}/${item.name}`
              }
            >
              {item.text}
            </Category>
          )
        })}
      </CategoriesBlock>
      <CountrySelect />
    </CategoriesWrap>
  )
}

export default Categories
