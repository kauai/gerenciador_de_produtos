import React, { Component,Fragment } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { Route,Link } from 'react-router-dom'
import axios from 'axios'

import ProdutosHome from './ProdutosHome'
import Categoria from './Categoria'
import FormModal from './FormModal';

export default class Produtos extends Component {
    state = {
        categorias:[],
        modal:false,
        classe:''
    }


    componentDidMount(){
       this.updateCategoria()
    }

    updateCategoria = async () => {
      const categorias = (await axios.get('http://localhost:3001/categorias')).data
      this.setState({ categorias })
    }

    removeCategoria = async (e,catdId) => {
       e.preventDefault()
       const categorias = await axios.delete(`http://localhost:3001/categorias/${catdId}`)
       this.updateCategoria()
    }

    formModal = (e) => {
       const targetModal = !this.state.modal ? 'translateModal' : 'translateModalClose'
       if(e.target.id == 'targetModal' || e.target.className.match('FormModal')){
         this.setState({modal:!this.state.modal,classe:targetModal})
       }
       console.log('formodal',e.target)
    }


   render() {
    this.esconder = this.state.modal ? 'visible':'hidden'
      // console.log(this.state.categorias)
    return (
      <>
        {<FormModal esconder={this.esconder} classe={this.state.classe} opacity={this.state.modal ? '1': '0'} closeModal={ this.formModal } update={this.updateCategoria}/>}
        <section className="produtos">
            {/* //FUNCIONA TBM DESTA MANEIRA!!!
              <Route exact={this.props.match.url} component={ProdutosHome}/> 
            */}
               <Route exact path={this.props.match.url} component={ProdutosHome}/> 
               <Route exact path={`${this.props.match.url}/categoria/:catId`} component={Categoria}/> 
        </section>
        <aside className="categorias">
            <h3>Categoria</h3>
            <button id="targetModal" onClick={this.formModal} style={{
                  display:'block',
                  cursor:'pointer',
                  fontSize:'18px',
                  color:'#fff',
                  background:'purple',
                  padding:'10px',
                  marginBottom:'15px',
                  border:'none'
              }}>Nova categoria</button>
            {this.state.categorias && this.state.categorias.map(item => {
                return <Fragment key={Math.floor((Math.random() * 3000) + 4)}><Link className="LinkCategoria" to={`/produtos/categoria/${item.id}`}>{item.categoria}<MdDeleteForever onClick={(e) => this.removeCategoria(e,item.id)} style={{verticalAlign:'middle',cursor:'pointer'}} size="1em"/></Link><br/></Fragment>
            })}
        </aside>
      </>
    )
  }
}
