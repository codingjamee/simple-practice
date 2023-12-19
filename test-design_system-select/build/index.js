import React from 'react';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var classnames = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
						classes.push(arg.toString());
						continue;
					}

					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}()); 
} (classnames));

var classnamesExports = classnames.exports;
var classNames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".style-module_default__RWUWF {\n  margin: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 30px; }\n";
var styles = {"default":"style-module_default__RWUWF"};
styleInject(css_248z);

var DropdownType;
(function (DropdownType) {
    DropdownType["DEFAULT"] = "default";
    DropdownType["PRIMARY"] = "primary";
    DropdownType["SECONDARY"] = "secondary";
})(DropdownType || (DropdownType = {}));
//dropdown은 wrapper의 역할
// DropdownButton을 보여주고 (이걸 어떻게 해야할까?) (무조건 기본값 주면 될듯?)
// DropdownItem 보여주고 (children으로 감싸면 됨)
// item이 여러개 있으면 너무 길면 y scroll값을 주고 (style??)
// onChangeItemId??? 오름차순, 내림차순 (기능)
var Dropdown = function (_a) {
    var children = _a.children, _b = _a.theme, theme = _b === void 0 ? DropdownType.DEFAULT : _b;
    var classNameProps = classNames(styles.default, styles[theme]);
    return React.createElement("div", { className: classNameProps }, children);
};

export { Dropdown };
//# sourceMappingURL=index.js.map
