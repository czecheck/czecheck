import extractNin from '../src/extractNin'
import {
  generalValid,
  generalInvalid,
  inputFormats,
  lengthThresholds,
  overflowThresholds,
  type NinTestItem
} from './cases/nin'

const applyTestCases = (items: NinTestItem[]): void => {
  items.forEach(({ description, input, ninData }) => {
    it(description, () => {
      const result = extractNin(input)

      if (ninData == null) {
        expect(result).toBeUndefined()
        return
      }

      expect(result).not.toBeUndefined()
      expect(result?.gender).toStrictEqual(ninData.gender)
      expect(result?.dateOfBirth.toDateString()).toStrictEqual(ninData.dateOfBirth.toDateString())
    })
  })
}

describe('general valid NINs', () => {
  applyTestCases(generalValid)
})
describe('general invalid NINs', () => {
  applyTestCases(generalInvalid)
})
describe('input format', () => {
  applyTestCases(inputFormats)
})
describe('length threshold', () => {
  applyTestCases(lengthThresholds)
})
describe('overflow threshold', () => {
  applyTestCases(overflowThresholds)
})
