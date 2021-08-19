import './TicTacToe.css'
import Header from './components/header/Header'
import GameBoard from './components/game-board/GameBoard'
import Footer from './components/footer/Footer'
import { useState } from 'react'

const INITIAL_GAME_BOARD = Array(9).fill(null)


function TicTacToe() {
  const [gameBoard, setGameBoard] = useState(INITIAL_GAME_BOARD)
  const [isGameFinished, setIsGameFinished] = useState(false)
  // const [winner, setWinner] = useState(null)

  function onClickGameBox(gameBoxIndex) {
    if (!isGameFinished && !gameBoard[gameBoxIndex]) {
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

  function resetGame() {
    setGameBoard(Array(9).fill(null))
    setIsGameFinished(false)
  }

  const winner = getGameWinner(gameBoard)

  return (
    <div className="TicTacToe">
      <h1>React TicTacToe</h1>
      <Header isGameFinished={isGameFinished} />
      <GameBoard gameBoard={gameBoard} onClickGameBox={onClickGameBox} />
      <Footer isGameFinished={isGameFinished} resetGame={resetGame} winner={winner} />
    </div>
  )
}

export default TicTacToe;


function getMachineMove(gameBoard) {
  return gameBoard.findIndex(element => element === null)
}

const winConditions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

function checkEndGame(gameBoard) {
  const winner = getGameWinner(gameBoard)
  if (winner) {
    return true
  }
  const isGameFinished = gameBoard.every(element => element !== null)
  return isGameFinished
}

function getGameWinner(gameBoard) {
  const positionWinner = winConditions.find(
    ([x, y, z]) =>
      gameBoard[x] === gameBoard[y] &&
      gameBoard[y] === gameBoard[z] &&
      gameBoard[x] !== null
  )
  if (positionWinner) {
    return (gameBoard[positionWinner[0]] === 'X' ? 'Player' : 'Computer')
  }

  return ;
}

