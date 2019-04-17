import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Nav from './componentes/Nav'
import Home from './componentes/Home'
import Sobre from './componentes/Sobre'
import Produtos from './componentes/Produtos'

class App extends Component {
  state = {
    initial:''
  };


  render() {
    return (
      <Router>
        <Fragment>
          <Nav/>
          <div className="container">
              <Route exact path="/" component={Home}/>
              <Route path="/sobre" component={Sobre}/>
              <Route path="/produtos" component={Produtos}/>
          </div>
        </Fragment>
      </Router>
    );
  }
}
export default App;
