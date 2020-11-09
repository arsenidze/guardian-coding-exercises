export class Player {
  money: number

  constructor({ initialMoney }: { initialMoney: number }) {
    this.money = initialMoney
  }

  takeMoney(wonMoney: number) {
    if (wonMoney < 0) {
      throw new Error('Money cannot be negative')
    }
    this.money = this.money + wonMoney
  }

  returnMoney(moneyToReturn: number) {
    this.money = this.money - moneyToReturn
  }
}