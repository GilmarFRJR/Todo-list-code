import React from 'react';


function Input(props){

    const pegarValorInput = (txt) => {

        props.setValorInput(txt.target.value)

      }

    return(

        <input type='text' value={props.valorInput} onChange={pegarValorInput}></input>
    )

}

export default Input 