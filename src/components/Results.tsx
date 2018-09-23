import React from 'react'
import styled from 'styled-components'

interface Props {
  userInfo: {
    name: string,
    login: string,
    location: string,
    bio: string,
  }
}

const Results = ({ userInfo }: Props) => {
  const { name, login, location, bio } = userInfo

  return (
    <div className='container'>
      <div className='card-block'>
        <ul className='list-group'>
          <li className='list-group-item'>
            <b>Name:</b> <TextTile> {name} </TextTile>
          </li>
          <li className='list-group-item'>
            <b>Login:</b> <TextTile> {login} </TextTile>
          </li>
          <li className='list-group-item'>
            <b>Location:</b> <TextTile> {location} </TextTile>
          </li>
          <li className='list-group-item'>
            <b>Bio:</b> <TextTile> {bio} </TextTile>
          </li>
        </ul>
      </div>
    </div>
  )
}

const TextTile = styled.span`
  padding-left: 7px
`

export default Results
