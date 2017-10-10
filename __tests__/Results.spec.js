/* global describe, test, expect */

import React from 'react'
import Results from '../src/components/Results'
import renderer from 'react-test-renderer'
import MyErrorBoundary from '../src/components/MyErrorBoundary'

describe('Results component', () => {
  test('results list is rendered without user info object', () => {
    const component = renderer.create(<MyErrorBoundary><Results /></MyErrorBoundary>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('results list is rendered with user info object', () => {
    const userInfo = {
      name: 'test',
      login: 'test login',
      location: 'planet earth'
    }
    const component = renderer.create(<Results userInfo={userInfo} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
