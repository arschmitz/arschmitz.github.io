/*!

 handlebars v3.0.3

Copyright (C) 2011-2014 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["Handlebars"] = factory();
	else
		root["Handlebars"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(7)['default'];

	exports.__esModule = true;

	var _import = __webpack_require__(1);

	var base = _interopRequireWildcard(_import);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var _SafeString = __webpack_require__(2);

	var _SafeString2 = _interopRequireWildcard(_SafeString);

	var _Exception = __webpack_require__(3);

	var _Exception2 = _interopRequireWildcard(_Exception);

	var _import2 = __webpack_require__(4);

	var Utils = _interopRequireWildcard(_import2);

	var _import3 = __webpack_require__(5);

	var runtime = _interopRequireWildcard(_import3);

	var _noConflict = __webpack_require__(6);

	var _noConflict2 = _interopRequireWildcard(_noConflict);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _SafeString2['default'];
	  hb.Exception = _Exception2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_noConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(7)['default'];

	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;
	exports.createFrame = createFrame;

	var _import = __webpack_require__(4);

	var Utils = _interopRequireWildcard(_import);

	var _Exception = __webpack_require__(3);

	var _Exception2 = _interopRequireWildcard(_Exception);

	var VERSION = '3.0.1';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 6;

	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1'
	};

	exports.REVISION_CHANGES = REVISION_CHANGES;
	var isArray = Utils.isArray,
	    isFunction = Utils.isFunction,
	    toString = Utils.toString,
	    objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};

	  registerDefaultHelpers(this);
	}

	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: logger,
	  log: log,

	  registerHelper: function registerHelper(name, fn) {
	    if (toString.call(name) === objectType) {
	      if (fn) {
	        throw new _Exception2['default']('Arg not supported with multiple helpers');
	      }
	      Utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },

	  registerPartial: function registerPartial(name, partial) {
	    if (toString.call(name) === objectType) {
	      Utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _Exception2['default']('Attempting to register a partial as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  }
	};

	function registerDefaultHelpers(instance) {
	  instance.registerHelper('helperMissing', function () {
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} constuct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _Exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });

	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }

	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = createFrame(options.data);
	        data.contextPath = Utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }

	      return fn(context, options);
	    }
	  });

	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _Exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;

	    if (options.data && options.ids) {
	      contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }

	    if (isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;

	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: Utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }

	    if (context && typeof context === 'object') {
	      if (isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          execIteration(i, i, i === context.length - 1);
	        }
	      } else {
	        var priorKey = undefined;

	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });

	  instance.registerHelper('if', function (conditional, options) {
	    if (isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || Utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });

	  instance.registerHelper('with', function (context, options) {
	    if (isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!Utils.isEmpty(context)) {
	      if (options.data && options.ids) {
	        var data = createFrame(options.data);
	        data.contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]);
	        options = { data: data };
	      }

	      return fn(context, options);
	    } else {
	      return options.inverse(this);
	    }
	  });

	  instance.registerHelper('log', function (message, options) {
	    var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
	    instance.log(level, message);
	  });

	  instance.registerHelper('lookup', function (obj, field) {
	    return obj && obj[field];
	  });
	}

	var logger = {
	  methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

	  // State enum
	  DEBUG: 0,
	  INFO: 1,
	  WARN: 2,
	  ERROR: 3,
	  level: 1,

	  // Can be overridden in the host environment
	  log: function log(level, message) {
	    if (typeof console !== 'undefined' && logger.level <= level) {
	      var method = logger.methodMap[level];
	      (console[method] || console.log).call(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports.logger = logger;
	var log = logger.log;

	exports.log = log;

	function createFrame(object) {
	  var frame = Utils.extend({}, object);
	  frame._parent = object;
	  return frame;
	}

	/* [args, ]options */

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	// Build out our basic SafeString type
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  if (loc) {
	    this.lineNumber = line;
	    this.column = column;
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.extend = extend;

	// Older IE versions do not directly support indexOf so we must implement our own, sadly.
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  '\'': '&#x27;',
	  '`': '&#x60;'
	};

	var badChars = /[&<>"'`]/g,
	    possible = /[&<>"'`]/;

	function escapeChar(chr) {
	  return escape[chr];
	}

	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }

	  return obj;
	}

	var toString = Object.prototype.toString;

	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/*eslint-disable func-style, no-var */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	var isFunction;
	exports.isFunction = isFunction;
	/*eslint-enable func-style, no-var */

	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};exports.isArray = isArray;

	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }

	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }

	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}

	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}

	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(7)['default'];

	exports.__esModule = true;
	exports.checkRevision = checkRevision;

	// TODO: Remove this line and break up compilePartial

	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;

	var _import = __webpack_require__(4);

	var Utils = _interopRequireWildcard(_import);

	var _Exception = __webpack_require__(3);

	var _Exception2 = _interopRequireWildcard(_Exception);

	var _COMPILER_REVISION$REVISION_CHANGES$createFrame = __webpack_require__(1);

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _COMPILER_REVISION$REVISION_CHANGES$createFrame.COMPILER_REVISION;

	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _COMPILER_REVISION$REVISION_CHANGES$createFrame.REVISION_CHANGES[currentRevision],
	          compilerVersions = _COMPILER_REVISION$REVISION_CHANGES$createFrame.REVISION_CHANGES[compilerRevision];
	      throw new _Exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _Exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}

	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _Exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _Exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);

	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	    }

	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);

	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }

	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _Exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }

	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _Exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },

	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,

	    fn: function fn(i) {
	      return templateSpec[i];
	    },

	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },

	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;

	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }

	      return obj;
	    },

	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };

	  function ret(context) {
	    var options = arguments[1] === undefined ? {} : arguments[1];

	    var data = options.data;

	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      depths = options.depths ? [context].concat(options.depths) : [context];
	    }

	    return templateSpec.main.call(container, context, container.helpers, container.partials, data, blockParams, depths);
	  }
	  ret.isTop = true;

	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);

	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	    }
	  };

	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _Exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _Exception2['default']('must pass parent depths');
	    }

	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}

	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments[1] === undefined ? {} : arguments[1];

	    return fn.call(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), depths && [context].concat(depths));
	  }
	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}

	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    partial = options.partials[options.name];
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}

	function invokePartial(partial, context, options) {
	  options.partial = true;

	  if (partial === undefined) {
	    throw new _Exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	function noop() {
	  return '';
	}

	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _COMPILER_REVISION$REVISION_CHANGES$createFrame.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	exports.__esModule = true;
	/*global window */

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ }
/******/ ])
});
;
window.arschmitz={
    "API": {
        "description": "This section describes how to use and navigate through the website, as well as a complete API for the website for use in the prompt",
        "instructions": [
            "This website is designed to be navigated in 2 different ways...",
            "The first way is via a JavaScript console. This is what you see when you first come to the website, and what is always on the bottom portion of the screen.",
            "This works just like the console in the inspector of your browser. All of the websites content is stored in a global object named `arschmitz`.",
            "You can explore this object directly within the console as well as run the commands you will find below.",
            "The second way you can explore this website, is via the GUI interface.",
            "This is the more traditional sort of website you are probably familiar with. Where you have friendly links and buttons and can use your mouse ( and no JavaScript required ).",
            "You will notice however when you click on a link or button it inputs a coresponding command into the prompt and runs it.",
            "This way you can see exactly what is happening as you explore the website"
        ],
        "globalObjects": {
            "gui": {
                "description": "This object contains methods and properties that control the display of the GUI content of the website",
                "methods": [
                    {
                        "name": "GUI",
                        "description": "Open the GUI ( Graphic User Interface ) for the website. Proxy's to `gui.open();`"
                    },
                    {
                        "name": "gui.close()",
                        "description": "Close the GUI ( Graphic User Interface ) for the website."
                    },
                    {
                        "name": "gui.open()",
                        "description": "Open the GUI ( Graphic User Interface ) for the website."
                    },
                    {
                        "name": "gui.render( template [,item] );",
                        "description": " Render a page in the GUI"
                    },
                    {
                        "name": "gui.runTransition( content );",
                        "description": "Transition the GUI to new content"
                    },
                    {
                        "name": "gui.startBackground()",
                        "description": "Update and start the scrolling background text for the current page"
                    },
                    {
                        "name": "gui.popState();",
                        "description": "Update the current GUI content based on the current URL"
                    }
                ],
                "properties": [
                    {
                        "name": "gui.isOpen",
                        "description": "The current state of the GUI"
                    },
                    {
                        "name": "gui.transition",
                        "description": "The transition which will be used for GUI page transitions"
                    },
                    {
                        "name": "gui.duration",
                        "description": "The duration of the transition effect for GUI page transitions"
                    }
                ]
            },
            "prompt": {
                "description": "These functions control the JavaScript prompt at the bottom of the page",
                "methods": [
                    {
                        "name": "prompt.logError( error );",
                        "description": "Log an error to the in page console"
                    },
                    {
                        "name": "prompt.syntaxHighlight( json );",
                        "description": "Syntax highlight a JSON object and return the result"
                    },
                    {
                        "name": "prompt.runCommand();",
                        "description": "Run the command currently typed into the prompt"
                    },
                    {
                        "name": "prompt.keyup( event );",
                        "description": "Handles the keyup event for the prompt"
                    }
                ],
                "properties": [
                    {
                        "name": "prompt.syntaxRegex",
                        "description": "A regular expression used by `prompt.syntaxHighlight()`"
                    }
                ]
            },
            "effects": {
                "description": "This object contains methods and properties that animate the website in differnet ways",
                "methods": [
                    {
                        "name": "effects.runEffect( effect, element );",
                        "description": "Run a jQuery UI effect on an element"
                    },
                    {
                        "name": "effects.kill()",
                        "description": "Stop all effects and reset the website"
                    },
                    {
                        "name": "effects.iHaveTheSpins();",
                        "description": "Try and find out :-)"
                    },
                    {
                        "name": "effects.partyMode();",
                        "description": "Try and find out :-)"
                    },
                    {
                        "name": "effects.iAmTheSpoon();",
                        "description": "Try and find out :-)"
                    },
                    {
                        "name": "effects.flashMob( effect, image, duration );",
                        "description": "Run the flashmob effect with the specificied options. Duration defaults to infinite."
                    },
                    {
                        "name": "effects.getRandomColor()",
                        "description": "Returns a random Hex color code"
                    },
                    {
                        "name": "effects.stopTheMob()",
                        "description": "Stops the flshmob effect without removing the added elements"
                    },
                    {
                        "name": "effects.generateRule( rule, selector )",
                        "description": "Take an object and selector and converts them into a css rule and adds them to a dynamic stylesheet"
                    },
                    {
                        "name": "effects.saveStyle()",
                        "description": "Finds elements with style rules and saves them so they can be restored later"
                    },
                    {
                        "name": "effects.restoreStyle()",
                        "description": "Restores styles saved with `effects.saveStyle()`"
                    }
                ],
                "properties": [
                    {
                        "name": "effects.intervals",
                        "description": "An object containing the stored `setInterval` refrences on which the effects are running"
                    },
                    {
                        "name": "effects.images",
                        "description": "An array of image links used in the canned effects for `flashmob` effect"
                    },
                    {
                        "name": "effects.width",
                        "description": "The windows current width"
                    },
                    {
                        "name": "effects.height",
                        "description": "The windows current height"
                    },
                    {
                        "name": "effects.flashMobElements",
                        "description": "A collection containing all the elements that exist prior to the start of the `flashMob` effect for use when restoring the dom after cancelation"
                    },
                    {
                        "name": "effects.savedStyle",
                        "description": "A bollean indication if the pre effect style has been saved"
                    },
                    {
                        "name": "effects.stylesheet",
                        "description": "A refrence to the dynamic stylesheet used by `effects.generateRule()`"
                    }
                ]
            },
            "arschmitz": {
                "description": "An object containing all the content for the website which is rendered using handlebars templates to create the GUI"
            }
        }
    },
    "aboutMe": {
        "name": {
            "initials": "AS",
            "first": "Alexander",
            "last": "Schmitz",
            "middle": "Ryan",
            "nick": "Alex"
        },
        "basic": {
            "name": "Alexander Schmitz",
            "age": "31",
            "profession": "Developer",
            "title": "Project Lead jQuery Mobile, Co Creator Chassis CSS Framework, Team Member jQuery UI, PEP, jQuery Testing Team, jQuery Infrastructure Team, jQuery Content Team"
        },
        "avatar": "https://avatars0.githubusercontent.com/u/462993?v=3&amp;s=460",
        "currentPosition": {
            "company": "CÜR Media",
            "title": "Senior Engineer - Web Lead",
            "time": "2015 - Present",
            "responsibilities": [
                "Lead development of all web properties",
                "Lead development of streaming music app",
                "Lead a distributed team of developers",
                "Lead development of node backend",
                "App arcitecture",
                "Work with leads on other projects to create and improve cross-project standards"
            ]
        },
        "funFacts": [
            "Projects which i help lead and work on are on ~65% of the top 1 Million websites",
            "20% of these sites feature 2 or more of these projects",
            "11% have 3 or more of the projects",
            "When open source report card still worked I was in the top 1% of JavaScripters"
        ],
        "pastExperience": {
            "W3C": {
                "title": "Member",
                "time": "2015 - Present",
                "responsibilities": [
                    "Work on Web Platform working group",
                    "Work on Audio working group",
                    "Expert on promises findText api",
                    "Contributor Pointer Events working group"
                ]
            },
            "jQuery Foundation": {
                "title": "Development Lead / Full-time Consultant",
                "time": "2012 - Present",
                "responsibilities": [
                    "Lead development, direction of jQuery Foundation Projects",
                    "Lead the jQuery Mobile project",
                    "Lead a distributed team of developers around the world",
                    "Work on different distributed teams of developers",
                    "Create tools for use across different teams",
                    "Work with leads on other projects to create and improve cross-project standards"
                ]
            },
            "Filament Group": {
                "title": "Consultant",
                "time": "2013",
                "responsibilities": [
                    "Create a set of light weight reusable widgets built on shoestring",
                    "Continue development and add tests to shoestring library",
                    "Create eyelet a super tiny ( 80 lines ) widget factory api compatible with the jQuery UI widget factory"
                ]
            },
            "Bill Dodge Auto Group": {
                "title": "Internet Development Administrator",
                "time": "2009 - 2013",
                "responsibilities": [
                    "Create and manage all websites",
                    "Develop internet strategy for company",
                    "Handle all digital marketing",
                    "Create sales tools",
                    "Create accounting tools",
                    "Manage small team",
                    "Create text messaging marketing, inventory, and sales integration tools",
                    "Create text message auto response system"
                ]
            },
            "Starr Graphics": {
                "title": " Lead Web Developer / Graphic Artist",
                "time": "2005-2009",
                "responsibilities": [
                    "Handle all web development for clients",
                    "Create designes for comercial packageing",
                    "Pre-press art prep"
                ]
            },
            "Freelance": {
                "title": "Web Developer / Graphic Artist / Programmer",
                "time": "1996-2013",
                "responsibilities": [
                    "A variety of work for different clients"
                ]
            }
        },
        "contact": {
            "website": "http://arschmitz.me",
            "email": "arschmitz@gmail.com",
            "twitter": "alexrschmitz",
            "github": "arschmitz",
            "irc": "arschmitz",
            "linkedIn": "https://www.linkedin.com/in/arschmitz"
        },
        "description": "I'm a developer from Portland Maine specializing in front end development. My passion is writing elegant and functional javscript code to be used and enjoyed by any one who wants it. In my spare time I brew beer, make wine and love to cook. I have been coding and making websites for over 20 years. Durring this time i came to find that my true passion was not just to write code. It was to write code that could help Others and open make the internet a better and more accessible place. I devote my life and 100% of my working time to the development and fostering of open source projects.",
        "libScore": [
            {
                "url": "baidu.com",
                "rank": 4,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/baidu.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "qq.com",
                "rank": 8,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/qq.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "twitter.com",
                "rank": 10,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/twitter.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "taobao.com",
                "rank": 12,
                "platform": "mobile",
                "resource": "http://api.libscore.com/v1/sites/taobao.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "msn.com",
                "rank": 13,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/msn.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "linkedin.com",
                "rank": 15,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/linkedin.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "sina.com.cn",
                "rank": 16,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/sina.com.cn",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "yandex.ru",
                "rank": 21,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/yandex.ru",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "hao123.com",
                "rank": 22,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/hao123.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "instagram.com",
                "rank": 23,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/instagram.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "ebay.com",
                "rank": 24,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/ebay.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "360.cn",
                "rank": 29,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/360.cn",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "pinterest.com",
                "rank": 31,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/pinterest.com",
                "lib": [
                    "$.ui",
                    "jQuery"
                ]
            },
            {
                "url": "reddit.com",
                "rank": 34,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/reddit.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "netflix.com",
                "rank": 35,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/netflix.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "paypal.com",
                "rank": 38,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/paypal.com",
                "lib": [
                    "$.ui",
                    "jQuery"
                ]
            },
            {
                "url": "sohu.com",
                "rank": 39,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/sohu.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "microsoft.com",
                "rank": 40,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/microsoft.com",
                "lib": [
                    "$.mobile"
                ]
            },
            {
                "url": "tumblr.com",
                "rank": 46,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/tumblr.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "imgur.com",
                "rank": 47,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/imgur.com",
                "lib": [
                    "$.ui",
                    "jQuery"
                ]
            },
            {
                "url": "ok.ru",
                "rank": 48,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/ok.ru",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "gmw.cn",
                "rank": 49,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/gmw.cn",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "xvideos.com",
                "rank": 50,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/xvideos.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "imdb.com",
                "rank": 53,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/imdb.com",
                "lib": [
                    "$.ui",
                    "jQuery"
                ]
            },
            {
                "url": "stackoverflow.com",
                "rank": 54,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/stackoverflow.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "fc2.com",
                "rank": 55,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/fc2.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "ask.com",
                "rank": 56,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/ask.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "office.com",
                "rank": 62,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/office.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "rakuten.co.jp",
                "rank": 64,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/rakuten.co.jp",
                "lib": [
                    "$.ui",
                    "jQuery"
                ]
            },
            {
                "url": "pornhub.com",
                "rank": 65,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/pornhub.com",
                "lib": [
                    "$.ui",
                    "jQuery"
                ]
            },
            {
                "url": "soso.com",
                "rank": 68,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/soso.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "tianya.cn",
                "rank": 69,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/tianya.cn",
                "lib": [
                    "$.ui",
                    "jQuery",
                    "$.mobile"
                ]
            },
            {
                "url": "github.com",
                "rank": 71,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/github.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "nicovideo.jp",
                "rank": 74,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/nicovideo.jp",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "kat.cr",
                "rank": 76,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/kat.cr",
                "lib": [
                    "$.ui",
                    "jQuery"
                ]
            },
            {
                "url": "outbrain.com",
                "rank": 77,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/outbrain.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "bongacams.com",
                "rank": 78,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/bongacams.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "haosou.com",
                "rank": 80,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/haosou.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "go.com",
                "rank": 82,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/go.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "cnn.com",
                "rank": 83,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/cnn.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "360.com",
                "rank": 84,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/360.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "pixnet.net",
                "rank": 86,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/pixnet.net",
                "lib": [
                    "jQuery",
                    "$.mobile"
                ]
            },
            {
                "url": "dropbox.com",
                "rank": 87,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/dropbox.com",
                "lib": [
                    "$.ui",
                    "jQuery"
                ]
            },
            {
                "url": "adobe.com",
                "rank": 89,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/adobe.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "jd.com",
                "rank": 90,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/jd.com",
                "lib": [
                    "$.ui",
                    "jQuery"
                ]
            },
            {
                "url": "xhamster.com",
                "rank": 92,
                "platform": "mobile",
                "resource": "http://api.libscore.com/v1/sites/xhamster.com",
                "lib": [
                    "Hammer",
                    "jQuery"
                ]
            },
            {
                "url": "flipkart.com",
                "rank": 93,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/flipkart.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "microsoftonline.com",
                "rank": 94,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/microsoftonline.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "whatsapp.com",
                "rank": 95,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/whatsapp.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "nytimes.com",
                "rank": 96,
                "platform": "mobile",
                "resource": "http://api.libscore.com/v1/sites/nytimes.com",
                "lib": [
                    "Hammer",
                    "jQuery",
                    "$.mobile"
                ]
            },
            {
                "url": "chase.com",
                "rank": 97,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/chase.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "youku.com",
                "rank": 98,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/youku.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "coccoc.com",
                "rank": 99,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/coccoc.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "chinadaily.com.cn",
                "rank": 101,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/chinadaily.com.cn",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "indiatimes.com",
                "rank": 102,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/indiatimes.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "booking.com",
                "rank": 104,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/booking.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "china.com.cn",
                "rank": 107,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/china.com.cn",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "livedoor.jp",
                "rank": 108,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/livedoor.jp",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "sogou.com",
                "rank": 109,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/sogou.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "ebay.co.uk",
                "rank": 110,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/ebay.co.uk",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "ebay.de",
                "rank": 113,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/ebay.de",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "163.com",
                "rank": 114,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/163.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "dailymotion.com",
                "rank": 117,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/dailymotion.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "alipay.com",
                "rank": 118,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/alipay.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "amazon.cn",
                "rank": 119,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/amazon.cn",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "dmm.co.jp",
                "rank": 120,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/dmm.co.jp",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "twitch.tv",
                "rank": 121,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/twitch.tv",
                "lib": [
                    "$.ui",
                    "jQuery"
                ]
            },
            {
                "url": "tudou.com",
                "rank": 125,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/tudou.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "espn.go.com",
                "rank": 126,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/espn.go.com",
                "lib": [
                    "jQuery"
                ]
            }
        ]
    },
    "aboutTheSite": {
        "intro": [
            "This section describes some of the unique aspects of the site and how they work",
            "The content for this entire website are stored in a single global javascript object `arschmitz`",
            "Everything you see in the GUI is created by passing parts of this object to a handlebars template and rendering the result"
        ],
        "sections": {
            "json": [
                "Many of the content blocks on this website have small links in the upper right hand corner that say JSON",
                "The links mean that this block is created out of a single object that is part of the global `arschmitz` website object",
                "When you click the link it will show the path to the object and the json object it self which are passed to the handlebars template to create this block"
            ],
            "pageJSONLink": [
                "Similar to the JSON link mentioned above you will notice each GUI page has a json link at the very top of the page which is fixed to the top of the viewport",
                "Clicking this link will show the JSON objcet that creates the whole page",
                "Where this differs from the normal JSON links is after clicking the first time it will say template",
                "Clicking again will show the Hnadlebars template which renders the page when passed the previous JSON object"
            ],
            "links": [
                "You may notice any time you click a button or link on the website that there is a command entered into the console and run",
                "All actions in the gui actually just run the correcponding command in the console."
            ],
            "transitions": [
                "you may have noticed a subtle fading page transition when switching pages in the GUI",
                "You may change this to some more dramatic and fun transitions by going to the effects page and changing the default transition"
            ],
            "background": [
                "The text you see scrolling the background is the source code for different projects which i work on.",
                "I love javscript and could not thing of any more fitting of a background for my own website :-)"
            ],
            "topTitle": [
                "The top title you see on each page is the property accessor to the global site object for the current page"
            ]
        }
    },
    "community": {
        "W3C": {
            "role": "Member",
            "organization": "W3C",
            "website": "https://www.w3.org/",
            "logo": "https://www.w3.org/2008/site/images/logo-w3c-mobile-lg",
            "work": [
                "Work on Web Platform working group",
                "Work on Audio working group",
                "Expert on promises findText api",
                "Contributor Pointer Events working group"
            ]
        },
        "gsoc": {
            "role": "Organization Admin / Mentor",
            "organization": "Google Summer of Code",
            "website": "https://summerofcode.withgoogle.com/",
            "logo": "https://lh3.googleusercontent.com/zt9X7V06jkKDR9bZ7HFcS8RjUK_4axUv5FRR7UTjj5bq4Amy71kxwnl10aOJ5vuzLrkQiGEF7XJHzHzRzMeA3tHBI1MgA0vTiGJOJIXl2tf5FaANpBMMDrYZ9WUbCmjq-bvRXGmI=s426",
            "work": [
                "Mentor students",
                "Administor organization",
                "Review work and create weekly goals"
            ]
        },
        "hammer": {
            "role": "Organization Owner / Lead",
            "organization": "Hammer.js",
            "website": "https://github.com/hammerjs",
            "logo": "https://avatars2.githubusercontent.com/u/7997161?v=3&s=200",
            "work": [
                "Turning project into a community project",
                "Building a team",
                "Reaching out to other organizations about collaboration"
            ]
        },
        "nodeSchoolPortland": {
            "role": "Mentor",
            "organization": "Node School Portland",
            "website": "http://www.meetup.com/nodeschool-portland-me/",
            "logo": "http://photos1.meetupstatic.com/photos/event/1/c/c/1/global_433507361.jpeg",
            "work": [
                "Help mentor and teach node to anyone who is interested"
            ]
        },
        "portlandWebDev": {
            "role": "Frequent speaker, helper",
            "organization": "Portland Main Web Developer Group",
            "website": "http://www.meetup.com/me-webdev/",
            "logo": "http://photos1.meetupstatic.com/photos/event/7/5/3/c/global_257430012.jpeg",
            "work": [
                "Give occasional talks",
                "Help find speakers",
                "Mentor and give advice to fellow members",
                "Setup irc support channel"
            ]
        },
        "jqueryBoston": {
            "role": "Member",
            "website": "http://www.meetup.com/jQuery-Boston/",
            "logo": "http://photos2.meetupstatic.com/photos/event/4/7/9/d/global_20598333.jpeg",
            "organization": "jQuery Boston"
        },
        "bostonjs": {
            "role": "Member",
            "website": "http://www.meetup.com/boston_JS/",
            "organization": "Boston JS",
            "logo": "http://photos2.meetupstatic.com/photos/event/7/5/d/6/global_431910166.jpeg"
        }
    },
    "help": {
        "top": [
            "This website is a little different then typical websites so this section gives some basic usage instructions",
            "The website is composed of 2 main parts the Console and the GUI"
        ],
        "sections": {
            "console": [
                "The console provides the basis for the whole site. This is a javascript console just like the one you may have used in the developer tools of your favorite browser",
                "The console will run any valid javascript you enter in the global context and will log any return values or errors it encounters.",
                "on larger screens you can have either the console open the GUI open or both.",
                "On small screen like mobile devices the GUI / Console are responsive and only one can be open at a time",
                "When the console is closed you will find a small button at the bottom of the screen to re-open it",
                "The console can be resized by dragging its top border up or down",
                "For more information on the console and its API see the API section",
                "For more details on how this interacts and works with the rest of the site see the `aboutTheSite` section"
            ],
            "gui": [
                "The GUI or Graphical User Interface is what most people think of as a normal website",
                "The GUI has your typical buttons and links. The GUI on this website does have some unique feature though",
                "The GUI can be opened at any time by typing `GUI` into the console or by clicking the flips switch at the top which toggles the GUI on and off",
                "One mobile screens when you open the GUI it will completely hide he console and you will see only the GUI.",
                "On smaller screens when the GUI is open you will see only the GUI",
                "For more details on the GUI and its features see the `aboutTheSite` section",
                "For the full API see the API section"
            ]
        }
    },
    "projects": {
        "jquery-mobile": {
            "name": "jQuery Mobile",
            "role": "Project Lead",
            "repoName": "[ 'jquery-mobile' ]",
            "links": {
                "github": "https://github.com/jquery/jquery-mobile",
                "issues": "https://github.com/jquery/jquery-mobile/issues",
                "website": "http://jquerymobile.com",
                "api": "http://api.jquerymobile.com",
                "irc": "#jqueryui-dev",
                "demos": "http://demos.jquerymobile.com"
            },
            "libScore": {
                "name": "$.mobile",
                "sites": [
                    {
                        "url": "microsoft.com",
                        "rank": 40,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/microsoft.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "tianya.cn",
                        "rank": 69,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/tianya.cn"
                    },
                    {
                        "url": "pixnet.net",
                        "rank": 86,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/pixnet.net"
                    },
                    {
                        "url": "nytimes.com",
                        "rank": 96,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/nytimes.com"
                    },
                    {
                        "url": "wellsfargo.com",
                        "rank": 141,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/wellsfargo.com"
                    },
                    {
                        "url": "cnet.com",
                        "rank": 155,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/cnet.com"
                    },
                    {
                        "url": "businessinsider.com",
                        "rank": 252,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/businessinsider.com"
                    },
                    {
                        "url": "shutterstock.com",
                        "rank": 258,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/shutterstock.com"
                    },
                    {
                        "url": "xuite.net",
                        "rank": 275,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/xuite.net"
                    },
                    {
                        "url": "ups.com",
                        "rank": 305,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/ups.com"
                    },
                    {
                        "url": "digikala.com",
                        "rank": 417,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/digikala.com"
                    },
                    {
                        "url": "newegg.com",
                        "rank": 424,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/newegg.com"
                    },
                    {
                        "url": "gearbest.com",
                        "rank": 466,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/gearbest.com"
                    },
                    {
                        "url": "xda-developers.com",
                        "rank": 543,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/xda-developers.com"
                    },
                    {
                        "url": "ensonhaber.com",
                        "rank": 630,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/ensonhaber.com"
                    },
                    {
                        "url": "hotnewhiphop.com",
                        "rank": 659,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/hotnewhiphop.com"
                    },
                    {
                        "url": "hotstar.com",
                        "rank": 660,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/hotstar.com"
                    },
                    {
                        "url": "yadi.sk",
                        "rank": 687,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/yadi.sk"
                    },
                    {
                        "url": "eonline.com",
                        "rank": 731,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/eonline.com"
                    },
                    {
                        "url": "gamepedia.com",
                        "rank": 751,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/gamepedia.com"
                    },
                    {
                        "url": "prezi.com",
                        "rank": 775,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/prezi.com"
                    },
                    {
                        "url": "123rf.com",
                        "rank": 778,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/123rf.com"
                    },
                    {
                        "url": "hh.ru",
                        "rank": 838,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/hh.ru"
                    },
                    {
                        "url": "104.com.tw",
                        "rank": 849,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/104.com.tw"
                    },
                    {
                        "url": "vetogate.com",
                        "rank": 875,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/vetogate.com"
                    },
                    {
                        "url": "cracked.com",
                        "rank": 889,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/cracked.com"
                    },
                    {
                        "url": "focus.de",
                        "rank": 906,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/focus.de"
                    },
                    {
                        "url": "hubspot.com",
                        "rank": 916,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/hubspot.com"
                    },
                    {
                        "url": "bedbathandbeyond.com",
                        "rank": 1012,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/bedbathandbeyond.com"
                    },
                    {
                        "url": "haberturk.com",
                        "rank": 1024,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/haberturk.com"
                    },
                    {
                        "url": "stanford.edu",
                        "rank": 1051,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/stanford.edu"
                    },
                    {
                        "url": "korabia.com",
                        "rank": 1052,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/korabia.com"
                    },
                    {
                        "url": "axisbank.com",
                        "rank": 1096,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/axisbank.com"
                    },
                    {
                        "url": "tagged.com",
                        "rank": 1106,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/tagged.com"
                    },
                    {
                        "url": "today.com",
                        "rank": 1138,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/today.com"
                    },
                    {
                        "url": "entrepreneur.com",
                        "rank": 1141,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/entrepreneur.com"
                    },
                    {
                        "url": "iherb.com",
                        "rank": 1167,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/iherb.com"
                    },
                    {
                        "url": "cvs.com",
                        "rank": 1169,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/cvs.com"
                    },
                    {
                        "url": "tim.it",
                        "rank": 1247,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/tim.it"
                    },
                    {
                        "url": "teamviewer.com",
                        "rank": 1253,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/teamviewer.com"
                    },
                    {
                        "url": "cdc.gov",
                        "rank": 1259,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/cdc.gov"
                    },
                    {
                        "url": "hibapress.com",
                        "rank": 1299,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/hibapress.com"
                    },
                    {
                        "url": "cars.com",
                        "rank": 1322,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/cars.com"
                    },
                    {
                        "url": "folha.uol.com.br",
                        "rank": 1336,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/folha.uol.com.br"
                    },
                    {
                        "url": "turbobit.net",
                        "rank": 1342,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/turbobit.net"
                    },
                    {
                        "url": "ranker.com",
                        "rank": 1448,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ranker.com"
                    },
                    {
                        "url": "abc.go.com",
                        "rank": 1491,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/abc.go.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "sammydress.com",
                        "rank": 1509,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/sammydress.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "evite.com",
                        "rank": 1578,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/evite.com"
                    },
                    {
                        "url": "earthlink.net",
                        "rank": 1630,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/earthlink.net"
                    },
                    {
                        "url": "payoneer.com",
                        "rank": 1641,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/payoneer.com"
                    },
                    {
                        "url": "emirates.com",
                        "rank": 1691,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/emirates.com"
                    },
                    {
                        "url": "radikal.com.tr",
                        "rank": 1723,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/radikal.com.tr",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "layalina.com",
                        "rank": 1725,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/layalina.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "acer.com",
                        "rank": 1761,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/acer.com"
                    },
                    {
                        "url": "origin.com",
                        "rank": 1764,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/origin.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "recruit.co.jp",
                        "rank": 1791,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/recruit.co.jp",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "lotterypost.com",
                        "rank": 1806,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/lotterypost.com"
                    },
                    {
                        "url": "ibtimes.co.uk",
                        "rank": 1838,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ibtimes.co.uk",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "shine.com",
                        "rank": 1851,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/shine.com"
                    },
                    {
                        "url": "zoopla.co.uk",
                        "rank": 1955,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/zoopla.co.uk"
                    },
                    {
                        "url": "starwoodhotels.com",
                        "rank": 1958,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/starwoodhotels.com"
                    },
                    {
                        "url": "kenh14.vn",
                        "rank": 1962,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/kenh14.vn",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "epicurious.com",
                        "rank": 1963,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/epicurious.com"
                    },
                    {
                        "url": "rimanews.com",
                        "rank": 1989,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/rimanews.com"
                    },
                    {
                        "url": "qiwi.com",
                        "rank": 2063,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/qiwi.com"
                    },
                    {
                        "url": "autoblog.com",
                        "rank": 2124,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/autoblog.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "llbean.com",
                        "rank": 2148,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/llbean.com"
                    },
                    {
                        "url": "yalla-shoot.com",
                        "rank": 2166,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/yalla-shoot.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "creativemarket.com",
                        "rank": 2203,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/creativemarket.com"
                    },
                    {
                        "url": "ulta.com",
                        "rank": 2252,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ulta.com"
                    },
                    {
                        "url": "ilsole24ore.com",
                        "rank": 2283,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/ilsole24ore.com"
                    },
                    {
                        "url": "kotak.com",
                        "rank": 2289,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/kotak.com"
                    },
                    {
                        "url": "betfair.com",
                        "rank": 2323,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/betfair.com"
                    },
                    {
                        "url": "lastampa.it",
                        "rank": 2340,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/lastampa.it",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "mathworks.com",
                        "rank": 2389,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/mathworks.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "yatra.com",
                        "rank": 2478,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/yatra.com"
                    },
                    {
                        "url": "justjared.com",
                        "rank": 2498,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/justjared.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "boston.com",
                        "rank": 2516,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/boston.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "siriusxm.com",
                        "rank": 2558,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/siriusxm.com"
                    },
                    {
                        "url": "vz.ru",
                        "rank": 2582,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/vz.ru",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "telecomitalia.it",
                        "rank": 2599,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/telecomitalia.it",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "natwest.com",
                        "rank": 2615,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/natwest.com"
                    },
                    {
                        "url": "sony.com",
                        "rank": 2644,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sony.com"
                    },
                    {
                        "url": "enjoydressup.com",
                        "rank": 2660,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/enjoydressup.com"
                    },
                    {
                        "url": "immowelt.de",
                        "rank": 2672,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/immowelt.de"
                    },
                    {
                        "url": "encuentra24.com",
                        "rank": 2718,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/encuentra24.com"
                    },
                    {
                        "url": "viralands.com",
                        "rank": 2742,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/viralands.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "kariyer.net",
                        "rank": 2743,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/kariyer.net"
                    },
                    {
                        "url": "bmo.com",
                        "rank": 2766,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/bmo.com"
                    },
                    {
                        "url": "techinsider.io",
                        "rank": 2790,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/techinsider.io"
                    },
                    {
                        "url": "telekom.de",
                        "rank": 2931,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/telekom.de"
                    },
                    {
                        "url": "kanald.com.tr",
                        "rank": 2977,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/kanald.com.tr",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "islamweb.net",
                        "rank": 2988,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/islamweb.net"
                    },
                    {
                        "url": "pons.com",
                        "rank": 2989,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/pons.com"
                    },
                    {
                        "url": "check24.de",
                        "rank": 2993,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/check24.de"
                    },
                    {
                        "url": "carmax.com",
                        "rank": 3022,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/carmax.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "hi5.com",
                        "rank": 3029,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/hi5.com"
                    },
                    {
                        "url": "monsterindia.com",
                        "rank": 3061,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/monsterindia.com"
                    },
                    {
                        "url": "takealot.com",
                        "rank": 3114,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/takealot.com"
                    }
                ],
                "short": [
                    {
                        "url": "microsoft.com",
                        "rank": 40,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/microsoft.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "tianya.cn",
                        "rank": 69,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/tianya.cn"
                    },
                    {
                        "url": "pixnet.net",
                        "rank": 86,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/pixnet.net"
                    },
                    {
                        "url": "nytimes.com",
                        "rank": 96,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/nytimes.com"
                    },
                    {
                        "url": "wellsfargo.com",
                        "rank": 141,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/wellsfargo.com"
                    },
                    {
                        "url": "cnet.com",
                        "rank": 155,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/cnet.com"
                    },
                    {
                        "url": "businessinsider.com",
                        "rank": 252,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/businessinsider.com"
                    },
                    {
                        "url": "shutterstock.com",
                        "rank": 258,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/shutterstock.com"
                    },
                    {
                        "url": "xuite.net",
                        "rank": 275,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/xuite.net"
                    },
                    {
                        "url": "ups.com",
                        "rank": 305,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/ups.com"
                    },
                    {
                        "url": "digikala.com",
                        "rank": 417,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/digikala.com"
                    },
                    {
                        "url": "newegg.com",
                        "rank": 424,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/newegg.com"
                    },
                    {
                        "url": "gearbest.com",
                        "rank": 466,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/gearbest.com"
                    },
                    {
                        "url": "xda-developers.com",
                        "rank": 543,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/xda-developers.com"
                    },
                    {
                        "url": "ensonhaber.com",
                        "rank": 630,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/ensonhaber.com"
                    },
                    {
                        "url": "hotnewhiphop.com",
                        "rank": 659,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/hotnewhiphop.com"
                    },
                    {
                        "url": "hotstar.com",
                        "rank": 660,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/hotstar.com"
                    },
                    {
                        "url": "yadi.sk",
                        "rank": 687,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/yadi.sk"
                    },
                    {
                        "url": "eonline.com",
                        "rank": 731,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/eonline.com"
                    },
                    {
                        "url": "gamepedia.com",
                        "rank": 751,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/gamepedia.com"
                    },
                    {
                        "url": "prezi.com",
                        "rank": 775,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/prezi.com"
                    },
                    {
                        "url": "123rf.com",
                        "rank": 778,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/123rf.com"
                    },
                    {
                        "url": "hh.ru",
                        "rank": 838,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/hh.ru"
                    },
                    {
                        "url": "104.com.tw",
                        "rank": 849,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/104.com.tw"
                    },
                    {
                        "url": "vetogate.com",
                        "rank": 875,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/vetogate.com"
                    },
                    {
                        "url": "cracked.com",
                        "rank": 889,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/cracked.com"
                    },
                    {
                        "url": "focus.de",
                        "rank": 906,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/focus.de"
                    },
                    {
                        "url": "hubspot.com",
                        "rank": 916,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/hubspot.com"
                    },
                    {
                        "url": "bedbathandbeyond.com",
                        "rank": 1012,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/bedbathandbeyond.com"
                    },
                    {
                        "url": "haberturk.com",
                        "rank": 1024,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/haberturk.com"
                    },
                    {
                        "url": "stanford.edu",
                        "rank": 1051,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/stanford.edu"
                    },
                    {
                        "url": "korabia.com",
                        "rank": 1052,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/korabia.com"
                    },
                    {
                        "url": "axisbank.com",
                        "rank": 1096,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/axisbank.com"
                    },
                    {
                        "url": "tagged.com",
                        "rank": 1106,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/tagged.com"
                    },
                    {
                        "url": "today.com",
                        "rank": 1138,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/today.com"
                    },
                    {
                        "url": "entrepreneur.com",
                        "rank": 1141,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/entrepreneur.com"
                    },
                    {
                        "url": "iherb.com",
                        "rank": 1167,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/iherb.com"
                    },
                    {
                        "url": "cvs.com",
                        "rank": 1169,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/cvs.com"
                    },
                    {
                        "url": "tim.it",
                        "rank": 1247,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/tim.it"
                    },
                    {
                        "url": "teamviewer.com",
                        "rank": 1253,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/teamviewer.com"
                    },
                    {
                        "url": "cdc.gov",
                        "rank": 1259,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/cdc.gov"
                    },
                    {
                        "url": "hibapress.com",
                        "rank": 1299,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/hibapress.com"
                    },
                    {
                        "url": "cars.com",
                        "rank": 1322,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/cars.com"
                    },
                    {
                        "url": "folha.uol.com.br",
                        "rank": 1336,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/folha.uol.com.br"
                    },
                    {
                        "url": "turbobit.net",
                        "rank": 1342,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/turbobit.net"
                    },
                    {
                        "url": "ranker.com",
                        "rank": 1448,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ranker.com"
                    },
                    {
                        "url": "abc.go.com",
                        "rank": 1491,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/abc.go.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "sammydress.com",
                        "rank": 1509,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/sammydress.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "evite.com",
                        "rank": 1578,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/evite.com"
                    },
                    {
                        "url": "earthlink.net",
                        "rank": 1630,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/earthlink.net"
                    },
                    {
                        "url": "payoneer.com",
                        "rank": 1641,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/payoneer.com"
                    },
                    {
                        "url": "emirates.com",
                        "rank": 1691,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/emirates.com"
                    },
                    {
                        "url": "radikal.com.tr",
                        "rank": 1723,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/radikal.com.tr",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "layalina.com",
                        "rank": 1725,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/layalina.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "acer.com",
                        "rank": 1761,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/acer.com"
                    },
                    {
                        "url": "origin.com",
                        "rank": 1764,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/origin.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "recruit.co.jp",
                        "rank": 1791,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/recruit.co.jp",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "lotterypost.com",
                        "rank": 1806,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/lotterypost.com"
                    },
                    {
                        "url": "ibtimes.co.uk",
                        "rank": 1838,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ibtimes.co.uk",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "shine.com",
                        "rank": 1851,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/shine.com"
                    },
                    {
                        "url": "zoopla.co.uk",
                        "rank": 1955,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/zoopla.co.uk"
                    },
                    {
                        "url": "starwoodhotels.com",
                        "rank": 1958,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/starwoodhotels.com"
                    },
                    {
                        "url": "kenh14.vn",
                        "rank": 1962,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/kenh14.vn",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "epicurious.com",
                        "rank": 1963,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/epicurious.com"
                    },
                    {
                        "url": "rimanews.com",
                        "rank": 1989,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/rimanews.com"
                    },
                    {
                        "url": "qiwi.com",
                        "rank": 2063,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/qiwi.com"
                    },
                    {
                        "url": "autoblog.com",
                        "rank": 2124,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/autoblog.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "llbean.com",
                        "rank": 2148,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/llbean.com"
                    },
                    {
                        "url": "yalla-shoot.com",
                        "rank": 2166,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/yalla-shoot.com",
                        "lib": [
                            "$.mobile"
                        ]
                    }
                ]
            },
            "builtWith": "true",
            "dist": "https://code.jquery.com/mobile/git/jquery.mobile-git.js",
            "description": "A unified, HTML5-based user interface system for all popular mobile device platforms, built on the rock-solid jQuery and jQuery UI foundation. Its lightweight code is built with progressive enhancement, and has a flexible, easily themeable design.",
            "logo": "images/mobile.svg",
            "currentWork": [
                "Leading all aspects of the project",
                "Re-writing declaritive initilization as a stand alone module",
                "improving testing",
                "porting widgets to / from jQuery UI",
                "re-writing navigation."
            ]
        },
        "jquery-ui": {
            "name": "jQuery UI",
            "repoName": "[ 'jquery-ui' ]",
            "role": "Team Member",
            "links": {
                "github": "https://github.com/jquery/jquery-ui",
                "issues": "http://bugs.jqueryui.com",
                "website": "http://jqueryui.com",
                "api": "http://api.jqueryui.com",
                "irc": "#jqueryui-dev",
                "demos": "http://jqueryui.com/demos/"
            },
            "libScore": {
                "name": "$.ui",
                "sites": [
                    {
                        "url": "pinterest.com",
                        "rank": 31,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/pinterest.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "paypal.com",
                        "rank": 38,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/paypal.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "imgur.com",
                        "rank": 47,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/imgur.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "imdb.com",
                        "rank": 53,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/imdb.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "rakuten.co.jp",
                        "rank": 64,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/rakuten.co.jp",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "pornhub.com",
                        "rank": 65,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/pornhub.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "tianya.cn",
                        "rank": 69,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/tianya.cn",
                        "lib": [
                            "$.ui",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "kat.cr",
                        "rank": 76,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/kat.cr",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "dropbox.com",
                        "rank": 87,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/dropbox.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "jd.com",
                        "rank": 90,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/jd.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "twitch.tv",
                        "rank": 121,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/twitch.tv",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "bankofamerica.com",
                        "rank": 127,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/bankofamerica.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "adf.ly",
                        "rank": 132,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/adf.ly",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "huffingtonpost.com",
                        "rank": 134,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/huffingtonpost.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "bilibili.com",
                        "rank": 142,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/bilibili.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "globo.com",
                        "rank": 150,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/globo.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "intuit.com",
                        "rank": 166,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/intuit.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "naver.jp",
                        "rank": 169,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/naver.jp",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "snapdeal.com",
                        "rank": 171,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/snapdeal.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "taringa.net",
                        "rank": 172,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/taringa.net",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "redtube.com",
                        "rank": 181,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/redtube.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "hclips.com",
                        "rank": 196,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/hclips.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "9gag.com",
                        "rank": 201,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/9gag.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "daum.net",
                        "rank": 205,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/daum.net",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "target.com",
                        "rank": 206,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/target.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "zol.com.cn",
                        "rank": 208,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/zol.com.cn",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "bestbuy.com",
                        "rank": 227,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/bestbuy.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "livejournal.com",
                        "rank": 232,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/livejournal.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "nametests.com",
                        "rank": 238,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/nametests.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "deviantart.com",
                        "rank": 251,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/deviantart.com",
                        "lib": [
                            "$.ui"
                        ]
                    },
                    {
                        "url": "businessinsider.com",
                        "rank": 252,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/businessinsider.com",
                        "lib": [
                            "$.ui",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "slickdeals.net",
                        "rank": 267,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/slickdeals.net",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "weebly.com",
                        "rank": 273,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/weebly.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "xuite.net",
                        "rank": 275,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/xuite.net",
                        "lib": [
                            "$.ui",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "ruten.com.tw",
                        "rank": 279,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ruten.com.tw",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "t-online.de",
                        "rank": 282,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/t-online.de",
                        "lib": [
                            "$.ui"
                        ]
                    },
                    {
                        "url": "pandora.com",
                        "rank": 284,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/pandora.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "popcash.net",
                        "rank": 290,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/popcash.net",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "liputan6.com",
                        "rank": 292,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/liputan6.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "1905.com",
                        "rank": 297,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/1905.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "kaskus.co.id",
                        "rank": 303,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/kaskus.co.id",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "ups.com",
                        "rank": 305,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/ups.com",
                        "lib": [
                            "$.ui",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "eksisozluk.com",
                        "rank": 309,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/eksisozluk.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "hp.com",
                        "rank": 313,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/hp.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "telegraph.co.uk",
                        "rank": 318,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/telegraph.co.uk",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "sourceforge.net",
                        "rank": 321,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sourceforge.net",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "sberbank.ru",
                        "rank": 328,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sberbank.ru"
                    },
                    {
                        "url": "mashable.com",
                        "rank": 329,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/mashable.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "thesaurus.com",
                        "rank": 330,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/thesaurus.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "mercadolivre.com.br",
                        "rank": 335,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/mercadolivre.com.br",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "doublepimp.com",
                        "rank": 341,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/doublepimp.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "ltn.com.tw",
                        "rank": 342,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ltn.com.tw",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "zendesk.com",
                        "rank": 354,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/zendesk.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "att.com",
                        "rank": 357,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/att.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "sabah.com.tr",
                        "rank": 359,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sabah.com.tr",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "livejasmin.com",
                        "rank": 366,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/livejasmin.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "sahibinden.com",
                        "rank": 369,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sahibinden.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "hurriyet.com.tr",
                        "rank": 370,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/hurriyet.com.tr"
                    },
                    {
                        "url": "kinogo.co",
                        "rank": 373,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/kinogo.co",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "pinimg.com",
                        "rank": 378,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/pinimg.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "giphy.com",
                        "rank": 379,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/giphy.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "irctc.co.in",
                        "rank": 386,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/irctc.co.in",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "macys.com",
                        "rank": 390,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/macys.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "blackboard.com",
                        "rank": 392,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/blackboard.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "varzesh3.com",
                        "rank": 397,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/varzesh3.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "kinopoisk.ru",
                        "rank": 401,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/kinopoisk.ru",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "oracle.com",
                        "rank": 403,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/oracle.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "taleo.net",
                        "rank": 408,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/taleo.net",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "citi.com",
                        "rank": 410,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/citi.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "reference.com",
                        "rank": 415,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/reference.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "digikala.com",
                        "rank": 417,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/digikala.com",
                        "lib": [
                            "$.ui",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "spiegel.de",
                        "rank": 420,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/spiegel.de",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "newegg.com",
                        "rank": 424,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/newegg.com",
                        "lib": [
                            "$.ui",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "quikr.com",
                        "rank": 425,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/quikr.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "airbnb.com",
                        "rank": 426,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/airbnb.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "playstation.com",
                        "rank": 436,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/playstation.com"
                    },
                    {
                        "url": "infusionsoft.com",
                        "rank": 439,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/infusionsoft.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "4shared.com",
                        "rank": 443,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/4shared.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "bhaskar.com",
                        "rank": 450,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/bhaskar.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "tabelog.com",
                        "rank": 452,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/tabelog.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "lowes.com",
                        "rank": 453,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/lowes.com"
                    },
                    {
                        "url": "shopclues.com",
                        "rank": 457,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/shopclues.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "gearbest.com",
                        "rank": 466,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/gearbest.com",
                        "lib": [
                            "$.ui",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "meetup.com",
                        "rank": 469,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/meetup.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "wunderground.com",
                        "rank": 470,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/wunderground.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "urdupoint.com",
                        "rank": 474,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/urdupoint.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "bleacherreport.com",
                        "rank": 475,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/bleacherreport.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "ero-advertising.com",
                        "rank": 499,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ero-advertising.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "freepik.com",
                        "rank": 511,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/freepik.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "udemy.com",
                        "rank": 512,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/udemy.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "zippyshare.com",
                        "rank": 515,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/zippyshare.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "discovercard.com",
                        "rank": 516,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/discovercard.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "nba.com",
                        "rank": 520,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/nba.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "trulia.com",
                        "rank": 532,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/trulia.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "xda-developers.com",
                        "rank": 543,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/xda-developers.com",
                        "lib": [
                            "$.ui",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "costco.com",
                        "rank": 544,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/costco.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "kickstarter.com",
                        "rank": 545,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/kickstarter.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "seesaa.net",
                        "rank": 546,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/seesaa.net",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "wayfair.com",
                        "rank": 553,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/wayfair.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "gamefaqs.com",
                        "rank": 559,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/gamefaqs.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    }
                ],
                "short": [
                    {
                        "url": "pinterest.com",
                        "rank": 31,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/pinterest.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "paypal.com",
                        "rank": 38,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/paypal.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "imgur.com",
                        "rank": 47,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/imgur.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "imdb.com",
                        "rank": 53,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/imdb.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "rakuten.co.jp",
                        "rank": 64,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/rakuten.co.jp",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "pornhub.com",
                        "rank": 65,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/pornhub.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "tianya.cn",
                        "rank": 69,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/tianya.cn",
                        "lib": [
                            "$.ui",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "kat.cr",
                        "rank": 76,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/kat.cr",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "dropbox.com",
                        "rank": 87,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/dropbox.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "jd.com",
                        "rank": 90,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/jd.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "twitch.tv",
                        "rank": 121,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/twitch.tv",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "bankofamerica.com",
                        "rank": 127,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/bankofamerica.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "adf.ly",
                        "rank": 132,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/adf.ly",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "huffingtonpost.com",
                        "rank": 134,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/huffingtonpost.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "bilibili.com",
                        "rank": 142,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/bilibili.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "globo.com",
                        "rank": 150,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/globo.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "intuit.com",
                        "rank": 166,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/intuit.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "naver.jp",
                        "rank": 169,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/naver.jp",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "snapdeal.com",
                        "rank": 171,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/snapdeal.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "taringa.net",
                        "rank": 172,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/taringa.net",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "redtube.com",
                        "rank": 181,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/redtube.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "hclips.com",
                        "rank": 196,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/hclips.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "9gag.com",
                        "rank": 201,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/9gag.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "daum.net",
                        "rank": 205,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/daum.net",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "target.com",
                        "rank": 206,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/target.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "zol.com.cn",
                        "rank": 208,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/zol.com.cn",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "bestbuy.com",
                        "rank": 227,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/bestbuy.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "livejournal.com",
                        "rank": 232,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/livejournal.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "nametests.com",
                        "rank": 238,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/nametests.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "deviantart.com",
                        "rank": 251,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/deviantart.com",
                        "lib": [
                            "$.ui"
                        ]
                    },
                    {
                        "url": "businessinsider.com",
                        "rank": 252,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/businessinsider.com",
                        "lib": [
                            "$.ui",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "slickdeals.net",
                        "rank": 267,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/slickdeals.net",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "weebly.com",
                        "rank": 273,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/weebly.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "xuite.net",
                        "rank": 275,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/xuite.net",
                        "lib": [
                            "$.ui",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "ruten.com.tw",
                        "rank": 279,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ruten.com.tw",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "t-online.de",
                        "rank": 282,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/t-online.de",
                        "lib": [
                            "$.ui"
                        ]
                    },
                    {
                        "url": "pandora.com",
                        "rank": 284,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/pandora.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "popcash.net",
                        "rank": 290,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/popcash.net",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "liputan6.com",
                        "rank": 292,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/liputan6.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "1905.com",
                        "rank": 297,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/1905.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "kaskus.co.id",
                        "rank": 303,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/kaskus.co.id",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "ups.com",
                        "rank": 305,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/ups.com",
                        "lib": [
                            "$.ui",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "eksisozluk.com",
                        "rank": 309,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/eksisozluk.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "hp.com",
                        "rank": 313,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/hp.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "telegraph.co.uk",
                        "rank": 318,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/telegraph.co.uk",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "sourceforge.net",
                        "rank": 321,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sourceforge.net",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "sberbank.ru",
                        "rank": 328,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sberbank.ru"
                    },
                    {
                        "url": "mashable.com",
                        "rank": 329,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/mashable.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "thesaurus.com",
                        "rank": 330,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/thesaurus.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "mercadolivre.com.br",
                        "rank": 335,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/mercadolivre.com.br",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "doublepimp.com",
                        "rank": 341,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/doublepimp.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "ltn.com.tw",
                        "rank": 342,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ltn.com.tw",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "zendesk.com",
                        "rank": 354,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/zendesk.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "att.com",
                        "rank": 357,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/att.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "sabah.com.tr",
                        "rank": 359,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sabah.com.tr",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "livejasmin.com",
                        "rank": 366,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/livejasmin.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "sahibinden.com",
                        "rank": 369,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sahibinden.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "hurriyet.com.tr",
                        "rank": 370,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/hurriyet.com.tr"
                    },
                    {
                        "url": "kinogo.co",
                        "rank": 373,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/kinogo.co",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "pinimg.com",
                        "rank": 378,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/pinimg.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "giphy.com",
                        "rank": 379,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/giphy.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "irctc.co.in",
                        "rank": 386,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/irctc.co.in",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "macys.com",
                        "rank": 390,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/macys.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "blackboard.com",
                        "rank": 392,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/blackboard.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "varzesh3.com",
                        "rank": 397,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/varzesh3.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "kinopoisk.ru",
                        "rank": 401,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/kinopoisk.ru",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "oracle.com",
                        "rank": 403,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/oracle.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "taleo.net",
                        "rank": 408,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/taleo.net",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "citi.com",
                        "rank": 410,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/citi.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    }
                ]
            },
            "builtWith": true,
            "description": "jQuery UI is a curated set of user interface interactions, effects, widgets, and themes built on top of the jQuery JavaScript Library. Whether you're building highly interactive web applications or you just need to add a date picker to a form control, jQuery UI is the perfect choice.",
            "dist": "https://code.jquery.com/ui/jquery-ui-git.js",
            "currentWork": [
                "Adding new option / feature to all widgets \"classes\" which allows customization of the classes on any element in a widget",
                "Adding checkboxradio widget",
                "Adding controlgroup widget",
                "Removing portions of jQuery core dependency",
                "Improving testing",
                "Converting demos to use AMD"
            ],
            "logo": "images/ui.svg"
        },
        "hammer.js": {
            "name": "Hammer.js",
            "repoName": "[ 'hammer.js' ]",
            "role": "Project Lead / Organization Owner",
            "links": {
                "github": "https://github.com/hammerjs/hammer.js",
                "issues": "https://github.com/hammerjs/hammer.js/issues",
                "website": "http://hammerjs.github.io/",
                "api": "http://hammerjs.github.io/getting-started/",
                "irc": "Comming Soon",
                "demos": "http://hammerjs.github.io/"
            },
            "libScore": {
                "name": "Hammer",
                "sites": [
                    {
                        "url": "xhamster.com",
                        "rank": 92,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/xhamster.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "nytimes.com",
                        "rank": 96,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/nytimes.com",
                        "lib": [
                            "Hammer",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "dailymail.co.uk",
                        "rank": 135,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/dailymail.co.uk",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "walmart.com",
                        "rank": 144,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/walmart.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "washingtonpost.com",
                        "rank": 182,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/washingtonpost.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "rambler.ru",
                        "rank": 259,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/rambler.ru",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "capitalone.com",
                        "rank": 269,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/capitalone.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "homedepot.com",
                        "rank": 270,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/homedepot.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "sberbank.ru",
                        "rank": 328,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sberbank.ru",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "hurriyet.com.tr",
                        "rank": 370,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/hurriyet.com.tr",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "buzzlie.com",
                        "rank": 391,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/buzzlie.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "expedia.com",
                        "rank": 428,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/expedia.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "playstation.com",
                        "rank": 436,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/playstation.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "lowes.com",
                        "rank": 453,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/lowes.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "repubblica.it",
                        "rank": 481,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/repubblica.it",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "free.fr",
                        "rank": 487,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/free.fr",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "theverge.com",
                        "rank": 510,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/theverge.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "jimdo.com",
                        "rank": 556,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/jimdo.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "independent.co.uk",
                        "rank": 561,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/independent.co.uk",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "ensonhaber.com",
                        "rank": 630,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ensonhaber.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "asana.com",
                        "rank": 663,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/asana.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "twoo.com",
                        "rank": 686,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/twoo.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "cnbc.com",
                        "rank": 689,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/cnbc.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "sears.com",
                        "rank": 720,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/sears.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "eonline.com",
                        "rank": 731,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/eonline.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "bodybuilding.com",
                        "rank": 735,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/bodybuilding.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "wattpad.com",
                        "rank": 767,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/wattpad.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "webex.com",
                        "rank": 779,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/webex.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "thedailybeast.com",
                        "rank": 824,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/thedailybeast.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "wired.com",
                        "rank": 828,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/wired.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "vox.com",
                        "rank": 872,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/vox.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "whitepages.com",
                        "rank": 876,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/whitepages.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "android.com",
                        "rank": 881,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/android.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "hilton.com",
                        "rank": 885,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/hilton.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "lefigaro.fr",
                        "rank": 957,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/lefigaro.fr",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "usnews.com",
                        "rank": 1037,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/usnews.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "gumtree.com",
                        "rank": 1039,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/gumtree.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "lloydsbank.co.uk",
                        "rank": 1119,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/lloydsbank.co.uk",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "jw.org",
                        "rank": 1158,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/jw.org",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "samsclub.com",
                        "rank": 1159,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/samsclub.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "foxsports.com",
                        "rank": 1193,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/foxsports.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "littlethings.com",
                        "rank": 1201,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/littlethings.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "mail.com",
                        "rank": 1294,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/mail.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "postbank.de",
                        "rank": 1362,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/postbank.de",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "msnbc.com",
                        "rank": 1364,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/msnbc.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "airasia.com",
                        "rank": 1418,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/airasia.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "linternaute.com",
                        "rank": 1420,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/linternaute.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "lightinthebox.com",
                        "rank": 1421,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/lightinthebox.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "ravelry.com",
                        "rank": 1431,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ravelry.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "greatergood.com",
                        "rank": 1461,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/greatergood.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "orbitz.com",
                        "rank": 1515,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/orbitz.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "nbc.com",
                        "rank": 1537,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/nbc.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "ubi.com",
                        "rank": 1584,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ubi.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "bsnl.in",
                        "rank": 1602,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/bsnl.in",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "worldstarhiphop.com",
                        "rank": 1620,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/worldstarhiphop.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "thepennyhoarder.com",
                        "rank": 1623,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/thepennyhoarder.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "careerbuilder.com",
                        "rank": 1647,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/careerbuilder.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "infobae.com",
                        "rank": 1672,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/infobae.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "travelocity.com",
                        "rank": 1709,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/travelocity.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "kaspersky.com",
                        "rank": 1720,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/kaspersky.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "nu.nl",
                        "rank": 1722,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/nu.nl",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "cosmopolitan.com",
                        "rank": 1726,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/cosmopolitan.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "vagalume.com.br",
                        "rank": 1734,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/vagalume.com.br",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "goodhousekeeping.com",
                        "rank": 1746,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/goodhousekeeping.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "esquire.com",
                        "rank": 1770,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/esquire.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "easyjet.com",
                        "rank": 1784,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/easyjet.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "kmart.com",
                        "rank": 1902,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/kmart.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "elconfidencial.com",
                        "rank": 1915,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/elconfidencial.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "rappler.com",
                        "rank": 1934,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/rappler.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "tilestwra.com",
                        "rank": 1949,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/tilestwra.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "trademe.co.nz",
                        "rank": 1954,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/trademe.co.nz",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "epicurious.com",
                        "rank": 1963,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/epicurious.com",
                        "lib": [
                            "Hammer",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "urbanoutfitters.com",
                        "rank": 2006,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/urbanoutfitters.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "zaman.com.tr",
                        "rank": 2023,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/zaman.com.tr",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "sap.com",
                        "rank": 2026,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sap.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "journaldesfemmes.com",
                        "rank": 2048,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/journaldesfemmes.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "dickssportinggoods.com",
                        "rank": 2074,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/dickssportinggoods.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "history.com",
                        "rank": 2094,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/history.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "sonyentertainmentnetwork.com",
                        "rank": 2129,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sonyentertainmentnetwork.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "christian-dogma.com",
                        "rank": 2163,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/christian-dogma.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "charter.net",
                        "rank": 2172,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/charter.net",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "gilt.com",
                        "rank": 2179,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/gilt.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "ford.com",
                        "rank": 2185,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ford.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "videoyoum7.com",
                        "rank": 2194,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/videoyoum7.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "redbubble.com",
                        "rank": 2238,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/redbubble.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "vip.com",
                        "rank": 2305,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/vip.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "delfi.lt",
                        "rank": 2336,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/delfi.lt",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "deutsche-bank.de",
                        "rank": 2367,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/deutsche-bank.de",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "sonymobile.com",
                        "rank": 2411,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sonymobile.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "extra.com.br",
                        "rank": 2431,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/extra.com.br",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "letras.mus.br",
                        "rank": 2434,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/letras.mus.br",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "polygon.com",
                        "rank": 2445,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/polygon.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "elle.com",
                        "rank": 2464,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/elle.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "tass.ru",
                        "rank": 2493,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/tass.ru",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "sheknows.com",
                        "rank": 2497,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sheknows.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "allmusic.com",
                        "rank": 2533,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/allmusic.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "mediamarkt.de",
                        "rank": 2552,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/mediamarkt.de",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "sbrf.ru",
                        "rank": 2583,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sbrf.ru",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "boursorama.com",
                        "rank": 2617,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/boursorama.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "sony.com",
                        "rank": 2644,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sony.com",
                        "lib": [
                            "Hammer",
                            "$.mobile"
                        ]
                    }
                ],
                "short": [
                    {
                        "url": "xhamster.com",
                        "rank": 92,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/xhamster.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "nytimes.com",
                        "rank": 96,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/nytimes.com",
                        "lib": [
                            "Hammer",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "dailymail.co.uk",
                        "rank": 135,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/dailymail.co.uk",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "walmart.com",
                        "rank": 144,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/walmart.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "washingtonpost.com",
                        "rank": 182,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/washingtonpost.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "rambler.ru",
                        "rank": 259,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/rambler.ru",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "capitalone.com",
                        "rank": 269,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/capitalone.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "homedepot.com",
                        "rank": 270,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/homedepot.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "sberbank.ru",
                        "rank": 328,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sberbank.ru",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "hurriyet.com.tr",
                        "rank": 370,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/hurriyet.com.tr",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "buzzlie.com",
                        "rank": 391,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/buzzlie.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "expedia.com",
                        "rank": 428,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/expedia.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "playstation.com",
                        "rank": 436,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/playstation.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "lowes.com",
                        "rank": 453,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/lowes.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "repubblica.it",
                        "rank": 481,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/repubblica.it",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "free.fr",
                        "rank": 487,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/free.fr",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "theverge.com",
                        "rank": 510,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/theverge.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "jimdo.com",
                        "rank": 556,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/jimdo.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "independent.co.uk",
                        "rank": 561,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/independent.co.uk",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "ensonhaber.com",
                        "rank": 630,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ensonhaber.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "asana.com",
                        "rank": 663,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/asana.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "twoo.com",
                        "rank": 686,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/twoo.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "cnbc.com",
                        "rank": 689,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/cnbc.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "sears.com",
                        "rank": 720,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/sears.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "eonline.com",
                        "rank": 731,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/eonline.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "bodybuilding.com",
                        "rank": 735,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/bodybuilding.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "wattpad.com",
                        "rank": 767,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/wattpad.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "webex.com",
                        "rank": 779,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/webex.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "thedailybeast.com",
                        "rank": 824,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/thedailybeast.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "wired.com",
                        "rank": 828,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/wired.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "vox.com",
                        "rank": 872,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/vox.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "whitepages.com",
                        "rank": 876,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/whitepages.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "android.com",
                        "rank": 881,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/android.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "hilton.com",
                        "rank": 885,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/hilton.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "lefigaro.fr",
                        "rank": 957,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/lefigaro.fr",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "usnews.com",
                        "rank": 1037,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/usnews.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "gumtree.com",
                        "rank": 1039,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/gumtree.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "lloydsbank.co.uk",
                        "rank": 1119,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/lloydsbank.co.uk",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "jw.org",
                        "rank": 1158,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/jw.org",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "samsclub.com",
                        "rank": 1159,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/samsclub.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "foxsports.com",
                        "rank": 1193,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/foxsports.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "littlethings.com",
                        "rank": 1201,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/littlethings.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "mail.com",
                        "rank": 1294,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/mail.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "postbank.de",
                        "rank": 1362,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/postbank.de",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "msnbc.com",
                        "rank": 1364,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/msnbc.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "airasia.com",
                        "rank": 1418,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/airasia.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "linternaute.com",
                        "rank": 1420,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/linternaute.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "lightinthebox.com",
                        "rank": 1421,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/lightinthebox.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "ravelry.com",
                        "rank": 1431,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ravelry.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "greatergood.com",
                        "rank": 1461,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/greatergood.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "orbitz.com",
                        "rank": 1515,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/orbitz.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "nbc.com",
                        "rank": 1537,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/nbc.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "ubi.com",
                        "rank": 1584,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ubi.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "bsnl.in",
                        "rank": 1602,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/bsnl.in",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "worldstarhiphop.com",
                        "rank": 1620,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/worldstarhiphop.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "thepennyhoarder.com",
                        "rank": 1623,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/thepennyhoarder.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "careerbuilder.com",
                        "rank": 1647,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/careerbuilder.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "infobae.com",
                        "rank": 1672,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/infobae.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "travelocity.com",
                        "rank": 1709,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/travelocity.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "kaspersky.com",
                        "rank": 1720,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/kaspersky.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "nu.nl",
                        "rank": 1722,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/nu.nl",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "cosmopolitan.com",
                        "rank": 1726,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/cosmopolitan.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "vagalume.com.br",
                        "rank": 1734,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/vagalume.com.br",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "goodhousekeeping.com",
                        "rank": 1746,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/goodhousekeeping.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "esquire.com",
                        "rank": 1770,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/esquire.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "easyjet.com",
                        "rank": 1784,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/easyjet.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "kmart.com",
                        "rank": 1902,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/kmart.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "elconfidencial.com",
                        "rank": 1915,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/elconfidencial.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "rappler.com",
                        "rank": 1934,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/rappler.com",
                        "lib": [
                            "Hammer"
                        ]
                    }
                ]
            },
            "builtWith": true,
            "description": "Hammer is a open-source library that can recognize gestures made by touch, mouse and pointerEvents. It doesn't have any dependencies, and it's small, only 3.96 kB minified + gzipped!",
            "dist": "https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.4/hammer.js",
            "currentWork": [
                "Building Team",
                "Setting up organization",
                "Tranisition project from personal project to a community project",
                "Converting to a modular build",
                "Triage"
            ],
            "logo": "https://avatars2.githubusercontent.com/u/7997161?v=3&s=200"
        },
        "css-chassis": {
            "name": "Chassis",
            "role": "Co-Creator / Team Member",
            "repoName": "[ 'css-chassis'' ]",
            "links": {
                "github": "https://github.com/jquery/css-chassis",
                "issues": "https://github.com/jquery/css-chassis/issues",
                "website": "http://css-chassis.com",
                "api": "Coming Soon",
                "demos": "http://view.css-chassis.com/master/demos",
                "irc": "#css-chassis"
            },
            "description": "Chassis is an attempt at creating open standards designed for CSS libraries, JavaScript UI libraries, and web developers in general. This project will define standards for markup and class names for common widgets and patterns, as well as an implementation of those standards.",
            "logo": "images/chassis.svg",
            "currentWork": [
                "Adding and improving automated performance testing for Chassis",
                "Automated component comparison for testing the relative performace of componenets from different libraries",
                "Developing node based build system for use in custom automated builds in other projects"
            ]
        },
        "pep": {
            "name": "PEP: PointerEvents Polyfill",
            "role": "Team Member",
            "repoName": ".pep",
            "links": {
                "github": "https://github.com/jquery/pep",
                "issues": "https://github.com/jquery/pep/issues",
                "demos": "Coming Soon",
                "api": "https://github.com/jquery/pep",
                "irc": "#pep"
            },
            "description": "PointerEvents Polyfill: a unified event system for the web platform http://www.w3.org/TR/pointerevents/",
            "dist": "http://code.jquery.com/pep/0.3.0/pep.js",
            "logo": "images/pep.png",
            "currentWork": [
                "Updating code to new style guide",
                "Issue triage",
                "Improving automated testing"
            ]
        },
        "jquery-infrastructure": {
            "name": "jQuery Infrastructure",
            "repoName": "[ 'jquery-infrastructure' ]",
            "role": "Team Member",
            "links": {
                "github": "Private",
                "issues": "Private",
                "demos": "none",
                "api": "none",
                "website": "http://jquery.org",
                "irc": "#jquery-infrastructure"
            },
            "description": "Team responsible for all infrastructure of for the jQuery Foundations projects",
            "logo": "images/infrastructure.svg",
            "currentWork": [
                "Maintaining jQuery UI and Mobile infrastructure",
                "Setting up new infrastructure for Chassis Project",
                "Working on automated testing infrastructure"
            ]
        },
        "jquery-content": {
            "name": "jQuery Content",
            "role": "Team Member",
            "repoName": "[ 'jquery-content' ]",
            "links": {
                "github": "https://github.com/jquery/jquery-content",
                "issues": "https://github.com/jquery/jquery-content/issues",
                "website": "http://jquery.org",
                "demos": "none",
                "api": "none",
                "irc": "#jquery-content"
            },
            "description": "Team responsible for all content of for the jQuery Foundations websites",
            "logo": "images/content.png",
            "currentWork": [
                "Adding automated nightly testing of all websites using spider.js",
                "Creating on HTML validation tools"
            ]
        },
        "spider.js": {
            "name": "Spider.js",
            "role": "Creator",
            "repoName": "[ 'spider.js' ]",
            "links": {
                "github": "https://github.com/arschmitz/spider.js",
                "issues": "https://github.com/arschmitz/spider.js/issues",
                "api": "https://github.com/arschmitz/spider.js/",
                "demos": "none",
                "irc": "Ping me arschmitz "
            },
            "description": "A node module / CLI based on casper.js for crawling and checking websites for dead links, unnessasarry redirects, resource load errors and script erros",
            "dist": "https://raw.githubusercontent.com/arschmitz/spider.js/master/lib/tests.js",
            "logo": "images/spider-js.svg",
            "currentWork": [
                "Preparing 1.0 release",
                "Adding Slimer.js support",
                "Improving error output"
            ]
        },
        "jqueryui-bootstrap-adapter": {
            "name": "jQuery UI Bootstrap Adapter",
            "role": "Creator",
            "repoName": "[ 'jqueryui-bootstrap-adapter' ]",
            "links": {
                "github": "https://github.com/arschmitz/jqueryui-bootstrap-adapter",
                "issues": "https://github.com/arschmitz/jqueryui-bootstrap-adapter/issues",
                "website": "https://rawgit.com/arschmitz/jqueryui-bootstrap-adapter/master/index.html",
                "demos": "https://rawgit.com/arschmitz/jqueryui-bootstrap-adapter/master/index.html",
                "irc": "Ping me arschmitz ",
                "api": "https://rawgit.com/arschmitz/jqueryui-bootstrap-adapter/master/index.html"
            },
            "description": "A set of default options and customizations for jQuery UI to use twitter bootstrap css",
            "logo": "images/bootstrapAdapter.svg",
            "currentWork": [
                "Porting jQuery Mobile as well",
                "Adding components without a direct coralary in both libraries",
                "Preparing 1.0 to conincide with jQuery UI 1.12 Release"
            ]
        }
    },
    "rants": {
        "professional": {
            "name": "professional",
            "title": "When i became a professional developer",
            "definition": {
                "word": "pro·fes·sion·al",
                "pronunciation": "prəˈfeSH(ə)n(ə)l/",
                "partOfSpeech": "adjective",
                "shortDefinition": "(of a person) engaged in a specified activity as one's main paid occupation rather than as a pastime.",
                "definition": [
                    "(of a person) engaged in a specified activity as one's main paid occupation rather than as a pastime."
                ]
            },
            "quote": {
                "body": "Who is a professional? A professional is someone who has a combination of competence, confidence and belief. A water diviner is a professional. A traditional midwife is a professional. A traditional bone setter is a professional. These are professionals all over the world. You find them in any inaccessible village around the world.",
                "sitation": "Sanjit \"Bunker\" Roy, Founder the Barefoot College"
            },
            "rant": [
                "I started making websites very very early on. My mother was a graphic artist and my step father was a network administrator. I learned very young to do graphics arts from my mom. She worked in the packaging industry and worked from home. Because of this i had access to the full suites of professional graphics tools like freehand, illustrator, and photoshop. My earliest ventures into graphics were designing stickers and t-shirts for friends.",
                "We got the internet as soon as there was service available in the rural area in which we lived. I remember the first time i used the internet it was purely text based in a DOS like prompt on the 386 my step father had just built. It was not long before i was buying books and teaching myself how to write HTML. Meanwhile I had also started to teach myself QBasic with a friend of mine.",
                "Websites at this time lacked a lot though in the way of interactivity and the wow factor a ~10 year old wanted. I remember all this changing when the first version of flash came out. IT meant I could do all the cool interactive things I had previously only dreamed about. I immediately dove headfirst into making web pages and animations with the awesome new software. It was not long after this i made my first webpage for money. It was a website for a my art teacher. I remember spending night after night trying to get everything just right.",
                "I continued making webpages for school assignments random people who happened to ask, and for myself just for fun for many years. In highschool I learned C++ and wrote it for the remainder of my time in highschool. I decided to go to college for physics, with minors in chemistry and math. At this point  Web Development, and or programming as a career never even really crossed my mind. To me these were things i did for fun or to get something done but not a career something i could see myself doing everyday long term.",
                "It was still a pastime…",
                "To pay my way through college i became a chef and a baker. After college with no real job prospects I continued on this path while working part time with a small graphics house doing commercial graphics ( a LOT of bread bags ). I did all the web development here but it was just small boring static sites and didn’t really interest me. It was still really just something to do and earn some extra money though. After my restaurant closed i tried to go full time with the graphics and web dev but it didn’t last long before the economy turned and the company could no longer afford my services.",
                "At this point i took a job as a shuttle and parts dispatcher with a local chain of car dealerships just to get by. When i started here it was a pen and paper job. The only thing that was ever done to keep track was a photocopied piece of graph paper. With a whole lot of time on my hands i decided to improve processes and made a spreadsheet with lots of macros and built in features to track and keep records of all deliveries and drivers. I also sat near the body shop which did vinyl car graphics and signs. To help pass the time i started to work helping designing the graphics. It was not long before all of this work got the attention of the GM of the company. After only 3 months on the job i received a message from the GM that he wanted to talk to me. He was not happy with the company's websites and wanted someone to lead the company's internet strategy and based on my work so far and previous experience he wanted to know if i would be interested in the position. ",
                "When i started this new position it was just to maintain existing sites through a series of builders. However as i talked to the GM and other managers it became clear their needs were much more substantial. For the first time i needed to build real products and real customer facing websites that actually required more than just basic HTML and CSS they needed CMS, inventory management, sales integration and much more. As i began to work on and deploy these new products i was always looking for the next thing to improve and work on. As i worked i learned to love the technologies i was using unlike C++ which constituted the bulk of my real programming experience, PHP was an absolutely joy to program in. I loved how i could quickly and easily make actual useful websites.  As interactivity became more important i even learned to embrace JavaScript which i had disdained and avoided when possible for so many years. It was at this point which i realized i had finally found my true calling and what i loved and wanted to do as my paid occupation. It just happened i had been doing it all along.",
                "This is when I became a professional."
            ]
        },
        "accessabile": {
            "definition": {
                "word": "ac·ces·si·ble",
                "pronunciation": "ăk-sĕs′ə-bəl",
                "partOfSpeech": "adjective",
                "shortDefinition": "Capable of being used or seen",
                "fullDefinition": [
                    "Providing access",
                    "Capable of being reached",
                    "Capable of being used or seen",
                    "Capable of being understood or appreciated"
                ]
            },
            "name": "accessabile",
            "title": "A moment when i got to see how my work on accessability helps real people",
            "quote": {
                "body": "“The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.”",
                "sitation": "Tim Berners-Lee, W3C Director and inventor of the World Wide Web"
            },
            "rant": [
                "I became passionate about accessibility early on, believing that everyone deserves equal access to the internet and the wonderful things, and wealth of information which it has to offer. However for me there was a turning point where it went from something i was conscious of to something i preached about.",
                "I was in washington D.C. for a summit on mobile accessibility representing the jQuery Foundation. After the conference was over I was back at my hotel enjoying the hot tub after swimming some laps, when a couple asked if i minded if they joined me. I said no and they began some small talk about how the husband was there for a banking seminar of some sort, and how she was an accountant and was just along for the trip. I told them about how i was a developer that worked mostly on mobile and i was there for an accessibility conference. This immediately peaked her interest.",
                "She began to tell me how she started losing  her sight in her 20's. She told me how she still had some vision, so she could walk around and get by fine. She then described her difficulties seeing computer screens, and how she has had needed to learn to use a screen screen reader and rely on the keyboard. She also told me how she was stuck using an old cell phone with physical buttons and no features, because of her sight she needed to be able to memorize the buttons. She then asked me about if i knew any good options for her.",
                "I started to tell her about the iPhone and how it had a built in screen reader, Voiceover, and how part of my job and why i was there, was to work with experts, on ways to make websites especially mobile ones more accessible. She said she was familiar with voiceover for mac but had no idea they had anything like that for phones. In Fact her husband already had an iPhone with them.She got out of the pool dried off and ran upstairs to get their phone asking if i could meet them back in the lobby to show her how to use voiceover on the iPhone. I spent about 30 minutes with her showing her the basics of voice over on the iPhone.",
                "I will forever remember the look on her face when she used her husband's iPhone for the first time and realized she could have and use a smartphone too. After this she told me how she could not wait to get home and buy a new phone, and asked if she could have my email address if she had an questions in the future.",
                "That was 4 years ago, I only ever received one email from her a week later thanking me again for showing her how to use the iPhone and telling me she had already bought her own and could never thank me enough."
            ]
        },
        "hammer": {
            "definition": {
                "word": "hammer",
                "pronunciation": "[ham-er]",
                "partOfSpeech": "verb",
                "shortDefinition": "To form, construct, or make with or as if with a hammer; build by repeated, vigorous, or strenuous effort (often followed by out or together):",
                "fullDefinition": [
                    "to shape or ornament (metal or a metal object) by controlled and repeated blows of a hammer; beat out",
                    "to form, construct, or make with or as if with a hammer; build by repeated, vigorous, or strenuous effort (often followed by out or together)",
                    "to produce with or by force (often followed by out)",
                    "to pound or hit forcefully"
                ]
            },
            "quote": {
                "body": "A worker may be the hammer's master, but the hammer still prevails. A tool knows exactly how it is meant to be handled, while the user of the tool can only have an approximate idea.",
                "sitation": "Milan Kundera, Writer"
            },
            "name": "hammer",
            "title": "Hammering on open source",
            "rant": [
                "Through my work leading and working on jQuery Mobile as well as jQuery UI I have a big investment in supporting things like touch devices and gestures. As a result of this i have followed the evolutions of the touch and pointer events specs very closely and work closely with several of the members of these working groups giving feedback as well as with browser vendors. It was through all this work by myself and others in the jQuery foundation that we can to adopt the Polymer Pointer Events polyfill and create PEP the new pointer events polyfill from the jQuery Foundation in cooperation with people from Microsoft, Mozillas, and the Dojo Foundation and initial project contribution from google.",
                "Anyway the point of all of this is that i follow any libraries / developments in this space very closely as a result i have been aware of the Hammer.js library for quite some time. It a great really small library for adding cross browser gesture support to any webpage or hybrid app. During the development process for jQuery Mobile  1.5 we began the process of working on PEP and switching to use just pointer events ( this is not a part of 1.5 to be clear we just started ) as a result i also began thinking about adopting a more robust 3rd party gesture lib to replace jQuery Mobile's limited gesture support. This inevitably brought me to start looking at Hammer.js.",
                "At this exact same time the creator of Hammer.js got a new job and no longer had any time at all to maintain the project and decided ( completely unaware that i was looking at hammer already ) to reach out to me about the future of Hammer.js and if i would be interested in taking the project over. Due to his limited time we slowly continued these talks over the course of 6 months we worked out a plan to move forward and recently i took over leading the Hammer.js project.",
                "In taking over the project i am moving this to be a truly community led project and building a team of interested contributors. For open source projects to survive and thrive they need a community of interested contributors to lead the charge. When a project hinges on a single person it can never be viable long term. The nature of open source work and that its is generally done in peoples free time and without compensation. This fact means that when a project hinges on a single person any life change can mean the end of a great project.",
                "This is exactly what almost happened with Hammer.js when we finally worked out a plan there had not been a commit on the project in 8 months and the community was starting to walk away from a great project they loved and used, because the \"project was dead”, only the original creator had any access to close issues or land PRs and he was no where to be found. Thankfully for Hammer.js it was not too late and within 24 hours of my posting looking for team members we have had nearly a dozen offers of help! The future is looking very promising for Hammer.js with a new team leading development ( and hope that the original creator will soon have some more time to contribute again as well ).",
                "To all the creators and leaders of open source projects out there. Its important if you have a growing open source project to make sure that the project will survive in your absence, when you have contributors that hand around talk to them and form a team. It does not need to be anything formal, just a way of ensuring continued development is possible without you. We all have a responsibility to our projects and the wonderful open source community that supports them to make sure they can have a future."
            ]
        }
    },
    "resume": {
        "moniker": "AS",
        "contact": {
            "website": "http://arschmitz.me",
            "email": "arschmitz@gmail.com",
            "twitter": "alexrschmitz",
            "github": "arschmitz",
            "irc": "arschmitz",
            "linkedIn": "https://www.linkedin.com/in/arschmitz"
        },
        "name": {
            "initials": "AS",
            "first": "Alexander",
            "last": "Schmitz",
            "middle": "Ryan",
            "nick": "Alex"
        },
        "talks": {
            "asia": {
                "key": "asia",
                "basic": {
                    "eventName": "jQuery Asia",
                    "date": "November 2012",
                    "talkTitle": "jQuery Mobile: Common Pitfalls and Gotchas",
                    "slides": "http://presentations.arschmitz.me/pitfalls/#/",
                    "website": "https://www.facebook.com/JQueryConferenceAsia"
                },
                "video": "TXOFOqsrVuU",
                "description": "jQuery Mobile makes developing mobile apps and sites easy, semantic and familiar. However those familiar with typical desktop patterns may find themselves banging their heads against the wall when something \"simple\" doesn't work as expected. This session will go through some of the most common problems and pitfalls facing those jumping into jQuery Mobile. Areas covered will include injecting and enhancing dynamic content, working with enhanced form elements, refactoring for pageinit vs $(document).ready(), and the navigation model / page events."
            },
            "austin": {
                "key": "austin",
                "basic": {
                    "eventName": "jQuery Austin",
                    "date": "September 2013",
                    "website": "http://events.jquery.org/2013/austin/",
                    "talkTitle": "jQuery Mobile: Optimizing Performance",
                    "slides": "http://www.slideshare.net/AlexanderSchmitz/austin-26252266"
                },
                "video": "bZTOV-55ivM",
                "description": "Performance is a major concern on mobile platforms. jQuery Mobile 1.4 adds a number of performance related options and features to help you speed up your mobile site along with a new theme designed to make your site render as fast as possible. Learn Tips and tricks to make your site as fast as it can. Covered in this talk will be not only framework optimizations but server side tricks to minimize transfer but page initialization times."
            },
            "sandiego": {
                "key": "sandiego",
                "basic": {
                    "eventName": "jQuery San Diego",
                    "date": "February 2014",
                    "website": "http://events.jquery.org/2014/san-diego/",
                    "talkTitle": "jQuery Mobile: Optimizing Performance",
                    "slides": "http://www.slideshare.net/AlexanderSchmitz/austin-26252266"
                },
                "description": "Performance is a major concern on mobile platforms. jQuery Mobile 1.4 adds a number of performance related options and features to help you speed up your mobile site along with a new theme designed to make your site render as fast as possible. Learn Tips and tricks to make your site as fast as it can. Covered in this talk will be not only framework optimizations but server side tricks to minimize transfer but page initialization times.",
                "video": "BNS4u086Lg8"
            },
            "europe": {
                "key": "europe",
                "basic": {
                    "eventName": "jQuery Europe",
                    "date": "March 2014",
                    "website": "http://www.gentics.com/jquery-eu-2014/page/2014/eu.html",
                    "talkTitle": "jQuery Mobile: Optimizing Performance V2",
                    "slides": "http://presentations.arschmitz.me/mobile-performance/"
                },
                "video": "bZTOV-55ivM",
                "description": "Performance is a major concern on mobile platforms. jQuery Mobile 1.4 adds a number of performance related options and features to help you speed up your mobile site along with a new theme designed to make your site render as fast as possible. Learn Tips and tricks to make your site as fast as it can. Covered in this talk will be not only framework optimizations but server side tricks to minimize transfer but page initialization times."
            },
            "amsterdam": {
                "key": "amsterdam",
                "basic": {
                    "date": "November 2013",
                    "eventName": "Booking.com - Amsterdam",
                    "slides": "http://www.slideshare.net/AlexanderSchmitz/austin-26252266",
                    "website": false,
                    "talkTitle": "jQuery Mobile: Optimizing Performance"
                },
                "description": "Performance is a major concern on mobile platforms. jQuery Mobile 1.4 adds a number of performance related options and features to help you speed up your mobile site along with a new theme designed to make your site render as fast as possible. Learn Tips and tricks to make your site as fast as it can. Covered in this talk will be not only framework optimizations but server side tricks to minimize transfer but page initialization times.",
                "video": "bZTOV-55ivM"
            },
            "chicago": {
                "key": "chicago",
                "basic": {
                    "eventName": "jQuery Chicago",
                    "date": "September 2014",
                    "website": "http://events.jquery.org/2014/chicago/",
                    "talkTitle": "The Path to 2.0",
                    "slides": "http://presentations.arschmitz.me/path-to-2.0/"
                },
                "description": "jQuery Mobile 1.5 brings lots of new features and a revamped navigation system, more performance optimization possibilities for advanced users and adoption of more widgets from jQuery UI. Lately though, the question I am asked isn't about what's going to be in 1.6, 1.7, and so on, but about the future of jQuery Mobile after the merger with jQuery UI, and what the future is for the jQuery Mobile project. I’ll go into our current road map and details (as many as are available right now) about the future of jQuery Mobile and what it will look like after 2.0",
                "video": "2qF7kW9SdJQ"
            },
            "pwmWebDevJquery": {
                "key": "pwmWebDevJquery",
                "basic": {
                    "eventName": "Portland Web Developer Meetup",
                    "date": "March 2014",
                    "website": "http://www.portlandwebworks.com/blog/fun-times-webdev-meeting",
                    "talkTitle": "jQuery Foundation overview / Mobile performance",
                    "slides": "http://presentations.arschmitz.me/jquery-foundation/"
                },
                "video": "bZTOV-55ivM",
                "description": "In depth talk on the jQuery Foundation, jQuery Mobile, and mobile performance in general"
            },
            "pwmWebDevNodeCLI": {
                "key": "pwmWebDevJquery",
                "basic": {
                    "eventName": "Portland Web Developer Meetup",
                    "slides": "unavailable",
                    "date": "January 2015",
                    "talkTitle": "Node for the masses",
                    "website": "http://www.meetup.com/me-webdev/events/219614954/"
                },
                "description": "Using node as a CLI on shared hosting / Nodeception",
                "video": "bZTOV-55ivM"
            },
            "jssummit2014": {
                "key": "jssummit2014",
                "basic": {
                    "eventName": "JavaScript Summit 2014",
                    "talkTitle": "The State of jQuery UI & Mobile",
                    "slides": "http://presentations.arschmitz.me/path-to-2.0-ee/",
                    "date": "November 2014",
                    "website": "http://environmentsforhumans.com/2014/javascript-summit/"
                },
                "description": "It's an exciting time for jQuery UI and Mobile. Big changes are coming to jQuery Mobile and jQuery UI this year as the projects start to merge. But what exactly does this mean? What is the future of the two libraries? Which one is going away? Are either going away? These and many others are the type of questions I have been receiving from many people in the community since we started talking about merging the projects in the spring of 2013. I will address these questions and many more, will give you some history behind the changes we are making as well as give some insight into the direction the projects are taking, and how we’re going to make integration with both projects easier for developers.",
                "video": "bZTOV-55ivM"
            },
            "jssummit2015": {
                "key": "jssummit2015",
                "basic": {
                    "eventName": "JavaScript Summit 2015",
                    "date": "February 2015",
                    "website": "http://environmentsforhumans.com/2015/javascript-summit/",
                    "talkTitle": "Chassis: Yet Another CSS Framework",
                    "slides": "https://docs.google.com/presentation/d/1_15yz1uT-oq17ZNsZTczGgwUh-TP15gGO6DFcz_XTJU/edit"
                },
                "description": "Chassis seeks to establish a standard of markup and structure for common components that can be used by both CSS frameworks and JS component libraries to allow for complete interoperability, modularity, and justice, for all. Throughout this process we've been collaborating with a variety of projects and community members including: Topcoat, Zurb Foundation, Cardinal, Famo.us, Yandex, Wordpress, Automattic, 10up, 960grid, Unsemantic, jQuery Mobile, jQuery UI, Intel App Framework, and Cascade CSS, as well as some collaborators from Adobe, Hulu, and Bootstrap.",
                "video": "bZTOV-55ivM"
            },
            "devAndDesign": {
                "key": "devAndDesign",
                "basic": {
                    "eventName": "Dev and Design",
                    "date": "September 03 - 04, 2015",
                    "website": "http://www.devandesign.me/",
                    "talkTitle": "You Can Touch This!",
                    "slides": "Coming Soon!"
                },
                "description": "Community is the core of the opensource software movment. Lets take some time to explore how this community works together for mutual benefit.",
                "video": "0TjxnrWT8Es"
            }
        },
        "workHistory": [
            {
                "name": "CÜR Media",
                "title": "Sr Engineer, Web Lead",
                "role": "Lead jQuery Mobile Project, Co-Creator Chassis CSS Framework, PEP Team Member, jQuery UI Team member.",
                "acheivments": "Improved Code Quality, consistency, and standards. Lead initiative to merge jQuery Mobile and UI Projects. Leading a project and its team of developers distributed across the world. Team member of many similarly distributed teams.",
                "time": "2013-2015"
            },
            {
                "name": "jQuery Foundation",
                "title": "Development Lead",
                "role": "Lead jQuery Mobile Project, Co-Creator Chassis CSS Framework, PEP Team Member, jQuery UI Team member.",
                "acheivments": "Improved Code Quality, consistency, and standards. Lead initiative to merge jQuery Mobile and UI Projects. Leading a project and its team of developers distributed across the world. Team member of many similarly distributed teams.",
                "time": "2013-2015"
            },
            {
                "name": "Filament Group",
                "title": "Consultant",
                "acheivments": "Worked helping develop a set of small modular JavaScript widgets for use various projects lead by the Filament Group, including the responsive redesigns of Ebay and the Lego Store.",
                "time": "2013-2013"
            },
            {
                "name": "Bill Dodge Auto Group",
                "title": "Internet Development Administrator",
                "acheivments": "Handle all internet related needs of the company, including developing custom applications and tools for use throughout the company, maintaining and building servers and websites.",
                "time": "2009-2013"
            },
            {
                "name": "Starr Graphics",
                "title": "Web Developer / Graphic Designer",
                "acheivments": "Handle all web development needs of clients. Help with graphics as needed.",
                "time": "2005-2009"
            },
            {
                "name": "Freelance",
                "title": "Web Developer / Graphic Designer",
                "time": "1996-2013"
            }
        ],
        "education": [
            {
                "name": "University of Southern Maine",
                "major": "Physics",
                "minor": "Math and Chemistry",
                "years": "2002-2006",
                "achievements": "Noiminated for National Honors"
            }
        ],
        "communityInvolvment": [
            {
                "name": "W3C",
                "role": "Member, Web Platform and Audio working groups"
            },
            {
                "name": "Google Summer of Code",
                "role": "Organization Admin / Mentor"
            },
            {
                "name": "Hammer.JS",
                "role": "Organization Owner / Leader"
            },
            {
                "name": "Node School Portland",
                "role": "Mentor"
            },
            {
                "name": "Portland Web Developers Group",
                "role": "Speaker / Helper / IRC admin / Bugger of people to talk"
            },
            {
                "name": "jQuery Boston",
                "role": "Member"
            }
        ],
        "skills": {
            "frontEnd": [
                {
                    "name": "JavaScript",
                    "level": 5
                },
                {
                    "name": "jQuery",
                    "level": 5
                },
                {
                    "name": "jQuery UI",
                    "level": 5
                },
                {
                    "name": "jQuery Mobile",
                    "level": 5
                },
                {
                    "name": "Sass",
                    "level": 4
                },
                {
                    "name": "CSS3",
                    "level": 4
                },
                {
                    "name": "HTML5",
                    "level": 4
                },
                {
                    "name": "Web Standards",
                    "level": 5
                }
            ],
            "testingAndBuild": [
                {
                    "name": "QUnit",
                    "level": 5
                },
                {
                    "name": "Grunt",
                    "level": 5
                },
                {
                    "name": "Automated Testing",
                    "level": 4
                },
                {
                    "name": "Git",
                    "level": 4
                },
                {
                    "name": "Intern",
                    "level": 3
                },
                {
                    "name": "WebDriver",
                    "level": 3
                }
            ],
            "backend": [
                {
                    "name": "Node.js",
                    "level": 4
                },
                {
                    "name": "PHP",
                    "level": 3
                }
            ]
        }
    },
    "sideProjects": {
        "arschmitz.github.io": {
            "name": "arschmitz.github.io",
            "role": "Creator",
            "repoName": "[ 'arschmitz.github.io' ]",
            "links": {
                "github": "https://github.com/arschmitz/arschmitz.github.io",
                "issues": "https://github.com/arschmitz/arschmitz.github.io/issues",
                "website": "http://arschmitz.me",
                "demos": "http://arschmitz.me/?gui&template=effects",
                "irc": "Ping me arschmitz ",
                "api": "http://arschmitz.me/?gui&template=help"
            },
            "description": "The webiste your currently viewing my little, just something that amuses me",
            "currentWork": [
                "Meandering"
            ]
        },
        "local-menu": {
            "name": "Local Menu",
            "role": "Creator",
            "repoName": "[ 'local-menu' ]",
            "links": {
                "github": "https://github.com/arschmitz/local-menu",
                "website": "https://github.com/arschmitz/local-menu",
                "issues": "https://github.com/arschmitz/local-menu/issues",
                "irc": "Ping me arschmitz ",
                "api": "https://github.com/arschmitz/local-menu"
            },
            "description": "Creates a menu of all the folders / files in the director compatible with xip.io",
            "currentWork": [
                "None"
            ]
        },
        "grunt-spider": {
            "name": "Grunt Spider",
            "role": "Creator",
            "repoName": "[ \"grunt-spider\" ]",
            "links": {
                "github": "https://github.com/arschmitz/grunt-spider",
                "description": "A grunt task for use with Spider.js",
                "issues": "https://github.com/arschmitz/grunt-spider/issues",
                "irc": "Ping me arschmitz ",
                "api": "https://github.com/arschmitz/grunt-spider"
            },
            "demos": "none",
            "currentWork": [
                "Updating api and readme"
            ]
        },
        "jquery-pr": {
            "name": "jQuery PR",
            "role": "Creator",
            "repoName": "[ \"jquery-pr\" ]",
            "links": {
                "github": "https://github.com/arschmitz/jquery-pr",
                "website": "https://github.com/arschmitz/jquery-pr",
                "api": "https://github.com/arschmitz/jquery-pr",
                "demos": "none",
                "irc": "Ping me arschmitz ",
                "issues": "https://github.com/arschmitz/jquery-pr/issues"
            },
            "description": "an extension for chrome to check jquery foundation PR's for cla/caa signitures commit message format and line lengths",
            "currentWork": [
                "Working on version 2",
                "Adding template text pasting",
                "adding link html validation",
                "Canned message insertion",
                "Labling"
            ]
        },
        "mobile-presenter": {
            "name": "Mobile Presenter",
            "role": "Creator",
            "repoName": "[ \"mobile-presenter\" ]",
            "links": {
                "github": "https://github.com/arschmitz/mobile-presenter",
                "issues": "https://github.com/arschmitz/mobile-presenter/issues",
                "website": "http://presentations.arschmitz.me",
                "irc": "Ping me arschmitz ",
                "api": "https://github.com/arschmitz/mobile-presenter",
                "demos": "http://presentations.arschmitz.me"
            },
            "description": "A slide deck based on codeignighter and jQuery Mobile, includes multi presentation support and follow along function with socket.io, and adaptive / responsive touch remote",
            "currentWork": [
                "None"
            ]
        },
        "ios-iframe-touchevents-fix": {
            "name": "iOS Iframe Touchevents Fix",
            "role": "Co-Creator",
            "repoName": "[ \"ios-iframe-touchevents-fix\" ]",
            "links": {
                "github": "https://github.com/gseguin/ios-iframe-touchevents-fix",
                "api": "https://github.com/gseguin/ios-iframe-touchevents-fix",
                "website": "https://github.com/gseguin/ios-iframe-touchevents-fix",
                "issues": "https://github.com/gseguin/ios-iframe-touchevents-fix/issues",
                "irc": "Ping arschmitz or gseguin "
            },
            "description": "Workaround for iOS' iframes touch events issue"
        },
        "jquery-mobile-onpage": {
            "name": "jquery Mobile onPage",
            "role": "creator",
            "repoName": "[ \"jquery-mobile-onpage\" ]",
            "links": {
                "github": "https://github.com/arschmitz/jquery-mobile-onpage",
                "issues": "https://github.com/arschmitz/jquery-mobile-onpage/issues",
                "api": "https://github.com/arschmitz/jquery-mobile-onpage",
                "website": "https://github.com/arschmitz/jquery-mobile-onpage",
                "irc": "Ping me arschmitz "
            },
            "description": "Provides easy binding for jQuery Mobile page events an reduces the number of bindings needed in a modular project",
            "currentWork": [
                "Maintaining"
            ]
        },
        "jquery-mousewheel": {
            "name": "jQuery mousewheel",
            "repoName": "[ \"jquery-mousewheel\" ]",
            "role": "Team Member",
            "links": {
                "github": "https://github.com/jquery/jquery-mousewheel",
                "issues": "https://github.com/jquery/jquery-mousewheel/issues",
                "website": "https://github.com/jquery/jquery-mousewheel",
                "api": "https://github.com/jquery/jquery-mousewheel",
                "demos": "https://github.com/jquery/jquery-mousewheel",
                "irc": "#jqueryui-dev"
            },
            "description": "A jQuery plugin which adds a normalized mousewheel event",
            "currentWork": [
                "Removing dependency on jQuery core event and alias modules"
            ]
        },
        "node-amd-builder": {
            "name": "Node AMD Builder",
            "repoName": "[ \"node-amd-builder\" ]",
            "role": "Team Member",
            "github": "https://github.com/gseguin/node-amd-builder",
            "issues": "https://github.com/gseguin/node-amd-builder/issues",
            "website": "https://github.com/gseguin/node-amd-builder",
            "api": "https://github.com/gseguin/node-amd-builder",
            "demos": "none",
            "irc": "Ping arschmitz or gseguin ",
            "description": "A node web service backend for a custom AMD based download builder",
            "currentWork": [
                "None"
            ]
        },
        "jsass-vars": {
            "name": "JSass Vars",
            "role": "Creator",
            "repoName": "[ \"jsass-vars\" ]",
            "links": {
                "github": "https://github.com/arschmitz/JSass-vars",
                "issues": "https://github.com/arschmitz/JSass-vars/issues",
                "api": "https://github.com/arschmitz/JSass-vars",
                "website": "https://github.com/arschmitz/JSass-vars",
                "irc": "Ping me arschmitz "
            },
            "description": "A module to compile Javascript modules into valid scss variable files and a coresponding combined javascript file for use in the browser",
            "currentWork": [
                "Finalizing API",
                "Preparing V1"
            ]
        },
        "qunit-assert-classes": {
            "name": "QUnit Assert Classes",
            "role": "Creator",
            "repoName": "[ \"qunit-assert-classes\" ]",
            "links": {
                "github": "https://github.com/arschmitz/qunit-assert-classes",
                "issues": "https://github.com/arschmitz/qunit-assert-classes/issues",
                "api": "https://github.com/arschmitz/qunit-assert-classes",
                "website": "https://github.com/arschmitz/qunit-assert-classes",
                "irc": "Ping me arschmitz "
            },
            "description": "A set of assertions for checking thats an element has ( or does not have ) any number of classes. The check is order independent and gives a diff of the expected classes.",
            "currentWork": [
                "None"
            ]
        },
        "jquery-mobile-datepicker-wrapper": {
            "name": "jQuery Mobile Datepicker Wrapper",
            "role": "Creator",
            "repoName": "[ \"qunit-assert-classes\" ]",
            "links": {
                "github": "https://github.com/arschmitz/jquery-mobile-datepicker-wrapper",
                "issues": "https://github.com/arschmitz/jquery-mobile-datepicker-wrapper/issues",
                "api": "https://github.com/arschmitz/jquery-mobile-datepicker-wrapper",
                "website": "https://github.com/arschmitz/jquery-mobile-datepicker-wrapper",
                "irc": "Ping me arschmitz "
            },
            "description": "Wrapper to turn jquery ui datepicker into a mobile widget.",
            "currentWork": [
                "Bug Fixes"
            ]
        },
        "html-ocd": {
            "name": "HTML OCD",
            "role": "Creator",
            "repoName": "[ \"html-ocd\" ]",
            "links": {
                "github": "https://github.com/arschmitz/html-ocd",
                "issues": "https://github.com/arschmitz/html-ocd/issues",
                "api": "https://github.com/arschmitz/html-ocd",
                "website": "https://github.com/arschmitz/html-ocd",
                "irc": "Ping me arschmitz "
            },
            "description": "Verifiys html documents including running jshint and jscs on script tags and csslint and cssComb on style tags, and some basic accessability checks",
            "currentWork": [
                "Initial Development",
                "Adding CSS Comb diff",
                "Adding Accessability checks",
                "Finalizing API"
            ]
        },
        "jquery-tutorials": {
            "name": "jQuery Tutorials",
            "role": "Creator",
            "repoName": "[ \"jquery-tutorials\" ]",
            "links": {
                "github": "https://github.com/arschmitz/jquery-tutorials",
                "issues": "https://github.com/arschmitz/jquery-tutorials/issues",
                "api": "https://github.com/arschmitz/jquery-tutorials",
                "website": "https://github.com/arschmitz/jquery-tutorials",
                "irc": "Ping me arschmitz "
            },
            "description": "A set of interactive tutorials for the jQuery Learning Center http://learn.jquery.com",
            "currentWork": [
                "Initial Development",
                "Proof of more abstract non jQuery centric version"
            ]
        },
        "bearbonesbeer.com": {
            "name": "Bear Bones Beer",
            "role": "Creator",
            "repoName": "[ \"bearbonesbeer.com\" ]",
            "links": {
                "github": "https://github.com/arschmitz/bearbonesbeer.com",
                "issues": "https://github.com/arschmitz/bearbonesbeer.com/issues",
                "api": "none",
                "website": "bearbonesbeer.com",
                "irc": "Ping me arschmitz "
            },
            "description": "Website for the friends brewery Bear Bones Beer",
            "currentWork": [
                "Initial Development",
                "expanding Google sheets based content managment"
            ]
        },
        "limesearch": {
            "name": "Limesearch",
            "role": "Creator",
            "repoName": ".limesearch",
            "links": {
                "github": "https://github.com/arschmitz/limesearch",
                "issues": "https://github.com/arschmitz/limesearch/issues",
                "api": "https://github.com/arschmitz/limesearch",
                "website": "bearbonesbeer.com",
                "irc": "Ping me arschmitz "
            },
            "description": "A GUI search and view utility for limechat logs",
            "currentWork": [
                "Initial Development",
                "Improving search"
            ]
        },
        "jquery-phototable": {
            "name": "jQuery Phototable",
            "role": "Creator",
            "repoName": "[ \"jquery-phtotable\" ]",
            "links": {
                "github": "https://github.com/arschmitz/jquery-phototable",
                "issues": "https://github.com/arschmitz/jquery-phototable/issues",
                "api": "https://github.com/arschmitz/jquery-phototable",
                "website": "https://rawgit.com/arschmitz/jquery-phototable/master/index.html",
                "demos": "https://rawgit.com/arschmitz/jquery-phototable/master/index.html",
                "irc": "Ping me arschmitz "
            },
            "description": "An advanced drag and drop phototable plugin for jQuery UI and Mobile with facebook integration",
            "currentWork": [
                "Maitnence"
            ]
        },
        "jquery-mobile-event-debugger": {
            "name": "jQuery Mobile Event Debugger",
            "role": "Creator",
            "repoName": "[ \"jquery-mobile-event-debugger\" ]",
            "links": {
                "github": "https://github.com/arschmitz/jquery-mobile-event-debugger",
                "issues": "https://github.com/arschmitz/jquery-mobile-event-debugger/issues",
                "api": "https://github.com/arschmitz/jquery-mobile-event-debugger",
                "website": "https://rawgit.com/arschmitz/jquery-mobile-event-debugger/master/index.html",
                "demos": "https://rawgit.com/arschmitz/jquery-mobile-event-debugger/master/index.html",
                "irc": "Ping me arschmitz "
            },
            "description": "A debugging tool for jQuery Mobile Events which ties into the API docs",
            "currentWork": [
                "Maitnence"
            ]
        },
        "simple-panel": {
            "name": "Simple Panel",
            "role": "Creator",
            "repoName": "[ \"simple-panel\" ]",
            "links": {
                "github": "https://github.com/arschmitz/simple-panel",
                "issues": "https://github.com/arschmitz/simple-panel/issues",
                "api": "https://github.com/arschmitz/simple-panel",
                "website": "https://rawgit.com/arschmitz/simple-panel/master/index.html",
                "demos": "https://rawgit.com/arschmitz/simple-panel/master/index.html",
                "irc": "Ping me arschmitz "
            },
            "description": "a prototype panel for jquery mobile using ui draggable",
            "currentWork": [
                "On Hold for jQuery Mobile V1.7"
            ]
        },
        "jquery-mobile-nestedlists": {
            "name": "jQuery Mobile Nested Lists",
            "role": "Creator",
            "repoName": "[ \"jquery-mobile-nestedlists\" ]",
            "links": {
                "github": "https://github.com/arschmitz/jquery-mobile-nestedlists",
                "issues": "https://github.com/arschmitz/jquery-mobile-nestedlists/issues",
                "api": "https://github.com/arschmitz/jquery-mobile-nestedlists",
                "website": "https://rawgit.com/arschmitz/jquery-mobile-nestedlists/master/index.html",
                "demos": "https://rawgit.com/arschmitz/jquery-mobile-nestedlists/master/index.html",
                "irc": "Ping me arschmitz "
            },
            "description": "Adds options for nested lists to jQuery mobile",
            "currentWork": [
                "Maitnence"
            ]
        }
    },
    "talks": {
        "asia": {
            "key": "asia",
            "basic": {
                "eventName": "jQuery Asia",
                "date": "November 2012",
                "talkTitle": "jQuery Mobile: Common Pitfalls and Gotchas",
                "slides": "http://presentations.arschmitz.me/pitfalls/#/",
                "website": "https://www.facebook.com/JQueryConferenceAsia"
            },
            "video": "TXOFOqsrVuU",
            "description": "jQuery Mobile makes developing mobile apps and sites easy, semantic and familiar. However those familiar with typical desktop patterns may find themselves banging their heads against the wall when something \"simple\" doesn't work as expected. This session will go through some of the most common problems and pitfalls facing those jumping into jQuery Mobile. Areas covered will include injecting and enhancing dynamic content, working with enhanced form elements, refactoring for pageinit vs $(document).ready(), and the navigation model / page events."
        },
        "austin": {
            "key": "austin",
            "basic": {
                "eventName": "jQuery Austin",
                "date": "September 2013",
                "website": "http://events.jquery.org/2013/austin/",
                "talkTitle": "jQuery Mobile: Optimizing Performance",
                "slides": "http://www.slideshare.net/AlexanderSchmitz/austin-26252266"
            },
            "video": "bZTOV-55ivM",
            "description": "Performance is a major concern on mobile platforms. jQuery Mobile 1.4 adds a number of performance related options and features to help you speed up your mobile site along with a new theme designed to make your site render as fast as possible. Learn Tips and tricks to make your site as fast as it can. Covered in this talk will be not only framework optimizations but server side tricks to minimize transfer but page initialization times."
        },
        "sandiego": {
            "key": "sandiego",
            "basic": {
                "eventName": "jQuery San Diego",
                "date": "February 2014",
                "website": "http://events.jquery.org/2014/san-diego/",
                "talkTitle": "jQuery Mobile: Optimizing Performance",
                "slides": "http://www.slideshare.net/AlexanderSchmitz/austin-26252266"
            },
            "description": "Performance is a major concern on mobile platforms. jQuery Mobile 1.4 adds a number of performance related options and features to help you speed up your mobile site along with a new theme designed to make your site render as fast as possible. Learn Tips and tricks to make your site as fast as it can. Covered in this talk will be not only framework optimizations but server side tricks to minimize transfer but page initialization times.",
            "video": "BNS4u086Lg8"
        },
        "europe": {
            "key": "europe",
            "basic": {
                "eventName": "jQuery Europe",
                "date": "March 2014",
                "website": "http://www.gentics.com/jquery-eu-2014/page/2014/eu.html",
                "talkTitle": "jQuery Mobile: Optimizing Performance V2",
                "slides": "http://presentations.arschmitz.me/mobile-performance/"
            },
            "video": "bZTOV-55ivM",
            "description": "Performance is a major concern on mobile platforms. jQuery Mobile 1.4 adds a number of performance related options and features to help you speed up your mobile site along with a new theme designed to make your site render as fast as possible. Learn Tips and tricks to make your site as fast as it can. Covered in this talk will be not only framework optimizations but server side tricks to minimize transfer but page initialization times."
        },
        "amsterdam": {
            "key": "amsterdam",
            "basic": {
                "date": "November 2013",
                "eventName": "Booking.com - Amsterdam",
                "slides": "http://www.slideshare.net/AlexanderSchmitz/austin-26252266",
                "website": false,
                "talkTitle": "jQuery Mobile: Optimizing Performance"
            },
            "description": "Performance is a major concern on mobile platforms. jQuery Mobile 1.4 adds a number of performance related options and features to help you speed up your mobile site along with a new theme designed to make your site render as fast as possible. Learn Tips and tricks to make your site as fast as it can. Covered in this talk will be not only framework optimizations but server side tricks to minimize transfer but page initialization times.",
            "video": "bZTOV-55ivM"
        },
        "chicago": {
            "key": "chicago",
            "basic": {
                "eventName": "jQuery Chicago",
                "date": "September 2014",
                "website": "http://events.jquery.org/2014/chicago/",
                "talkTitle": "The Path to 2.0",
                "slides": "http://presentations.arschmitz.me/path-to-2.0/"
            },
            "description": "jQuery Mobile 1.5 brings lots of new features and a revamped navigation system, more performance optimization possibilities for advanced users and adoption of more widgets from jQuery UI. Lately though, the question I am asked isn't about what's going to be in 1.6, 1.7, and so on, but about the future of jQuery Mobile after the merger with jQuery UI, and what the future is for the jQuery Mobile project. I’ll go into our current road map and details (as many as are available right now) about the future of jQuery Mobile and what it will look like after 2.0",
            "video": "2qF7kW9SdJQ"
        },
        "pwmWebDevJquery": {
            "key": "pwmWebDevJquery",
            "basic": {
                "eventName": "Portland Web Developer Meetup",
                "date": "March 2014",
                "website": "http://www.portlandwebworks.com/blog/fun-times-webdev-meeting",
                "talkTitle": "jQuery Foundation overview / Mobile performance",
                "slides": "http://presentations.arschmitz.me/jquery-foundation/"
            },
            "video": "bZTOV-55ivM",
            "description": "In depth talk on the jQuery Foundation, jQuery Mobile, and mobile performance in general"
        },
        "pwmWebDevNodeCLI": {
            "key": "pwmWebDevJquery",
            "basic": {
                "eventName": "Portland Web Developer Meetup",
                "slides": "unavailable",
                "date": "January 2015",
                "talkTitle": "Node for the masses",
                "website": "http://www.meetup.com/me-webdev/events/219614954/"
            },
            "description": "Using node as a CLI on shared hosting / Nodeception",
            "video": "bZTOV-55ivM"
        },
        "jssummit2014": {
            "key": "jssummit2014",
            "basic": {
                "eventName": "JavaScript Summit 2014",
                "talkTitle": "The State of jQuery UI & Mobile",
                "slides": "http://presentations.arschmitz.me/path-to-2.0-ee/",
                "date": "November 2014",
                "website": "http://environmentsforhumans.com/2014/javascript-summit/"
            },
            "description": "It's an exciting time for jQuery UI and Mobile. Big changes are coming to jQuery Mobile and jQuery UI this year as the projects start to merge. But what exactly does this mean? What is the future of the two libraries? Which one is going away? Are either going away? These and many others are the type of questions I have been receiving from many people in the community since we started talking about merging the projects in the spring of 2013. I will address these questions and many more, will give you some history behind the changes we are making as well as give some insight into the direction the projects are taking, and how we’re going to make integration with both projects easier for developers.",
            "video": "bZTOV-55ivM"
        },
        "jssummit2015": {
            "key": "jssummit2015",
            "basic": {
                "eventName": "JavaScript Summit 2015",
                "date": "February 2015",
                "website": "http://environmentsforhumans.com/2015/javascript-summit/",
                "talkTitle": "Chassis: Yet Another CSS Framework",
                "slides": "https://docs.google.com/presentation/d/1_15yz1uT-oq17ZNsZTczGgwUh-TP15gGO6DFcz_XTJU/edit"
            },
            "description": "Chassis seeks to establish a standard of markup and structure for common components that can be used by both CSS frameworks and JS component libraries to allow for complete interoperability, modularity, and justice, for all. Throughout this process we've been collaborating with a variety of projects and community members including: Topcoat, Zurb Foundation, Cardinal, Famo.us, Yandex, Wordpress, Automattic, 10up, 960grid, Unsemantic, jQuery Mobile, jQuery UI, Intel App Framework, and Cascade CSS, as well as some collaborators from Adobe, Hulu, and Bootstrap.",
            "video": "bZTOV-55ivM"
        },
        "devAndDesign": {
            "key": "devAndDesign",
            "basic": {
                "eventName": "Dev and Design",
                "date": "September 03 - 04, 2015",
                "website": "http://www.devandesign.me/",
                "talkTitle": "You Can Touch This!",
                "slides": "Coming Soon!"
            },
            "description": "Community is the core of the opensource software movment. Lets take some time to explore how this community works together for mutual benefit.",
            "video": "0TjxnrWT8Es"
        }
    },
    "menu": [
        "API",
        "aboutMe",
        "aboutTheSite",
        "community",
        "help",
        "projects",
        "rants",
        "resume",
        "sideProjects",
        "talks",
        "effects"
    ]
}
Handlebars.registerHelper( "call", function( template, item, classes ) {
	template = Handlebars.escapeExpression( template );
	item = typeof item === "string" ? Handlebars.escapeExpression( item ) : false;
	classes = typeof classes === "string" ? Handlebars.escapeExpression( classes ) : false;

	return new Handlebars.SafeString(
		"<a href=\"/?gui&template=" + template + ( item ? "&item=" + item : "" ) +
		"\" data-call=\"gui.render( '" + template + "' " + ( item ? ", '" + item +
		"'" : "" ) + " )\" " + ( classes ? "class=\"" + classes + "\"" : "" ) + ">"
	);
} );

Handlebars.registerHelper( "title", function( template, item ) {
	template = Handlebars.escapeExpression( template );
	item = typeof item === "string" ? Handlebars.escapeExpression( item ) : false;

	var link = "<h1 class=\"site-title\">> <a href=\"/?gui&template=main\" data-call=\"gui.render( 'main' );\">arschmitz</a>.";

	if ( item ) {
		item = /^\[/.test( item ) ? item : /^\./.test( item ) ? item: "." + item;
		link += "<a href=\"/?gui&template=" + template + "\" data-call=\"gui.render( '" + template + "' )\">" + template.split( "." )[ 0 ] + "</a>" + item;
	} else {
		link += template.split( "." )[ 0 ];
	}

	link += ";</h1>";

	return new Handlebars.SafeString( link );
} );

Handlebars.registerHelper("everyOther", function (index, amount, scope) {
    if ( ++index % amount )
        return scope.inverse(this);
    else
        return scope.fn(this);
});

Handlebars.registerHelper( "link", function( link, classes ) {
	link = Handlebars.escapeExpression( link );
	classes = typeof classes === "string" ? Handlebars.escapeExpression( classes ) : false;
	return new Handlebars.SafeString(
		"<a href=\"" + link + "\" " + ( classes ? "class=\"" + classes + "\"" : "" ) + ">" + link + "</a>"
	);
} );

Handlebars.registerHelper( "hlink", function( link, text, level ) {
	link = Handlebars.escapeExpression( link );
	level = Handlebars.escapeExpression( level );
	text = Handlebars.escapeExpression( text );

	return new Handlebars.SafeString(
		"<h" + level + "><span class=\"bold\">" + text + ": </span><a href=\"" + link + "\">" + link + "</a></h" + level + ">"
	);
} );

Handlebars.registerHelper( "h", function( level, text, content ) {
	content = Handlebars.escapeExpression( content );
	level = Handlebars.escapeExpression( level );
	text = Handlebars.escapeExpression( text );

	return new Handlebars.SafeString(
		"<h" + level + "><span class=\"bold\">" + text + ": </span>" + content + "</h" + level + ">"
	);
} );

Handlebars.registerHelper( "json", function() {
	delete arguments[ arguments.length - 1 ];
	var prop = Array.prototype.join.call( arguments, "" );
	return new Handlebars.SafeString(
		"data-json=\"arschmitz." + prop + "\""
	);
} );

Handlebars.registerHelper( "meter", function( level ) {
	var ret = "<span class='meter-level'>";
	for ( var i = 0; i < 5; i++ ) {
		ret += i >= level ? "<span class='inactive'>" : "";
		ret += "▱";
		ret += i >= level ? "</span>" : "";
	}

	return new Handlebars.SafeString( ret + "</span>" );
} );


( function() {
	var commands = $.parseJSON( localStorage.commands || "[]" );
	var pointer = commands.length;
	var trigger;

	window.prompt = {
		close: function() {
			$( "body" ).addClass( "no-prompt" );
			gui.updateHistory( { prompt: "false" } );
		},
		open: function() {
			$( "body" ).removeClass( "no-prompt" );
			gui.updateHistory( { prompt: false } );
		},
		logError: function( e ) {
			return "<span class='error'>" + e.__proto__.name + ": " + e.message + "</span>";
		},
		syntaxRegex: /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
		getFullSite: function() {
			$.get( "/dist/site.json.html", function( returnValue ) {
				window.fullSite = $( "<div class='output-line'><span class='prompt-start'>></span>arschmitz<br/></div><div><span class='prompt-start'><</span>" + returnValue + "</div>" );
			}, "html" );
		},
		syntaxHighlight: function( json ) {
			if ( typeof json != 'string' ) {
				json = JSON.stringify( json, undefined, 4 );
			}
			json = json.replace( /&/g, '&amp;' ).replace( /</g, '&lt;' ).replace( />/g, '&gt;' );
			return json.replace( prompt.syntaxRegex, function( match ) {
				var cls = 'number';
				if ( /^"/.test( match ) ) {
					if ( /:$/.test( match ) ) {
						cls = 'key';
					} else {
						cls = 'string';
					}
				} else if ( /true|false/.test( match ) ) {
					cls = 'boolean';
				} else if ( /null/.test( match ) ) {
					cls = 'null';
				}
				return '<span class="' + cls + '">' + match + '</span>';
			} );
		},
		runCommand: function() {
			var returnValue,
				command = $( "#prompt" ).val();

			if ( command === "" ) {
				return;
			}

			commands.push( command );
			try {
				localStorage.commands = JSON.stringify( commands );
			} catch ( e ) {}
			pointer = commands.length;
			if ( />>effect:/.test( command ) ) {
				runEffect( command.split( ":" )[ 1 ], ".body-wrap" );
				returnValue = "Running Effect " + command.split( ":" )[ 1 ];
			} else {
				try {
					if ( command !== "arschmitz" ) {
						returnValue = window.eval( command );
					} else if ( window.fullSite ) {
						$( "#output" ).append( window.fullSite );
						console.log( $( "#output" ).height() );
						$( ".console-wrap .scroll-wrap" )[ 0 ].scrollTop = $( ".console-wrap .scroll-wrap" )[ 0 ].scrollHeight;
						return;
					} else {
						$.get( "/dist/site.json.html", function( returnValue ) {
							console.log( returnValue );
							outputReturn( returnValue );
						}, "html" );
						return;
					}
				} catch ( e ) {
					returnValue = prompt.logError( e );
				}
			}
			outputReturn( returnValue );
			function outputReturn( returnValue ) {
				if ( typeof returnValue === "object" ) {
					try {
						returnValue = prompt.syntaxHighlight( returnValue ).replace( /\n/g, "<br/>" ).replace( /\s\s/g, "<div class='tab'></div>" );
					} catch ( e ) {
						returnValue = prompt.logError( e );
					}
				}
				var line = $( "<div class='output-line'><span class='prompt-start'>></span>" + command +
					"<br/></div><div><span class='prompt-start'><</span>" + returnValue + "</div>" );
				$( "#output" ).append( line );
				$( "#prompt" ).val( "" );
				$( ".console-wrap .scroll-wrap" )[ 0 ].scrollTop = $( ".console-wrap .scroll-wrap" )[ 0 ].scrollHeight;
			}
		},
		keyup: function( e ) {
			if ( e.which === 38 && pointer - 1 >= 0 ) {
				pointer--;
				$( this ).val( commands[ pointer ] );
				trigger = true;
			} else if ( e.which === 40 && pointer + 1 < commands.length - 1 ) {
				pointer++;
				$( this ).val( commands[ pointer ] );
				trigger = true;
			} else if ( e.which === 40 ) {
				$( this ).val( "" );
				trigger = true;
			} else if ( e.which === 13 && trigger ) {
				$( this ).trigger( "change" );
				trigger = false;
			}
		}
	};

	Object.defineProperty( window, "CLOSE", {
		get: function() {
			prompt.close();
		}
	} );
	window.prompt.getFullSite();
	$( function() {
		$( "body" ).height( $( window ).height() );
		$( "#prompt" ).on( "change", prompt.runCommand );
		$( "#runPrompt" ).on( "click", prompt.runCommand );
		$( document ).on( "click", ".open-console", prompt.open );
		$( ".prompt-switch input" ).on( "change", function( e ) {
			console.log( )
			gui[ $( this ).is( ":checked" ) ? "open" : "close" ]();
		} );
		$( "#prompt" ).on( "keyup", prompt.keyup ).on( "blur", function() {
			if ( ( ( 'ontouchstart' in window ) || window.DocumentTouch && document instanceof DocumentTouch ) || gui.isOpen ) {
				return;
			}
			$( this ).focus();
		} );
	} );
} )();

// GUI Functions
( function() {
window.gui = {
	open: function( pop ) {
		$( "body" ).addClass( "gui" );
		if ( !gui.isOpen ) {
			gui.console.addClass( "gui-console", { duration: 1000 } );
		}
		$( ".prompt-switch input" ).prop( "checked", true );
		gui.console.resizable( {
			handles: "n",
			resize: function( e, ui ) {
				var height = ui.size.height / effects.height;

				ui.element.css( "height", ( height * 100 ) + "%" );
				gui.element.css( "height", ( 100 - ( height * 100 ) ) + "%" );
			}
		} );

		if ( !gui.isOpen ) {
			gui.element.addClass( "gui-open", { duration: 1000 } );
		}
		gui.updateHistory( { gui: true } );
		gui.isOpen = true;
		if ( pop !== false ) {
			gui.popState();
		}
	},
	close: function() {
		$( "body" ).removeClass( "gui" );
		gui.isOpen = false;
		gui.updateHistory( { gui: false } );
		gui.element.removeClass( "gui-open", { duration: 1000 } ).html( "" );
		gui.console.removeClass( "gui-console", { duration: 1000, complete: function() { gui.console.attr( "style", "" ); } } ).resizable( "destroy" );
		gui.marquee.html( "" );
	},
	updateHistory: function( update, title, replace ) {
		params = gui.queryParams();
		$.each( update, function( key, value ) {
			if ( value ) {
				params[ key ] = value;
			} else {
				delete params[ key ];
			}
		} );
		var searchString = "",
			first = "?";
		$.each( params, function( key, value ) {
			searchString += first + key + "=" + value;
			first = "&";
		} );
		history[ ( replace || "push" ) + "State" ]( {}, "arschmitz.me - GUI " + title, window.location.pathname + searchString );
	},
	render: function( templateName, item, setHistory ) {
		var parts = templateName.split( "." );

		if ( !item ) {
			gui.runTransition( templates[ parts[ 1 ] || parts[ 0 ] ]( arschmitz ) );

			if ( setHistory === false ) {
				return;
			}
			gui.updateHistory( { "template": templateName, item: false }, "- " + templateName );
		} else {
			gui.runTransition( templates[ parts[ 1 ] || parts[ 0 ] ]( arschmitz[ parts[ 0 ] ][ item ] ) );

			if ( setHistory === false ) {
				return;
			}
			gui.updateHistory( { template: templateName, item: item }, "- " + item );
		}
	},
	transition: "fade",
	duration: 500,
	runTransition: function( content ) {
		gui.element.hide( gui.transition, gui.duration, function() {
			gui.element.show( gui.transition, gui.duration, function() {
				$( ".gui-wrap" )[ 0 ].scrollTop = 0;
				gui.element.trigger( "update" );
				gui.startBackground();
				gui.addJSON();
			} ).html( content );
		} );
	},
	isOpen: false,
	startBackground: function() {
		var content = $( ".content" ).attr( "data-background" );

		if ( gui.marquee.length ) {
			$.ajax( {
				dataType: "text",
				url: content,
				success: function( data ) {
					$( ".gui-background-code" ).text( data );
				},
				error: function() {

					//alert();
				}
			} );
		}
	},
	popState: function() {
		var queryParams = gui.queryParams();

		if ( queryParams.gui ) {
			queryParams.template = queryParams.template || "main";
			if ( !gui.isOpen ) {
				gui.open( false );
			}
			if ( queryParams.item ) {
				gui.render( queryParams.template, queryParams.item, false );
			} else if ( queryParams.template ) {
				gui.render( queryParams.template, undefined, false );
			}
			if ( queryParams.prompt === "false" ) {
				prompt.close();
			}
		}
	},
	queryParams: function() {
		var queryParams = {};
		window.location.search.replace( "?", "" ).split( "&" ).forEach( function( value, index ) {
			var pair = value.split( "=" );
			if ( pair[ 0 ] !== "" ) {
				queryParams[ pair[ 0 ] ] = pair[ 1 ] || true;
			}
		} );
		return queryParams;
	},
	jsonClick: function( e ) {
		e.preventDefault();
		e.stopPropagation();
		var target = $( this );
		var parent = target.parent();
		if ( target.text() === "JSON" ) {
			$( e.target ).text( parent.is( ".content" ) ? "Template" : "Pretty" );
			parent.children().not( target ).not( ".json-link" ).wrapAll( "<span class='pretty-content'></span>" );
			parent.find( ".pretty-content" ).hide();
			var attr = parent.attr( "data-json" )
			parent.append( "<div class='json-box'><span class='json-content'>" + attr + ": " + prompt.syntaxHighlight( eval( attr ) ).replace( /\n/g, "<br/>" ).replace( /\s\s/g, "<div class='tab'></div>" ) + "</span></div>" );
		} else if ( target.text() === "Template" ) {
			var params = gui.queryParams();
			if ( params.template ) {
				var parts = params.template.split( "." )
				template = parts[ 1 ] || parts [ 0 ];
			} else {
				template = "main";
			}

			var url = "templates/" + template + ".html";
			$( e.target ).text( "Pretty" );
			parent.children( ".json-box" ).remove();
			$.ajax( {
				url: url,
				success: function( data ) {
					parent.append( "<div class='json-box'>" + Handlebars.escapeExpression( data ).replace( /\n/g, "<br/>" ).replace( /\s\s/g, "<div class='tab'></div>" ) + "</div>" );
				}
			} );
		} else {
			parent.children( ".json-box" ).remove();
			target.text( "JSON" );
			parent.children( ".pretty-content" ).children().unwrap();
		}
	},
	addJSON: function() {
		$( "[data-json]:not( :data(jsonAdded) )" ).append( "<a href class='json-link'>JSON</a>" ).data( "jsonAdded", true );
	}
}

Object.defineProperty( window, "GUI", {
	get: function() {
		gui.open();
		return "You may now drag the top of the console to resize it."
	}
} );

Object.defineProperty( window, "HELP", {
	get: function() {
		if ( !gui.isOpen ) {
			gui.open();
		}
		gui.render( "helpAndAPI" );
	}
} );

// Event Handlers
$( window ).on( "popstate", gui.popState );

$( document ).on( "change", "#transition", function() {
	gui.transition = $( this ).val();
} );

$( document ).on( "change", "#duration", function() {
	gui.duration = parseInt( $( this ).val(), 10 );
} );

$( document ).on( "click", "[data-call]", function( e ) {
	e.preventDefault();
	$( "#prompt" ).val( $( this ).attr( "data-call" ) );
	prompt.runCommand();
} );

$( function() {
	// Effects
	//$.fn.animate = $.fn.velocity;
	gui.console = $( ".console-wrap" );
	gui.element = $( ".gui-wrap" );
	gui.marquee = $( "marquee" );
	gui.popState();
	$( document ).on( "click", ".json-link", gui.jsonClick );

	gui.element.on( "update", function() {
		var params = gui.queryParams();
		if ( params.template === "projects.project" || gui.queryParams().template === "sideProjects.sideProject" ) {
			project = arschmitz[ params.template.split( "." )[ 0 ] ][ params.item ];
			project.type = params.template.split( "." )[ 0 ];

			$.ajax( {
				url: "https://api.github.com/repos/" + project.links.github.split( ".com/" )[ 1 ] + "/issues",
				success: function( data ) {
					arschmitz[ project.type ][ params.item ].currentIssues = data;
					console.log( data );
					var content = templates.issues( arschmitz[ project.type ][ params.item ] );
					console.log( content );
					$( ".issue-box" ).append( content );
					gui.addJSON();
				},
				error: function() {
					arschmitz[ project.type ][ params.item ].currentIssues = {};
					arschmitz[ project.type ][ params.item ].currentIssues.message = "API Limit reached please click the issues link in the section above to see current issues";
					$.ajax( {
						"url": "templates/issues.html",
						success: function( data ) {
							var content = Handlebars.compile( data );
							$( ".issue-box" ).append( content( project ) );
						}
					} );
				}
			} );
		}
		if ( params.template === "timelines.timeline" ) {

			window.sidescroll.init();
		}
	} );
} );
} )();

window.sidescroll = (function() {
		
		// the row elements
	var $rows, $links, $rowsViewport, $rowsOutViewport,
		// the window element
		$win = $(window),
		// we will store the window sizes here
		winSize	= {},
		// used in the scroll setTimeout function
		anim = false,
		// page scroll speed
		scollPageSpeed = 2000 ,
		// page scroll easing
		scollPageEasing = 'easeInOutExpo',
		// perspective?
		hasPerspective = false,
		
		perspective	= hasPerspective && Modernizr.csstransforms3d,
		// initialize function
		init = function() {
			$rows = $('#ss-container > div.ss-row');
			$links = $('#ss-links > a');
			var sticky = new Waypoint.Sticky({
			  element: $('#ss-links')[0],
			  context: $( ".scrollable" )
			});
			// get window sizes
			getWinSize();
			// initialize events
			initEvents();
			// define the inviewport selector
			defineViewport();
			// gets the elements that match the previous selector
			setViewportRows();
			// if perspective add css
			if( perspective ) {
				$rows.css({
					'-webkit-perspective'			: 600,
					'-webkit-perspective-origin'	: '50% 0%'
				});
			}
			// show the pointers for the inviewport rows
			$rowsViewport.find('a.ss-circle').parent().addClass('ss-circle-deco');
			// set positions for each row
			placeRows();
			
		},
		// defines a selector that gathers the row elems that are initially visible.
		// the element is visible if its top is less than the window's height.
		// these elements will not be affected when scrolling the page.
		defineViewport	= function() {
		
			$.extend( $.expr[':'], {
			
				inviewport	: function ( el ) {
					if ( $(el).offset().top < winSize.height ) {
						return true;
					}
					return false;
				}
			
			});
		
		},
		// checks which rows are initially visible 
		setViewportRows	= function() {
			$rowsViewport 		= $rows.filter(':inviewport');
			$rowsOutViewport	= $rows.not( $rowsViewport )
			
		},
		// get window sizes
		getWinSize		= function() {
		
			winSize.width	= $win.width();
			winSize.height	= $win.height();
		
		},
		hammerEvents = function() {
			var pinchEnd;
			$( ".ss-circle, .ss-left h3, .ss-right h3" ).each( function( index, ele ) {
				var ham = new Hammer( ele, {
					domEvents: true
				} );
				ham.get('rotate').set({ enable: true })
				ham.get('pinch').set({ enable: true });
			} );
			$( ".ss-row" ).each( function( index, ele ) {
				var ham = new Hammer( ele, {
					domEvents: true,
					touchAction: "pan-y"
				} );
			} );


			$( ".ss-circle" ).draggable().on( "rotate", function( e ) {
				var gesture = e.gesture || e.originalEvent.gesture;
				$( this ).css( "transform", "rotate( " + gesture.rotation + "deg) scale( " + gesture.scale + ")" );
			} );
			$( ".ss-left h3, .ss-right h3, .dialog-wrap" ).on( "pinch", function( e ) {
				var gesture = e.gesture || e.originalEvent.gesture, ele = $( this );
				clearTimeout( pinchEnd );
				if ( $( this ).is( ".dialog-wrap" ) ) {
					$( this ).addClass( "resizing" );
					ele = ele.find( ".dialog" );
					pinchEnd = setTimeout( function(){
						var gesture = e.gesture || e.originalEvent.gesture;

						ele.closest( ".dialog-wrap" ).removeClass( "dialog-open resizing" );
						ele.css( "transform", "" );
						
					}, 30 );
				}
				ele.css( "transform", "scale( " + gesture.scale + ")" );
			} );
			$( ".ss-left h3, .ss-right h3" ).on( "pinchend", function( e ) {
				var gesture = e.gesture || e.originalEvent.gesture;
				$( this ).css( "transform", "" );
				if ( gesture.scale > 1 ) {
					$( this ).closest( ".ss-row" ).find( ".dialog-wrap" ).addClass( "dialog-open" );
				}
			});
			var sorting = false;
			$( ".ss-row" ).on( "press", function( e ) {
				if( $( e.target ).is( ".ss-row" ) ) {
					$( ".ss-row" )[ sorting ? "removeClass" : "addClass" ]( "timeline-row-outline" );
					$( ".ss-container" ).sortable( sorting ? "destroy" : undefined );
					sorting = !sorting;
				}
			} );
			$( ".ss-row" ).on( "swipe", function() {
				$( this ).remove();
			} );
			$( ".ss-row h3" ).on( "pointerenter pointerleave", function( e ){
				$( this )[ e.type === "pointerenter" ? "addClass" : "removeClass"  ]( "timeline-hover" );
			});
			$('.hjs code').each(function(i, block) {
			    hljs.highlightBlock(block);
			});
		},
		// initialize some events
		initEvents		= function() {
			hammerEvents();
			// navigation menu links.
			// scroll to the respective section.

			$links.on( 'click.Scrolling', function( event ) {

				// scroll to the element that has id = menu's href
				$( $(this).attr('href') ).scrollintoview({
					duration: "slow"
				});
				return false;
			
			});
			$(".scrollable").on({
				// on window resize we need to redefine which rows are initially visible (this ones we will not animate).
				'resize.Scrolling' : function( event ) {
					
					// get the window sizes again
					getWinSize();
					// redefine which rows are initially visible (:inviewport)
					setViewportRows();
					// remove pointers for every row
					$rows.find('a.ss-circle').parent().removeClass('ss-circle-deco');
					// show inviewport rows and respective pointers
					$rowsViewport.each( function() {
					
						$(this).find('div.ss-left')
							   .css({ left   : '0%' })
							   .end()
							   .find('div.ss-right')
							   .css({ right  : '0%' })
							   .end()
							   .find('a.ss-circle').parent()
							   .addClass('ss-circle-deco');
					
					});
				
				},
				// when scrolling the page change the position of each row	
				'scroll.Scrolling' : function( event ) {
					// set a timeout to avoid that the 
					// placeRows function gets called on every scroll trigger
					if( anim ) return false;
					anim = true;
					setTimeout( function() {
						placeRows();
						anim = false;
						
					}, 10 );
				
				}
			});
		
		},
		// sets the position of the rows (left and right row elements).
		// Both of these elements will start with -50% for the left/right (not visible)
		// and this value should be 0% (final position) when the element is on the
		// center of the window.
		placeRows		= function() {
			
				// how much we scrolled so far
			var winscroll	= $win.scrollTop(),
				// the y value for the center of the screen
				winCenter	= winSize.height / 2 + winscroll;
			
			// for every row that is not inviewport
			$rowsOutViewport.each( function(i) {
				
				var $row	= $(this),
					// the left side element
					$rowL	= $row.find('div.ss-left'),
					// the right side element
					$rowR	= $row.find('div.ss-right'),
					// top value
					rowT	= $row.offset().top;
				
				// hide the row if it is under the viewport
				if( rowT > winSize.height + winscroll ) {
					
					if( perspective ) {
					
						$rowL.css({
							'-webkit-transform'	: 'translate3d(-75%, 0, 0) rotateY(-90deg) translate3d(-75%, 0, 0)',
							'opacity'			: 0
						});
						$rowR.css({
							'-webkit-transform'	: 'translate3d(75%, 0, 0) rotateY(90deg) translate3d(75%, 0, 0)',
							'opacity'			: 0
						});
					
					}
					else {
					
						$rowL.css({ left 		: '-50%' });
						$rowR.css({ right 		: '-50%' });
					
					}
					
				}
				// if not, the row should become visible (0% of left/right) as it gets closer to the center of the screen.
				else {
						
						// row's height
					var rowH	= $row.height(),
						// the value on each scrolling step will be proporcional to the distance from the center of the screen to its height
						factor 	= ( ( ( rowT + rowH / 2 ) - winCenter ) / ( winSize.height / 2 + rowH / 2 ) ),
						// value for the left / right of each side of the row.
						// 0% is the limit
						val		= Math.max( factor * 50, 0 );
						
					if( val <= 0 ) {
					
						// when 0% is reached show the pointer for that row
						if( !$row.data('pointer') ) {
						
							$row.data( 'pointer', true );
							$row.find('.ss-circle').parent().addClass('ss-circle-deco');
						
						}
					
					}
					else {
						
						// the pointer should not be shown
						if( $row.data('pointer') ) {
							
							$row.data( 'pointer', false );
							$row.find('.ss-circle').parent().removeClass('ss-circle-deco');
						
						}
						
					}
					
					// set calculated values
					if( perspective ) {
						
						var	t		= Math.max( factor * 75, 0 ),
							r		= Math.max( factor * 90, 0 ),
							o		= Math.min( Math.abs( factor - 1 ), 1 );
						
						$rowL.css({
							'-webkit-transform'	: 'translate3d(-' + t + '%, 0, 0) rotateY(-' + r + 'deg) translate3d(-' + t + '%, 0, 0)',
							'opacity'			: o
						});
						$rowR.css({
							'-webkit-transform'	: 'translate3d(' + t + '%, 0, 0) rotateY(' + r + 'deg) translate3d(' + t + '%, 0, 0)',
							'opacity'			: o
						});
					
					}
					else {
						
						$rowL.css({ left 	: - val + '%' });
						$rowR.css({ right 	: - val + '%' });
						
					}
					
				}	
			
			});
		
		};
	
	return { init : init };

})();
/*
 * jQuery scrollintoview() plugin and :scrollable selector filter
 *
 * Version 1.8 (14 Jul 2011)
 * Requires jQuery 1.4 or newer
 *
 * Copyright (c) 2011 Robert Koritnik
 * Licensed under the terms of the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 */
(function(f){var c={vertical:{x:false,y:true},horizontal:{x:true,y:false},both:{x:true,y:true},x:{x:true,y:false},y:{x:false,y:true}};var b={duration:"fast",direction:"both"};var e=/^(?:html)$/i;var g=function(k,j){j=j||(document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(k,null):k.currentStyle);var i=document.defaultView&&document.defaultView.getComputedStyle?true:false;var h={top:(parseFloat(i?j.borderTopWidth:f.css(k,"borderTopWidth"))||0),left:(parseFloat(i?j.borderLeftWidth:f.css(k,"borderLeftWidth"))||0),bottom:(parseFloat(i?j.borderBottomWidth:f.css(k,"borderBottomWidth"))||0),right:(parseFloat(i?j.borderRightWidth:f.css(k,"borderRightWidth"))||0)};return{top:h.top,left:h.left,bottom:h.bottom,right:h.right,vertical:h.top+h.bottom,horizontal:h.left+h.right}};var d=function(h){var j=f(window);var i=e.test(h[0].nodeName);return{border:i?{top:0,left:0,bottom:0,right:0}:g(h[0]),scroll:{top:(i?j:h).scrollTop(),left:(i?j:h).scrollLeft()},scrollbar:{right:i?0:h.innerWidth()-h[0].clientWidth,bottom:i?0:h.innerHeight()-h[0].clientHeight},rect:(function(){var k=h[0].getBoundingClientRect();return{top:i?0:k.top,left:i?0:k.left,bottom:i?h[0].clientHeight:k.bottom,right:i?h[0].clientWidth:k.right}})()}};f.fn.extend({scrollintoview:function(j){j=f.extend({},b,j);j.direction=c[typeof(j.direction)==="string"&&j.direction.toLowerCase()]||c.both;var n="";if(j.direction.x===true){n="horizontal"}if(j.direction.y===true){n=n?"both":"vertical"}var l=this.eq(0);var i=l.closest(":scrollable("+n+")");if(i.length>0){i=i.eq(0);var m={e:d(l),s:d(i)};var h={top:m.e.rect.top-(m.s.rect.top+m.s.border.top),bottom:m.s.rect.bottom-m.s.border.bottom-m.s.scrollbar.bottom-m.e.rect.bottom,left:m.e.rect.left-(m.s.rect.left+m.s.border.left),right:m.s.rect.right-m.s.border.right-m.s.scrollbar.right-m.e.rect.right};var k={};if(j.direction.y===true){if(h.top<0){k.scrollTop=m.s.scroll.top+h.top}else{if(h.top>0&&h.bottom<0){k.scrollTop=m.s.scroll.top+Math.min(h.top,-h.bottom)}}}if(j.direction.x===true){if(h.left<0){k.scrollLeft=m.s.scroll.left+h.left}else{if(h.left>0&&h.right<0){k.scrollLeft=m.s.scroll.left+Math.min(h.left,-h.right)}}}if(!f.isEmptyObject(k)){if(e.test(i[0].nodeName)){i=f("html,body")}i.animate(k,j.duration).eq(0).queue(function(o){f.isFunction(j.complete)&&j.complete.call(i[0]);o()})}else{f.isFunction(j.complete)&&j.complete.call(i[0])}}return this}});var a={auto:true,scroll:true,visible:false,hidden:false};f.extend(f.expr[":"],{scrollable:function(k,i,n,h){var m=c[typeof(n[3])==="string"&&n[3].toLowerCase()]||c.both;var l=(document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(k,null):k.currentStyle);var o={x:a[l.overflowX.toLowerCase()]||false,y:a[l.overflowY.toLowerCase()]||false,isRoot:e.test(k.nodeName)};if(!o.x&&!o.y&&!o.isRoot){return false}var j={height:{scroll:k.scrollHeight,client:k.clientHeight},width:{scroll:k.scrollWidth,client:k.clientWidth},scrollableX:function(){return(o.x||o.isRoot)&&this.width.scroll>this.width.client},scrollableY:function(){return(o.y||o.isRoot)&&this.height.scroll>this.height.client}};return m.y&&j.scrollableY()||m.x&&j.scrollableX()}})})(jQuery);
window.arschmitz.timelines = {
	youCantTouchThis: {
		timeline: [
			{
				title: "About Me",
				detail: "Alexander Schmitz - Development Lead jQuery Foundation - Head of Web CÜR Music",
				img: "https://avatars0.githubusercontent.com/u/462993?v=3&s=460",
				size: "large",
				color: "timeline-blue",
				notes: [
					"Hi everyone thank you for coming back for a second talk. Yesterday you heard me talk a lot about the jQuery Foundation. The work i do with the open source community goes beyond just jQuery. I work with and contribute and maintain too many open source projects, in many different areas, I enjoy writing tools for testing and have worked with many testing related projects like QUnit, Intern, Perf Jankie, and aXe and have created tools like spider.js, to help with testing everything from basic unit tests to advanced rendering tests and live site spider. I have written many grunt plugins and node modules for everything from css pre-processing to games. You get the idea…"
				]
			},
			{
				date: "",
				title: "Related Projects",
				detail: "Projects i work on related to touch input",
				img: "http://nhenze.net/uploads/Hit-It-for-Android.jpg",
				size: "medium",
				color: "timeline-salmon",
				notes: [
					"Today though i would like to focus on one specific area of the projects i work on which is those projects related to handling and simplifying one of the most fractured areas in browsers today which is input. Not so long ago this used to be a pretty simple thing to deal with. You had two basic type of input. There were mouse events, and keyboard events, and the two played very nicely together.",
					"These is not the case anymore and has not been for some time now. New input methods are being thought up every day. The biggest change that occurred to change all this was the introduction of touch events in iPhone OS  2 when everything got turned on its head. Now we have not only multiple implementations of the same events but competing standards for how events. Leading to browser fragmentation and the need for multiple code paths to handle the same thing. ",
					"thank fully for developers there have been a few libraries which have emerged to help overcome these problems. I am fortunate enough to lead or work on a few of these projects."
				]
			},
			{
				date: "Project Lead",
				title: "jQuery Mobile",
				detail: "Handles touch input on all widgets and has basic gesture support",
				img: "http://blog.jquery.com/wp-content/uploads/2015/07/icn-jquerymobile-logo.png",
				size: "small",
				color: "timeline-yellow",
				notes: [
					"jQuery Mobile is basically where it all started not only for me but for major libraries trying to handle the problem of touch input on the web. I started as a contributor and now lead the jQuery Mobile project and worked to refactor their touch and gesture support in the last 2 versions. jQuery Mobile supports a small subset of gestures and a normalized event model called vmouse"
				]
			},
			{
				date: "Project Lead",
				title: "Hammer.js",
				detail: "Stand alone Library for gesture events support",
				img: "https://avatars2.githubusercontent.com/u/7997161?v=3&s=200",
				size: "small",
				color: "timeline-orange",
				notes: [
					"Hammer.js was created by Jorik Tangler in 2012 with some of the goal of making a simple to use gesture event library. It has received 2 major re-writes which have focused in on supporting standardized gestures and improved browser support. Hammer.js has become the standard for gesture support on the internet. Earlier this year after about 6 months of talks and work between Jorik and myself Hammer.js is now a community lead project and independent organization which i currently lead."
				]
			},
			{
				date: "Team Member",
				title: "PEP",
				detail: "Pointer Events Polyfill",
				img: "https://cloud.githubusercontent.com/assets/1379244/8460397/3135099c-1fd9-11e5-9ca7-70240d46385b.png",
				size: "small",
				color: "timeline-green",
				notes: [
					"PEP is a pointer events polyfill. It has one very simple goal which is to polyfill the W3C Pointer events specification in all modern browsers. It started as part of google's Polymer project but is not part of the jQuery Foundation and is lead by Scott Gonzalez with my help. PEP has collaboration from both Microsoft and the Dojo Foundation"
				]
			},
			{
				date: "Team Member",
				title: "jQuery UI",
				detail: "Supports a variety interactions such as drag and drop",
				img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMVx1hWMy2Hl71YWh9Ou9G9tvjPH3Kfb3Dh3h9q_E8n5aSIPcDr63h1rLh",
				size: "small",
				color: "timeline-yellow",
				notes: [
					"jQuery UI is a UI widget library implemented using jQuery but for the purposes of this talk i will be focusing on the jQuery UI Interactions. jQuery UI includes widgets which add support for common interaction patterns like drag and drop, resizing, and dragging to select a range. I am currently the most active contributor to jQuery UI."
				]
			},
			{
				date: "Creator",
				title: "Hammer Time",
				detail: "Fast click based on polyfilling touch-action css",
				img: "http://static.comicvine.com/uploads/original/5/54353/3215411-mjolnir+-+hammer+of+thor+prop_color_5x-lrg.jpg",
				size: "small",
				color: "timeline-salmon",
				notes: [
					"Lastly there is Hammer Time the newest project from the hammerjs organization. Hammer time is a fast click solution which works by polyfilling the touch-action css property in non supporting browsers. I created this polyfill as a result POC for the joint efforts between the PEP and Hammer.js teams to find a way to support touch-action css.",
					"So as you can see supporting touch based input is something i am passionate about and have worked with many projects on. This might bring some of you to ask why do we need so many projects to do something that seems so simple in the apps on my phone. That is a really great question and to answer that i would like to give you an overview of the sordid 9 year history that is touch input on the web. After that i’ll let you know how far the browsers and libraries have come and show you how simple supporting complex touch interactions can be with the use of a few libraries. "
				]
			},
			{
				title: "2007",
				detail: "Year One",
				divider: true
			},
			{
				date: "June 17, 2007",
				title: "jQuery UI - First Commit",
				detail: "On june 17 2007 the first commit was made to jQuery UI, by Paul Bakaus",
				img: "http://www.hivelocity.co.jp/wp-content/uploads/2014/09/jquery.jpg",
				size: "small",
				notes: [
					"This dark tale starts back a long time ago way back in 2007  the web development landscape was very different back then and most of the JavaScript libraries we use and take for granted didn’t exist yet. It was only a year after the first release of jQuery by John Resig and on June 17 Paul Bakaus made the first commit to what would become jQuery UI. Paul intended to build a JavaScript UI library based on the solid jQuery Foundation John had built."
				]
			},
			{
				date: "June 29, 2007",
				title: "First generation iPhone",
				detail: "Only days later the first iPhone is released",
				img: "/images/iphone1.jpg",
				size: "medium",
				notes: [
					"Only 12 days later on June 29 the first iPhone was released to a lot of hype. what many of you may not remember though was that this was not nearly the iPhone many know and love today while it had “a fully functioning browser” it lacked many features including any sort of touch manipulation ability, it however showed the possibility of what a touchscreen phone could be and how it could operate."
				]
			},
			{
				date: "September 16, 2007",
				title: "jQuery UI 1.0",
				detail: "jQuery UI 1.0 is released in September of the same year",
				img: "http://mikederoche.com/images/logos/components/jqueryui.jpg",
				size: "large",
				notes: [
					"a few months later on September 16 jQuery UI 1.0 was released. It was of course written completely around mouse based input and was still at an early stage but showed promise already."
				]
			},

			{
				title: "2008",
				detail: "Year Two",
				divider: true
			},
			{
				date: "July 11, 2008",
				title: "iphone OS 2.0",
				detail: "Support for touch events added",
				img: "http://parisworkingforart.files.wordpress.com/2010/05/iphone-3g.jpg",
				size: "medium",
				notes: [
					"This brings us to year 2 in our journey 2008 brought us 2 important milestones in the epic of touch input. The first happened on July 11, 2008 when iPhone OS 2 was released along with the iphone 3g iPhone OS2 will always be remembered for one important milestone in the web. The introduction of touch events to the browser. For the first time there was a “usable” model for events and interaction for touch screens in the context of a browser. There was however a downside to this too. These  new events were not based on any standard, had no developer feedback or buy in and were completely proprietary to apple and the iPhone."
				]
			},
			{
				date: "September 23, 2008",
				title: "First Android phone released",
				detail: "The first android phone the HTC Dream is released",
				img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/512px-Android_robot.svg.png",
				size: "small",
				notes: [
					"Two months later the first android phone was released. The HTC dream introduced google's Android to the global market. This first version of android though it had a fully featured browser lacked support for any sort of touch based input model for the browser. Touch Events had not yet been introduced to the android browser being only months after their first introduction in iPhone OS 2. "
				]
			},
			{
				title: "2009",
				detail: "Year Three",
				divider: true
			},
			{
				date: "February 13, 2009",
				title: "Ticket Filed to add support for touch",
				detail: "Paul Bakus files ticket and PR to support touch events in jQuery UI",
				img: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/000/249/2cc/1b6f021.jpg",
				size: "large",
				notes: [
					"In February of 2009 Paul Bakaus the original creator of jQuery UI filed a ticket to add support for IOS to jQuery UI interactions along with a patch. However after discussions amongst the team it was decided that adding support for a non standard proprietary events system was not a good idea. Instead they would push for standardization and work at creating an abstracted interactions model capable of handling different input types. "
				]
			},
			{
				date: "Mid 2009",
				title: "W3C begins pointer discussions",
				detail: "Discussions are begun about adding a unified pointer event model to the DOM Level 3 Events",
				img: "http://www.vector-logo.net/logo_preview/eps/m/Microsoft_Internet_Explorer_Mouse_Pointer.png",
				size: "small",
				notes: [
					"Also in 2009, the W3C started discussing a unified pointer model for DOM Level 3 Events. The idea was that touch (including multi-touch), pen/stylus, and mouse events would be coalesced into a single model, making it easy to support all pointer types at once. However, this was abandoned because the goal at the time was to keep the spec as small as possible in order to become a recommendation faster."
				]
			},
			{
				date: "December 11, 2009",
				title: "Touch events land in WebKit",
				detail: "Google lands touch events in main WebKit repo",
				img: "http://www.beevoz.com/wp-content/uploads/2014/12/Google_logo.png",
				size: "medium",
				notes: [
					"It was not until december of 2009 a year and a half after touch events landed in iPhone OS 2 that touch events landed in the main WebKit repository. While this was important for adoption in other browsers it still came with its own downsides. This was not apple's Touch Events. Touch events only landed in the main WebKit repository because google reverse engineered them for use in its android phones. Because of this important difference there would always be small difference between apple and webkit touch events especially across versions."
				]
			},
			{
				title: "2010",
				detail: "Year Four",
				divider: true
			},
			{
				date: "July 6, 2010",
				title: "Firefox 4 Beta",
				detail: "Proprietary touch events added",
				img: "/images/firefoxbeta.png",
				size: "large",
				notes: [
					"In July of 2010  the Firefox 4 Beta was released. The firefox 4 beta contained their own proprietary version of touch events with different implementation api and semantics. Having competing implementations of the same event model would prove to be less than ideal for developers which had already begun coding to the apple version of touch events. now instead of 2 code paths 1 for touch and one for mouse we were now facing the possibility of having to worry about Apple Touch events, Firefox touch events plus mouse events."
				]
			},
			{
				date: "August 13, 2010",
				title: "jQuery Mobile Announced",
				detail: "jQuery Mobile is announced with the goal of fully supporting touch devices",
				img: "http://blog.jquery.com/wp-content/uploads/2015/07/icn-jquerymobile-logo.png",
				size: "medium",
				notes: [
					"A month later jQuery Mobile was announced jQuery Mobile would launch with the goal of being a “A Touch-Optimized Web Framework HTML5-based user interface system designed to make responsive web sites and apps that are accessible on all smartphone, tablet and desktop devices.” While jQuery UI could not make the jump needed to support mobile. A new Project could jump in and test the mobile waters attempting to support all common touch devices available. It would be the first truly optimized mobile framework and would blaze the way in many areas including touch input and declarative markup and would include a full AJAX navigation frame work complete with page transitions."
				]
			},
			{
				date: "October 27, 2010",
				title: "Touch Punch released",
				detail: "jQuery UI Touch Punch is released adding support for touch events to jquery ui",
				img: "https://avatars2.githubusercontent.com/u/35775?v=3&s=460",
				size: "medium",
				notes: [
					"2 months later touch support would come to jQuery UI thanks to a 3rd party add on known as jQuery UI Touch Punch. This worked by duck punching touch events to mouse events for jQuery UI to consume. While not a permanent or perfect solution it proved to work rather well and has since achieved widespread adoption with users of jQuery UI needing to support touch screens."
				]
			},
			{
				title: "2011",
				detail: "Year Five",
				divider: true
			},
			{
				date: "January 25, 2011",
				title: "W3C Touch Events",
				detail: "The W3C Begins work on touch events",
				img: "http://www.designbyfire.com/images/img_w3c_14.gif",
				size: "small",
				notes: [
					"This brings us to 2011 and year five in our 9 year journey, we are roughly at the halfway point of our journey chronologically however the drama is just beginning to ramp up. The interesting part of this tale is still yet to come. If the first part of this tale was climbing your local mountain the next stage in our Journey will be like a trek up everest. We will see more competing event models, splits in browser engines Drama in the W3C, Developer developer outrage on social media and the internet in general on a scale previously never seen before. This is about to get a lot bumpier folks so you better hold on.",
					"at the end of January 2011 the W3C began work on a touch events specification. This work began with cooperation from the jQuery foundation being represented by scott gonzalez and every major browser vendor except apple. It is also worth noting here that all of the other browser vendors which did participate did not do so because they believed in the touch events specification or even that it was the right way forward for the web. This working group was formed with the goal of web compatibility in mind and creating a specification for touch events based on the current model as quickly as possible because they believed after the move without input from developers or any outside party to introduce these new events that it was in the best interest of the community to standardize as quickly as possible."
				]
			},
			{
				date: "March 22, 2011",
				title: "Firefox 4",
				detail: "Firefox 4 adds propriatary touch events with different api in stable chanel",
				img: "/images/firefoxlogo.jpg",
				size: "small",
				notes: [
					"Firefox 4 hits the stable channel completely with the proprietary touch events model introduced in the beta version. This meant the worst fears of many developers had come true. We now had several different browsers all with their own implementations of touch events that were not compatible.",
					"The Mozilla model is much closer to the mouse event model and the abandoned W3C model in that the event objects are flat; properties such as event.pageX exist and there is no touch list. If you want to track multiple touches, you can do so via the event’s streamId."
				]
			},
			{
				date: "May 5, 2011",
				title: "First Draft of touch events spec",
				detail: "First working draft of the touch events spec is published with the W3C",
				img: "http://no-thinglikeaustralia.com.au/images/W3C_logo-large.jpg",
				size: "large",
				notes: [
					"May 5, 2011 the first draft of the touch events specification is published by the working group at the W3C it includes a basic specification based on the webkit implementation by google. however there are many questions from the working group about touch events that still need to be answered including a murky legality surrounding apple patents."
				]
			},
			{
				date: "September 13, 2011",
				title: "IE 10 Developer Preview",
				detail: "IE 10 Developer preview is released containing pointer events",
				img: "http://screenshots.nl.sftcdn.net/nl/scrn/318000/318673/internet-explorer-10-14-700x402.jpg",
				size: "large",
				notes: [
					"A few months after the publication of the first draft of the touch events specification another milestone would take place in the history of touch input which is the introduction of the IE 10 Developer Preview. This contained something completely new for the web. For better or worse we were about to see a whole new model for handling input in the browser including touch. ",
					"The IE 10 Developer preview shipped with a new prefixed event type known as pointer events. Pointer events instead of trying to introduce yet another event type and another code path for developers to have to worry about had the goal of normalizing all different types of input into a single model and event type known as a pointer event. "
				]
			},
			{
				date: "November 11, 2011",
				title: "jQuery Mobile 1.0",
				detail: "jQuery Mobile 1.0 is released supporting touch events in all widgets",
				img: "http://big.info/wp-content/uploads/2013/03/80508321d8ce3ba8aa264380bb7eba33.png",
				size: "medium",
				notes: [
					"Later on November 11, 2011 ( 11 - 11 - 11 ) jQuery Mobile 1.0 was released. jQuery Mobile introduced several important features at the time for supporting touch based input. It included an events abstraction known as Vmouse. vmouse normalized touch and mouse input into a single event model and included a fast click solution known as vclick. At the time it was the only such event abstraction available and was made available as a stand alone module as well. All of the widgets in jQuery Mobile utilized this normalized event model making it possible for them to support all types of input. In addition to the normalized events jQuery Mobile included several new custom gesture based events including tap, tap hold and swipe."
				]
			},
			{
				date: "November 16, 2011",
				title: "Apple discloses patents for touch events",
				detail: "",
				img: "http://img1.wikia.nocookie.net/__cb20121102224024/logopedia/images/2/26/Apple_2003_logo.png",
				size: "medium",
				notes: [
					"Five days later apple finally disclosed their patents regarding touch events to the W3C so they could be reviewed. to see the potential legal ramification of these patents on the touch events specification which had begun work earlier in the year. This would begin a year and a half delay in the specification due to uncertainties it raised"

				]
			},
			{
				date: "November 23, 2011",
				title: "jQuery UI Interaction adbstraction",
				detail: "jQuery UI begins writing abstraction to support any event type",
				img: "https://cdn.tutsplus.com/net/authors/jeffreyway/jquery-ui-widget-factory.jpg",
				size: "small",
				notes:[
					"Later this same month jQuery UI would begin work on its interactions abstraction. The interactions abstraction was a reaction to touch and other proprietary events systems springing up. It allowed any event type to be mapped to an interaction allowing anything capable of emitting an event within a web browser. One early demonstration of the idea allowed an original xbox controller to be used to control drag and drop within the browser."
				]
			},
			{
				title: "2012",
				detail: "Year Six",
				divider: true
			},
			{
				date: "January, 2012",
				title: "W3C forms patent advisory group",
				detail: "The W3C web events working group halts efforts and pending formation and results of PAG",
				img: "http://www.clickminded.com/wp-content/uploads/patent.jpg",
				size: "medium",
				notes: [
					"In march of the next year another tool was born to help us in our adventure to bring touch support into the browser. This one with a little bit different goal. It was one thing just to receive raw events from the browser but what about recognizing complex gestures like native apps were able to on the iPhone and androids. Things like pinch to zoom, rotate, swipe, tap, double tap, pan or others. defining and recognizing these gestures especially multi touch ones is its own complex task, made even more daunting when you are forced to deal with competing event models and implementations.  it was out of this complexity that hammer.js was born a small library with the singular goal of implementing gesture events in the browser."
				]
			},
			{
				date: "Mar 2, 2012",
				title: "First commit of Hammer.js",
				detail: "First commit is made to hammer.js to attempt to create a gesture library for the web",
				img: "https://avatars1.githubusercontent.com/u/1243901?v=3&s=460",
				size: "medium",
				notes: [
					"A month later my good friend and fellow development lead with the jQuery Foundation published a key blog post about the current state of touch input in the browser. He covered a brief history up until that point and went on to give a critical unbiased comparison of the now competing touch and pointer event models. The murky future of touch events with all of their pending patent issues as well as the fact that it was questionable just what browser vendors would even be willing to implement either model. He concluded with a call to action to both Microsoft and the community. Microsoft he called upon to submit pointer events to the W3C to become a spec. The community he called upon to try building things with both of the the new event models and give their feedback."
				]
			},
			{
				date: "April 10th, 2012",
				title: "Blog Post on future of touch",
				detail: "Scott publishes Getting touchy about patents",
				img: "https://avatars2.githubusercontent.com/u/141167?v=3&s=460",
				size: "large",
				notes: [
					"In July the Patent advisory committee concluded its work finding that of the 8 patents submitted by apple for consideration in relation to the touch events specification. That though none of them were submitted under a royalty free agreement that would have allowed them to be used as part of the specification that 7 of the patents had previously been rejected by the US patent office or were still pending and of the 1 patent that was found to be valid the pending pointer events specification had no relation to so it was concluded that work would be able to continue on the specification"
				]
			},
			{
				date: "July 6, 2012",
				title: "Touch Events PAG concludes",
				detail: "The Touch Events patent advisory committe concludes there is no infringment",
				img: "http://spicyip.com/wp-content/uploads/2013/07/denied-721524.png",
				size: "small",
				notes: [
					"Several months later with the encouragement of both the jQuery Foundation and the community microsoft submitted a proposal for the pointer events specification to the W3C. This essentially revived the work begun in 2009 as the new pointer events specification was very similar to the work begun then. One major advantage of both of these approaches over touch events is that is that they support multiple types of pointer devices and are not touch specific. In fact, tablet running Windows 8, mouse, pen, and fingers are all normalized to Pointer; you can even use the pointerType property to determine which type of pointer is being used. In addition to supporting all current pointer devices, Pointer events are designed in such a way that future devices can easily be added, and existing code will automatically support the new device. Even better, Pointer event objects have the same structure as other events, reducing the learning curve compared to the conglomerate of TouchEvent, TouchList, and Touch.",
					"Another big difference between Pointer and Touch is that Pointer has support for hovering (over and out events). While most touch devices have a hardware limitation that doesn’t allow for hovering, there are devices which do for example some sony xperia devices have a floating touch technology, and the samsung galaxy note line support hovering with a stylus. As technology continues to evolve this will become more common. This brings up an important issue: Touch Events were designed based on a specific device for a specific type of input. Pointer Events represent a completely different approach to input on the Web. While we’ve already covered how this impacts developers, it’s interesting to consider the impact on hardware manufacturers. In order for Apple to succeed with touch interfaces, they had to create a new event model. Innovation for new form factors and new input methods will either be stifled by the existing standards or will require a new set of APIs, following in Apple’s footsteps with the iPhone and Touch Events. Pointer Events provides a clean solution not only for developers, but for hardware manufacturers as well.",
					"In his blog post Scott said and i quote “It’s conceivable that in a few years developers could use Pointer Events as the only event model for pointers, leaving Mouse Events as a thing of the past.” This will  be important to remember in a few minutes as we move down our timeline"
				]
			},
			{
				date: "September 27, 2012",
				title: "Microsoft submits Pointer Events proposal",
				detail: "Microsoft submits the Pointer Events proposal to the W3C",
				img: "https://www.w3.org/TR/pointerevents/pointer.png",
				size: "large",
				notes: [
					"a couple months forward on our journey in November the W3C formed the pointer events working group to pursue the proposal submitted by microsoft. The group includes representation from all of the major browser vendors once again. Well except of course apple…"
				]
			},
			{
				date: "November 9, 2012",
				title: "Pointer Events W3C Working group formed",
				detail: "The W3C forms a working group for pointer events specification",
				img: "http://www.w3.org/TR/pointerevents/pointer.png",
				size: "medium"
			},
			{
				date: "November 25, 2012",
				title: "Chrome opens issue to implment pointer events",
				detail: "The chrome team opens an issue with the intent to implement pointer events",
				img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Chromium_11_Logo.svg/1000px-Chromium_11_Logo.svg.png",
				size: "large"
			},
			{
				date: "November 29, 2012",
				title: "Toolkitchen Polyfill refuses oldIE",
				detail: "",
				img: "http://www.html5hacks.com/wp-content/uploads/2013/05/pointerevents.jpg",
				size: "small"
			},
			{
				date: "December 11, 2012",
				title: "Pointer Events First Draft",
				detail: "The first draft of the pointer events specification is published by the W3C",
				img: "http://www.thesba.com/wp-content/uploads/2013/05/Ie8logo1.png",
				size: "medium"
			},
			{
				title: "2013",
				detail: "Year Seven",
				divider: true
			},
			{
				date: "January 8, 2013",
				title: "Firefox removes propriatary events",
				detail: "Firefox removes propriatary version of touch events",
				img: "/images/firefoxlogo.jpg",
				size: "small"
			},
			{
				date: "February 20, 2013",
				title: "Microsoft anounces hand.js",
				detail: "Microsoft announces their own pointer events polyfill hand.js",
				img: "https://upload.wikimedia.org/wikipedia/en/b/ba/DrawingHands.jpg",
				size: "medium"
			},
			{
				date: "February 26, 2013",
				title: "Hammer.js 1.0",
				detail: "Hammer.js 1.0 is released brining the first simple gesture support to the web",
				img: "https://avatars2.githubusercontent.com/u/7997161?v=3&s=460",
				size: "large"
			},
			{
				date: "March 11, 2013",
				title: "jQuery Special Events implementation",
				detail: "jQuery UI Team begins work on special events polyfill for pointer events",
				img: "http://blog.roymj.co.in/wp-content/uploads/2014/01/jquery-events.png",
				size: "small"
			},
			{
				date: "May 9, 2013",
				title: "Touch events become a W3C Propsed Recomendation",
				detail: "W3C publishes touch events Propsed recomendation for consideration",
				img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/W3C%C2%AE_Icon.svg/2000px-W3C%C2%AE_Icon.svg.png",
				size: "large"
			},
			{
				date: "May 14, 2013",
				title: "jquery-pointer-events create",
				detail: "jQuery Implementation of pointer events intended to follow",
				img: "https://cdn.tutsplus.com/net/uploads/legacy/359_jqueryTips/jquery.png",
				size: "large"
			},
			{
				date: "June 7, 2013",
				title: "Decision to use Polymer",
				detail: "The decision is made to promote the polymer polyfill as the one true polyfill",
				img: "https://avatars2.githubusercontent.com/u/2159051?v=3&s=400",
				size: "medium"
			},
			{
				date: "October 10, 2013",
				title: "Touch Events becomes a W3C Recomendation",
				detail: "The W3C publishes the Touch Events recomendation",
				img: "http://www.w3.org/Talks/Tools/Slidy2/graphics/w3c-logo-slanted.jpg",
				size: "large"
			},
			{
				date: "October 28, 2013",
				title: "Touch Events Community Group",
				detail: "The touch events working group is disbanded and a community group formed",
				img: "http://www.girliemac.com/presentation-slides/html5-mobile-usecases/images/w3c-community-logo.png",
				size: "small"
			},
			{
				title: "2014",
				detail: "Year Eight",
				divider: true
			},
			{
				date: "May 20, 2014",
				title: "Chrome ships touch-action css",
				detail: "Chrome stable ships touch-action css",
				img: "https://gigaom.com/wp-content/uploads/sites/1/2013/04/chrome-tablet.jpg?quality=80&strip=all",
				size: "medium"
			},
			{
				date: "July 11, 2014",
				title: "Hammer.js 2.0 released",
				detail: "Hammer.js 2.0 focus on solid and consistent gesture events, and multi touch",
				img: "http://i.stack.imgur.com/wolsW.png",
				size: "small"
			},
			{
				date: "August 12, 2014",
				title: "Polymer Pointer Events marked deprecated",
				detail: "The polymer pointer events polyfill is unexpectedly marked as deprecated",
				img: "https://avatars2.githubusercontent.com/u/2159051?v=3&s=400",
				size: "medium"
			},
			{
				date: "August 15, 2014",
				title: "Chrome closes issues to implement Pointer Events",
				detail: "Chrome decides not to implement pointer events, citing various reason including apples unwillingness",
				img: "https://lh3.ggpht.com/O0aW5qsyCkR2i7Bu-jUU1b5BWA_NygJ6ui4MgaAvL7gfqvVWqkOBscDaq4pn-vkwByUx=w300",
				size: "large"
			},
			{
				date: "November 13, 2014",
				title: "Last Call for pointer events",
				detail: "Last call working draft published for Pointer events",
				img: "http://images.chesscomfiles.com/uploads/images_users/tiny_mce/Egyptian_Assassin/phpAytUWZ.gif",
				size: "large"
			},
			{
				date: "December 16, 2014",
				title: "Pointer events proposed recomendation published by W3C",
				detail: "W3C published proposed recomendationf for pointer events",
				img: "http://www.html5hacks.com/wp-content/uploads/2013/05/pointerevents.jpg",
				size: "small"
			},
			{
				date: "December 16, 2014",
				title: "Polymer Pointer Evenets polyfill transfered",
				detail: "Google transfers the polymer pointer events polyfill to the jQuery Foundation for further development",
				img: "https://brand.jquery.org/resources/jquery-mark-light.gif",
				size: "small"
			},
			{
				title: "2015",
				detail: "Year Nine",
				divider: true
			},
			{
				date: "February 5, 2015",
				title: "Formal complaint filed",
				detail: "Yandex files formal complain suggestion the pointer events specification should not be published",
				img: "http://www.nixsolutions.com/uploads//2013/03/yandex.png",
				size: "medium"
			},
			{
				date: "February 24, 2015",
				title: "Pointer Events Recomendation published by W3C",
				detail: "Almost 6 years to the day after inital PR for adding touch support to UI pointer events spec published",
				img: "https://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/EventOverview/Art/tablet_events2_2x.png",
				size: "large"
			},
			{
				date: "February 24, 2015",
				title: "Closed chrome issue for pointer events locked",
				detail: "Closing issues results in developer out rage on social media and issue is quickly reopened to comments",
				img: "http://screenshots.en.sftcdn.net/blog/en/2013/09/AngryTwitter-664x374.jpg",
				size: "medium"
			},
			{
				date: "March 25, 2015",
				title: "Chrome reverse decision on pointer events",
				detail: "Chrome team bowing to developer feedback reverses their decision not to implement pointer events.",
				img: "http://d0od.wpengine.netdna-cdn.com/wp-content/uploads/2014/09/android-chrome-apk-maker-icon.png",
				size: "small"
			},
			{
				date: "April 21, 2015",
				title: "First release of PEP",
				detail: "PEP 0.3.1 is released this is the first official release",
				img: "https://cloud.githubusercontent.com/assets/1379244/8460397/3135099c-1fd9-11e5-9ca7-70240d46385b.png",
				size: "medium"
			},
			{
				date: "June 7, 2015",
				title: "Hammer.js becomes a community project",
				detail: "Hammer.js is turned over to Alex Schmitz to become a community project",
				img: "https://avatars0.githubusercontent.com/u/462993?v=3&s=460",
				size: "small"

			},
			{
				date: "June 11, 2015",
				title: "PEP, Hammer.js, Microsoft collaborate on touch-action",
				detail: "All three teams decide to work together to try to find a way to support css touch-action",
				img: "http://i.istockimg.com/file_thumbview_approve/42594676/3/stock-photo-42594676-human-hand-touch-action.jpg",
				size: "small"
			},
			{
				date: "June 18, 2015",
				title: "jQuery Mobile decides to adopt Hammer.js",
				detail: "jQuery Mobile team votes to replace custom gestures",
				img: "http://demos.jquerymobile.com/1.4.5/_assets/img/devices.png",
				size: "medium"
			},
			{
				date: "July 30, 2015",
				title: "Teams settle on touch-action approach",
				detail: "Through discussion a workable approach and proof of concept are created",
				img: "http://2011.igem.org/wiki/images/thumb/2/28/Collaboration-hands.jpg/500px-Collaboration-hands.jpg",
				size: "large"
			},
			{
				date: "August 7th, 2015",
				title: "Hammer Time released",
				detail: "First fast click based on touch action css",
				img: "http://cdn.shopify.com/s/files/1/0263/4245/products/hammertime.jpg?v=1383097227",
				size: "medium"
			},
			{
				title: "Now",
				detail: "Where are we",
				divider: true
			},
			{
				title: "Its a fractured landscape",
				detail: "Touch events not consistent in different browsers, limited support for touch-action" +
					"even more limited support for pointer events.",
				img: "http://img04.deviantart.net/b8f6/i/2009/176/8/9/fractured_ground_texture_by_r3ds0ld13r.jpg",
				size: "large",
				color: "timeline-orange"
			},
			{
				title: "Multiple code paths",
				detail: "Today because of this limited and mixed support we are forced to maintain multiple" +
					"discreet code paths for worse yet even combinations of multiple paths",
				img: "http://i.stack.imgur.com/7C2kD.png",
				size: "medium",
				color: "timeline-green"
			},
			{
				title: "There has to be a better way?",
				detail: "There is thanks to the hard work of the open source community today we have options",
				img: "http://www.youritservices.co.nz/wp-content/uploads/2015/01/Open-Source.jpg",
				size: "large",
				color: "timeline-blue"
			},
			{
				title: "Libs",
				detail: "to the rescue!",
				divider: true
			},
			{
				date: "Uses: Input normalization",
				title: "PEP - Pointer Events Polyfill",
				detail: "Allows you to handle a single set of events regardless of browser",
				img: "https://cloud.githubusercontent.com/assets/1379244/8460397/3135099c-1fd9-11e5-9ca7-70240d46385b.png",
				size: "medium",
				color: "timeline-yellow",
				codeSample: [
					'$( ".ss-row h3" ).on( "pointerenter pointerleave", function( e ){',
					'	$( this )[ e.type === "pointerenter" ? "addClass" : "removeClass"  ]( "timeline-hover" );',
					'});'
				]
			},
			{
				date: "Uses: Advanced interactivity",
				title: "jQuery UI + Touch Punch",
				detail: "Rock solid tested interactions out of the box. Flexible and extenible widgets for Draggable, droppable, sortable, resizable, and selectable",
				img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTzP0kZjL2JJRSiW2aq4eULzrVf5XkL4y2uSFJB1Sp9BIQ4bze0UQ",
				size: "medium",
				color: "timeline-blue",
				codeSample: [
					'// Draggable',
					'$( ".ss-circle" ).draggable();',
					'',
					'// Sortable',
					'$( ".ss-container" ).sortable();'
				]
			},
			{
				date: "Uses: Gesture Support",
				title: "Hammer.js",
				detail: "Support common gestures like pan, pinch, press, rotate, swipe, and tap across platoforms",
				img: "https://avatars2.githubusercontent.com/u/7997161?v=3&s=200",
				size: "medium",
				color: "timeline-salmon",
				codeSample: [
					'// Basic Setup for pan, press, swipe, and tap',
					'var ham = new Hammer( ele, {',
					'	domEvents: true',
					'} );',
					'',
					'// Setup addint pinch and rotate',
					'var ham = new Hammer( ele, {',
					'	domEvents: true',
					'} );',
					'hammer.get( "rotate" ).set({ enable: true });',
					'ham.get( "pinch" ).set({ enable: true });'
				]
			},
			{
				date: "Uses: Fast Click",
				title: "Hammer Time",
				detail: "New fast click from the hammer.js team based on the touch-action spec",
				img: "http://cdn.shopify.com/s/files/1/0263/4245/products/hammertime.jpg?v=1383097227",
				size: "medium",
				color: "timeline-green",
				codeSample: [
					'<div class="target" style="touch-action:none"></div>'
				]
			},
			{
				date: "Uses: Fast Click",
				title: "Fast Click",
				detail: "The best known and most used fast click solution",
				img: "http://foundation.zurb.com/assets/img/learn/features/fast-click.svg",
				size: "medium",
				color: "timeline-salmon",
				codeSample: [
					'$(function() {',
						'FastClick.attach(document.body);',
					'});'
				]
			}
		]
	}
}
this["templates"] = this["templates"] || {};

this["templates"]["API"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "				<p>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</p>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<div class=\"col-xs-12 float-box\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"API.globalObjects.",(data && data.key),{"name":"json","hash":{},"data":data}))
    + ">\n				<div class=\"api-section\">\n					<h2>window."
    + alias2(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "</h2>\n					<h3><span class=\"bold\">Description: </span>"
    + alias2(this.lambda((depth0 != null ? depth0.description : depth0), depth0))
    + "</h3>\n				</div>\n				<h3 class=\"api-global-section\">\n					<div class=\"row\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"API.globalObjects.",(data && data.key),".methods",{"name":"json","hash":{},"data":data}))
    + ">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.methods : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "					</div>\n					<div class=\"row\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"API.globalObjects.",(data && data.key),".properties",{"name":"json","hash":{},"data":data}))
    + ">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.properties : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "					</div>\n				</h3>\n			</div>\n";
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return "						<div class=\"api-section-heading\">\n							<h2>Methods: </h2>\n						</div>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.methods : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"5":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "						<div class=\"col-xs-12 project float-box\">\n							<h3><span class=\"bold\">Name: </span><code>"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</code></h3>\n							<h4><span class=\"bold\">Description: </span>"
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + "</h4>\n						</div>\n";
},"7":function(depth0,helpers,partials,data) {
    var stack1;

  return "						<div class=\"api-section-heading\">\n							<h2>Properties: </h2>\n						</div>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.properties : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"content\" data-background=\"https://code.jquery.com/ui/jquery-ui-git.js\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"API",{"name":"json","hash":{},"data":data}))
    + ">\n	"
    + alias2((helpers.title || (depth0 && depth0.title) || alias1).call(depth0,"API",{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"row\">\n		<div class=\"col-xs-12 float-box project\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"API.description",{"name":"json","hash":{},"data":data}))
    + ">\n			<h1>"
    + alias2(this.lambda(((stack1 = (depth0 != null ? depth0.API : depth0)) != null ? stack1.description : stack1), depth0))
    + "</h1>\n		</div>\n	</div>\n	<div class=\"row\">\n		<div class=\"col-xs-12 float-box project\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"APIinstructions",{"name":"json","hash":{},"data":data}))
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.API : depth0)) != null ? stack1.instructions : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div>\n	<div class=\"row\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"API.globalObjects",{"name":"json","hash":{},"data":data}))
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.API : depth0)) != null ? stack1.globalObjects : stack1),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</div>\n";
},"useData":true});

this["templates"]["aboutMe"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "				<li>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</li>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3=this.lambda;

  return "			<div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 float-box project\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"aboutMe.pastExperience[ '",(data && data.key),"' ]",{"name":"json","hash":{},"data":data}))
    + ">\n				<h1 class=\"project-name\"><span class=\"bold\">Company: </span>"
    + alias2(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "</h1>\n				<h4 class=\"project-website\"><span class=\"bold\">Title: </span>"
    + alias2(alias3((depth0 != null ? depth0.title : depth0), depth0))
    + "</h4>\n				<h4 class=\"project-github\"><span class=\"bold\">Time: </span>"
    + alias2(alias3((depth0 != null ? depth0.time : depth0), depth0))
    + "</h4>\n				<h4 class=\"project-api\"><span class=\"bold\">Responsibilities: </span></h4>\n				<ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.responsibilities : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "				</ul>\n			</div>\n";
},"4":function(depth0,helpers,partials,data) {
    return "					<li>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</li>\n";
},"6":function(depth0,helpers,partials,data) {
    return "				<li class=\"row\">\n					<h4><span class=\"bold\">Fact: </span>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</h4>\n				</li>\n";
},"8":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "				<li class=\"libScore-item\">\n		<a href=\"http://"
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\" class=\"row\">\n			<div class=\"col-xs-8\">\n				<h4><span class=\"bold\">Site: </span>"
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "</h4>\n			</div>\n			<div class=\"col-xs-2\">\n				<h4><span class=\"bold\">Lib: </span>"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.lib : depth0),{"name":"each","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</h4>\n			</div>\n			<div class=\"col-xs-2\">\n				<h4><span class=\"bold\">Rank: </span>"
    + alias2(alias1((depth0 != null ? depth0.rank : depth0), depth0))
    + "</h4>\n			</div>\n		</a>\n	</li>\n";
},"9":function(depth0,helpers,partials,data) {
    return this.escapeExpression(this.lambda(depth0, depth0))
    + ",";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3=this.lambda;

  return "<div class=\"content\" data-background=\"/src/me.js\" data-json=\"arschmitz.aboutMe\">\n	"
    + alias2((helpers.title || (depth0 && depth0.title) || alias1).call(depth0,"aboutMe",{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"row\">\n		<div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 float-box project\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"aboutMe.avatar",{"name":"json","hash":{},"data":data}))
    + ">\n			<img class=\"about-avatar\" src=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.avatar : stack1), depth0))
    + "\"/>\n		</div>\n		<div  "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"aboutMe.contact",{"name":"json","hash":{},"data":data}))
    + " class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 last-lg last-md float-box project\">\n			<h2 class=\"project-name\"><span class=\"bold\">Email: </span><a href=\"mailto:"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.email : stack1), depth0))
    + "\">"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.email : stack1), depth0))
    + "</a></h2>\n			<h4 class=\"project-website\"><span class=\"bold\">Twitter: </span><a href=\"http://twitter.com/"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.twitter : stack1), depth0))
    + "\">"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.twitter : stack1), depth0))
    + "</a></h4>\n			<h4 class=\"project-github\"><span class=\"bold\">Github: </span><a href=\"https://github.com/"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.github : stack1), depth0))
    + "\">"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.github : stack1), depth0))
    + "</a></h4>\n			<h4 class=\"project-api\"><span class=\"bold\">IRC: </span>"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.irc : stack1), depth0))
    + "</h4>\n			<h4 class=\"project-issues\"><span class=\"bold\">LinkedIn: </span><a href=\""
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.linkedIn : stack1), depth0))
    + "\">"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.linkedIn : stack1), depth0))
    + "</a></h4>\n		</div>\n		<div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12 float-box project\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"aboutMe.basic",{"name":"json","hash":{},"data":data}))
    + ">\n			<h2 class=\"project-name\"><span class=\"bold\">Name: </span>"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.basic : stack1)) != null ? stack1.name : stack1), depth0))
    + "</h2>\n			<h4 class=\"project-website\"><span class=\"bold\">Age: </span>"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.basic : stack1)) != null ? stack1.age : stack1), depth0))
    + "</h4>\n			<h4 class=\"project-api\"><span class=\"bold\">Profession: </span>"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.basic : stack1)) != null ? stack1.profession : stack1), depth0))
    + "</h4>\n			<h4 class=\"project-issues\"><span class=\"bold\">Current Hats 🎩: </span>"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.basic : stack1)) != null ? stack1.title : stack1), depth0))
    + "</h4>\n		</div>\n	</div>\n	<div class=\"row\">\n		<div "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"aboutMe.description",{"name":"json","hash":{},"data":data}))
    + " class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 float-box project\">\n			<h2 class=\"talk-description\"><span class=\"bold\">Description: </span></h2>\n			<h3>"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.description : stack1), depth0))
    + "</h3>\n		</div>\n		<div "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"aboutMe.currentPosition",{"name":"json","hash":{},"data":data}))
    + " class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 float-box project\">\n			<h1 class=\"project-name\"><span class=\"bold\">Organization: </span>"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.currentPosition : stack1)) != null ? stack1.company : stack1), depth0))
    + "</h1>\n			<h4 class=\"project-website\"><span class=\"bold\">Title: </span>"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.currentPosition : stack1)) != null ? stack1.title : stack1), depth0))
    + "</h4>\n			<h4 class=\"project-github\"><span class=\"bold\">Time: </span>"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.currentPosition : stack1)) != null ? stack1.time : stack1), depth0))
    + "</h4>\n			<h4 class=\"project-api\"><span class=\"bold\">Responsibilities: </span></h4>\n			<h4><ul>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.currentPosition : stack1)) != null ? stack1.responsibilities : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "			</ul></h4>\n		</div>\n	</div>\n	<div class=\"row\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.pastExperience : stack1),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n	<div class=\"row\">\n		<div class=\"col-xs-12 float-box\">\n			<h2><span class=\"bold\">Fun Facts:</span></h2>\n			<ul class=\"styled-list fun-facts\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.funFacts : stack1),{"name":"each","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "			</ul>\n		</div>\n	</div>\n	<div class=\"row\">\n		<div class=\"col-xs-12 float-box\">\n			<h2><span class=\"bold\">Sites built with projects I help lead or work on:</span></h2>\n			<ul class=\"styled-list\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.libScore : stack1),{"name":"each","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "			</ul>\n		</div>\n	</div>\n</div>\n";
},"useData":true});

this["templates"]["aboutTheSite"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "				<h3>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</h3>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<div class=\"col-md-6 col-xs-12 float-box\">\n				<div class=\"api-section\">\n					<h2>"
    + alias2(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "</h2>\n				</div>\n				<h3 class=\"api-global-section\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"aboutTheSite.sections.",(data && data.key),{"name":"json","hash":{},"data":data}))
    + ">\n					<div class=\"row\">\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "					</div>\n				</h3>\n			</div>\n";
},"4":function(depth0,helpers,partials,data) {
    return "							<p>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</p>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"content\" data-background=\"https://code.jquery.com/ui/jquery-ui-git.js\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"aboutTheSite",{"name":"json","hash":{},"data":data}))
    + ">\n	"
    + alias2((helpers.title || (depth0 && depth0.title) || alias1).call(depth0,"aboutTheSite",{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"row\">\n		<div class=\"col-xs-12 float-box project\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"aboutTheSite.intro",{"name":"json","hash":{},"data":data}))
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.aboutTheSite : depth0)) != null ? stack1.intro : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div>\n	<div class=\"row\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"aboutTheSite.sections",{"name":"json","hash":{},"data":data}))
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.aboutTheSite : depth0)) != null ? stack1.sections : stack1),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</div>\n";
},"useData":true});

this["templates"]["community"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3=this.lambda;

  return "		<div href class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 float-box project\" data-json=\"arschmitz.community."
    + alias2(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "\">\n			<div class=\"row project-row\">\n				<div class=\"col-xs-2\">\n					<img class=\"community-logo\" src=\""
    + alias2(alias3((depth0 != null ? depth0.logo : depth0), depth0))
    + "\">\n				</div>\n				<div href class=\"col-xs-10\">\n					<h2 class=\"talks-name\"><span class=\"bold\">Organization: </span>"
    + alias2(alias3((depth0 != null ? depth0.organization : depth0), depth0))
    + "</h2>\n				</div>\n				<div href class=\"col-xs-12\">\n					"
    + alias2((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,(depth0 != null ? depth0.website : depth0),"Website",3,{"name":"hlink","hash":{},"data":data}))
    + "\n					"
    + alias2((helpers.h || (depth0 && depth0.h) || alias1).call(depth0,3,"Role",(depth0 != null ? depth0.role : depth0),{"name":"h","hash":{},"data":data}))
    + "\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.work : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n		</div>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "					<h3 class=\"talks-title\"><span class=\"bold\">Work: </span>\n						<ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.work : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "						</ul>\n					</h3>\n";
},"3":function(depth0,helpers,partials,data) {
    return "							<li>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"content\" data-background=\"https://code.jquery.com/ui/jquery-ui-git.js\" data-json=\"arschmitz.community\">\n	"
    + this.escapeExpression((helpers.title || (depth0 && depth0.title) || helpers.helperMissing).call(depth0,"community",{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"row project-row\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.community : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</div>\n";
},"useData":true});

this["templates"]["effects"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"effects-page\" class=\"content\" data-background=\"/src/effects.js\">\n	"
    + this.escapeExpression((helpers.title || (depth0 && depth0.title) || helpers.helperMissing).call(depth0,"effects",{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"row\">\n		<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 float-box project\">\n			<h1>Effects:</h1>\n			<h3>This section is a playground for different effects and effects related function built into the website</h3>\n			<h3>Any effect can be aborted and the normal look restored by pressing the escape key or double tapping at any time</h3>\n			<h3 class=\"warning\">Some of the effects or combinations of effects on this page will simultaniously animate hundreds of elements at the same time and can lead to freezing in some cases attempt at your own risk :-) ! Remember hit escape or double tap at any time to rest and stop all animations</h3>\n		</div>\n		<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 float-box project\">\n			<h1>Transitions:</h1>\n			<h3>These settings control the default page transition for the website</h3>\n			<label for=\"transition\"><h4>transition:</h4></label>\n			<select id=\"transition\">\n				<option>blind</option>\n				<option>bounce</option>\n				<option>clip</option>\n				<option>drop</option>\n				<option>explode</option>\n				<option selected>fade</option>\n				<option>fold</option>\n				<option>highlight</option>\n				<option>puff</option>\n				<option>pulsate</option>\n				<option>scale</option>\n				<option>shake</option>\n				<option>size</option>\n				<option>slide</option>\n				<option>transfer</option>\n			</select>\n			<label for=\"duration\"><h4>duration:</h4></label>\n			<input type=\"number\" min=\"0\" max=\"10000\" id=\"duration\" value=\"200\">\n			<br/><br/>\n		</div>\n		<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 float-box project\">\n			<h1>Canned Effects:</h1>\n			<div class=\"row\">\n				<button class=\"col-xs-10 col-xs-offset-1 effect-button\" data-call=\"effects.iAmTheSpoon();\">effects.iAmTheSpoon();</button>\n				<button class=\"col-xs-10 col-xs-offset-1 effect-button\" data-call=\"effects.iHaveTheSpins();\">effects.iHaveTheSpins();</button>\n				<button class=\"col-xs-10 col-xs-offset-1 effect-button\" data-call=\"effects.partyMode();\">effects.partyMode();</button>\n				<button class=\"col-xs-10 col-xs-offset-1 effect-button\" data-call=\"effects.visualize();\">effects.visualize();</button>\n			</div>\n		</div>\n		<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 float-box project\">\n			<h1>Flashmob Effects:</h1>\n			<div class=\"row\">\n				<button class=\"col-xs-10 col-xs-offset-1 effect-button\" data-call='effects.flashMob( \"bounce\", [ \"rebelcruiser\", \"xwing\" ], 10000 );'>Rebel Attack: effects.flashMob( \"drop\", [ \"rebelcruiser\", \"xwing\" ], 10000 );</button>\n				<button class=\"col-xs-10 col-xs-offset-1 effect-button\" data-call='effects.flashMob( \"puff\", [ \"stardestroyer\", \"tiefighter\" ], 10000 );'>Imperial Attack: effects.flashMob( \"puff\", [ \"rebelcruiser\", \"xwing\" ], 10000 );</button>\n				<button class=\"col-xs-10 col-xs-offset-1 effect-button\" data-call='effects.flashMob( \"size\", [ \"battledroid\" ], 10000 );'>Droid Blackhole: effects.flashMob( \"size\", [ \"battledroid\" ], 10000 );</button>\n				<button class=\"col-xs-10 col-xs-offset-1 effect-button\" data-call='effects.flashMob( \"explode\", \"explosion\", 10000 );'>Michael Bay: effects.flashMob( \"explode\", \"explosion\", 10000 );</button>\n			</div>\n		</div>\n	</div>\n</div>\n";
},"useData":true});

this["templates"]["help"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "				<h3>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</h3>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<div class=\"col-xs-12 float-box\">\n				<div class=\"api-section\">\n					<h2><span class=\"bold\">Section: </span>"
    + alias2(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "</h2>\n				</div>\n				<h3 class=\"api-global-section\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"help.sections.",(data && data.key),{"name":"json","hash":{},"data":data}))
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "					</div>\n				</h3>\n			</div>\n";
},"4":function(depth0,helpers,partials,data) {
    return "							<h4>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</h4>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"content\" data-background=\"https://code.jquery.com/ui/jquery-ui-git.js\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"help",{"name":"json","hash":{},"data":data}))
    + ">\n	"
    + alias2((helpers.title || (depth0 && depth0.title) || alias1).call(depth0,"help",{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"row\">\n		<div class=\"col-xs-12 float-box project\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"help.top",{"name":"json","hash":{},"data":data}))
    + ">\n			<h1 class=\"bold\">Introduction:</h1>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.help : depth0)) != null ? stack1.top : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div>\n	<div class=\"row\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"help.sections",{"name":"json","hash":{},"data":data}))
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.help : depth0)) != null ? stack1.sections : stack1),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</div>\n";
},"useData":true});

this["templates"]["issues"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "		<li class=\"warning\"><h2>"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.currentIssues : depth0)) != null ? stack1.message : stack1), depth0))
    + "</h2></li>\n";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.currentIssues : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"4":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.escapeExpression, alias2=this.lambda;

  return "		<li class=\"issue-item\" "
    + alias1((helpers.json || (depth0 && depth0.json) || helpers.helperMissing).call(depth0,(depths[1] != null ? depths[1].type : depths[1]),(depths[1] != null ? depths[1].repoName : depths[1]),".currentIssues['",(data && data.key),"']",{"name":"json","hash":{},"data":data}))
    + ">\n			<a href=\""
    + alias1(alias2((depth0 != null ? depth0.url : depth0), depth0))
    + "\" class=\"row\">\n				<div class=\"col-xs-2\">\n					<img src=\""
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.avatar_url : stack1), depth0))
    + "\" class=\"issue-avatar\">\n				</div>\n				<div class=\"col-xs-10\">\n					<h3 class=\"issue-title\">"
    + alias1(alias2((depth0 != null ? depth0.title : depth0), depth0))
    + "</h3>\n					<h4 class=\"issue-info\">#"
    + alias1(alias2((depth0 != null ? depth0.number : depth0), depth0))
    + " - Opened at "
    + alias1(alias2((depth0 != null ? depth0.created_at : depth0), depth0))
    + " by "
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.login : stack1), depth0))
    + "</h4>\n				</div>\n			</a>\n		</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<ul class=\"styled-list\" "
    + this.escapeExpression((helpers.json || (depth0 && depth0.json) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.type : depth0),(depth0 != null ? depth0.repoName : depth0),".currentIssues",{"name":"json","hash":{},"data":data}))
    + ">\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.currentIssues : depth0)) != null ? stack1.message : stack1),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.program(3, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true,"useDepths":true});

this["templates"]["libScore"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=this.escapeExpression, alias2=this.lambda;

  return "	<li class=\"libScore-item\" "
    + alias1((helpers.json || (depth0 && depth0.json) || helpers.helperMissing).call(depth0,(depths[1] != null ? depths[1].type : depths[1]),(depths[1] != null ? depths[1].repoName : depths[1]),".libScore.short['",(data && data.key),"']",{"name":"json","hash":{},"data":data}))
    + ">\n		<a href=\"http://"
    + alias1(alias2((depth0 != null ? depth0.url : depth0), depth0))
    + "\" class=\"row\">\n			<div class=\"col-xs-10\">\n				<h4><span class=\"bold\">Site: </span>"
    + alias1(alias2((depth0 != null ? depth0.url : depth0), depth0))
    + "</h4>\n			</div>\n			<div class=\"col-xs-2\">\n				<h4><span class=\"bold\">Rank: </span>"
    + alias1(alias2((depth0 != null ? depth0.rank : depth0), depth0))
    + "</h4>\n			</div>\n		</a>\n	</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<ul class=\"styled-list\" "
    + this.escapeExpression((helpers.json || (depth0 && depth0.json) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.type : depth0),(depth0 != null ? depth0.repoName : depth0),".libScore.short",{"name":"json","hash":{},"data":data}))
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.libScore : depth0)) != null ? stack1['short'] : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true,"useDepths":true});

this["templates"]["main"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "			<div class=\"menu-button-wrap col-lg-2 col-md-4 col-sm-6 col-xs-12\">\n				<button data-call=\"gui.render( '"
    + alias2(alias1(depth0, depth0))
    + "' );\">"
    + alias2(alias1(depth0, depth0))
    + "</button>\n			</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"content\" data-background=\"http://code.jquery.com/jquery-git.js\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"menu",{"name":"json","hash":{},"data":data}))
    + ">\n	<h1 class=\"site-title\">> arschmitz.me -  JavaScript is Beautiful</h1>\n	<div class=\"menu row\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"menu",{"name":"json","hash":{},"data":data}))
    + ">\n		<div class=\"col-lg-1 col-md-2 col-sm-3\"></div>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.menu : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n	<div class=\"main-message\">\n		<h2><span class=\"bold\">Open Source: </span></h2>\n		<h4>I believe open source software is the corner stone of the internet.</h4>\n		<p>This website and everything else I work on is open source and available on github with an MIT license.</p>\n	</div>\n</div>\n";
},"useData":true});

this["templates"]["project"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return this.escapeExpression(((helper = (helper = helpers.dist || (depth0 != null ? depth0.dist : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dist","hash":{},"data":data}) : helper)));
},"3":function(depth0,helpers,partials,data) {
    return "http://code.jquery.com/mobile/git/jquery.mobile-git.js";
},"5":function(depth0,helpers,partials,data) {
    return "				<li>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</li>\n";
},"7":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "		<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 float-box libscore-box\">\n			<h2><span class=\"bold\">Sites built with "
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + ":</span></h2>\n			<ul class=\"styled-list\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),(depth0 != null ? depth0.repoName : depth0),".libScore.short",{"name":"json","hash":{},"data":data}))
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.libScore : depth0)) != null ? stack1['short'] : stack1),{"name":"each","hash":{},"fn":this.program(8, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "			</ul>\n		</div>\n";
},"8":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=this.escapeExpression, alias2=this.lambda;

  return "				<li class=\"libScore-item\" "
    + alias1((helpers.json || (depth0 && depth0.json) || helpers.helperMissing).call(depth0,(depths[1] != null ? depths[1].type : depths[1]),(depths[1] != null ? depths[1].repoName : depths[1]),".libScore.short['",(data && data.key),"']",{"name":"json","hash":{},"data":data}))
    + ">\n					<a href=\"http://"
    + alias1(alias2((depth0 != null ? depth0.url : depth0), depth0))
    + "\" class=\"row\">\n						<div class=\"col-xs-10\">\n							<h4><span class=\"bold\">Site: </span>"
    + alias1(alias2((depth0 != null ? depth0.url : depth0), depth0))
    + "</h4>\n						</div>\n						<div class=\"col-xs-2\">\n							<h4><span class=\"bold\">Rank: </span>"
    + alias1(alias2((depth0 != null ? depth0.rank : depth0), depth0))
    + "</h4>\n						</div>\n					</a>\n				</li>\n";
},"10":function(depth0,helpers,partials,data) {
    return "col-md-6";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "<div class=\"content project\" data-background=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.dist : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.program(3, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"projects",(depth0 != null ? depth0.repoName : depth0),{"name":"json","hash":{},"data":data}))
    + ">\n	"
    + alias2((helpers.title || (depth0 && depth0.title) || alias1).call(depth0,"projects",(depth0 != null ? depth0.repoName : depth0),{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"row\">\n		<div class=\"col-lg-6 col-sm-6 col-xs-12 float-box project-top\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"projects",(depth0 != null ? depth0.repoName : depth0),".name",{"name":"json","hash":{},"data":data}))
    + ">\n			<div class=\"row\">\n				<h1 class=\"col-xs-5\">\n					<span class=\"bold\">Name: </span>\n				</h1>\n				<h1 class=\"col-xs-6\">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\n			</div>\n		</div>\n		<div class=\"col-lg-6 col-sm-6 col-xs-12 float-box project-top\">\n			<div class=\"row\">\n				<h1 class=\"col-xs-3\"><span class=\"bold project-logo-label\">Logo: </span> </h1>\n				<div class=\"col-xs-8\"><img class=\"project-logo\" src=\""
    + alias2(((helper = (helper = helpers.logo || (depth0 != null ? depth0.logo : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"logo","hash":{},"data":data}) : helper)))
    + "\"/></div>\n			</div>\n		</div>\n		<div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12 float-box project-second\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"projects",(depth0 != null ? depth0.repoName : depth0),".links",{"name":"json","hash":{},"data":data}))
    + ">\n			"
    + alias2((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.links : depth0)) != null ? stack1.website : stack1),"Website","4",{"name":"hlink","hash":{},"data":data}))
    + "\n			"
    + alias2((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.links : depth0)) != null ? stack1.github : stack1),"Github","4",{"name":"hlink","hash":{},"data":data}))
    + "\n			"
    + alias2((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.links : depth0)) != null ? stack1.api : stack1),"API","4",{"name":"hlink","hash":{},"data":data}))
    + "\n			"
    + alias2((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.links : depth0)) != null ? stack1.issues : stack1),"Issues","4",{"name":"hlink","hash":{},"data":data}))
    + "\n			"
    + alias2((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.links : depth0)) != null ? stack1.demos : stack1),"Demos","4",{"name":"hlink","hash":{},"data":data}))
    + "\n			<h4 class=\"project-irc\"><span class=\"bold\">IRC: </span>"
    + alias2(((helper = (helper = helpers.irc || (depth0 != null ? depth0.irc : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"irc","hash":{},"data":data}) : helper)))
    + " on freenode</h4>\n		</div>\n		<div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12 float-box project-second\">\n			<h3 class=\"project-description\"><span class=\"bold\">Description: </span></h3>"
    + alias2(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "\n			<h3 class=\"project-role\"><span class=\"bold\">My Role: </span>"
    + alias2(((helper = (helper = helpers.role || (depth0 != null ? depth0.role : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"role","hash":{},"data":data}) : helper)))
    + "</h3>\n		</div>\n		<div class=\"col-lg-4 col-xs-12 float-box project-second\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"projects",(depth0 != null ? depth0.repoName : depth0),".currentWork",{"name":"json","hash":{},"data":data}))
    + ">\n		<h2><span class=\"bold\">Current Work: </span></h2>\n		<ul class=\"project-current-work\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.currentWork : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</ul>\n		</div>\n	</div>\n	<div class=\"row\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.libScore : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		<div class=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.builtWith : depth0),{"name":"if","hash":{},"fn":this.program(10, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " col-xs-12 float-box issue-box\">\n			<h2><span class=\"bold\">Recent issues:</span></h2>\n			\n		</div>\n	</div>\n</div>\n";
},"useData":true,"useDepths":true});

this["templates"]["projects"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.escapeExpression, alias2=this.lambda;

  return "		"
    + alias1((helpers.call || (depth0 && depth0.call) || helpers.helperMissing).call(depth0,"projects.project",(data && data.key),"projects-link col-lg-4 col-md-6 col-sm-6 col-xs-12 float-box",{"name":"call","hash":{},"data":data}))
    + "\n			<img src=\""
    + alias1(alias2((depth0 != null ? depth0.logo : depth0), depth0))
    + "\" class=\"project-logo\"/>\n			<h1 class=\"projects-title\">"
    + alias1(alias2((depth0 != null ? depth0.name : depth0), depth0))
    + "</h1>\n		</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"content projects\" data-background=\"https://code.jquery.com/ui/jquery-ui-git.js\" data-json=\"arschmitz.projects\">\n	"
    + this.escapeExpression((helpers.title || (depth0 && depth0.title) || helpers.helperMissing).call(depth0,"projects",{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"row project-row\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.projects : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		<a class=\"projects-link col-lg-4\"></a>\n	</div>\n</div>\n";
},"useData":true});

this["templates"]["rant"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return this.escapeExpression(((helper = (helper = helpers.dist || (depth0 != null ? depth0.dist : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dist","hash":{},"data":data}) : helper)));
},"3":function(depth0,helpers,partials,data) {
    return "http://code.jquery.com/mobile/git/jquery.mobile-git.js";
},"5":function(depth0,helpers,partials,data) {
    return "					<li>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</li>\n";
},"7":function(depth0,helpers,partials,data) {
    return "			<p>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</p>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3=this.lambda;

  return "<div class=\"content\" data-background=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.dist : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"rants",".",(depth0 != null ? depth0.name : depth0),{"name":"json","hash":{},"data":data}))
    + ">\n	"
    + alias2((helpers.title || (depth0 && depth0.title) || alias1).call(depth0,"rants",(depth0 != null ? depth0.name : depth0),{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"rant row\">\n		<div class=\"col-xs-12 float-box project\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"rants.",(depth0 != null ? depth0.name : depth0),".definition",{"name":"json","hash":{},"data":data}))
    + ">\n			<h1><span class=\"bold\">Title: </span>"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.definition : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h1>\n			<h2><span class=\"bold\">Word: </span>"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.definition : depth0)) != null ? stack1.word : stack1), depth0))
    + "</h2>\n			<h3><span class=\"bold\">Pronunciation: </span>"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.definition : depth0)) != null ? stack1.pronunciation : stack1), depth0))
    + "</h3>\n			<h3><span class=\"bold\">Part of Speach: </span>"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.definition : depth0)) != null ? stack1.partOfSpeech : stack1), depth0))
    + "</h3>\n			<h3><span class=\"bold\">Definition: </span></h3>\n			<h3>\n				<ol "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"rants.",(depth0 != null ? depth0.name : depth0),".definition.fullDefinition",{"name":"json","hash":{},"data":data}))
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.definition : depth0)) != null ? stack1.fullDefinition : stack1),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "				</ol>\n			</h3>\n		</div>\n		<br/>\n		<div class=\"col-xs-12 float-box project rant-box\">\n		<blockquote "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"rants.",(depth0 != null ? depth0.name : depth0),".quote",{"name":"json","hash":{},"data":data}))
    + ">\n			\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.quote : depth0)) != null ? stack1.body : stack1), depth0))
    + "\"\n			<br/>\n			<cite>"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.quote : depth0)) != null ? stack1.sitation : stack1), depth0))
    + "</cite>\n		</blockquote>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rant : depth0),{"name":"each","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div>\n</div>\n";
},"useData":true});

this["templates"]["rants"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3=this.lambda;

  return "		"
    + alias2((helpers.call || (depth0 && depth0.call) || alias1).call(depth0,"rants.rant",(data && data.key),"col-xs-12 float-box project",{"name":"call","hash":{},"data":data}))
    + "\n			<h1 class=\"rant-title\">"
    + alias2(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "</h1>\n			<h2>"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.definition : depth0)) != null ? stack1.word : stack1), depth0))
    + "</h2>\n			<h3>"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.definition : depth0)) != null ? stack1.shortDefinition : stack1), depth0))
    + "</h3>\n			<h2>"
    + alias2(alias3((depth0 != null ? depth0.title : depth0), depth0))
    + "</h2>\n		</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"content\" data-background=\"https://code.jquery.com/mobile/git/jquery.mobile-git.js\">\n	"
    + this.escapeExpression((helpers.title || (depth0 && depth0.title) || helpers.helperMissing).call(depth0,"rants",{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"row project-row\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rants : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n	<a class=\"projects-link col-xs-12\"></a>\n</div>\n";
},"useData":true});

this["templates"]["resume"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return this.escapeExpression(((helper = (helper = helpers.dist || (depth0 != null ? depth0.dist : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dist","hash":{},"data":data}) : helper)));
},"3":function(depth0,helpers,partials,data) {
    return "http://code.jquery.com/mobile/git/jquery.mobile-git.js";
},"5":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.escapeExpression, alias2=helpers.helperMissing;

  return "						<div class=\"resume-job-box row\">\n							<div class=\"col-sm-2\">\n								<h5 class=\"year\">"
    + alias1(this.lambda((depth0 != null ? depth0.time : depth0), depth0))
    + "</h5>\n							</div>\n							<div class=\"col-sm-10\">\n								"
    + alias1((helpers.h || (depth0 && depth0.h) || alias2).call(depth0,3,"Title",(depth0 != null ? depth0.title : depth0),"title",{"name":"h","hash":{},"data":data}))
    + "\n								"
    + alias1((helpers.h || (depth0 && depth0.h) || alias2).call(depth0,4,"Company",(depth0 != null ? depth0.name : depth0),"company",{"name":"h","hash":{},"data":data}))
    + "\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.role : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.acheivments : depth0),{"name":"if","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "							</div>\n						</div>\n";
},"6":function(depth0,helpers,partials,data) {
    return "									"
    + this.escapeExpression((helpers.h || (depth0 && depth0.h) || helpers.helperMissing).call(depth0,5,"Role",(depth0 != null ? depth0.role : depth0),{"name":"h","hash":{},"data":data}))
    + "\n";
},"8":function(depth0,helpers,partials,data) {
    return "									"
    + this.escapeExpression((helpers.h || (depth0 && depth0.h) || helpers.helperMissing).call(depth0,5,"Acheivments",(depth0 != null ? depth0.acheivments : depth0),{"name":"h","hash":{},"data":data}))
    + "\n";
},"10":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "						"
    + alias2((helpers.h || (depth0 && depth0.h) || alias1).call(depth0,3,"Organization",(depth0 != null ? depth0.name : depth0),{"name":"h","hash":{},"data":data}))
    + "\n						"
    + alias2((helpers.h || (depth0 && depth0.h) || alias1).call(depth0,4,"Role",(depth0 != null ? depth0.role : depth0),{"name":"h","hash":{},"data":data}))
    + "\n";
},"12":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.escapeExpression, alias2=helpers.helperMissing;

  return "				<div class=\"resume-job-box row\">\n					<div class=\"col-sm-3 col-xs-12\">\n						<h5 class=\"year\">"
    + alias1(this.lambda(((stack1 = (depth0 != null ? depth0.basic : depth0)) != null ? stack1.date : stack1), depth0))
    + "</h5>\n					</div>\n					<div class=\"col-sm-9 col-xs-12\">\n						"
    + alias1((helpers.h || (depth0 && depth0.h) || alias2).call(depth0,3,"Event",((stack1 = (depth0 != null ? depth0.basic : depth0)) != null ? stack1.eventName : stack1),{"name":"h","hash":{},"data":data}))
    + "\n						"
    + alias1((helpers.h || (depth0 && depth0.h) || alias2).call(depth0,4,"Title",((stack1 = (depth0 != null ? depth0.basic : depth0)) != null ? stack1.title : stack1),{"name":"h","hash":{},"data":data}))
    + "\n					</div>\n				</div>\n";
},"14":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "				"
    + alias2((helpers.h || (depth0 && depth0.h) || alias1).call(depth0,3,"School",(depth0 != null ? depth0.name : depth0),{"name":"h","hash":{},"data":data}))
    + "\n				"
    + alias2((helpers.h || (depth0 && depth0.h) || alias1).call(depth0,3,"Major",(depth0 != null ? depth0.major : depth0),{"name":"h","hash":{},"data":data}))
    + "\n				"
    + alias2((helpers.h || (depth0 && depth0.h) || alias1).call(depth0,3,"Minor",(depth0 != null ? depth0.minor : depth0),{"name":"h","hash":{},"data":data}))
    + "\n				"
    + alias2((helpers.h || (depth0 && depth0.h) || alias1).call(depth0,3,"Achievements",(depth0 != null ? depth0.acheivments : depth0),{"name":"h","hash":{},"data":data}))
    + "\n";
},"16":function(depth0,helpers,partials,data) {
    var alias1=this.escapeExpression;

  return "				<div class=\"row meter\">\n					<div class=\"col-xs-5\">\n						<h4>"
    + alias1(this.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</h4>\n					</div>\n					<div class=\"col-xs-7\">\n						<h4>"
    + alias1((helpers.meter || (depth0 && depth0.meter) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.level : depth0),{"name":"meter","hash":{},"data":data}))
    + "</h4>\n					</div>\n				</div>\n";
},"18":function(depth0,helpers,partials,data) {
    var alias1=this.escapeExpression;

  return "						<div class=\"row meter\">\n							<div class=\"col-xs-5\">\n								<h4>"
    + alias1(this.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</h4>\n							</div>\n							<div class=\"col-xs-7\">\n								<h4>"
    + alias1((helpers.meter || (depth0 && depth0.meter) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.level : depth0),{"name":"meter","hash":{},"data":data}))
    + "</h4>\n							</div>\n						</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3=this.lambda;

  return "<div class=\"content resume\" data-background=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.dist : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\" data-json=\"arschmitz.resume\">\n	"
    + alias2((helpers.title || (depth0 && depth0.title) || alias1).call(depth0,"resume",{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"row\">\n		<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-4 resume-top float-box project\">\n			<div class=\"initials\">"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.name : stack1)) != null ? stack1.initials : stack1), depth0))
    + "</div>\n		</div>\n		<div data-json=\"arschmitz.resume.name\" class=\"col-lg-5 col-md-5 col-sm-8 col-xs-8 name float-box project\">\n			<h1 class=\"first-name\">"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.name : stack1)) != null ? stack1.first : stack1), depth0))
    + "</h1>\n			<h1 class=\"last-name\">"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.name : stack1)) != null ? stack1.last : stack1), depth0))
    + "</h1>\n		</div>\n		<div data-json=\"arschmitz.resume.contact\" class=\"col-lg-5 col-md-5 col-sm-12 col-xs-12 resume-contact float-box project\">\n			"
    + alias2((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.website : stack1),"Website",4,{"name":"hlink","hash":{},"data":data}))
    + "\n			"
    + alias2((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.email : stack1),"Email",4,{"name":"hlink","hash":{},"data":data}))
    + "\n			"
    + alias2((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.github : stack1),"Github",4,{"name":"hlink","hash":{},"data":data}))
    + "\n			"
    + alias2((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.linkedIn : stack1),"LinkedIn",4,{"name":"hlink","hash":{},"data":data}))
    + "\n			"
    + alias2((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.twitter : stack1),"Twitter",4,{"name":"hlink","hash":{},"data":data}))
    + "\n		</div>\n	</div>\n	<div class=\"row\">\n		<div class=\"col-md-7 work-history\">\n			<div class=\"row\">\n				<div data-json=\"arschmitz.resume.workHistory\" class=\"col-xs-12 float-box\">\n					<h2 class=\"bold section-heading\">Work History</h2>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.workHistory : stack1),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n			<div class=\"row\">\n				<div data-json=\"arschmitz.resume.communityInvolvment\" class=\"col-xs-12 float-box\">\n					<h2 class=\"bold section-heading\">Community Involvment</h2>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.communityInvolvment : stack1),{"name":"each","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n		</div>\n		<div data-json=\"arschmitz.resume.talks\" class=\"col-md-5 col-xs-12 talks float-box\">\n			<h2 class=\"bold section-heading\">Conference Talks</h2>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.talks : stack1),{"name":"each","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div>\n	<div class=\"row\">\n		<div data-json=\"arschmitz.resume.education\" class=\"col-xs-12 float-box\">\n			<h2 class=\"bold section-heading\">Education</h2>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.education : stack1),{"name":"each","hash":{},"fn":this.program(14, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div>\n	<div class=\"row\">\n		<div class=\"col-xs-12\">\n			<h2 class=\"bold section-heading\">Skills</h2>\n		</div>\n	</div>\n	<div class=\"row\">\n		<div data-json=\"arschmitz.resume.skills.frontEnd\" class=\"col-xs-12 col-md-6 col-sm-6 float-box\">\n			<h2>Front End</h2>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.skills : stack1)) != null ? stack1.frontEnd : stack1),{"name":"each","hash":{},"fn":this.program(16, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n		<div class=\"col-xs-12 col-md-6 col-sm-6\">\n			<div class=\"row\">\n				<div data-json=\"arschmitz.resume.skills.testingAndBuild\" class=\"col-xs-12 float-box\">\n				<h2>Testing and build tools</h2>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.skills : stack1)) != null ? stack1.testingAndBuild : stack1),{"name":"each","hash":{},"fn":this.program(18, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n			<div class=\"row\">\n				<div data-json=\"arschmitz.resume.skills.backend\" class=\"col-xs-12 float-box\">\n					<h2>Back End</h2>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.skills : stack1)) != null ? stack1.backend : stack1),{"name":"each","hash":{},"fn":this.program(18, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n		</div>\n	</div>\n</div>\n";
},"useData":true});

this["templates"]["sideProject"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return this.escapeExpression(((helper = (helper = helpers.dist || (depth0 != null ? depth0.dist : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dist","hash":{},"data":data}) : helper)));
},"3":function(depth0,helpers,partials,data) {
    return "http://code.jquery.com/mobile/git/jquery.mobile-git.js";
},"5":function(depth0,helpers,partials,data) {
    return "					<li>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"content\" data-background=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.dist : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\" data-json=\"arschmitz.sideProjects"
    + alias3(((helper = (helper = helpers.repoName || (depth0 != null ? depth0.repoName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"repoName","hash":{},"data":data}) : helper)))
    + "\">\n	"
    + alias3((helpers.title || (depth0 && depth0.title) || alias1).call(depth0,"sideProjects",(depth0 != null ? depth0.repoName : depth0),{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"row project\">\n		<div class=\"col-lg-6  col-md-6 col-sm-12 col-xs-12 float-box\" data-json=\"arschmitz.sideProjects"
    + alias3(((helper = (helper = helpers.repoName || (depth0 != null ? depth0.repoName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"repoName","hash":{},"data":data}) : helper)))
    + ".links\">\n			<h1 class=\"project-name\"><span class=\"bold\">Name: </span>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\n			"
    + alias3((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.links : depth0)) != null ? stack1.website : stack1),"Website","4",{"name":"hlink","hash":{},"data":data}))
    + "\n			"
    + alias3((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.links : depth0)) != null ? stack1.github : stack1),"Github","4",{"name":"hlink","hash":{},"data":data}))
    + "\n			"
    + alias3((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.links : depth0)) != null ? stack1.api : stack1),"API","4",{"name":"hlink","hash":{},"data":data}))
    + "\n			"
    + alias3((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.links : depth0)) != null ? stack1.issues : stack1),"Issues","4",{"name":"hlink","hash":{},"data":data}))
    + "\n			"
    + alias3((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.links : depth0)) != null ? stack1.demos : stack1),"Demos","4",{"name":"hlink","hash":{},"data":data}))
    + "\n			<h4 class=\"project-irc\"><span class=\"bold\">IRC: </span>"
    + alias3(((helper = (helper = helpers.irc || (depth0 != null ? depth0.irc : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"irc","hash":{},"data":data}) : helper)))
    + " on freenode</h4>\n		</div>\n		<div class=\"col-lg-6  col-md-6 col-sm-12 col-xs-12 float-box\">\n			<h3 class=\"project-description\"><span class=\"bold\">Description: </span>"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</h3>\n			<h3 class=\"project-role\"><span class=\"bold\">My Role: </span>"
    + alias3(((helper = (helper = helpers.role || (depth0 != null ? depth0.role : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"role","hash":{},"data":data}) : helper)))
    + "</h3>\n			<h2><span class=\"bold\">Current Work: </span></h2>\n			<ul class=\"project-current-work\" data-json=\"arschmitz.sideProjects"
    + alias3(((helper = (helper = helpers.repoName || (depth0 != null ? depth0.repoName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"repoName","hash":{},"data":data}) : helper)))
    + ".currentWork\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.currentWork : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "			</ul>\n		</div>\n	</div>\n	<div class=\"row\">\n		<div class=\"col-xs-12 float-box issue-box\">\n			<h2><span class=\"bold\">Recent issues:</span></h2>\n		</div>\n	</div>\n</div>\n";
},"useData":true});

this["templates"]["sideProjects"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.escapeExpression;

  return "		"
    + alias1((helpers.call || (depth0 && depth0.call) || helpers.helperMissing).call(depth0,"sideProjects.sideProject",(data && data.key),"sideProjects-link col-lg-4 col-md-6 col-sm-6 col-xs-12 float-box",{"name":"call","hash":{},"data":data}))
    + "\n			<h2 class=\"sideProjects-title\">"
    + alias1(this.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</h2>\n		</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"content\" data-background=\"https://code.jquery.com/mobile/git/jquery.mobile-git.js\" data-json=\"arschmitz.sideProjects\">\n	"
    + this.escapeExpression((helpers.title || (depth0 && depth0.title) || helpers.helperMissing).call(depth0,"sideProjects",{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"row project-row\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.sideProjects : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n	<a class=\"projects-link col-lg-4\"></a>\n	<a class=\"projects-link col-lg-4\"></a>\n</div>\n";
},"useData":true});

this["templates"]["talk"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return this.escapeExpression(((helper = (helper = helpers.dist || (depth0 != null ? depth0.dist : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dist","hash":{},"data":data}) : helper)));
},"3":function(depth0,helpers,partials,data) {
    return "http://code.jquery.com/mobile/git/jquery.mobile-git.js";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "<div class=\"content\" data-background=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.dist : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"talks",".",(depth0 != null ? depth0.key : depth0),{"name":"json","hash":{},"data":data}))
    + ">\n	"
    + alias2((helpers.title || (depth0 && depth0.title) || alias1).call(depth0,"talks",(depth0 != null ? depth0.key : depth0),{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"row project\">\n		<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 float-box\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"talks",".",(depth0 != null ? depth0.key : depth0),".video",{"name":"json","hash":{},"data":data}))
    + ">\n			<iframe class=\"video-frame\" src=\"https://www.youtube.com/embed/"
    + alias2(((helper = (helper = helpers.video || (depth0 != null ? depth0.video : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"video","hash":{},"data":data}) : helper)))
    + "\" frameborder=\"0\" allowfullscreen></iframe>\n		</div>\n		<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 float-box\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"talks",".",(depth0 != null ? depth0.key : depth0),".basic",{"name":"json","hash":{},"data":data}))
    + ">\n\n			"
    + alias2((helpers.h || (depth0 && depth0.h) || alias1).call(depth0,2,"Event",((stack1 = (depth0 != null ? depth0.basic : depth0)) != null ? stack1.eventName : stack1),{"name":"h","hash":{},"data":data}))
    + "\n			"
    + alias2((helpers.h || (depth0 && depth0.h) || alias1).call(depth0,2,"Date",((stack1 = (depth0 != null ? depth0.basic : depth0)) != null ? stack1.date : stack1),{"name":"h","hash":{},"data":data}))
    + "\n			"
    + alias2((helpers.h || (depth0 && depth0.h) || alias1).call(depth0,2,"Title",((stack1 = (depth0 != null ? depth0.basic : depth0)) != null ? stack1.talkTitle : stack1),{"name":"h","hash":{},"data":data}))
    + "\n			"
    + alias2((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.basic : depth0)) != null ? stack1.website : stack1),"Website","4",{"name":"hlink","hash":{},"data":data}))
    + "\n			"
    + alias2((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.basic : depth0)) != null ? stack1.slides : stack1),"Slides","4",{"name":"hlink","hash":{},"data":data}))
    + "\n		</div>\n	</div>\n	<div class=\"row project\">\n		<div class=\"col-xs-12 col-sm-12 col-lg-12 float-box\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"talks",".",(depth0 != null ? depth0.key : depth0),".description",{"name":"json","hash":{},"data":data}))
    + ">\n			<h3 class=\"talk-description\">Description: </h3>\n			<span>"
    + alias2(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</span>\n			<br/><br/>\n		</div>\n	</div>\n</div>\n";
},"useData":true});

this["templates"]["talks"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3=this.lambda;

  return "		"
    + alias2((helpers.call || (depth0 && depth0.call) || alias1).call(depth0,"talks.talk",(data && data.key),"talks-link col-lg-4 col-md-6 col-sm-6 col-xs-12 float-box",{"name":"call","hash":{},"data":data}))
    + "\n			<span "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"talks",".",(data && data.key),".basic",{"name":"json","hash":{},"data":data}))
    + ">\n				<h2 class=\"talks-name\">"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.basic : depth0)) != null ? stack1.eventName : stack1), depth0))
    + "</h2>\n				<h3 class=\"talks-title\">"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.basic : depth0)) != null ? stack1.talkTitle : stack1), depth0))
    + "</h3>\n				<h5 class=\"talks-date\">"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.basic : depth0)) != null ? stack1.date : stack1), depth0))
    + "</h5>\n			</span>\n		</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"content\" data-background=\"https://code.jquery.com/ui/jquery-ui-git.js\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"talks",{"name":"json","hash":{},"data":data}))
    + ">\n	"
    + alias2((helpers.title || (depth0 && depth0.title) || alias1).call(depth0,"talks",{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"row project-row\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.talks : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</div>\n";
},"useData":true});

this["templates"]["timeline"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.divider : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"2":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "				<a class=\"timeline-link\" href=\"#bookmark-"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</a>\n";
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.divider : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(10, data, 0),"data":data})) != null ? stack1 : "");
},"5":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.everyOther || (depth0 && depth0.everyOther) || helpers.helperMissing).call(depth0,(data && data.index),2,{"name":"everyOther","hash":{},"fn":this.program(6, data, 0),"inverse":this.program(8, data, 0),"data":data})) != null ? stack1 : "");
},"6":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "				<div class=\"ss-row\">\n					<div class=\"ss-left\">\n						<h2 id=\"bookmark-"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</h2>\n					</div>\n					<div class=\"ss-right\">\n						<h2>"
    + alias2(alias1((depth0 != null ? depth0.detail : depth0), depth0))
    + "</h2>\n					</div>\n				</div>\n";
},"8":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "				<div class=\"ss-row\">\n					<div class=\"ss-left\">\n						<h2>"
    + alias2(alias1((depth0 != null ? depth0.detail : depth0), depth0))
    + "</h2>\n					</div>\n					<div class=\"ss-right\">\n						<h2 id=\"bookmark-"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</h2>\n					</div>\n				</div>\n";
},"10":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.everyOther || (depth0 && depth0.everyOther) || helpers.helperMissing).call(depth0,(data && data.index),2,{"name":"everyOther","hash":{},"fn":this.program(11, data, 0),"inverse":this.program(19, data, 0),"data":data})) != null ? stack1 : "");
},"11":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "				<div class=\"ss-row ss-"
    + alias2(alias1((depth0 != null ? depth0.size : depth0), depth0))
    + "\">\n					<div class=\"ss-left\">\n						<span class=\"circle-wrap\"><a style=\"background-image:url("
    + alias2(alias1((depth0 != null ? depth0.img : depth0), depth0))
    + ")\" class=\"ss-circle\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</a></span>\n					</div>\n					<div class=\"ss-right\">\n						<h3 class=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.color : depth0),{"name":"if","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n							<span>"
    + alias2(alias1((depth0 != null ? depth0.date : depth0), depth0))
    + "</span>\n							<a href=\""
    + alias2(alias1((depth0 != null ? depth0.link : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</a>\n							<span>"
    + alias2(alias1((depth0 != null ? depth0.detail : depth0), depth0))
    + "</span>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.codeSample : depth0),{"name":"if","hash":{},"fn":this.program(14, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "						</h3>\n					</div>\n					<div class=\"dialog-wrap\">\n						<div class=\"dialog "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.color : depth0),{"name":"if","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n						<h4>"
    + alias2(alias1((depth0 != null ? depth0.date : depth0), depth0))
    + "<br>"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</h4>\n						<h5>"
    + alias2(alias1((depth0 != null ? depth0.detail : depth0), depth0))
    + "</h5>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.notes : depth0),{"name":"each","hash":{},"fn":this.program(17, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "						</div>\n					</div>\n				</div>\n";
},"12":function(depth0,helpers,partials,data) {
    return this.escapeExpression(this.lambda((depth0 != null ? depth0.color : depth0), depth0));
},"14":function(depth0,helpers,partials,data) {
    var stack1;

  return "							<pre class=\"hjs\"><code class=\"javascript\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.codeSample : depth0),{"name":"each","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "							</code></pre>\n";
},"15":function(depth0,helpers,partials,data) {
    return this.escapeExpression(this.lambda(depth0, depth0))
    + "\n";
},"17":function(depth0,helpers,partials,data) {
    return "							<p>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</p>\n";
},"19":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "				<div class=\"ss-row ss-"
    + alias2(alias1((depth0 != null ? depth0.size : depth0), depth0))
    + "\">\n					<div class=\"ss-left\">\n						<h3 class=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.color : depth0),{"name":"if","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n							<span>"
    + alias2(alias1((depth0 != null ? depth0.date : depth0), depth0))
    + "</span>\n							<a href=\""
    + alias2(alias1((depth0 != null ? depth0.link : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</a>\n							<span>"
    + alias2(alias1((depth0 != null ? depth0.detail : depth0), depth0))
    + "</span>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.codeSample : depth0),{"name":"if","hash":{},"fn":this.program(14, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "						</h3>\n					</div>\n					<div class=\"ss-right\">\n						<span class=\"circle-wrap\">\n							<a style=\"background-image:url("
    + alias2(alias1((depth0 != null ? depth0.img : depth0), depth0))
    + ")\" class=\"ss-circle\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</a>\n						</span>\n					</div>\n					<div class=\"dialog-wrap\">\n						<div class=\"dialog "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.color : depth0),{"name":"if","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n						<h4>"
    + alias2(alias1((depth0 != null ? depth0.date : depth0), depth0))
    + "<br/>"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</h4>\n						<h5>"
    + alias2(alias1((depth0 != null ? depth0.detail : depth0), depth0))
    + "</h5>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.notes : depth0),{"name":"each","hash":{},"fn":this.program(17, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "						</div>\n					</div>\n				</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"timeline\">\n	<h1>\n		<span class=\"ss-circle timeline-title-img\" style=\"background-image:url(/images/mchammer.jpg)\"></span>\n		<span class=\"timeline-title\">You Can't Touch This:</span>\n	</h1>\n	<h2 class=\"ss-subtitle\">A sordid 9 year history of touch input on the web</h2>\n	<div class=\"sticky-parent\">\n		<div id=\"ss-links\" class=\"ss-links\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.timeline : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div>\n	<div id=\"ss-container\" class=\"ss-container\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.timeline : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</div>\n\n";
},"useData":true});
(function(){
var temp = []
	.concat( arschmitz.projects[ "jquery-ui" ].builtWith )
	.concat( arschmitz.projects[ "jquery-mobile" ].builtWith )
	.concat( arschmitz.projects[ "hammer.js" ].builtWith );

var sorted = [];
var finalSort = [];

$.each( temp, function( index, value ) {
	sorted[ parseInt( value.Quantcast, 10 ) ] = value;
});
sorted.forEach(function( value ){
	finalSort.push( value );
});

arschmitz.aboutMe.builtWith = finalSort;
})();
arschmitz.projects[ "hammer.js" ].builtWith = [
  {
    "Domain":"eonline.com",
    "Company":"E! Entertainment Television LLC",
    "Quantcast":91,
    "Alexa":523
  },
  {
    "Domain":"sears.com",
    "Company":"Sears Brands LLC",
    "Quantcast":177,
    "Alexa":541
  },
  {
    "Domain":"rottentomatoes.com",
    "Company":"Flixster Inc",
    "Quantcast":204,
    "Alexa":538
  },
  {
    "Domain":"discover.com",
    "Company":"",
    "Quantcast":241,
    "Alexa":1314
  },
  {
    "Domain":"britannica.com",
    "Company":"Britannica Inc.",
    "Quantcast":317,
    "Alexa":3597
  },
  {
    "Domain":"comicbook.com",
    "Company":"Comicbook.com LLC",
    "Quantcast":339,
    "Alexa":2143
  },
  {
    "Domain":"smosh.com",
    "Company":"Defy Media LLC",
    "Quantcast":398,
    "Alexa":4500
  },
  {
    "Domain":"aliexpress.com",
    "Company":"Hangzhou Alibaba Advertising Co.  Ltd.(杭州阿里巴巴广告有限公司)",
    "Quantcast":401,
    "Alexa":36
  },
  {
    "Domain":"aarp.org",
    "Company":"",
    "Quantcast":507,
    "Alexa":1682
  },
  {
    "Domain":"kmart.com",
    "Company":"Sears Brands LLC",
    "Quantcast":544,
    "Alexa":1553
  },
  {
    "Domain":"ncl.com",
    "Company":"NCL Corporation ",
    "Quantcast":1367,
    "Alexa":9569
  },
  {
    "Domain":"bjs.com",
    "Company":"BJ\"s Wholesale Club Inc",
    "Quantcast":1704,
    "Alexa":8928
  },
  {
    "Domain":"usanetwork.com",
    "Company":"NBCUniversal Inc",
    "Quantcast":2270,
    "Alexa":25655
  },
  {
    "Domain":"zynga.com",
    "Company":"Zynga Inc.",
    "Quantcast":2321,
    "Alexa":5760
  },
  {
    "Domain":"disneystore.com",
    "Company":"Disney Enterprises  Inc.",
    "Quantcast":3013,
    "Alexa":4269
  },
  {
    "Domain":"pressdemocrat.com",
    "Company":"",
    "Quantcast":3228,
    "Alexa":27761
  },
  {
    "Domain":"worldpay.com",
    "Company":"The Royal Bank of Scotland Group Plc",
    "Quantcast":4552,
    "Alexa":4285
  },
  {
    "Domain":"gianteagle.com",
    "Company":"Giant Eagle Inc",
    "Quantcast":8077,
    "Alexa":41531
  },
  {
    "Domain":"westin.com",
    "Company":"",
    "Quantcast":9321,
    "Alexa":169222
  },
  {
    "Domain":"pac-12.com",
    "Company":"",
    "Quantcast":14220,
    "Alexa":86371
  }
];

arschmitz.projects[ "jquery-mobile" ].builtWith = [
  {
    "Domain":"chase.com",
    "Company":"JPMorgan Chase & Co.",
    "Quantcast":101,
    "Alexa":118
  },
  {
    "Domain":"dailycooking.com",
    "Company":"",
    "Quantcast":102,
    "Alexa":null
  },
  {
    "Domain":"cabelas.com",
    "Company":"Cabela\"s Inc",
    "Quantcast":119,
    "Alexa":2221
  },
  {
    "Domain":"myspace.com",
    "Company":"Myspace LLC.",
    "Quantcast":162,
    "Alexa":1859
  },
  {
    "Domain":"sfgate.com",
    "Company":"Hearst Communications Inc",
    "Quantcast":221,
    "Alexa":834
  },
  {
    "Domain":"weather.gov",
    "Company":"",
    "Quantcast":323,
    "Alexa":838
  },
  {
    "Domain":"mensfitness.com",
    "Company":"Weider Publications LLC",
    "Quantcast":437,
    "Alexa":3211
  },
  {
    "Domain":"ajc.com",
    "Company":"",
    "Quantcast":495,
    "Alexa":3981
  },
  {
    "Domain":"pagesix.com",
    "Company":"NYP Holdings Inc",
    "Quantcast":499,
    "Alexa":4552
  },
  {
    "Domain":"nationalgeographic.com",
    "Company":"National Geographic Society",
    "Quantcast":505,
    "Alexa":1068
  },
  {
    "Domain":"condenast.com",
    "Company":"",
    "Quantcast":599,
    "Alexa":55740
  },
  {
    "Domain":"autotrader.com",
    "Company":"AutoTrader.com Inc",
    "Quantcast":604,
    "Alexa":1253
  },
  {
    "Domain":"chron.com",
    "Company":"Houston Chronicle Co",
    "Quantcast":645,
    "Alexa":694
  },
  {
    "Domain":"hgtv.com",
    "Company":"Scripps Networks LLC",
    "Quantcast":674,
    "Alexa":1086
  },
  {
    "Domain":"hitfix.com",
    "Company":"HitFix",
    "Quantcast":811,
    "Alexa":6725
  },
  {
    "Domain":"phys.org",
    "Company":"",
    "Quantcast":1057,
    "Alexa":6023
  },
  {
    "Domain":"peopleverified.com",
    "Company":"",
    "Quantcast":1066,
    "Alexa":54493
  },
  {
    "Domain":"petsmart.com",
    "Company":"PetSmart Store Support Group",
    "Quantcast":1095,
    "Alexa":3776
  },
  {
    "Domain":"lotterypost.com",
    "Company":"Speednet Group",
    "Quantcast":1418,
    "Alexa":2231
  },
  {
    "Domain":"dreamstime.com",
    "Company":"Dreamstime LLC ",
    "Quantcast":1512,
    "Alexa":888
  }
];

arschmitz.projects[ "jquery-ui" ].builtWith = [
  {
    "Domain":"amazon.com",
    "Company":"Amazon.com Inc",
    "Quantcast":10,
    "Alexa":5
  },
  {
    "Domain":"yelp.com",
    "Company":"Yelp Inc.",
    "Quantcast":11,
    "Alexa":156
  },
  {
    "Domain":"craigslist.org",
    "Company":"craigslist  Inc.",
    "Quantcast":32,
    "Alexa":58
  },
  {
    "Domain":"wayfair.com",
    "Company":"Wayfair LLC ",
    "Quantcast":34,
    "Alexa":909
  },
  {
    "Domain":"godaddy.com",
    "Company":"GoDaddy Operating Company LLC",
    "Quantcast":35,
    "Alexa":185
  },
  {
    "Domain":"whitepages.com",
    "Company":"Whitepages Inc.",
    "Quantcast":37,
    "Alexa":931
  },
  {
    "Domain":"walmart.com",
    "Company":"Walmart Stores Inc",
    "Quantcast":43,
    "Alexa":140
  },
  {
    "Domain":"nydailynews.com",
    "Company":"",
    "Quantcast":44,
    "Alexa":717
  },
  {
    "Domain":"legacy.com",
    "Company":"Legacy.com Inc",
    "Quantcast":64,
    "Alexa":1114
  },
  {
    "Domain":"babycenter.com",
    "Company":"BabyCenter LLC ",
    "Quantcast":70,
    "Alexa":739
  },
  {
    "Domain":"ibtimes.com",
    "Company":"IBT Media Inc",
    "Quantcast":74,
    "Alexa":1521
  },
  {
    "Domain":"mapquest.com",
    "Company":"",
    "Quantcast":79,
    "Alexa":992
  },
  {
    "Domain":"comcast.com",
    "Company":"Comcast Corporation ",
    "Quantcast":86,
    "Alexa":1204
  },
  {
    "Domain":"eonline.com",
    "Company":"E! Entertainment Television LLC",
    "Quantcast":91,
    "Alexa":523
  },
  {
    "Domain":"mozilla.org",
    "Company":"Mozilla Corporation ",
    "Quantcast":97,
    "Alexa":207
  },
  {
    "Domain":"chase.com",
    "Company":"JPMorgan Chase & Co.",
    "Quantcast":101,
    "Alexa":118
  },
  {
    "Domain":"ups.com",
    "Company":"United Parcel Service of America  Inc.",
    "Quantcast":116,
    "Alexa":229
  },
  {
    "Domain":"zillow.com",
    "Company":"Zillow Inc.",
    "Quantcast":143,
    "Alexa":164
  },
  {
    "Domain":"homedepot.com",
    "Company":"Homer TLC Inc",
    "Quantcast":158,
    "Alexa":200
  },
  {
    "Domain":"drudgereport.com",
    "Company":"Matt Drudge",
    "Quantcast":167,
    "Alexa":650
  }
];