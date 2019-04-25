import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Nav from './componentes/Nav'
import Home from './componentes/Home'
import Sobre from './componentes/Sobre'
import Produtos from './componentes/Produtos'
import Noty from 'noty'
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

  removeCategoria = async (e,catdId) => {
    e.preventDefault()
       const categorias = await this.props.api.deleteCategoria(catdId)
       this.showSuccess('Categoria deletada com sucesso')
       this.updateCategoria()
 }

 showSuccess(message){
  new Noty({
    type:"success",
    theme:"bootstrap-v4",
    layout:"bottomRight",
    text:message,
    timeout:"5000"
  }).show()
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
                 console.log('prop de app',props)
                  return <Produtos 
                  api={this.props.api}
                  categorias={this.state.categorias} {...props} 
                  loadCategorias={this.updateCategoria}
                  removeCategoria={this.removeCategoria}
                  showSuccess={this.showSuccess}
                  />
              }}/>
          </div>
        </Fragment>
      </Router>
    );
  }
}
export default App;
