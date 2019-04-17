import React, { Component } from 'react'
import axios from 'axios'

export default class Categoria extends Component {
    state = {
        produtos:[]
    }


   componentDidMount(){
       this.teste()
    }

    async teste(){
        let produtos = (await axios.get('http://localhost:3001/produtos')).data
        produtos = produtos.filter(item => {
            return item.id == this.props.match.params.catId
        })
        this.setState({ produtos })
    }

    componentWillUpdate(prev, state){
        if(this.props.match.params.catId != prev.match.params.catId){
            this.teste()    
        }
    }


  render() {
    //  console.log(this.props)
    return (
      <div>
        <h1 style={{color:"#606060",textWeight:"bold"}}>Produtos </h1>
        {this.state.produtos && this.state.produtos.map(item => {
            return <h1 style={{textShadow:"1px 1px 1px #00000017"}} key={Math.floor((Math.random() * 3000) + 4)}>{item.produto}</h1>
        })}
      </div>
    )
  }
}
