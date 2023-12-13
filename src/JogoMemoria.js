import React, { useState, useEffect } from "react";
import GameOver from './components/GameOver'
import game from './game/game'
import Tabuleiro from './components/Tabuleiro'

function JogoMemoria(){

    const [gameOver, setGameOver] = useState(false) 
    const [cards, setCards] = useState([])
    
    useEffect(()=>{
        setCards(game.createCardsFromTechs())
    },[])

    function restart(){
        game.clearCards()
        setCards(game.createCardsFromTechs())
        setGameOver(false)
    }

    function virarCarta(card){
        if (game.setCard(card.id)) {

            if (game.secondCard) {
                if (game.checkMatch()) {
                    game.clearCards();
                    if (game.checkGameOver()) {
                        setGameOver(true)

                    }
                } else {
                    setTimeout(() => {
                        game.unflipCards();
                        setCards([...game.cards])
                    }, 1000);
    
                };
            }
        }
        setCards([...game.cards])
    }

    return(
        <div>
        <Tabuleiro virarCarta={virarCarta}cards={cards}></Tabuleiro>
        <GameOver show={gameOver} onRestart={restart}></GameOver>
        </div>
    )
}

export default JogoMemoria