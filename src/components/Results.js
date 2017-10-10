import React from 'react'
import PropTypes from 'prop-types'
import MyErrorBoundary from './MyErrorBoundary'

const Results = ({ userInfo }) => {
  const { name, login, location, bio } = userInfo

  return (
    <MyErrorBoundary>
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
    </MyErrorBoundary>
  )
}

Results.propTypes = {
  userInfo: PropTypes.object
}

export default Results
