import isNinValid from '../src/isNinValid'
import {
  generalValid,
  generalInvalid,
  inputFormats,
  lengthThresholds,
  overflowThresholds,
  NinTestItem,
} from './cases/nin'

const applyTestCases = (items: NinTestItem[]): void => items.forEach(
  ({ description, input, ninData }) => it(
    description,
    () => expect(isNinValid(input)).toStrictEqual(!!ninData),
  ),
)

describe('general valid NINs', () => applyTestCases(generalValid))
describe('general invalid NINs', () => applyTestCases(generalInvalid))
describe('input format', () => applyTestCases(inputFormats))
describe('length threshold', () => applyTestCases(lengthThresholds))
describe('overflow threshold', () => applyTestCases(overflowThresholds))
