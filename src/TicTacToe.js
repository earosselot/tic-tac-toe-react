import './TicTacToe.css'
import Header from './components/header/Header'
import GameBoard from './components/game-board/GameBoard'
import Footer from './components/footer/Footer'
import { useState } from 'react'

const GAME_BOARD = Array(9).fill(null)
const WINNER_COMBINATIONS = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

function TicTacToe() {
  const [gameBoard, setGameBoard] = useState(GAME_BOARD);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [winner, setWinner] = useState(null);

  function onClickGameBox(gameBoxIndex) {
    if (!gameBoard[gameBoxIndex]) {
      gameBoard[gameBoxIndex] = 'X'
      setGameBoard([...gameBoard])
      const isGameFinished = checkEndGame(gameBoard)
      setIsGameFinished(isGameFinished)

      if (!isGameFinished) {
        const machineBox = getMachineMove(gameBoard)
        gameBoard[machineBox] = 'O'
        const isGameFinished = checkEndGame(gameBoard)
        setIsGameFinished(isGameFinished)
      }
      setGameBoard([...gameBoard])
    }
  }

  return (
    <div className="TicTacToe">
      <h1>React TicTacToe</h1>
      <Header isGameFinished={isGameFinished} />
      <GameBoard gameBoard={gameBoard} onClickGameBox={onClickGameBox} />
      <Footer isGameFinished={isGameFinished} />
    </div>
  );
}

export default TicTacToe;


function getMachineMove(gameBoard) {
  return gameBoard.findIndex(element => element === null)
}

function checkEndGame(gameBoard) {
  // si hay un ganador

  // si no hay casillas vacias
  const gameEnd = gameBoard.every(element => element !== null)

  // let index = 0
  // let xIndexes = []
  // while (index !== -1) {
  //   let xIndex = gameBoard.indexOf('X', index)
  //   xIndexes.push(xIndex)
  // }
}
