import React, { Component } from 'react'
import netlifyIdentity from 'netlify-identity-widget'

export class Home extends Component {

    handleLogin = () => {
        netlifyIdentity.open()
    }
  render() {
    return (
      <div>
        <h1>this is landing </h1>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    )
  }
}

export default Home
