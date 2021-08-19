import './GameBoard.css'
import GameBox from '../game-box/GameBox'

function GameBoard({ gameBoard, onClickGameBox }) {
  return (
    <section className="GameBoard">
      <GameBox onClickGameBox={() => onClickGameBox(0)} className="gamebox brd-bottom brd-right" value={gameBoard[0]}/>
      <GameBox onClickGameBox={() => onClickGameBox(1)} className="gamebox brd-bottom brd-left brd-right" value={gameBoard[1]}/>
      <GameBox onClickGameBox={() => onClickGameBox(2)} className="gamebox brd-bottom brd-left" value={gameBoard[2]}/>

      <GameBox onClickGameBox={() => onClickGameBox(3)} className="gamebox brd-bottom brd-top brd-right" value={gameBoard[3]}/>
      <GameBox onClickGameBox={() => onClickGameBox(4)} className="gamebox brd-bottom brd-left brd-top brd-right" value={gameBoard[4]}/>
      <GameBox onClickGameBox={() => onClickGameBox(5)} className="gamebox brd-bottom brd-left brd-top" value={gameBoard[5]}/>

      <GameBox onClickGameBox={() => onClickGameBox(6)} className="gamebox brd-top brd-right" value={gameBoard[6]} />
      <GameBox onClickGameBox={() => onClickGameBox(7)} className="gamebox brd-left brd-top brd-right" value={gameBoard[7]} />
      <GameBox onClickGameBox={() => onClickGameBox(8)} className="gamebox brd-left brd-top" value={gameBoard[8]} />
    </section>
  )
}



export default GameBoard