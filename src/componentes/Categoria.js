import React, { Component } from 'react'
import axios from 'axios'

export default class Categoria extends Component {
    state = {
        produtos:[],
        categoria:[],
        load:false
    }


   componentDidMount(){
      const { catId } = this.props.match.params
      this.loadData(catId)
    }

    loadData = async (id) => {
        let produtos = (await axios.get(`http://localhost:3001/produtos?id=${id}`)).data
        let categorias = (await axios.get(`http://localhost:3001/categorias?id=${id}`)).data
        
        //if checando se vc deletou a categoria e ainda assim o sistem
        //procura acategoria pelo o id da url
        if(!categorias.length){
          this.props.history.push('/produtos')
          return
        }
        
        const { categoria }   = categorias.filter(item => item.id == id)[0]
        this.setState({ produtos,categoria,load:true })
    }

    componentWillReceiveProps({ match:{ params:{ catId }} }){
        this.setState({ load:false })
        this.loadData(catId)
    }


  render() {
    return (

      <div style={{position:'relative'}}>
        <h1 style={{color:"#606060",textWeight:"bold"}}>Em: {this.state.categoria}</h1>
        {!this.state.load && <div className="loadinsta2 loadinsta"></div>}
        {this.state.produtos.map(item => {
            return <h1 style={{textShadow:"1px 1px 1px #00000017"}} key={Math.floor((Math.random() * 3000) + 4)}>{item.produto}</h1>
        })}
      </div>
    )
  }
}
