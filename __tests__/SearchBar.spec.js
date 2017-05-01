/* global describe, it, expect, jest */

import React from 'react'
import SearchBar from '../src/components/SearchBar'
import { shallow } from 'enzyme'
import 'isomorphic-fetch'

jest.mock('react-select/dist/react-select.css', () => jest.fn())

describe('SearchBar', () => {
  it('should render a `form`', () => {
    const component = shallow(<SearchBar />)
    expect(component.find('form')).toBeTruthy()
  })

  it('should render p with a text', () => {
    const component = shallow(<SearchBar />)
    expect(component.find('p').text()).toEqual('Press Enter to fetch user info:')
  })
})
