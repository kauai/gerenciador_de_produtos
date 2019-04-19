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
      console.log('DIDmOUNT')
    }

    loadData = async (id) => {
        this.setState({ load:false })
        let produtos = (await axios.get(`http://localhost:3001/produtos?id=${id}`)).data
        let categorias = (await axios.get(`http://localhost:3001/categorias?id=${id}`)).data
        const { categoria }   = categorias.filter(item => item.id == id)[0]
        console.log('produtos',produtos)
        this.setState({ produtos,categoria,load:true })
    }

    componentWillReceiveProps({ match:{ params:{ catId }} }){
        this.loadData(catId)
    }


  render() {
    // const target = this.state.categoria[0]
    // const data = Object.assign({},target);
    console.log('log load',this.state.load)
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
