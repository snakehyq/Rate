export const isNumber = (val: any): val is number => typeof val === 'number'

// export const isObject = ((val: any) => val is Validator)
export const isObject = (val: unknown): val is Record<string, unknown> => typeof val === 'object' && val !== null
