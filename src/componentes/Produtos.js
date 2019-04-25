import React, { Component,Fragment } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { MdModeEdit } from 'react-icons/md'
import { Route,Link } from 'react-router-dom'
import Noty from 'noty'

import ProdutosHome from './ProdutosHome'
import Categoria from './Categoria'
import FormModal from './FormModal';

export default class Produtos extends Component {
    state = {
        modal:false,
        classe:'',
        load:false
    }


    componentDidMount(){
       this.props.loadCategorias()
       this.setState({load:true})
    }

    showInfo(message){
      new Noty({
        type:"info",
        theme:"bootstrap-v4",
        layout:"topRight",
        text:message,
        timeout:"3000"
      }).show()
    }

    notification = (e,id) => {
      const t = this
      const n = new Noty({
        text: 'Tem certeza que deletar??',
        theme:"bootstrap-v4",
        type:'warning',
        buttons: [
          Noty.button('YES', 'btn btn-success', function () {
              console.log('button 1 clicked');
              t.props.removeCategoria(e,id)
              n.close();
          }, {id: 'button1', 'data-status': 'ok'}),
      
          Noty.button('NO', 'btn btn-error', function () {
              console.log('button 2 clicked');
              n.close();
          })
        
        ]
      })
      n.show()
    }

    async enviaForm(input) {
      const result = await this.props.api.createCategoria(input)
      if(result.status == 201){
          this.props.showSuccess('Categoria adicionada com sucesso!')
          this.props.loadCategorias()
      }
      // console.log('result',result)
     
 }

    // update = (e) => {
    //   e.preventDefault()
    //   this.formModal(e)
    // }


    formModal = (e) => {
        e.preventDefault()
       this.setState({modal:!this.state.modal})
    }


   render() {
     console.log(this.state.modal)
    return (
      <>
      {<FormModal modal={this.state.modal} post={this.enviaForm.bind(this)}/>}
        <section className="produtos">
            {/* //FUNCIONA TBM DESTA MANEIRA!!!
              <Route exact={this.props.match.url} component={ProdutosHome}/> 
            */}
               <Route exact path={this.props.match.url} component={ProdutosHome}/> 
               <Route exact path={`${this.props.match.url}/categoria/:catId`} component={Categoria}/> 
        </section>
        <aside className="categorias">
            <h3>Categoria</h3>
            <button className="btn-new-category" onClick={this.formModal}>Nova categoria</button>
                {this.props.categorias.map(item => {
                return <Fragment key={Math.floor((Math.random() * 3000) + 4)}>
                          <Link className="LinkCategoria" to={`/produtos/categoria/${item.id}`}>
                                {item.categoria}
                                <MdDeleteForever onClick={(e) => this.notification(e,item.id)} style={{verticalAlign:'middle',cursor:'pointer'}} size="1em"/>
                                <MdModeEdit id={'targetUpdate'} onClick={this.formModalUpdate} style={{verticalAlign:'middle',cursor:'pointer'}} size="1em"/>
                          </Link><br/>
                       </Fragment>
            })}
        </aside>
      </>
    )
  }
}
