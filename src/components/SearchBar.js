import React from 'react'

class SearchBar extends React.Component {
  render () {
    return (
      <form>
        <div className='form-group row'>
          <div className='container-fluid'>
            <input id='search-input' type='search' className='form-control' placeholder='Search for GitHub user' />
          </div>
        </div>
      </form>
    )
  }
}

export default SearchBar
