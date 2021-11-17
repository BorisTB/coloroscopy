import { isNil } from './isNil'

export function isNonEmptyObject(
  value: unknown
): value is Record<string, unknown> {
  return (
    typeof value === 'object' && !isNil(value) && Object.keys(value)?.length > 0
  )
}
