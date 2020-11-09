import { Colour } from './Colour'
import { GameStatus } from './GameStatus'
import { Utils } from './Utils'

export class FruitMachine {
  money: number
  colours: Colour[]
  gameStatus: GameStatus = GameStatus.Nothing
  readonly COST_OF_GAME: number = 5

  constructor ({ initialMoney, initialColours = [Colour.Green, Colour.Black, Colour.Yellow, Colour.White]}: { initialMoney: number, initialColours?: Colour[] }) {
    this.money = initialMoney
    this.colours = initialColours
  }

  makeGameOfChance (): { wonMoney: number, colours: Colour[], gameStatus: GameStatus } {
    debugger
    this.colours = this.colours.map(() => Utils.getRandomColour())

    const isAllColoursSame = this.colours.every((elem) => elem === this.colours[0])

    this.gameStatus = isAllColoursSame ? GameStatus.Jackpot : GameStatus.Nothing
    
    const wonMoney = this.gameStatus === GameStatus.Jackpot ? this.money : 0
    this.money = this.money - wonMoney

    return { wonMoney: wonMoney, colours: this.colours, gameStatus: this.gameStatus }
  }

  getCostOfGame (): number {
    return this.COST_OF_GAME
  }

  public toString (): string {
    let output = `${this.colours.join('|')} --- ${this.money}$`

    output = output + (this.gameStatus === GameStatus.Jackpot ? ' --- Jackpot!!!' : '')
    return output
  }
} 
