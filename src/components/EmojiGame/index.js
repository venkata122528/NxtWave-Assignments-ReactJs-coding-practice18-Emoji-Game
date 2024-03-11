import {Component} from 'react'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import WinORLoseCard from '../WinOrLoseCard/index'
import './index.css'
/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, clickedEmojisList: [], isGameFinished: false}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  finishGameAndSetTopScore = topScoreInput => {
    const {topScore} = this.state
    this.setState({score: topScoreInput, isGameFinished: true})
    if (topScoreInput > topScore) {
      this.setState({topScore: topScoreInput})
    }
  }

  onClickPlayAgainButton = () => {
    this.setState({isGameFinished: false, score: 0, clickedEmojisList: []})
  }

  clickEmoji = id => {
    const {emojisList} = this.props

    const {clickedEmojisList} = this.state

    const isEmojiPresent = clickedEmojisList.includes(id)

    const clickedEmojisLength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      this.setState(previousState => ({score: previousState.score + 1}))
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(previousState => ({
        clickedEmojisList: [...previousState.clickedEmojisList, id],
      }))
    }
  }

  render() {
    const shuffledEmojisList = this.shuffledEmojisList()
    const {score, topScore, isGameFinished} = this.state

    return (
      <div className="mainContainer">
        <NavBar
          score={score}
          topScore={topScore}
          isGameFinished={isGameFinished}
        />
        <ul className="emojiCardsContainer">
          {isGameFinished ? (
            <WinORLoseCard
              score={score}
              topScore={topScore}
              onClickPlayAgainButton={this.onClickPlayAgainButton}
            />
          ) : (
            shuffledEmojisList.map(eachEmoji => (
              <EmojiCard
                eachEmoji={eachEmoji}
                key={eachEmoji.id}
                clickEmoji={this.clickEmoji}
              />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default EmojiGame
