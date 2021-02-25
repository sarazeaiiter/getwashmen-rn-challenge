
export function isString(v: unknown): v is string {
  return typeof (v) === 'string'
}
export function isDefinedString(v: unknown): v is string {
  return typeof (v) === 'string' && v !== ''
}

export function isNumber(v: unknown): v is number {
  return typeof (v) === 'number' && v !== NaN
}

export function isArray(v: unknown): v is object {
  return Array.isArray(v)
}

export function isBoolean(v: unknown): v is boolean {
  return typeof (v) === 'boolean'
}

export function isObject(v: unknown): v is Object {
  return ({}).toString.call(v) === '[object Object]'
}

export function isDefinedObject(v: unknown): v is Object {
  return ({}).toString.call(v) === '[object Object]' && Object.keys(v).length > 0
}

export function isNullOrUndefined(v: unknown): v is null | undefined {
  return v === null || v === undefined;
}

export function isDefinedBoolean(v: unknown): v is boolean {
  return typeof (v) === 'boolean'
}

export function isDefinedArray(v: unknown): v is Array<unknown> {
  return Array.isArray(v) && v.length > 0
}
