import extractNin from './extractNin'

export default (nin: string): boolean => !!extractNin(nin)
