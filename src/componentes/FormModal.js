import React, { useState,useEffect } from 'react'
import './modal.css'


const FormModal = (props) => {
    const [input, setInput ] = useState('')
    const [classe, setClass ] = useState('')
    const [close, setClose ] = useState(true)

   //  function syncForm(e){
   //     setInput(e.target.value)
   //  }

   //  click(function openModal(){
   //      setClass('open-modal')
   //  })

   useEffect(() => {
         setClose(!close)
   },[props.modal])



     function clickOverlay(e) {
        if(e.target.className.match(/FormModal/g)) {
         setClose(!close)
        }
     }

     function postInput(e){
        setInput(e.target.value)
     }
    console.log('HOOK',close)
     return (
        <div onClick={clickOverlay} className={`FormModal ${close ? 'open-modal' :'close-modal'}`}>
           <div className='box-modal'>
              <h2>Nova categoria</h2>
              <input value={input} onChange={postInput} placeholder="Nova categoria"/>
              <button onClick={() => {
                 props.post(input)
                 setClose(!close)
                 setInput('')
              }}>Criar</button>
           </div>
        </div>
      )
}
export default FormModal
