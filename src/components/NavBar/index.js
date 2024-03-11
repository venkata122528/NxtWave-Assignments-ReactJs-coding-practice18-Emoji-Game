// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isGameFinished} = props

  return (
    <nav className="navbar">
      <div className="navBarLogoContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emojiGameImage"
        />
        <h1 className="logoTitle">Emoji Game</h1>
      </div>
      {isGameFinished ? null : (
        <div className="navBarScoreContainer">
          <p className="score">Score: {score}</p>
          <p className="topScore">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
