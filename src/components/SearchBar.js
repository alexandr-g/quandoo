import React from 'react'
import PropTypes from 'prop-types'
import { compose, withState, withHandlers, withStateHandlers } from 'recompose'
import { getBio } from '../utils/api'
import Results from './Results'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

const options = [
  { value: 'alexandr-g', label: 'alexandr-g' },
  { value: 'btholt', label: 'btholt' },
  { value: 'coryhouse', label: 'coryhouse' },
  { value: 'gaearon', label: 'gaearon' }
]

const SearchBar = ({ username, userInfo, handleSubmit, handleChange }) => (
  !console.log('userInfo', userInfo) &&
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
)

SearchBar.propTypes = {
  username: PropTypes.string,
  userInfo: PropTypes.object,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func
}

export default compose(
  withState('userInfo', 'setUserInfo', {}),
  withStateHandlers(
    ({ initialUsername = '' }) => ({
      username: initialUsername
    }), {
      handleChange: ({ username }) => newValue => ({ username: newValue })
    }
  ),
  withHandlers({
    handleSubmit: ({ username, userInfo, setUserInfo }) => event => {
      getBio(username).then(response => setUserInfo(response))
      event.preventDefault()
    }
  })
)(SearchBar)
