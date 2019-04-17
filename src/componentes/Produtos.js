import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ProdutosHome from './ProdutosHome'

export default class Produtos extends Component {
  render() {
    return (
      <>
        <section className="produtos">
            {/* //FUNCIONA TBM DESTA MANEIRA!!!
              <Route exact={this.props.match.url} component={ProdutosHome}/> 
            */}
               <Route exact path={this.props.match.url} component={ProdutosHome}/> 
        </section>
        <asside className="categorias">
            <h3>Categoria</h3>
            <p>Link para categoria</p>
        </asside>
      </>
    )
  }
}
