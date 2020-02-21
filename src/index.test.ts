import { UTC, ZONES } from './Timezones'

import Timezone from '.'

describe('Timezone', () => {
  ZONES.forEach((tz: Timezone) => {
    describe(tz.zone, () => {
      it('should have a zone', () => expect(tz).toHaveProperty('zone'))
      it('should have an offset', () => expect(tz).toHaveProperty('offset'))
      it('should have an offsetDst', () => expect(tz).toHaveProperty('offsetDst'))
      it('should have a method diff', () => expect(tz).toHaveProperty('diff'))
      it(`should have a diff ABS(${tz.offset}) to UTC`, () => {
        expect(tz.diff(UTC)).toEqual(Math.abs(tz.offset))
      })
    })
  })
})
