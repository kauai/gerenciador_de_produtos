import React, { Component } from 'react'

export default class Categoria extends Component {
  render() {
      console.log(this.props)
    return (
      <div>
        <h1>Categoria</h1>
        <h1>{this.props.match.params.catId}</h1>
      </div>
    )
  }
}
