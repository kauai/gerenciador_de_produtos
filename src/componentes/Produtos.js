import React, { Component,Fragment } from 'react'
import { Route,Link } from 'react-router-dom'
import axios from 'axios'

import ProdutosHome from './ProdutosHome'
import Categoria from './Categoria'

export default class Produtos extends Component {
    state = {
        categorias:[]
    }


    async componentDidMount(){
        const categorias = (await axios.get('http://localhost:3001/categorias')).data
        this.setState({ categorias })
    }


   render() {
      // console.log(this.state.categorias)
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
            {this.state.categorias && this.state.categorias.map(item => {
                return <Fragment key={Math.floor((Math.random() * 3000) + 4)}><Link to={`/produtos/categoria/${item.id}`}>{item.categoria}</Link><br/></Fragment>
            })}
        </aside>
      </>
    )
  }
}
