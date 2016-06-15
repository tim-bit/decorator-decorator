import decorator from 'decorator-decorator';
import test from 'tape';

/**
 *
 */
test('decorate class', t => {
	t.plan(3);

	@decorator
	class Foo {
		decorate({target}, param1, param2, param3) {
			target.foo = param1;
			target.bar = param2;
			target.bat = param3;
			return target;
		}
	}

	@Foo('a', 0, {foo: 'bar'})
	class Bar {
	}

	const bar = new Bar();
	t.equal(Bar.foo, 'a');
	t.equal(Bar.bar, 0);
	t.deepEqual(Bar.bat, {foo: 'bar'});
});

/**
 *
 */
test('decorate class as singleton', t => {
	t.plan(1);

	@decorator
	class Singleton {
		decorate({target}) {
			return (...args) => {
				if (!(target[Symbol.for('singleton')] instanceof target))
					target[Symbol.for('singleton')] = new target(...args);

				return target[Symbol.for('singleton')];
			};
		}
	}

	@Singleton()
	class Foo {
	}

	const fooA = new Foo(),
		fooB = new Foo();

	t.equal(fooA, fooB);
});

/**
 *
 */
test('decorate method', t => {
	t.plan(1);

	@decorator
	class uppercase {
		decorate({target, prop, descriptor}) {
			if (typeof descriptor.value === 'function') {
				var origVal = descriptor.value;
				descriptor.value = () => origVal().toUpperCase();
			}
			return descriptor;
		}
	}

	class Foo {
		@uppercase()
		someMethod() {
			return 'foo';
		}
	}

	const foo = new Foo();
	t.equal(foo.someMethod(), 'FOO');
});

/**
 *
 */
test('decorate property', t => {
	t.plan(1);

	@decorator
	class uppercase {
		decorate({target, prop, descriptor}) {
			if (typeof descriptor.initializer === 'function') {
				var origVal = descriptor.initializer();
				descriptor.initializer = () => origVal.toUpperCase();
			}
			return descriptor;
		}
	}

	class Foo {
		@uppercase()
		prop = 'foo'
	}

	const foo = new Foo();
	t.equal(foo.prop, 'FOO');
});
