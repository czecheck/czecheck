import { Gender, type NinData } from '../../src/_types'

export interface NinTestItem {
  description: string
  input: string
  ninData?: NinData
}

export const generalValid: NinTestItem[] = [
  {
    description: 'female has addition of 50 to month',
    input: '646007/6832',
    ninData: {
      gender: Gender.Female,
      dateOfBirth: new Date(1964, 9, 7)
    }
  },
  {
    description: 'control digit 0 when modulo 11 is 0',
    input: '061216/0120',
    ninData: {
      gender: Gender.Male,
      dateOfBirth: new Date(2006, 11, 16)
    }
  },
  {
    description: 'control digit 0 when modulo 11 is 10',
    input: '190915/7790',
    ninData: {
      gender: Gender.Male,
      dateOfBirth: new Date(2019, 8, 15)
    }
  }
]

export const generalInvalid: NinTestItem[] = [
  {
    description: 'too long',
    input: '975524/51260'
  },
  {
    description: 'too short',
    input: '975524/51'
  },
  {
    description: 'wrong modulo control digit',
    input: '975524/5127'
  },
  {
    description: '1997-05-32 is not valid date',
    input: '975532/5129'
  },
  {
    description: '1997-04-31 is not valid date',
    input: '975431/5120'
  },
  {
    description: '1997-02-30 is not valid date',
    input: '975230/5123'
  },
  {
    description: '1997-13-01 is not valid date',
    input: '971301/5125'
  }
]

export const inputFormats: NinTestItem[] = [
  {
    description: 'with slash',
    input: '970126/6894',
    ninData: {
      gender: Gender.Male,
      dateOfBirth: new Date(1997, 0, 26)
    }
  },
  {
    description: 'without slash',
    input: '9701266894',
    ninData: {
      gender: Gender.Male,
      dateOfBirth: new Date(1997, 0, 26)
    }
  },
  {
    description: 'with whitespaces and withoutslash',
    input: '97 01 26 68 94',
    ninData: {
      gender: Gender.Male,
      dateOfBirth: new Date(1997, 0, 26)
    }
  },
  {
    description: 'with whitespaces and slash',
    input: '   97 01 26  / 6894   ',
    ninData: {
      gender: Gender.Male,
      dateOfBirth: new Date(1997, 0, 26)
    }
  },
  {
    description: 'characters except digits, whitespaces, and slash not allowed',
    input: '970126-6894'
  }
]

export const lengthThresholds: NinTestItem[] = [
  {
    description: 'last day of short variant',
    input: '531231/359',
    ninData: {
      gender: Gender.Male,
      dateOfBirth: new Date(1953, 11, 31)
    }
  },
  {
    description: 'first day of long variant',
    input: '545101/7055',
    ninData: {
      gender: Gender.Female,
      dateOfBirth: new Date(1954, 0, 1)
    }
  },
  {
    description: 'short variant not allowed after first day of long variant',
    input: '545101/705'
  },
  {
    description: 'long variant for year 53 must overflow to 2k',
    input: '536231/9798',
    ninData: {
      gender: Gender.Female,
      dateOfBirth: new Date(2053, 11, 31)
    }
  },
  {
    description: 'long variant for year 00 must overflow to 2k',
    input: '000101/4156',
    ninData: {
      gender: Gender.Male,
      dateOfBirth: new Date(2000, 0, 1)
    }
  }
]

export const overflowThresholds: NinTestItem[] = [
  {
    description: 'male, overflow prior 2004 not allowed',
    input: '033231/3630'
  },
  {
    description: 'female, overflow prior 2004 not allowed',
    input: '038231/3635'
  },
  {
    description: 'male, first day of allowed overflow',
    input: '042101/3637',
    ninData: {
      gender: Gender.Male,
      dateOfBirth: new Date(2004, 0, 1)
    }
  },
  {
    description: 'female, first day of allowed overflow',
    input: '047101/3631',
    ninData: {
      gender: Gender.Female,
      dateOfBirth: new Date(2004, 0, 1)
    }
  },
  {
    description: 'fmale, highest possible month-segment value',
    input: '228231/3924',
    ninData: {
      gender: Gender.Female,
      dateOfBirth: new Date(2022, 11, 31)
    }
  }
]
