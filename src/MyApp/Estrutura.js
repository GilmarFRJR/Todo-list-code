import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Button from './Botao';
import Lista from './Lista'
import Input from './Input'
import Item from './ModeloItem'


function Estrutura(props){

      const [valorInput, setValorInput] = useState('')
      const [itensLista, setItensLista] = useState([])

      useEffect(() => {

        const itensSalvos = localStorage.getItem('itens')

        if (itensSalvos) {

          setItensLista(JSON.parse(itensSalvos))

        }

      }, [])


      const onAdicionarItem = (txtItem) => {

        const item = new Item(txtItem)

        const listaSalva = [...itensLista, item]
        localStorage.setItem('itens', JSON.stringify(listaSalva))

        setItensLista(listaSalva)

      }


    return(

     <div>
      
        <Helmet>
            <body className={`${props.bodyEscuro}`} />
        </Helmet>

        <div className={`container ${props.containerEscuro}`}>
      
        <h1 className={`${props.textoEscuro}`}>Lista de tarefas!</h1>
  
        <h3 className={`${props.textoEscuro}`}>Adicione tafefas, marque como concluído as taferas que já terminou ou exclua elas da lista!</h3>
  
        <div className='containerInput'>
  
          <form>
  
            <Input valorInput={valorInput} setValorInput={setValorInput} />
  
          </form>
  
          <Button classbotao={`${props.buttonEscuro} ${props.textoEscuroButton}`} valorInput={valorInput} setValorInput={setValorInput} onAdicionarItem={onAdicionarItem}  />
  
        </div>
  
        <Lista itensLista={itensLista} setItensLista={setItensLista} />
  
      </div>

    </div>

    )

}

export default Estrutura