import React from 'react'
import api from '../utils/api'
import Results from './Results'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      userInfo: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({username: event.target.value})
  }

  handleSubmit (event) {
    api.getBio(this.state.username)
      .then((response) => { this.setState({ userInfo: response }) })
    event.preventDefault()
    this.setState({ username: '' }) // clean input
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='container-fluid'>
          <input
            id='search-input'
            type='text'
            className='form-control'
            placeholder='Search for GitHub user'
            value={this.state.username}
            onChange={this.handleChange}
          />
        </div>
        <br />
        <p>Press Enter to fetch user info:</p>
        <Results userInfo={this.state.userInfo} />
      </form>
    )
  }
}

export default SearchBar
