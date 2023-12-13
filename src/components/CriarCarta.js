import React from "react";

function Carta(props){
    return(
        <div onClick={()=>{props.virarCarta(props.card)}} className={`card ${props.card.flipped?"flip":""} `} id={props.card.id}>
            <div className={`card_front`}>
                <img className="icon" src={`./assets/images/${props.card.icon}.png`} alt={props.card.icon}></img>
            </div>
            <div className="card_back">
                {"</>"}
            </div>
        </div>
    )
}

export default Carta