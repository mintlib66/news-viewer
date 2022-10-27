import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const countries = [
  { name: 'kr', text: '한국' },
  { name: 'us', text: '미국' },
  { name: 'jp', text: '일본' },
  { name: 'ch', text: '중국' },
  { name: 'all', text: '전세계' },
]
const CountrySelectBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;

  span {
    margin-bottom: 0.1rem;
    margin-right: 0.25rem;
  }
  * {
    flex-wrap: wrap;
    font-size: 1rem;
    width: fit-content;
    height: fit-content;
  }
`

function CountrySelect() {
  const navigate = useNavigate()
  const onChangeSelect = event => {
    navigate(`/${event.target.value}`)
  }

  return (
    <CountrySelectBlock>
      <span>국가</span>
      <select onChange={onChangeSelect}>
        {countries.map(item => {
          return (
            <option key={item.name} value={item.name}>
              {item.text}
            </option>
          )
        })}
      </select>
    </CountrySelectBlock>
  )
}

export default CountrySelect
