import React, { Component } from 'react'
import Nav from './components/nav'
import images from './images.json'
import Cards from './components/cards'

export default class App extends Component {

  state = {
    //navbar info
    message: 'Click Borat to Begin',
    score: 0,
    topScore: 0,
    // image state
    images: images.map(e => e),
    clicked: false,
    newArr: []
  }

  check = () => {

  }

  restart = () => {
    this.setState({
      message: 'You Won-NOOOOOOOOOOT! Play Again!',
      score: 0,
      images: images.map(e => e),
      newArr: [],
      // topScore: this.scoreArr
    })
    //push new top score to top score array

  }


  shuffle = (a) => {
    // console.log(a)

    let i, j, temp
    for (i = a.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = a[i]
      a[i] = a[j]
      a[j] = temp
    }
    this.setState({
      images: a,

    })
  }

  handleClick = id => {
    // console.log(id)
    // this.shuffle(images)
    //newArr holds meme ids
    if (this.state.newArr.includes(id)) {
      this.restart()

    } else {
      let newArr = this.state.newArr.map(e => e)
      newArr.push(id)
      // console.log(this)

      let scoreArr = this.state.score.scoreArr.map(e => e)
      scoreArr.push(this.score)
      // this.setState.scores({scores: [this.scores.push(this.state.score)]}) 
      console.log(scoreArr)


      this.setState({
        newArr,
        message: 'Dont Klick The Same Borat!',
        score: this.state.score + 1

      }, () => {
        // console.log(this.state.newArr)
        this.shuffle(this.state.images.map(e => e))

      })

    }
  }





  render() {
    return (
      <div>
        <Nav score={this.state.score} message={this.state.message} topScore={this.state.topScore} />
        <Cards images={this.state.images} handleClick={this.handleClick} />

      </div>

    )
  }
}

