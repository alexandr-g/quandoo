import React from 'react'
import api from '../utils/api'
import Results from './Results'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

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

  handleChange (newValue) {
    this.setState({username: newValue})
  }

  handleSubmit (event) {
    api.getBio(this.state.username)
      .then((response) => { this.setState({ userInfo: response }) })
    event.preventDefault()
    this.setState({ username: '' }) // clean input
  }

  render () {
    const options = [
      { value: 'alexandr-g', label: 'alexandr-g' },
      { value: 'btholt', label: 'btholt' },
      { value: 'coryhouse', label: 'coryhouse' },
      { value: 'gaearon', label: 'gaearon' }
    ]

    return (
      <form onSubmit={this.handleSubmit}>
        <div className='container-fluid'>
          <Select
            autofocus
            simpleValue
            name='search-input'
            options={options}
            placeholder='Search for a GitHub user'
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
