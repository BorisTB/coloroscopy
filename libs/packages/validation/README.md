# `@coloroscopy/validation`

### Validators for color values

## Installation

yarn:

```shell
yarn add @coloroscopy/validation
```

npm:

```shell
npm install @coloroscopy/validation
```

## Validators:

### `isCssColorName`

Checks if value is css color name

```typescript
isCssColorName('aqua') // true
isCssColorName('teal') // true
isCssColorName('Pablo') // false
```

### `isHexColor`

Checks if value is valid hex color

```typescript
isHexColor('#fa0c85') // true
isHexColor('#c4f') // true
isHexColor('#fa0c85ff') // true
isHexColor('aqua') // false
```

### `isHexDigit`

### `isHexDigitPair`

### `isHexValue`

### `isNamedTransparentColor`

### `isNonEmptyString`

### `isRgbColor` @TODO

### `isTransparentColor` @TODO

### `isValidColor`
