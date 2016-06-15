import Reflect from 'reflect';

/**
 * Converts an array of arguments into a target object
 */
let createTargetObject = (args) => {
	let target_obj = {
		target: args[0]
	};

	if (args.length > 1) {
		target_obj.prop = args[1];
	}

	if (args.length > 2) {
		target_obj.descriptor = args[2];
	}

	return target_obj;
};

/**
 * Decorates a class to be a decorator. The class
 * being decorated must have a `decorate` method.
 */
let decorator = (target) => {
	let instance = Reflect.construct(target),
		decorate = (target_obj, params=[]) => {
			return instance.decorate.apply(instance, [target_obj].concat(params));
		};

	return (...args) => {
		return (...target_args) => {
			return decorate(createTargetObject(target_args), args);
		};
	};

};

export default decorator;
