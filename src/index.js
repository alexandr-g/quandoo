import React from 'react'
import { render } from 'react-dom'

const App = () => {
  render () {
    return (
      <div>
        <h1>Quandoo</h1>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
