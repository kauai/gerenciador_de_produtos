import React, { Component,Fragment } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { Route,Link } from 'react-router-dom'
import Noty from 'noty'

import ProdutosHome from './ProdutosHome'
import Categoria from './Categoria'
import FormModal from './FormModal';
import Api from './Api'

export default class Produtos extends Component {
    state = {
        modal:false,
        classe:''
    }


    componentDidMount(){
       this.props.loadCategorias()
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

    showSuccess(message){
      new Noty({
        type:"success",
        theme:"bootstrap-v4",
        layout:"bottomRight",
        text:message,
        timeout:"5000"
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
              t.removeCategoria(e,id)
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

 
    removeCategoria = async (e,catdId) => {
       e.preventDefault()
          const categorias = await Api.deleteCategoria(catdId)
          this.showSuccess('Categoria deletada com sucesso')
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
        {<FormModal esconder={this.esconder} classe={this.state.classe} opacity={this.state.modal ? '1': '0'} closeModal={ this.formModal } update={this.updateCategoria} success={this.showInfo}/>}
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
                {this.props.categorias.map(item => {
                return <Fragment key={Math.floor((Math.random() * 3000) + 4)}>
                <Link 
                style={{
                  background: '#FFF3E0',
                  fontWeight:'500',
                  padding:'5px'
              }} className="LinkCategoria" to={`/produtos/categoria/${item.id}`}>{item.categoria}<MdDeleteForever onClick={(e) => this.notification(e,item.id).bind(this)} style={{verticalAlign:'middle',cursor:'pointer'}} size="1em"/></Link><br/></Fragment>
            })}
        </aside>
      </>
    )
  }
}
