import React from 'react'
import SearchBar from './SearchBar'

export default class App extends React.Component {
  render () {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Quandoo</h1>
        <SearchBar />
      </div>)
  }
}
