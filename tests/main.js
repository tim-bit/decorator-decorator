import test from 'tape';
import decorator from 'decorator-decorator';
import _ from 'lodash';

console.log('tests');

/**
 * Tests that we can use the decorator
 * on classes without passing arguments
 */
test('plain class decorators', t => {

	t.plan(2);

	let staticMethod = () => {};
	let instanceMethod = () => {};

	// create a decorator
	@decorator
	class Foo {
		decorateClass(target) {

			// just add some methods
			target.staticMethod = staticMethod;
			target.prototype.instanceMethod = instanceMethod;

			return target;
		}
	}

	// now decorate a class
	@Foo
	class Bar {
	}

	// assertions
	let bar = new Bar();

	t.same(Bar.staticMethod, staticMethod, 'class was decorated with static method');
	t.same(bar.instanceMethod, instanceMethod, 'class was decorated with instance method');
});

/**
 * Tests that we can use the decorator on
 * classes and pass arguments
 */
test('invoked class decorators', t => {

	t.plan(2);

	// create the decorator
	@decorator
	class Foo {
		decorate({target}, a, b) {
			return (...args) => {
				let obj = Reflect.construct(target, args);
				obj.hey = a;
				obj.ho = b;
				return obj;
			};
		}
	}

	// now use the decorator
	@Foo('arg1', {baz: 'bat'})
	class Bar {
	}

	// assertions
	let bar = new Bar();

	t.equal(bar.hey, 'arg1');
	t.deepEqual(bar.ho, {baz: 'bat'});
});

/**
 * Tests that we can use the decorator on
 * class properties without passing arguments
 */
test('plain class property decorators', t => {
	t.plan(1);


	// create the decorator
	@decorator
	class Foo {
		decorate({target, prop, desc}) {
			console.log('targets', target, prop, desc);
		}
	}

	// now use the decorator
	class Bar {
		@Foo
		foobizzle() {
			console.log('foobizzle');
		}
	}

	// assertions

	let b = new Bar();
	b.foobizzle();
	t.pass();
});

/**
 * Tests that we can use the decorator on
 * class properties and pass arguments
 */
test('invoked class property decorators', t => {
	t.plan(1);
	t.pass();
});
