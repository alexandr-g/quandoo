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
          <li className='list-group-item'>Name: {name}</li>
          <li className='list-group-item'>Login: {login}</li>
          <li className='list-group-item'>Location: {location}</li>
          <li className='list-group-item'>Bio: {bio}</li>
        </ul>
      </div>
    </div>
  )
}

Results.propTypes = {
  userInfo: PropTypes.object
}

export default Results
