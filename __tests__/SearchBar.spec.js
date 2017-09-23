/* global describe, it, expect, jest */

import React from 'react'
import SearchBar from '../src/components/SearchBar'
import { mount } from 'enzyme'
import 'isomorphic-fetch'

jest.mock('react-select/dist/react-select.css', () => jest.fn())

describe('SearchBar', () => {
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
})
