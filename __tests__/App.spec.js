import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import App from '../src/components/App'

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })

  it('renders h1 inside App with a Quandoo value', () => {
    const component = shallow(<App />)
    expect(component.find('h1').text()).toEqual('Quandoo')
  })
})
