import React, { useEffect, useState } from 'react'

function Menu(props) {

    const [animacaoEngrenagem, setAnimacaoEngrenagem] = useState('')
    const [estadoMenu, setEstadoMenu] = useState(false)


    useEffect(() => {

        if (animacaoEngrenagem === 'abrirMenu'){

            setEstadoMenu(true)

        } else {

            setEstadoMenu(false)

        }

    }, [animacaoEngrenagem])
    
  
    const abrirEfecharMenu = () => {
        
        setAnimacaoEngrenagem((animacaoEngrenagem) => (animacaoEngrenagem === 'abrirMenu' ? 'fecharMenu' : 'abrirMenu'))

      }

    return(

        <div>

           <img className={`imgConfig ${animacaoEngrenagem}`} onClick={abrirEfecharMenu} src='./img/config.png' alt='Engrenagem para acessar configuração' />

           <div className={`menu ${estadoMenu ? 'abrindo' : ''}`}>

               <p onClick={props.desativar}>Ativar Modo Claro</p>
               <p onClick={props.ativar}>Ativar Modo Escuro</p>

           </div>

        </div>

    )
}




export default Menu