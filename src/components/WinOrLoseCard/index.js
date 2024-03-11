// Write your code here.
import './index.css'

const WinORLoseCard = props => {
  const {score, topScore, onClickPlayAgainButton} = props
  let imageLink
  let headContent
  let paraContent
  if (score === 12 || score > topScore) {
    imageLink = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    headContent = 'You Won'
    paraContent = 'Best Score'
  } else {
    imageLink = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    headContent = 'You Lose'
    paraContent = 'Score'
  }

  const onClickPlayAgain = () => {
    onClickPlayAgainButton()
  }

  return (
    <li className="resultContainer">
      <div className="scoreDataContainer">
        <h1 className="heading">{headContent}</h1>
        <p className="scoreTitle">{paraContent}</p>
        <p className="mainScore">{score}/12</p>
        <button
          className="playAgainButton"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img src={imageLink} alt="win or lose" className="resultImage" />
    </li>
  )
}

export default WinORLoseCard
