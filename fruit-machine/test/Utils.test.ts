import { Colour } from '../src/Colour'
import { Utils } from '../src/Utils'

describe('Utils tests', () => {
  it('must return random colour', () => {
    const arrayOfColours = Array<Colour>(10).fill(Colour.Black).map(() => Utils.getRandomColour())

    const isElementsDifferent = arrayOfColours.some(elem => elem !== arrayOfColours[0])
    expect(isElementsDifferent).toEqual(true)
  })
  
})
