/**
 * Luke Zhang's developer portfolio
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang Luke-zhang-04.github.io
 * @license AGPL-3.0
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */ !function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.general=n():e.general=n()}(window,(function(){return function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=0)}([function(e,n,r){"use strict";var t=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});
/**
 * Luke Zhang's developer portfolio
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang Luke-zhang-04.github.io
 * @license AGPL-3.0
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 * @file script for all pages
 */
var o,l,i,a=t(r(1)),u=t(r(2));o=a.default("footer",{class:"page-footer font-small blue pt-4 bg-dark"}),document.body.appendChild(o),o.innerHTML=u.default,l=document.querySelector("#navbar .navbar-toggler"),i=document.getElementById("navbarNav"),null==l||l.addEventListener("click",(function(){var e,n;(null==i?void 0:i.classList.contains("active"))?(null==i||i.classList.remove("active"),null==l||l.classList.remove("open"),null===(e=null==l?void 0:l.querySelector(".burger"))||void 0===e||e.classList.remove("open")):(null==i||i.classList.add("active"),null==l||l.classList.add("open"),null===(n=null==l?void 0:l.querySelector(".burger"))||void 0===n||n.classList.add("open"))}))},function(e,n,r){"use strict";var t=this&&this.__values||function(e){var n="function"==typeof Symbol&&Symbol.iterator,r=n&&e[n],t=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")},o=this&&this.__read||function(e,n){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var t,o,l=r.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(t=l.next()).done;)i.push(t.value)}catch(e){o={error:e}}finally{try{t&&!t.done&&(r=l.return)&&r.call(l)}finally{if(o)throw o.error}}return i},l=this&&this.__spread||function(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(o(arguments[n]));return e};Object.defineProperty(n,"__esModule",{value:!0}),n._bindChildren=n._unpackChildren=n._bindProps=void 0,n._bindProps=function(e,n,r){var l,i;if(void 0===r&&(r=!1),n)try{for(var a=t(Object.entries(n)),u=a.next();!u.done;u=a.next()){var c=o(u.value,2),f=c[0],s=c[1];"string"==typeof s||"number"==typeof s?"innerHTML"===f?e.innerHTML=s.toString():r?e.setAttributeNS(null,f,s.toString()):e.setAttribute(f,s.toString()):"on"===f.slice(0,2)?"function"==typeof s&&e.addEventListener(f.slice(2).toLowerCase(),s):"ref"===f&&"object"==typeof s&&"current"in s?s.current=e:console.warn('WARN: Invalid prop type "'+typeof s+'" for key "'+f+'". Skipping prop.')}}catch(e){l={error:e}}finally{try{u&&!u.done&&(i=a.return)&&i.call(a)}finally{if(l)throw l.error}}},n._unpackChildren=function(e){var r,o,i=[];try{for(var a=t(e),u=a.next();!u.done;u=a.next()){var c=u.value;"object"==typeof c&&c instanceof Array?i.push.apply(i,l(n._unpackChildren(c))):i.push(c)}}catch(e){r={error:e}}finally{try{u&&!u.done&&(o=a.return)&&o.call(a)}finally{if(r)throw r.error}}return i},n._bindChildren=function(e,r){var o,l;if(r||0===r)if(r instanceof Array)try{for(var i=t(r),a=i.next();!a.done;a=i.next()){var u=a.value;"string"==typeof u||"number"==typeof u?e.innerText=u.toString():"object"==typeof u&&u instanceof Array?n._unpackChildren(u).forEach((function(r){return n._bindChildren(e,r)})):e.appendChild(u)}}catch(e){o={error:e}}finally{try{a&&!a.done&&(l=i.return)&&l.call(i)}finally{if(o)throw o.error}}else"string"==typeof r||"number"==typeof r?e.innerText=r.toString():e.appendChild(r)};n.default=function(e,r,t){for(var o=[],i=3;i<arguments.length;i++)o[i-3]=arguments[i];var a=document.createElement(e);n._bindProps(a,r);var u=t;return t&&o&&(u=l("object"==typeof t&&t instanceof Array?n._unpackChildren(t):[t],n._unpackChildren(o))),n._bindChildren(a,u),a}},function(e,n,r){"use strict";r.r(n),n.default='<div class="container-fluid text-center blue text-light text-md-left">\n  <div class="row">\n    <div class="col-md-3 mt-md-0 mt-3 px-5">\n      <h5 class="text-uppercase d-block text-center">Luke Zhang</h5>\n      <img class="w-md-100 w-sm-50" src="/images/logo-light.png"/>\n    </div>\n    <div class="col-md-3"></div> \n\n    <hr class="clearfix w-50 d-md-none pb-3"/>\n\n    <div class="col-md-3 mb-md-0 mb-3">\n\n      <h5 class="text-uppercase">Nav</h5>\n      <ul class="list-unstyled">\n        <li>\n          <a href="/">Home</a>\n        </li>\n        <li>\n          <a href="/portfolio.html">Portfolio</a>\n        </li>\n        <li>\n          <a href="https://rebrand.ly/luke-zhang-resume" target="_blank" rel="noopener noreferrer">Resume</a>\n        </li>\n        <li>\n          <a href="/contact.html">Contact</a>\n        </li>\n      </ul>\n\n    </div>\n\n    <div class="col-md-3 mb-md-0 mb-3">\n      <h5 class="text-uppercase">Profiles</h5>\n\n      <ul class="list-unstyled">\n        <li>\n          <a href="https://github.com/Luke-zhang-04" target="_blank" ref="noopener noreferrer">\n            GitHub\n          </a>\n        </li>\n        <li>\n          <a href="mailto:Luke.zhang2004@gmail.com" target="_blank" ref="noopener noreferrer">\n            Email\n          </a>\n        </li>\n        <li>\n          <a href="https://pypi.org/user/Luke-zhang-04/" target="_blank" ref="noopener noreferrer">\n            PyPi\n          </a>\n        </li>\n        <li>\n          <a href="https://www.linkedin.com/in/luke-zhang-1b8a89198/" target="_blank" ref="noopener noreferrer">\n            Linkedin\n          </a>\n        </li>\n        <li>\n          <a href="https://twitter.com/Luke_zhang_04" target="_blank" ref="noopener noreferrer">\n            Twitter\n          </a>\n        </li>\n        <li>\n          <a href="https://stackoverflow.com/users/12370337/luke-zhang-04" target="_blank" ref="noopener noreferrer">\n            Stackoverflow\n          </a>\n        </li>\n        <li>\n          <a href="https://www.npmjs.com/~luke-zhang-04" target="_blank" ref="noopener noreferrer">\n            NPM\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class="footer-copyright text-center py-3">Copyright © 2020: Luke Zhang</div>\n'}])}));