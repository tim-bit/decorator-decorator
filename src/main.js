import Reflect from 'reflect';

/**
 * Converts an array of arguments into a target object
 */
let createTargetObject = (args) => {
	let targetObj = {
		target: args[0]
	};

	if (args.length > 1) {
		targetObj.prop = args[1];
		targetObj.descriptor = args[2];
	}

	return targetObj;
};

/**
 * Helper method to dispatch decoration of
 * a class to the decorator class.
 *
 * @return {Object} [The decorated class constructor]
 */
let decorateClass = (decoratorClass, targetClass, params=[]) => {
	return decoratorClass.decorateClass.apply(decoratorClass, [targetClass].concat(params));
};

/**
 * Helper method to dispatch decoration of a
 * class method/property to the decorator class.
 * 
 * @return {Object} [The decorated property descriptor]
 */
let decorateProperty = () => {

};

/**
 * Decorates a class to behave as a decorator. The class
 * being decorated must have a `decorate` method.
 *
 * @return {Object} [The decorator]
 */
let decorator = (target) => {
	let instance = Reflect.construct(target);

	return (...args) => {
		console.log('decorator args', args, typeof args[0]);
		if (args[0] instanceof Function) { // plain @decorator style
			console.log('plain decorator');
			return decorateClass(instance, createTargetObject(args));
		}
		else { // invoked @decorator(param1, param2) style
			console.log('invoked style');
			return (...targetArgs) => {
				console.log('target args', targetArgs);
				return decorateClass(instance, createTargetObject(targetArgs), args);
			};
		}
	};
};

export default decorator;
