import './Footer.css'

function Footer({isGameFinished, resetGame, winner}) {

  return (
    <footer className="Footer">
      {winner && <div>Winner: {winner}</div>}
      {(isGameFinished && !winner) && <div>Tie</div>}
      {isGameFinished && <button onClick={resetGame}>New Game</button>}
    </footer>
  )
}

export default Footer
