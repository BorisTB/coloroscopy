type OptionalSpace = '' | ' '

type RgbValue = number

type DecimalAlpha = 0 | 1 | `${0}.${number}`

export type RgbColor =
  `rgb(${RgbValue},${OptionalSpace}${RgbValue},${OptionalSpace}${RgbValue})`

export type RgbaColor =
  `rgba(${RgbValue},${OptionalSpace}${RgbValue},${OptionalSpace}${RgbValue},${OptionalSpace}${DecimalAlpha})`
