# object with default value

```js
const objectDefault = require('object-with-default-value')

const lol = objectDefault({a: 1, b: 2, c: 3}, 100)

console.log(lol.a) // 1
console.log(lol.b) // 2
console.log(lol.wow) // 100
```

you can still set things like normal:

```js
console.log(lol.dog) // 100
lol.dog = 'henry'
console.log(lol.dog) // "henry"
```

