export const hexDigit = '[a-fA-F0-9]' as const

export const hexValuePattern = `^${hexDigit}{1,2}$` as const

export const anyHexPatern =
  `^#(?:${hexDigit}{8}|${hexDigit}{6}|${hexDigit}{3})$` as const

export const shortHexPattern =
  `^#(?<r>${hexDigit})(?<g>${hexDigit})(?<b>${hexDigit})$` as const

export const fullHexPattern =
  `^#(?<r>${hexDigit}{2})(?<g>${hexDigit}{2})(?<b>${hexDigit}{2})(?<a>${hexDigit}{2})?$` as const
