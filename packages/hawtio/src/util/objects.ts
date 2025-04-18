import { stringSorter } from '@hawtiosrc/util/strings'

export function isObject(value: unknown): value is object {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}

export function cloneObject<T>(value: T): T {
  return structuredClone(value)
}

export function isEmpty(obj: object): boolean {
  return Object.keys(obj).length === 0
}

export function isString(value: unknown): value is string {
  return typeof value === 'string' || value instanceof String
}

export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !Number.isNaN(value)
}

export function isTranslatableToNumber(value: unknown): boolean {
  return ['number', 'string'].includes(typeof value) && value !== '' && !Number.isNaN(Number(value))
}

export function roundNumber(value: unknown, decimals?: number) {
  // Returns the value if it is a number rounded to the number of digits, or returns the value
  return value && isTranslatableToNumber(value) ? +Number(value).toFixed(decimals || 0) : value
}

export function objectSorter(aValue: unknown, bValue: unknown, sortDesc?: boolean) {
  if (isNumber(aValue)) {
    // Numeric sort
    if (!sortDesc) {
      return (aValue as number) - (bValue as number)
    }
    return (bValue as number) - (aValue as number)
  } else {
    // String sort
    return stringSorter(aValue as string, bValue as string, sortDesc)
  }
}
