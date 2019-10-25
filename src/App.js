import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Plateau from './Plateau.js'
import Controle from './Controle.js'
import Modal from './Modal.js'




class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      message: "",
      currentLine: 0,
      currentCase: 0,
      isWin: "loose",
      combinationtoFin: this.generateCombination(),
      game: [
        [[], []],
        [[], []],
        [[], []],
        [[], []],
        [[], []],
        [[], []],
        [[], []],
        [[], []],
        [[], []],
        [[], []],
      ]
    }
    this.change = this.change.bind(this)
    this.undo = this.undo.bind(this)
    this.compare = this.compare.bind(this)
    this.submit = this.submit.bind(this)
    this.closeModale = this.closeModale.bind(this)
    this.generateCombination = this.generateCombination.bind(this)
  }

  change(value){
    const game = [...this.state.game]
    if (this.state.currentCase < 4) {
      game[this.state.currentLine][0].push(value)
    this.setState(state => ({
    game: game,
    currentCase: state.currentCase + 1
    }))
    }
  }

  undo(){
    const game = [...this.state.game]
    

    if (this.state.currentCase > 0) {
      game[this.state.currentLine][0].pop()
      this.setState(state => ({
        game: game,
        currentCase: state.currentCase - 1
        }))
    }
    
  }

  submit(){
    let gameBis = [...this.state.game]
    let currentLine = this.state.currentLine

    if (this.state.currentCase == 4) {
      let result = this.compare()
      for(let index = 0; index < result[0]; index++){
        gameBis[this.state.currentLine][1].push('black')
      }
      for(let index = 0; index < result[1]; index++){
        gameBis[this.state.currentLine][1].push('gray')
      }
      this.setState(state => ({
        game: gameBis,
        currentLine: state.currentLine + 1,
        currentCase: 0
        }))
        if (result[0] === 4) {
          this.setState(state => ({
          isWin: "win",
          message: "GG tu a win !!"
          }))
        }
        if (currentLine == 9 && result[0] != 4) {
          this.setState(state => ({
            isWin: "win",
            message: "Tu es null !!"
            }))
        }
    }

  }

  compare(){
    let combination = [...this.state.game[this.state.currentLine][0]]
    let combinationtoFin = [...this.state.combinationtoFin]
    let good = 0
    let bad = 0
    
    for(let index = 0; index < combination.length; index ++){
      if (combination[index] == combinationtoFin[index]) {
          good++
          combinationtoFin[index] = 'x'
          combination[index] = 'a'
          
      }
      console.log(combination, combinationtoFin, good, bad);
    }

    for(let index = 0; index < combinationtoFin.length; index ++){
        if (combinationtoFin.includes(combination[index])) {
          bad++
          combinationtoFin[combinationtoFin.indexOf(combination[index])] = 'x'
          combination[index] = 'a'
          
        }
    }
      
   return[good, bad]
  }

  closeModale(){
    this.setState({
      isWin: 'loose',
      currentLine: 0,
      currentCase: 0,
      combinationtoFin: this.generateCombination(),
      game: [
        [[], []],
        [[], []],
        [[], []],
        [[], []],
        [[], []],
        [[], []],
        [[], []],
        [[], []],
        [[], []],
        [[], []],
      ]
    })
  }

  generateCombination(){
    let conbination=[]
    for(let i=0; i<4; i++){
      let random = Math.floor(Math.random()*6)
      let colors=["red","blue","orange", "yellow", "green", "purple" ]
      conbination.push(colors[random])
    }
      
   return conbination
  }


  render(){
  return (
    <div className="">
      <Navbar></Navbar>
      <main>
        <div className="tab">
        <Plateau game={this.state.game} currentLine={this.state.currentLine}>
        
        </Plateau>
        <Controle colorize={this.change} undo={this.undo} compare={this.compare} submit={this.submit}></Controle>
        </div>
          <Modal message={this.state.message} isWin={this.state.isWin} closeModale={this.closeModale}></Modal>
      </main>
    </div>
  );
}
}

export default App;
