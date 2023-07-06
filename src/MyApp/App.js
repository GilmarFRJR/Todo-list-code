import React, { useState } from 'react'
import Estrutura from './Estrutura'
import './App.css'
import Menu from './Menu'


function App() {

  const [propriedades, setPropriedades] = useState({})


  const ativarModoEscuro = () => {

    const props = {

      bodyEscuro: "bodyEscuro",
      containerEscuro: "containerEscuro",
      textoEscuro: "textoEscuro",
      buttonEscuro: "buttonEscuro",
      textoEscuroButton: "textoEscuroButton"

    }

    setPropriedades(props)

  }


  const desativarModoEscuro = () => {

    setPropriedades({})

  }


  return (

    <div>

       <div className='divConfig'>

          <Menu ativar={ativarModoEscuro} desativar={desativarModoEscuro}/>

       </div>

       <Estrutura {...propriedades}/> 
   
    </div>

  )
}

export default App;
