import extractNin from '../src/extractNin'
import {
  generalValid,
  generalInvalid,
  inputFormats,
  lengthThresholds,
  overflowThresholds,
  NinTestItem,
} from './cases/nin'

const applyTestCases = (items: NinTestItem[]): void => items.forEach(({ description, input, expectedOutput }) => it(
  description,
  () => {
    const result = extractNin(input)

    if (!expectedOutput) {
      expect(result).toBeUndefined()
      return
    }

    expect(result).not.toBeUndefined()
    expect(result?.gender).toStrictEqual(expectedOutput.gender)
    expect(result?.dateOfBirth.toDateString()).toStrictEqual(expectedOutput.dateOfBirth.toDateString())
  },
))

describe('general valid NINs', () => applyTestCases(generalValid))
describe('general invalid NINs', () => applyTestCases(generalInvalid))
describe('input format', () => applyTestCases(inputFormats))
describe('length threshold', () => applyTestCases(lengthThresholds))
describe('overflow threshold', () => applyTestCases(overflowThresholds))
