import React, { useState } from 'react'
import Select from 'react-select'

import { getBio, options } from '../utils'

import Results from './Results'
import MyErrorBoundary from './MyErrorBoundary'

import 'react-select/dist/react-select.css'

function SearchBar () {
  const [userInfo, setUserInfo] = useState({})
  const [username] = useState('')

  const handleSubmit = (event) => {
    getBio(username).then(response => setUserInfo(response))
    event.preventDefault()
  }

  const handleChange = () => newValue => ({ username: newValue })

  return (
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
}

export default SearchBar
