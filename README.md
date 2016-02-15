# decorator-decorator
An ES7 decorator to create decorators

## Installation

```
$ npm install decorator-decorator
```

## Usage

There are only two constraints:
* The class must contain a `decorate` method
* The first parameter to the decorator can't be a function

```javascript

import decorator from 'decorator-decorator';

@decocrator
class Foo {
	decorate({target, prop, descriptor}, param1, param2) {
		// do stuff
	}
}

```
