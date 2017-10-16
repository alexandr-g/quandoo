import React from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'
// import String from './String'
// import Fruits from './Fruits'
// import Portal from './Portal'

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
