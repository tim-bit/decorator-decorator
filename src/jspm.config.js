SystemJS.config({
	packageConfigPaths: [
		"npm:@*/*.json",
		"npm:*.json",
		"github:*/*.json"
	],
	globalEvaluationScope: false,
	transpiler: "plugin-babel",
	paths: {
		"decorator-decorator/": "decorator-decorator/"
	},
	babelOptions: {
		"presets": [
			"babel-preset-stage-1"
		],
		"plugins": [
			"babel-plugin-transform-decorators-legacy"
		]
	},

	map: {
		"babel-plugin-transform-decorators-legacy": "npm:babel-plugin-transform-decorators-legacy@1.3.4",
		"babel-preset-stage-1": "npm:babel-preset-stage-1@6.5.0",
		"buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
		"core-js": "npm:core-js@1.2.6",
		"events": "github:jspm/nodelibs-events@0.2.0-alpha",
		"fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
		"net": "github:jspm/nodelibs-net@0.2.0-alpha",
		"path": "github:jspm/nodelibs-path@0.2.0-alpha",
		"plugin-babel": "npm:systemjs-plugin-babel@0.0.2",
		"process": "github:jspm/nodelibs-process@0.2.0-alpha",
		"reflect": "npm:harmony-reflect@1.4.2",
		"stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
		"tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
		"util": "github:jspm/nodelibs-util@0.2.0-alpha"
	},

	packages: {
		"decorator-decorator": {
			"format": "esm",
			"main": "index.js"
		},
		"github:jspm/nodelibs-buffer@0.2.0-alpha": {
			"map": {
				"buffer-browserify": "npm:buffer@4.4.0"
			}
		},
		"github:jspm/nodelibs-stream@0.2.0-alpha": {
			"map": {
				"stream-browserify": "npm:stream-browserify@2.0.1"
			}
		},
		"npm:babel-code-frame@6.5.0": {
			"map": {
				"babel-runtime": "npm:babel-runtime@5.8.35",
				"chalk": "npm:chalk@1.1.1",
				"esutils": "npm:esutils@2.0.2",
				"js-tokens": "npm:js-tokens@1.0.2",
				"line-numbers": "npm:line-numbers@0.2.0",
				"repeating": "npm:repeating@1.1.3"
			}
		},
		"npm:babel-helper-bindify-decorators@6.5.0": {
			"map": {
				"babel-runtime": "npm:babel-runtime@5.8.35",
				"babel-traverse": "npm:babel-traverse@6.5.0",
				"babel-types": "npm:babel-types@6.5.2"
			}
		},
		"npm:babel-helper-builder-binary-assignment-operator-visitor@6.5.0": {
			"map": {
				"babel-helper-explode-assignable-expression": "npm:babel-helper-explode-assignable-expression@6.5.0",
				"babel-runtime": "npm:babel-runtime@5.8.35",
				"babel-types": "npm:babel-types@6.5.2"
			}
		},
		"npm:babel-helper-define-map@6.5.0": {
			"map": {
				"babel-helper-function-name": "npm:babel-helper-function-name@6.5.0",
				"babel-runtime": "npm:babel-runtime@5.8.35",
				"babel-types": "npm:babel-types@6.5.2",
				"lodash": "npm:lodash@3.10.1"
			}
		},
		"npm:babel-helper-explode-assignable-expression@6.5.0": {
			"map": {
				"babel-runtime": "npm:babel-runtime@5.8.35",
				"babel-traverse": "npm:babel-traverse@6.5.0",
				"babel-types": "npm:babel-types@6.5.2"
			}
		},
		"npm:babel-helper-explode-class@6.5.0": {
			"map": {
				"babel-helper-bindify-decorators": "npm:babel-helper-bindify-decorators@6.5.0",
				"babel-runtime": "npm:babel-runtime@5.8.35",
				"babel-traverse": "npm:babel-traverse@6.5.0",
				"babel-types": "npm:babel-types@6.5.2"
			}
		},
		"npm:babel-helper-function-name@6.5.0": {
			"map": {
				"babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.5.0",
				"babel-runtime": "npm:babel-runtime@5.8.35",
				"babel-template": "npm:babel-template@6.5.0",
				"babel-traverse": "npm:babel-traverse@6.5.0",
				"babel-types": "npm:babel-types@6.5.2"
			}
		},
		"npm:babel-helper-get-function-arity@6.5.0": {
			"map": {
				"babel-runtime": "npm:babel-runtime@5.8.35",
				"babel-types": "npm:babel-types@6.5.2"
			}
		},
		"npm:babel-helper-remap-async-to-generator@6.5.0": {
			"map": {
				"babel-helper-function-name": "npm:babel-helper-function-name@6.5.0",
				"babel-runtime": "npm:babel-runtime@5.8.35",
				"babel-template": "npm:babel-template@6.5.0",
				"babel-traverse": "npm:babel-traverse@6.5.0",
				"babel-types": "npm:babel-types@6.5.2"
			}
		},
		"npm:babel-messages@6.5.0": {
			"map": {
				"babel-runtime": "npm:babel-runtime@5.8.35"
			}
		},
		"npm:babel-plugin-syntax-async-functions@6.5.0": {
			"map": {
				"babel-runtime": "npm:babel-runtime@5.8.35"
			}
		},
		"npm:babel-plugin-syntax-class-constructor-call@6.5.0": {
			"map": {
				"babel-runtime": "npm:babel-runtime@5.8.35"
			}
		},
		"npm:babel-plugin-syntax-class-properties@6.5.0": {
			"map": {
				"babel-runtime": "npm:babel-runtime@5.8.35"
			}
		},
		"npm:babel-plugin-syntax-decorators@6.5.0": {
			"map": {
				"babel-runtime": "npm:babel-runtime@5.8.35"
			}
		},
		"npm:babel-plugin-syntax-exponentiation-operator@6.5.0": {
			"map": {
				"babel-runtime": "npm:babel-runtime@5.8.35"
			}
		},
		"npm:babel-plugin-syntax-export-extensions@6.5.0": {
			"map": {
				"babel-runtime": "npm:babel-runtime@5.8.35"
			}
		},
		"npm:babel-plugin-syntax-object-rest-spread@6.5.0": {
			"map": {
				"babel-runtime": "npm:babel-runtime@5.8.35"
			}
		},
		"npm:babel-plugin-syntax-trailing-function-commas@6.5.0": {
			"map": {
				"babel-runtime": "npm:babel-runtime@5.8.35"
			}
		},
		"npm:babel-plugin-transform-async-to-generator@6.5.0": {
			"map": {
				"babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.5.0",
				"babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.5.0",
				"babel-runtime": "npm:babel-runtime@5.8.35"
			}
		},
		"npm:babel-plugin-transform-class-constructor-call@6.5.0": {
			"map": {
				"babel-plugin-syntax-class-constructor-call": "npm:babel-plugin-syntax-class-constructor-call@6.5.0",
				"babel-runtime": "npm:babel-runtime@5.8.35",
				"babel-template": "npm:babel-template@6.5.0"
			}
		},
		"npm:babel-plugin-transform-class-properties@6.5.2": {
			"map": {
				"babel-plugin-syntax-class-properties": "npm:babel-plugin-syntax-class-properties@6.5.0",
				"babel-runtime": "npm:babel-runtime@5.8.35"
			}
		},
		"npm:babel-plugin-transform-decorators-legacy@1.3.4": {
			"map": {
				"babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.5.0",
				"babel-runtime": "npm:babel-runtime@6.5.0",
				"babel-template": "npm:babel-template@6.5.0"
			}
		},
		"npm:babel-plugin-transform-decorators@6.5.0": {
			"map": {
				"babel-helper-define-map": "npm:babel-helper-define-map@6.5.0",
				"babel-helper-explode-class": "npm:babel-helper-explode-class@6.5.0",
				"babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.5.0",
				"babel-runtime": "npm:babel-runtime@5.8.35",
				"babel-template": "npm:babel-template@6.5.0",
				"babel-types": "npm:babel-types@6.5.2"
			}
		},
		"npm:babel-plugin-transform-exponentiation-operator@6.5.0": {
			"map": {
				"babel-helper-builder-binary-assignment-operator-visitor": "npm:babel-helper-builder-binary-assignment-operator-visitor@6.5.0",
				"babel-plugin-syntax-exponentiation-operator": "npm:babel-plugin-syntax-exponentiation-operator@6.5.0",
				"babel-runtime": "npm:babel-runtime@5.8.35"
			}
		},
		"npm:babel-plugin-transform-export-extensions@6.5.0": {
			"map": {
				"babel-plugin-syntax-export-extensions": "npm:babel-plugin-syntax-export-extensions@6.5.0",
				"babel-runtime": "npm:babel-runtime@5.8.35"
			}
		},
		"npm:babel-plugin-transform-object-rest-spread@6.5.0": {
			"map": {
				"babel-plugin-syntax-object-rest-spread": "npm:babel-plugin-syntax-object-rest-spread@6.5.0",
				"babel-runtime": "npm:babel-runtime@5.8.35"
			}
		},
		"npm:babel-preset-stage-1@6.5.0": {
			"map": {
				"babel-plugin-transform-class-constructor-call": "npm:babel-plugin-transform-class-constructor-call@6.5.0",
				"babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.5.2",
				"babel-plugin-transform-decorators": "npm:babel-plugin-transform-decorators@6.5.0",
				"babel-plugin-transform-export-extensions": "npm:babel-plugin-transform-export-extensions@6.5.0",
				"babel-preset-stage-2": "npm:babel-preset-stage-2@6.5.0"
			}
		},
		"npm:babel-preset-stage-2@6.5.0": {
			"map": {
				"babel-plugin-syntax-trailing-function-commas": "npm:babel-plugin-syntax-trailing-function-commas@6.5.0",
				"babel-plugin-transform-object-rest-spread": "npm:babel-plugin-transform-object-rest-spread@6.5.0",
				"babel-preset-stage-3": "npm:babel-preset-stage-3@6.5.0"
			}
		},
		"npm:babel-preset-stage-3@6.5.0": {
			"map": {
				"babel-plugin-transform-async-to-generator": "npm:babel-plugin-transform-async-to-generator@6.5.0",
				"babel-plugin-transform-exponentiation-operator": "npm:babel-plugin-transform-exponentiation-operator@6.5.0"
			}
		},
		"npm:babel-runtime@6.5.0": {
			"map": {
				"core-js": "npm:core-js@1.2.6"
			}
		},
		"npm:babel-template@6.5.0": {
			"map": {
				"babel-runtime": "npm:babel-runtime@5.8.35",
				"babel-traverse": "npm:babel-traverse@6.5.0",
				"babel-types": "npm:babel-types@6.5.2",
				"babylon": "npm:babylon@6.5.2",
				"lodash": "npm:lodash@3.10.1"
			}
		},
		"npm:babel-traverse@6.5.0": {
			"map": {
				"babel-code-frame": "npm:babel-code-frame@6.5.0",
				"babel-messages": "npm:babel-messages@6.5.0",
				"babel-runtime": "npm:babel-runtime@5.8.35",
				"babel-types": "npm:babel-types@6.5.2",
				"babylon": "npm:babylon@6.5.2",
				"debug": "npm:debug@2.2.0",
				"globals": "npm:globals@8.18.0",
				"invariant": "npm:invariant@2.2.0",
				"lodash": "npm:lodash@3.10.1",
				"repeating": "npm:repeating@1.1.3"
			}
		},
		"npm:babel-types@6.5.2": {
			"map": {
				"babel-runtime": "npm:babel-runtime@5.8.35",
				"babel-traverse": "npm:babel-traverse@6.5.0",
				"esutils": "npm:esutils@2.0.2",
				"lodash": "npm:lodash@3.10.1",
				"to-fast-properties": "npm:to-fast-properties@1.0.1"
			}
		},
		"npm:babylon@6.5.2": {
			"map": {
				"babel-runtime": "npm:babel-runtime@5.8.35"
			}
		},
		"npm:buffer@4.4.0": {
			"map": {
				"base64-js": "npm:base64-js@1.0.4",
				"ieee754": "npm:ieee754@1.1.6",
				"isarray": "npm:isarray@1.0.0"
			}
		},
		"npm:chalk@1.1.1": {
			"map": {
				"ansi-styles": "npm:ansi-styles@2.1.0",
				"escape-string-regexp": "npm:escape-string-regexp@1.0.4",
				"has-ansi": "npm:has-ansi@2.0.0",
				"strip-ansi": "npm:strip-ansi@3.0.0",
				"supports-color": "npm:supports-color@2.0.0"
			}
		},
		"npm:debug@2.2.0": {
			"map": {
				"ms": "npm:ms@0.7.1"
			}
		},
		"npm:has-ansi@2.0.0": {
			"map": {
				"ansi-regex": "npm:ansi-regex@2.0.0"
			}
		},
		"npm:invariant@2.2.0": {
			"map": {
				"loose-envify": "npm:loose-envify@1.1.0"
			}
		},
		"npm:is-finite@1.0.1": {
			"map": {
				"number-is-nan": "npm:number-is-nan@1.0.0"
			}
		},
		"npm:line-numbers@0.2.0": {
			"map": {
				"left-pad": "npm:left-pad@0.0.3"
			}
		},
		"npm:loose-envify@1.1.0": {
			"map": {
				"js-tokens": "npm:js-tokens@1.0.2"
			}
		},
		"npm:readable-stream@2.0.5": {
			"map": {
				"core-util-is": "npm:core-util-is@1.0.2",
				"inherits": "npm:inherits@2.0.1",
				"isarray": "npm:isarray@0.0.1",
				"process-nextick-args": "npm:process-nextick-args@1.0.6",
				"string_decoder": "npm:string_decoder@0.10.31",
				"util-deprecate": "npm:util-deprecate@1.0.2"
			}
		},
		"npm:repeating@1.1.3": {
			"map": {
				"is-finite": "npm:is-finite@1.0.1"
			}
		},
		"npm:stream-browserify@2.0.1": {
			"map": {
				"inherits": "npm:inherits@2.0.1",
				"readable-stream": "npm:readable-stream@2.0.5"
			}
		},
		"npm:strip-ansi@3.0.0": {
			"map": {
				"ansi-regex": "npm:ansi-regex@2.0.0"
			}
		}
	}
});
