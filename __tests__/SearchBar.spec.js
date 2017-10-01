/* global describe, it, expect, jest */

import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'isomorphic-fetch'

import SearchBar from '../src/components/SearchBar'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('react-select/dist/react-select.css', () => jest.fn())

describe.only('SearchBar', () => {
  let component

  beforeEach(() => {
    component = mount(<SearchBar />)
  })

  it('should render a `form`', () => {
    expect(component.find('form')).toBeTruthy()
  })

  it('should render one div with Select', () => {
    expect(component.find('div').find('Select')).toBeTruthy()
  })

  it('should render two p with a text', () => {
    expect(component.find('p').length).toEqual(2)
  })

  it('should have onChange handler in Select', () => {
    expect(component.find('div').find('Select').props()).toHaveProperty('onChange')
  })

  it('Select should have autofocus', () => {
    expect(component.find('div').find('Select').prop('autofocus')).toEqual(true)
  })

  it('should have onChange value in Select', () => {
    expect(component.find('div').find('Select').prop('value')).toEqual('')
  })

  it('should have options', () => {
    expect(component.find('div').find('Select').prop('options')).toEqual(
      [
        { value: 'alexandr-g', label: 'alexandr-g' },
        { value: 'btholt', label: 'btholt' },
        { value: 'coryhouse', label: 'coryhouse' },
        { value: 'gaearon', label: 'gaearon' }
      ]
    )
  })
})
