(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.spongebobify = factory());
}(this, (function () { 'use strict';

function spongebobify(text) {
  let altered = "";
  let isLower = true;
  for (let i = 0; i < text.length; i++) {
    altered += isLower ? text[i].toLowerCase() : text[i].toUpperCase();
    isLower = !isLower;
  }
  return altered;
}

return spongebobify;

})));
