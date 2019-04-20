import React, { Component,useState } from 'react'
import axios from 'axios'
const uuidv1 = require('uuid/v1');

const FormModal = ({ esconder,classe, opacity ,closeModal,update }) => {
    const [input, setInput ] = useState('')

    function syncForm(e){
       setInput(e.target.value)
    }

   async function enviaForm() {
        const result = await axios.post('http://localhost:3001/categorias',{  
            id:uuidv1(),
            categoria:input
        })
        if(result.status == 201){
            update()
            closeModal({target:{className:'FormModal'}})
            setInput('')
        }
        // console.log('result',result)
       
   }

    console.log(input)
    return (
      <div onClick={ closeModal } style={{
          opacity:`${opacity}`,
          transition:'.4s ease-out',
          position:'fixed',
          top:'0',
          bottom:'0',
          height:'100%',
          width:'100%',
          left:'0',
          right:'0',
          zIndex:'900',
          background:'rgba(0, 0, 0, 0.67)',
          alignItems:'center',
          justifyContent:'center',
          display:'flex',
      }}
      className={`FormModal ${esconder}`}>
         <div className={`boxModal ${classe}`} style={{
                width:'30%',
                background:'#fff',
                padding:'44px',
         }}>
            <h2>Nova categoria</h2>
            <input onChange={syncForm}
            value={ input }
            placeholder="Nova categoria" 
            style={{
                padding:'10px',
                fontSize:'18px',
                width:'100%',
                boxSizing:'border-box',
                marginBottom:'15px'
            }}/>
            <button onClick={enviaForm} style={ {
                    fontSize:'21px',
                    width: '100%',
                    padding:'10px',
                    border: 'none',
                    background: 'purple',
                    color: '#fff',
                    cursor:'pointer'
}}>Criar</button>
         </div>
      </div>
    )
}
export default FormModal
