import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MyErrorBoundary extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hasError: false
    }
  }

  /* eslint handle-callback-err: "warn" */
  componentDidCatch (error, info) {
    this.setState(state => ({ ...state, hasError: true }))
    // in real life send to reporting
    console.log(error, info)
  }

  render () {
    if (this.state.hasError) {
      return <div>Sorry, something went wrong.</div>
    } else {
      return this.props.children
    }
  }
}

MyErrorBoundary.propTypes = {
  children: PropTypes.element
}

export default MyErrorBoundary
