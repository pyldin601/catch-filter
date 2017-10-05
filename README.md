# catch-filter
Function that helps to catch specific types of errors and rethrows another.

## Example
```javascript
const catchFilter = require('catch-filter');
try {
  doSomethingThrowing();
} catch (e) {
  catchFilter(
    [TypeError, error => handleTypeError(error)],
    [Error, error => handleOtherError(error)],
  )(e);
}
```
