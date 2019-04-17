import React, { Component } from 'react'
import axios from 'axios'

export default class Categoria extends Component {
    state = {
        produtos:[]
    }
//    componentDidMount(){
//        console.log('chamou didMount')
//        this.teste()
//     }

    async componentDidMount(){
        let produtos = (await axios.get('http://localhost:3001/produtos')).data
        this.setState({ produtos })
    }

//     async teste(){
//         let produtos = (await axios.get('http://localhost:3001/produtos')).data
//         produtos = produtos.filter(item => {
//             return item.id == this.props.match.params.catId
//         })
//         this.setState({ produtos })
//     }

//     componentWillUpdate(prev, state){
//         if(this.props.match.params.catId != prev.match.params.catId){
//             this.teste()    
//         }
//     }


    // shouldComponentUpdate(prev,next){
    //     if(this.props.match.params.catId != prev.match.params.catId){
    //         const produtos = this.state.produtos.filter(item => {
    //             return item.id == this.props.match.params.catId
    //         })
    //     this.setState({ produtos })
    //     return true
    //     }
    // }

  render() {
    //  console.log(this.props)
    return (
      <div>
        <h1 style={{color:"#606060",textWeight:"bold"}}>Produtos </h1>
        {/* {this.state.produtos && this.state.produtos.map(item => {
            return <h1 style={{textShadow:"1px 1px 1px #00000017"}} key={Math.random(item.id * 2,100)}>{item.produto}</h1>
        })} */}

         {this.state.produtos.filter(item => {
            return item.id == this.props.match.params.catId
         }).map(item => {
            return <h1>{item.produto}</h1>
        })}
      </div>
    )
  }
}
