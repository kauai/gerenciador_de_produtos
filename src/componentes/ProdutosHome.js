import React, { Component,useState,useEffect} from 'react'
import axios from 'axios'
import FormModal from './FormModal'
import { MdFavorite } from 'react-icons/md';
import { MdFavoriteBorder } from 'react-icons/md';

function ProdutosHome() {
   const [ produtos, setProdutos ] = useState([])
   const [ favoritos, setFavoritos ] = useState('')
   const [ load , setLoad ] = useState(false)

   useEffect(() => {
     axios.get(`http://localhost:3001/produtos`)
     .then(item => {
         setProdutos(item.data)
         setLoad(true)
     })
   },[])

   useEffect(() => {
       const filtered = produtos.filter(item => item.favorite)
       document.title = filtered.length
         setFavoritos(filtered.length)
   },[ produtos ])

   function handleFavorite(produto) {
       const newProdutos = produtos.map(item => {
           return item.produto == produto ? {...item,favorite:!item.favorite} : item
       })
       console.log(newProdutos)
       setProdutos(newProdutos)
   }
    
    return (
        <div style={{position:'relative'}}>
          <h1><span style={{color:"#ec6c63"}}>{ favoritos } <MdFavoriteBorder size={'.8em'}/></span></h1>
           <h1 style={{color:'#606060'}}>Todos Produtos</h1>
           {!load && <div className="loadinsta2 loadinsta"></div>}
            {produtos.map(item => {
                // const style = item.favorite ? {color:'purple'} : {color:''}
                let Favorite = item.favorite ? MdFavorite : MdFavoriteBorder
                return <h1>{item.produto} <Favorite className="favorite" style={{cursor:'pointer'}} color="#ec6c63" size=".8em" onClick={() => handleFavorite(item.produto)}/></h1>
            })}
        </div>
    )
}

export default ProdutosHome
