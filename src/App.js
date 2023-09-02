import React, { Component } from 'react'
import NevBar from './component/NevBar'
import News from './component/News'

export default class App extends Component {
  render() {
    return (
      <div>
        <NevBar/>
        <News/>
      </div>
    )
  }
}
