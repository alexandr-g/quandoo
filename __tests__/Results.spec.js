import React from 'react'
import Results from '../src/components/Results'
import renderer from 'react-test-renderer'

test('results list is rendered without user info object', () => {
  const component = renderer.create(<Results />)
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
