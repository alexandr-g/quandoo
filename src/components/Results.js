import React from 'react'
import PropTypes from 'prop-types'

const Results = ({ userInfo }) => {
  if (!userInfo) {
    return <div>Loading...</div>
  }

  const { name, login, location, bio } = userInfo

  return (
    <div className='container'>
      <div className='card-block'>
        <ul className='list-group'>
          <li className='list-group-item'>
            <b>Name:</b> {name}
          </li>
          <li className='list-group-item'>
            <b>Login:</b> {login}
          </li>
          <li className='list-group-item'>
            <b>Location:</b> {location}
          </li>
          <li className='list-group-item'>
            <b>Bio:</b> {bio}
          </li>
        </ul>
      </div>
    </div>
  )
}

Results.propTypes = {
  userInfo: PropTypes.object
}

export default Results
