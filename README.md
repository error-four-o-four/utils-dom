A small package to manipulate the DOM.

### Usage

```
npm install --save @http404/dom
```

<br>

```js
import dom from 'dom';
```

<br>

### Environment

- [x] isMobileDevice
- [x] supportsTouchEvent
- [x] prefersReducedMotion
- [x] prefersColorScheme
- [ ] httpGet
- [ ] events

<br>

### Manipulation

- [x] get
- [x] create
- [x] append
- [ ] render
- [x] remove
- [x] class
  - [x] addClass
  - [x] hasClass
  - [ ] hasAnyClass
  - [ ] hasEveryClass
  - [x] toggleClass
  - [ ] toggleClass force on-way operation
  - [x] removeClass

<br>

### CSS Style

- [ ] injectStyleSheet
- [ ] styles _(@todo)_
  - [ ] addStyles
  - [ ] inlineStyle
  - [ ] removeStyles
- [ ] animateTo

<br>

### Tests

- [x] reading.test.ts
- [ ] creating.test.ts
- [x] attributes.test.ts

<br>

### Fix

- [ ] build documentation

<br>

### Ressources

[link](https://medium.com/codex/bundling-a-typescript-library-for-node-with-rollup-js-2c8add5e736f)\
[link](https://www.thisdot.co/blog/how-to-setup-a-typescript-project-using-rollup-js)

[example package](https://github.com/entwurfhaus/vite-vanilla-ts-module)\
[vitest reference](https://vitest.dev/api/)\
