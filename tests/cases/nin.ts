import { Gender, NinData } from '../../src/_types'

export interface NinTestItem {
  description: string,
  input: string,
  expectedOutput?: NinData,
}

export const generalValid: NinTestItem[] = [
  {
    description: 'female has addition of 50 to month',
    input: '646007/6832',
    expectedOutput: {
      gender: Gender.Female,
      dateOfBirth: new Date(1964, 9, 7),
    },
  },
  {
    description: 'control digit 0 when modulo 11 is 0',
    input: '061216/0120',
    expectedOutput: {
      gender: Gender.Male,
      dateOfBirth: new Date(2006, 11, 16),
    },
  },
  {
    description: 'control digit 0 when modulo 11 is 10',
    input: '190915/7790',
    expectedOutput: {
      gender: Gender.Male,
      dateOfBirth: new Date(2019, 8, 15),
    },
  },
]

export const generalInvalid: NinTestItem[] = [
]

export const inputFormats: NinTestItem[] = [
  {
    description: 'with slash',
    input: '970126/6894',
    expectedOutput: {
      gender: Gender.Male,
      dateOfBirth: new Date(1997, 0, 26),
    },
  },
  {
    description: 'without slash',
    input: '9701266894',
    expectedOutput: {
      gender: Gender.Male,
      dateOfBirth: new Date(1997, 0, 26),
    },
  },
  {
    description: 'with whitespaces and withoutslash',
    input: '97 01 26 68 94',
    expectedOutput: {
      gender: Gender.Male,
      dateOfBirth: new Date(1997, 0, 26),
    },
  },
  {
    description: 'with whitespaces and slash',
    input: '   97 01 26  / 6894   ',
    expectedOutput: {
      gender: Gender.Male,
      dateOfBirth: new Date(1997, 0, 26),
    },
  },
  {
    description: 'characters except digits, whitespaces, and slash not allowed',
    input: '970126-6894',
  },
]

export const lengthThresholds: NinTestItem[] = [
  {
    description: 'last day of short variant',
    input: '531231/359',
    expectedOutput: {
      gender: Gender.Male,
      dateOfBirth: new Date(1953, 11, 31),
    },
  },
  {
    description: 'first day of long variant',
    input: '545101/7055',
    expectedOutput: {
      gender: Gender.Female,
      dateOfBirth: new Date(1954, 0, 1),
    },
  },
  {
    description: 'short variant not allowed after first day of long variant (included)',
    input: '545101/705',
  },
  {
    description: 'long variant for year 53 must overflow to 2k',
    input: '536231/9798',
    expectedOutput: {
      gender: Gender.Female,
      dateOfBirth: new Date(2053, 11, 31),
    },
  },
  {
    description: 'long variant for year 00 must overflow to 2k',
    input: '000101/4156',
    expectedOutput: {
      gender: Gender.Male,
      dateOfBirth: new Date(2000, 0, 1),
    },
  },
]
