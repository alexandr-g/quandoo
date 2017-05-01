/* global jest, describe, it, expect */
import 'isomorphic-fetch'

jest.mock('./__mocks__/request')
const api = require('../src/utils/api')

describe('#getBio() using Promises', () => {
  it('should load user data and verify user name', () => {
    return api.getBio('alexandr-g')
    .then(data => {
      expect(data).toBeDefined()
      expect(data.name).toEqual('Alexander Grischuk')
    })
  })
})
