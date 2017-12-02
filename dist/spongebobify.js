(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.spongebobify = factory());
}(this, (function () { 'use strict';

function spongebobify(text) {
    return Array.from(text).reduce(function (acc, el, i) { return (acc += i % 2 ? el.toUpperCase() : el.toLowerCase()); }, '');
}

return spongebobify;

})));
