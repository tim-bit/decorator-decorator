import _ from 'lodash';
import Reflect from 'reflect';

/**
 * See decorator spec @ https://github.com/wycats/javascript-decorators
 */

const has = _.has;

// Returns true if the target is a class
let isClass = (args) => {	
	if (args.length === 1 && args[0] instanceof Function) {
		return true;
	}

	return false;
};

// Returns true if the target is a class property
let isProperty = (args) => {
	if (args.length === 3) {
		let desc = args[2];
		if (has(desc, 'enumerable') && has(desc, 'configurable') && has(desc, 'writable')) {
			if (desc.enumerable === true) {
				return true;
			}
		}
	}

	return false;
};

// Returns true if the target is a class method
let isMethod = (args) => {	
	if (args.length === 3) {
		let desc = args[2];
		if (has(desc, 'writable') && has(desc, 'enumerable') && has(desc, 'configurable')) {
			if (desc.enumerable === false) {
				return true;
			}
		}
	}
};

// Returns true if the target is an accessor method
let isAccessor = (args) => {
	if (args.length === 3) {
		let desc = args[2];
		if (has(desc, 'get') && has(desc, 'set')) {
			return true;
		}
	}

	return false;
};

// Calls a method or throws if it doens't exist
let callMethod = (obj, method, args) => {
	if (typeof obj[method] !== 'function') {
		throw new Error(`Decorator ${obj} can't be used to decorate classes.`);
	}

	return Reflect.apply(obj[method], obj, args);
};

// Returns true if the the decorator isn't parametric
let isPlainStyle = (target) => {
	return (isClass(target) || isMethod(target) || isAccessor(target) || isProperty(target));
};

// Dispatches to the appropriate decorate method
let dispatchDecorate = (instance, target, params=[]) => {
	if (isClass(target)) {
		return callMethod(instance, 'decorateClass', target.concat(params));
	}
	else if (isMethod(target)) {
		return callMethod(instance, 'decorateMethod', target.concat(params));
	}
	else if (isAccessor(target)) {
		return callMethod(instance, 'decorateAccessor', target.concat(params));
	}
	else if (isProperty(target)) {
		return callMethod(instance, 'decorateProperty', target.concat(params));
	}
	else {
		throw new Error(`Unable to detect decoration type.`);
	}
};

/**
 * Decorates a class to behave as a decorator.
 */
let decorator = (decoratorClass) => {
	let instance = Reflect.construct(decoratorClass);

	return (...target) => {
		if (isPlainStyle(target)) {
			dispatchDecorate(instance, target);
		}
		else { // parametric style
			let params = target;
			return (...target) => {
				return dispatchDecorate(instance, target, params);
			};
		}
	};
};



export default decorator;