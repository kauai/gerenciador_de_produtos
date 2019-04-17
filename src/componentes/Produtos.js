import React, { Component } from 'react'
import { Route,Link } from 'react-router-dom'
import ProdutosHome from './ProdutosHome'
import Categoria from './Categoria'

export default class Produtos extends Component {
  render() {
    return (
      <>
        <section className="produtos">
            {/* //FUNCIONA TBM DESTA MANEIRA!!!
              <Route exact={this.props.match.url} component={ProdutosHome}/> 
            */}
               <Route exact path={this.props.match.url} component={ProdutosHome}/> 
               <Route exact path={`${this.props.match.url}/categoria/:catId`} component={Categoria}/> 
        </section>
        <aside className="categorias">
            <h3>Categoria</h3>
            <Link to="/produtos/categoria/1">Link categoria 101</Link>
        </aside>
      </>
    )
  }
}
