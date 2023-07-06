import React, { useState } from 'react';


function BotaoClidado(props) {

    const [botaoFoiClicado, setBotaoFoiClicado] = useState()


    const clique = () => {

        setBotaoFoiClicado(true)

        setTimeout(() => {

            setBotaoFoiClicado(false)
            
        }, 200)


      
    const adicionarItem = () => {

        if (props.valorInput.length > 0){
    
             props.onAdicionarItem(props.valorInput)
             props.setValorInput('')
    
            }
    
        }

        adicionarItem()

    }


    return(

        <button className={`botaoEnviar ${props.classbotao} ${botaoFoiClicado ? 'botaoClicado' : ''}`} onClick={clique}>Adicionar</button>

    )

}

export default BotaoClidado