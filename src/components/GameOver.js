import React, { Fragment } from "react";

function GameOver(props){
    return( props.show?
        <div id="gameOver">
            <div>
                Parabéns, você completou o jogo!
            </div>
        <button id="restart" onClick={()=>{props.onRestart()}}>Jogue novamente</button>
        </div>:<Fragment></Fragment>
    )
}


export default GameOver