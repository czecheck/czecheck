import { Gender, type NinData } from './_types'

const FEMALE_ADDITION = 50
const OVERFLOW_ADDITION = 20
const OVERFLOW_POSSIBLE_SINCE = 2004
const LONG_SINCE = 1954
const NIN_LENGTHS = { SHORT: 9, LONG: 10 }

const extractNumber = (nin: string, start: number, end: number): number => parseInt(nin.slice(start, end))

const testModulo = (nin: string): boolean => `${extractNumber(nin, 0, 9) % 11}`.slice(-1) === nin[9]

export default (nin: string): NinData | undefined => {
  nin = nin.replace(/[\s/]+/g, '')

  if (!/^\d+$/.test(nin)) {
    return
  }

  if (!Object.values(NIN_LENGTHS).includes(nin.length)) {
    return
  }

  const isNinLong = nin.length === NIN_LENGTHS.LONG

  if (isNinLong && !testModulo(nin)) {
    return
  }

  let year = extractNumber(nin, 0, 2) + 1900

  if (year >= LONG_SINCE && !isNinLong) {
    return
  }

  if (year < LONG_SINCE && isNinLong) {
    year += 100
  }

  let gender = Gender.Male
  let monthIndex = extractNumber(nin, 2, 4) - 1

  if (monthIndex >= FEMALE_ADDITION) {
    gender = Gender.Female
    monthIndex -= FEMALE_ADDITION
  }

  if (monthIndex >= OVERFLOW_ADDITION) {
    if (year < OVERFLOW_POSSIBLE_SINCE) {
      return
    }

    monthIndex -= OVERFLOW_ADDITION
  }

  const day = extractNumber(nin, 4, 6)
  const dateOfBirth = new Date(year, monthIndex, day)

  if (dateOfBirth.getDate() !== day || dateOfBirth.getMonth() !== monthIndex) {
    return
  }

  return { gender, dateOfBirth }
}
