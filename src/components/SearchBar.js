import React from 'react'
import PropTypes from 'prop-types'
import { compose, withHandlers, withStateHandlers } from 'recompose'
import Select from 'react-select'

import { getBio, options } from '../utils'

import Results from './Results'
import MyErrorBoundary from './MyErrorBoundary'

import 'react-select/dist/react-select.css'

const SearchBar = ({ username, userInfo, handleSubmit, handleChange }) => (
  <MyErrorBoundary>
    <form onSubmit={handleSubmit}>
      <div className='container-fluid'>
        <Select
          autofocus
          simpleValue
          name='search-input'
          options={options}
          placeholder='Search for a GitHub user'
          value={username}
          onChange={handleChange}
        />
      </div>
      <br />
      <p>1. Select user from drop-down or start typing username</p>
      <p>
        2. Press <b>Enter</b> to fetch user information from <b>GitHub</b>
      </p>
      <Results userInfo={userInfo} />
    </form>
  </MyErrorBoundary>
)

SearchBar.propTypes = {
  username: PropTypes.string,
  userInfo: PropTypes.object,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func
}

export default compose(
  withStateHandlers(
    ({ initialUsername = '' }) => ({
      username: initialUsername,
      userInfo: {}
    }), {
      handleChange: () => newValue => ({ username: newValue }),
      setUserInfo: () => userInfo => ({ userInfo })
    }
  ),
  withHandlers({
    handleSubmit: ({ username, setUserInfo }) => event => {
      getBio(username).then(response => setUserInfo(response))
      event.preventDefault()
    }
  })
)(SearchBar)
