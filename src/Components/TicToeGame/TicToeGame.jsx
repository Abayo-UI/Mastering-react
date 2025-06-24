import React, { useEffect, useState } from 'react';
import './styles-13.css';

function Square({squareContent, onClick}){
    return(
        <div className="tictoe-box" onClick={onClick}>
           <p className="fs-4">{squareContent}</p>
        </div>
    )
}

const TicToeGame = () => {

    const [ squareContent, setSquareContent ] = useState(Array(9).fill(""));
    const [ isXTurn, setIsXTurn ] = useState(true);
    const [ status, setStatus ] = useState("");

    function handleClick(squareId){
        let copyOfSqareContent = [...squareContent];
        if(copyOfSqareContent[squareId]) return; //if that box already has an item then don't enter anything it.
        if(getWinner() === null){
        copyOfSqareContent[squareId] = isXTurn ? "x" : "O";
        setIsXTurn(!isXTurn);
        setSquareContent(copyOfSqareContent);
        }
    }

    function getWinner(){
        const winningRules = [ 
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
        ]

        for( let i = 0; i < winningRules.length; i++){
            const [a, b,c] = winningRules[i];
            if( squareContent[a] && squareContent[b] === squareContent[a] && squareContent[c] === squareContent[a]){
               return squareContent[a];
            }
        }
        return null;
    }

    useEffect(()=> { 
        let winner = getWinner()
        if(!winner) setStatus( isXTurn ? "It's X's turn" : "It's O's turn")
        if(winner) setStatus(`${winner} has won! You can restart another game.`)
        if(!winner && squareContent.indexOf("") === -1) setStatus(`It's a draw! Restart the game to find a winner.`)
    },[isXTurn, squareContent]);

    function restartGame(){
        setSquareContent(Array(9).fill(""));
        setIsXTurn(true);
    }

  return (
    <div className="tictoe-container">
        <p>This is a tic tac toe game.</p>
        <div className="d-flex flex-row">
            <Square squareContent={squareContent[0]} onClick={ () => handleClick(0)}/>
            <Square squareContent={squareContent[1]} onClick={ () => handleClick(1)}/>
            <Square squareContent={squareContent[2]} onClick={ () => handleClick(2)}/>
        </div>
        <div className="d-flex flex-row">
            <Square squareContent={squareContent[3]} onClick={ () => handleClick(3)}/>
            <Square squareContent={squareContent[4]} onClick={ () => handleClick(4)}/>
            <Square squareContent={squareContent[5]} onClick={ () => handleClick(5)}/>
        </div>
        <div className="d-flex flex-row">
            <Square squareContent={squareContent[6]} onClick={ () => handleClick(6)}/>
            <Square squareContent={squareContent[7]} onClick={ () => handleClick(7)}/>
            <Square squareContent={squareContent[8]} onClick={ () => handleClick(8)}/>
        </div>
        <h3 className="mt-2">{status}</h3>
        <button onClick={restartGame} className="restart-button">Restart Game</button>
    </div>
  )
}

export default TicToeGame