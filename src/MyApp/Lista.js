import React from 'react';


function Lista(props){

    const marcar = (index) => {

        const novosItens = [...props.itensLista]

        novosItens[index].marcado = !novosItens[index].marcado

        props.setItensLista(novosItens)

    }


    const excluir = (index) => {
        
        const novosItens = [...props.itensLista]
        const itensSalvos = localStorage.getItem('itens')
        const itensParaAlterar = JSON.parse(itensSalvos)

        novosItens.splice(index,1)
        itensParaAlterar.splice(index,1)

        props.setItensLista(novosItens)
        localStorage.setItem('itens', JSON.stringify(itensParaAlterar))

    }

    return(

        <ul>

           {props.itensLista.map((item, index) => {

               return (<li key={index} className={item.marcado ? 'riscado' : ''}>
                
                {item.txtItem ? item.txtItem.charAt(0).toUpperCase() + item.txtItem.slice(1) : ''}
               
                <button onClick={() => {marcar(index)}}
                className={`botaoLista botaoMarcar 
                ${item.marcado ? 'marcado' : ''}`}> * </button>

                <button onClick={() => {excluir(index)}}
                className={`botaoLista botaoExcluir`}> X </button>

               </li>)  

           })}

        </ul>

    )

}

export default Lista 