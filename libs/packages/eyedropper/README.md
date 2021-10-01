# `@coloroscopy/eyedropper`

### Eyedropper tool to pick any color from web page

## Installation
yarn:
```shell
yarn add @coloroscopy/eyedropper
```

npm:
```shell
npm install @coloroscopy/eyedropper
```

## Usage:

```typescript
import { EyeDropper } from "@coloroscopy/eyedropper";

const eyeDropper = new EyeDropper()

function runEyeDropper() {
    eyeDropper.open().then(color => {
        console.log({ color })
    })
}
```
