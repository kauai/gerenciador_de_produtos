import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Nav from './componentes/Nav'
import Home from './componentes/Home'
import Sobre from './componentes/Sobre'
import Produtos from './componentes/Produtos'
import './bootstrap-v4.css'
import './noty.css'


class App extends Component {
  state = {
    initial:'',
    categorias:[]
  };

  updateCategoria = async () => {
    const categorias = await this.props.api.loadCategorias()
    this.setState({ categorias })
  }



  render() {
    return (
      <Router>
        <Fragment>
          <Nav/>
          <div className="container">
              <Route exact path="/" component={Home}/>
              <Route path="/sobre" component={Sobre}/>
              <Route path="/produtos" render={(props) => {
                  return <Produtos categorias={this.state.categorias} {...props} loadCategorias={this.updateCategoria}/>
              }}/>
          </div>
        </Fragment>
      </Router>
    );
  }
}
export default App;
