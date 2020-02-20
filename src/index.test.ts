import { coveredFunction } from './index'

describe('testFunction', () => {
  it('should double the input it receives', () => {
    const input = 2
    expect(coveredFunction(input)).toEqual(4)
  })
})
