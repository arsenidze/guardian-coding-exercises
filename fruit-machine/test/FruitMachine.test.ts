import { FruitMachine } from '../src/FruitMachine'
import { Colour } from '../src/Colour'
import { GameStatus } from '../src/GameStatus'

describe('Fruit Machine tests', () => {
  it('must has money and colours', () => {
    const initialMoney = 10
    const initialColours: Colour[] = [Colour.Green, Colour.Black, Colour.Yellow, Colour.White]

    const fruitMachine = new FruitMachine({ initialMoney, initialColours })

    expect(fruitMachine.money).toEqual(initialMoney)
    expect(fruitMachine.colours).toEqual(initialColours)
  })

  it('should be able to make a game of chance', () => {
    const initialMoney = 10
    const initialColours: Colour[] = [Colour.Green, Colour.Black, Colour.Yellow, Colour.White]
    const fruitMachine = new FruitMachine({ initialMoney, initialColours })

    const { wonMoney, colours, gameStatus } = fruitMachine.makeGameOfChance()

    if (gameStatus === GameStatus.Jackpot) {
      expect(wonMoney).toEqual(initialMoney)
      expect(colours.every((elem) => elem === colours[0])).toEqual(true)
    } else {
      expect(wonMoney).toEqual(0)
      expect(colours.some((elem) => elem !== colours[0])).toEqual(true)
    }
  })

  it('should be able to get cost of game', () => {
    const initialMoney = 10
    const initialColours: Colour[] = [Colour.Green, Colour.Black, Colour.Yellow, Colour.White]
    const fruitMachine = new FruitMachine({ initialMoney, initialColours })

    const costOfGame = fruitMachine.getCostOfGame()

    expect(costOfGame).toEqual(fruitMachine.COST_OF_GAME)
  })
})
