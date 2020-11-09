import { Player } from '../src/Player'

describe('Player tests', () => {
  it('must has money', () => {
    const initialMoney = 15

    const player = new Player({ initialMoney })

    expect(player.money).toEqual(initialMoney)
  })

  it('should be able to take money', () => {
    const initialMoney = 15
    const wonMoney = 4
    const player = new Player({ initialMoney })

    player.takeMoney(wonMoney)

    expect(player.money).toEqual(initialMoney + wonMoney)
  })

  it('must throw exception if taked money is negative', () => {
    const initialMoney = 15
    const wonMoney = -1
    const player = new Player({ initialMoney })

    const action = () => player.takeMoney(wonMoney)

    expect(action).toThrow(new Error('Money cannot be negative'))
  })

  it('should be able to return money', () => {
    const initialMoney = 15
    const moneyToReturn = 6
    const player = new Player({ initialMoney })

    player.returnMoney(moneyToReturn)

    expect(player.money).toEqual(initialMoney - moneyToReturn)
  })
})
