# decorator-decorator
An ES7 decorator to turn classes into decorators

## Installation

```
$ npm install decorator-decorator
```

## Usage

There are only two constraints:
* The class must contain a `decorate` method

```javascript

import decorator from 'decorator-decorator';

@decorator
class Foo {
	decorate({target, prop, descriptor}, param1, param2) {
		// do stuff
	}
}

// now you can use Foo as decorator

@Foo('param1', 'param2')
class Bar {
}

```
