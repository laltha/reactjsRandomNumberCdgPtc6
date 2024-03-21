// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  onChangeRandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)

    this.setState({num: randomNumber})
  }

  render() {
    const {num} = this.state
    return (
      <div className="bg-container">
        <div className="sm-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.onChangeRandomNumber}
          >
            Generate
          </button>

          <p className="heading1">{num}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
