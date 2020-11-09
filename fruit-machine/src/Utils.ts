import { Colour } from './Colour'

export class Utils {
  static getRandomInt (min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  static getRandomColour (): Colour {
    const numberOfColours = Object.values(Colour).length
    const randomIntInRange = this.getRandomInt(0, numberOfColours)

    return Object.values(Colour)[randomIntInRange]
  }
}