import React from 'react'
import PropTypes from 'prop-types'
import { compose, withState, withHandlers } from 'recompose'
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

const SearchBar = ({ username, setUsername, userInfo, handleSubmit, handleChange }) => (
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
  handleChange: PropTypes.func,
  setUsername: PropTypes.func
}

export default compose(
  withState('username', 'setUsername', ''),
  withState('userInfo', 'setUserInfo', {}),
  withHandlers({
    handleChange: ({ setUsername }) => newValue => setUsername(newValue),
    handleSubmit: ({ username, setUserInfo }) => event => {
      getBio(username).then(response => setUserInfo(response))
      event.preventDefault()
    }
  })
)(SearchBar)
