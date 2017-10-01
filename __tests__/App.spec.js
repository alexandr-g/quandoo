/* eslint-env jest */

import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../src/components/App'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('react-select/dist/react-select.css', () => jest.fn())

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
