import React, { Component } from 'react'
import axios from 'axios'

export default class Categoria extends Component {
    state = {
        produtos:[],
        categoria:[]
    }


   componentDidMount(){
      const { catId } = this.props.match.params
      this.loadData(catId)
    }

    loadData = async (id) => {
        let produtos = (await axios.get(`http://localhost:3001/produtos?id=${id}`)).data
        let categorias = (await axios.get(`http://localhost:3001/categorias?id=${id}`)).data
        const { categoria }   = categorias.filter(item => item.id == id)[0]
        this.setState({ produtos,categoria })
    }

    componentWillReceiveProps({ match:{ params:{ catId }} }){
        this.loadData(catId)
    }


  render() {
    // const target = this.state.categoria[0]
    // const data = Object.assign({},target);
    return (
      <div>
        <h1 style={{color:"#606060",textWeight:"bold"}}>Em: {this.state.categoria}</h1>
        {this.state.produtos && this.state.produtos.map(item => {
            return <h1 style={{textShadow:"1px 1px 1px #00000017"}} key={Math.floor((Math.random() * 3000) + 4)}>{item.produto}</h1>
        })}
      </div>
    )
  }
}
