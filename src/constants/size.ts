export const componentSizes = ['', 'default', 'small', 'large'] as const

export type ComponentSize = typeof componentSizes[number]

export const componentSizeMap: Record<string, number> = {
  large: 40,
  default: 20,
  small: 24
} as const
