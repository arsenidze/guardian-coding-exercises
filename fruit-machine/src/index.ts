import { FruitMachine } from './FruitMachine'
import { Player } from './Player'
import * as UseCases from './UseCases'

import * as readline from 'readline'
import { GameStatus } from './GameStatus'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
rl.setPrompt('> ')

function main (): void {
  const fruitMachine = new FruitMachine({ initialMoney: 10})
  const player = new Player({ initialMoney: 18})

  let isJackpotHappened = false

  let numberOfGames = 0
  console.log(fruitMachine.toString())

  rl.prompt()
  rl.on('line', (input) => {
    if (input === 'exit') {
      rl.close()
    }
    
    if (!isJackpotHappened) {
      console.log('You choose to play\n\n')
      UseCases.userPressPlayButton(player, fruitMachine)
  
      isJackpotHappened = fruitMachine.gameStatus === GameStatus.Jackpot
      numberOfGames++
    } else {
      console.log(numberOfGames)
    }
    

    // if (input === 'play') {
    //   console.log('You choose to play\n\n')
    //   UseCases.userPressPlayButton(player, fruitMachine)
    // }

    console.log(fruitMachine.toString())
    
    rl.prompt()
  }).on('close', () => {
    process.exit(0)
  })
}

main()
