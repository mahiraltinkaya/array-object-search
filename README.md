### Installation :

npm install @mahiraltinkaya/object-search

### Usage :

```javascript
const {
  searchInValues,
  searchInArray,
  searchInObject,
  searchInString,
} = require("object-serach");

searchInValues([], "stringKey"); // response []
searchInValues({ object }, "stringKey"); // true || false
searchInValues("searh in text", "stringKey"); // true
searchInValues(undefined, "stringKey"); // false
searchInValues(null, "stringKey"); // false

/* Or another functions */

searchInArray([], "stringKey"); // response []

searchInObject({}, "stringKey"); // response true || false

searchInString("string text or number", "stringKey"); // response true || false
```
