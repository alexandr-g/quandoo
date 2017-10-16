import React from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'

export default class App extends React.Component {
  render () {
    return (
      <Container>
        <Title>Error Boundaries in React 16</Title>
        <SearchBar />
      </Container>
    )
  }
}

const Title = styled.h1`
  padding-top: 20px;
  padding-bottom: 20px;
`

const Container = styled.div`
  text-align: center;
`
