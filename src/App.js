import React, { Component, Fragment } from "react";
import Nav from './componentes/Nav'

class App extends Component {
  state = {
    initial:''
  };

  render() {
    return (
      <Fragment>
        <Nav/>
        <div className="container">
            <h1>teste</h1>
        </div>
      </Fragment>
    );
  }
}
export default App;
