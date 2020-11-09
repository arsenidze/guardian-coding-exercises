import { Player } from './Player'
import { FruitMachine } from './FruitMachine'
import { GameStatus } from './GameStatus'

export function userPressPlayButton(player: Player, fruitMachine: FruitMachine): void {
  const { wonMoney, colours, gameStatus } = fruitMachine.makeGameOfChance()

  if (gameStatus === GameStatus.Jackpot) {
    player.takeMoney(wonMoney)
  } else if (gameStatus === GameStatus.Nothing) {
    player.returnMoney(fruitMachine.getCostOfGame())
  }
}