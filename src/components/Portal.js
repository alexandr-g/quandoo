import React from 'react'
import ReactDOM from 'react-dom'

const Portal = () => (
  <div>
    <h1>Dashboard</h1>
    {ReactDOM.createPortal(
      <div>Welcome</div>,
      document.getElementById('portal-container')
    )}
  </div>
)

ReactDOM.render(<Portal />, document.getElementById('portal-container'))

// Render Elements Outside the Current React Tree using Portals
