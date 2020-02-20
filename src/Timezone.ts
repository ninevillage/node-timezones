export class Timezone {
  constructor(readonly zone: string, readonly offset: number, readonly offsetDst: number) {}

  /**
   * returns the diff in seconds between two timezones
   *
   * @param timezone the timezone to compare with
   * @returns the diff in seconds
   */
  diff(timezone: Timezone): number {
    return Math.abs(this.offset - timezone.offset)
  }

  toString(): string {
    return this.zone
  }

  toJSON(): string {
    return this.zone
  }
}
