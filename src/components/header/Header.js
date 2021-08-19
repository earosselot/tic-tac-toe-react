import './Header.css'

function Header({ isGameFinished }) {
  return (
    <header className="Header">
      <h2>{isGameFinished && 'Game Finished!'}</h2>
    </header>
  )
}

export default Header