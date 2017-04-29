import React from 'react'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({username: event.target.value})
  }

  handleSubmit (event) {
    console.log('A name was submitted: ' + this.state.username)
    event.preventDefault()
  }

  render () {
    console.log(this.state)
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
      </form>
    )
  }
}

export default SearchBar
