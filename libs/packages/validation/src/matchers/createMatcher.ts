type RegexPattern = string

/**
 * @description Hack to separate actual group name from lookahead.
 *   It's too late and I'm drunk so this might be dumb af but it works ¯\_(ツ)_/¯
 */
type NotGroupName = `=${string}` | `!${string}`

/**
 * @description This bad boy can extract group names from regexp pattern
 */
type PatternGroupNames<Pattern extends RegexPattern> =
  Pattern extends `${string}(?<${infer GroupName}>${infer Rest}`
    ? GroupName extends NotGroupName
      ? PatternGroupNames<`${GroupName}>${Rest}`>
      : GroupName | PatternGroupNames<Rest>
    : never

type MatchesGroup<Pattern extends RegexPattern> = {
  [K in PatternGroupNames<Pattern>]: string
}

export interface Matcher<Pattern extends RegexPattern> {
  match: (value: string) => MatchesGroup<Pattern> | undefined
  test: (value: string) => boolean
}

const cachedRegexps = new Map<RegexPattern, RegExp>()

export function createMatcher<Pattern extends RegexPattern = RegexPattern>(
  pattern: Pattern
): Matcher<Pattern> {
  if (!cachedRegexps.has(pattern)) {
    cachedRegexps.set(pattern, new RegExp(pattern))
  }

  const regexp = cachedRegexps.get(pattern)

  return {
    match: (value) =>
      regexp.exec(value)?.groups as MatchesGroup<Pattern> | undefined,
    test: (value) => regexp.test(value)
  }
}
