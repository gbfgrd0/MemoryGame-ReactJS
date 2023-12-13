import React from 'react';
import Carta from './CriarCarta'

function Tabuleiro(props){

    return(
        <div id="gameBoard">
            {props.cards.map((card, index)=>
                <Carta virarCarta={props.virarCarta} card={card} key={index}></Carta>
            )}
        </div>
    )
}

export default Tabuleiro