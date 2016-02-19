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
 * Decorates a class to behave as a decorator. The class
 * being decorated must have a `decorate` method.
 */
let decorator = (target) => {
	let instance = Reflect.construct(target),
		decorate = (targetObj, params=[]) => {
			return instance.decorate.apply(instance, [targetObj].concat(params));
		};

	return (...args) => {
		if (args[0] instanceof Function) { // plain @decorator style
			return decorate(createTargetObject(args));
		}
		else { // invoked @decorator(param1, param2) style
			return (...targetArgs) => {
				return decorate(createTargetObject(targetArgs), args);
			};
		}
	};
};

export default decorator;
