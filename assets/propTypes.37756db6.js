/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function e(e){return"[object Object]"===Object.prototype.toString.call(e)}function t(){return(t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}const n={silent:!1,logLevel:"warn"},o=["validator"],i=Object.prototype,a=i.toString,s=i.hasOwnProperty,u=/^\s*function (\w+)/;function l(e){var t;const r=null!==(t=null==e?void 0:e.type)&&void 0!==t?t:e;if(r){const e=r.toString().match(u);return e?e[1]:""}return""}const c=function(t){var r,n;return!1!==e(t)&&(void 0===(r=t.constructor)||!1!==e(n=r.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf"))};let f=e=>e;const d=(e,t)=>s.call(e,t),p=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},y=Array.isArray||function(e){return"[object Array]"===a.call(e)},v=e=>"[object Function]"===a.call(e),h=e=>c(e)&&d(e,"_vueTypes_name"),b=e=>c(e)&&(d(e,"type")||["_vueTypes_name","validator","default","required"].some((t=>d(e,t))));function g(e,t){return Object.defineProperty(e.bind(t),"__original",{value:e})}function O(e,t,r=!1){let n,o=!0,i="";n=c(e)?e:{type:e};const a=h(n)?n._vueTypes_name+" - ":"";if(b(n)&&null!==n.type){if(void 0===n.type||!0===n.type)return o;if(!n.required&&void 0===t)return o;y(n.type)?(o=n.type.some((e=>!0===O(e,t,!0))),i=n.type.map((e=>l(e))).join(" or ")):(i=l(n),o="Array"===i?y(t):"Object"===i?c(t):"String"===i||"Number"===i||"Boolean"===i||"Function"===i?function(e){if(null==e)return"";const t=e.constructor.toString().match(u);return t?t[1]:""}(t)===i:t instanceof n.type)}if(!o){const e=`${a}value "${t}" should be of type "${i}"`;return!1===r?(f(e),!1):e}if(d(n,"validator")&&v(n.validator)){const e=f,i=[];if(f=e=>{i.push(e)},o=n.validator(t),f=e,!o){const e=(i.length>1?"* ":"")+i.join("\n* ");return i.length=0,!1===r?(f(e),o):e}}return o}function m(e,t){const r=Object.defineProperties(t,{_vueTypes_name:{value:e,writable:!0},isRequired:{get(){return this.required=!0,this}},def:{value(e){return void 0===e?(d(this,"default")&&delete this.default,this):v(e)||!0===O(this,e,!0)?(this.default=y(e)?()=>[...e]:c(e)?()=>Object.assign({},e):e,this):(f(`${this._vueTypes_name} - invalid default value: "${e}"`),this)}}}),{validator:n}=r;return v(n)&&(r.validator=g(n,r)),r}function j(e,t){const r=m(e,t);return Object.defineProperty(r,"validate",{value(e){return v(this.validator)&&f(`${this._vueTypes_name} - calling .validate() will overwrite the current custom validator function. Validator info:\n${JSON.stringify(this)}`),this.validator=g(e,this),this}})}function _(e,t,n){const i=function(e){const t={};return Object.getOwnPropertyNames(e).forEach((r=>{t[r]=Object.getOwnPropertyDescriptor(e,r)})),Object.defineProperties({},t)}(t);if(i._vueTypes_name=e,!c(n))return i;const{validator:a}=n,s=r(n,o);if(v(a)){let{validator:e}=i;e&&(e=null!==(l=(u=e).__original)&&void 0!==l?l:u),i.validator=g(e?function(t){return e.call(this,t)&&a.call(this,t)}:a,i)}var u,l;return Object.assign(i,s)}function T(e){return e.replace(/^(?!\s*$)/gm,"  ")}function $(e,t="custom validation failed"){if("function"!=typeof e)throw new TypeError("[VueTypes error]: You must provide a function as argument");return m(e.name||"<<anonymous function>>",{validator(r){const n=e(r);return n||f(`${this._vueTypes_name} - ${t}`),n}})}function w(e){if(!y(e))throw new TypeError("[VueTypes error]: You must provide an array as argument.");const t=`oneOf - value should be one of "${e.join('", "')}".`,r=e.reduce(((e,t)=>{if(null!=t){const r=t.constructor;-1===e.indexOf(r)&&e.push(r)}return e}),[]);return m("oneOf",{type:r.length>0?r:void 0,validator(r){const n=-1!==e.indexOf(r);return n||f(t),n}})}function P(e){if(!y(e))throw new TypeError("[VueTypes error]: You must provide an array as argument");let t=!1,r=[];for(let o=0;o<e.length;o+=1){const n=e[o];if(b(n)){if(h(n)&&"oneOf"===n._vueTypes_name&&n.type){r=r.concat(n.type);continue}if(v(n.validator)&&(t=!0),!0===n.type||!n.type){f('oneOfType - invalid usage of "true" or "null" as types.');continue}n.type&&(r=r.concat(n.type))}r.push(n)}r=r.filter(((e,t)=>r.indexOf(e)===t));const n=r.length>0?r:null;return m("oneOfType",t?{type:n,validator(t){const r=[],n=e.some((e=>{const n=O(h(e)&&"oneOf"===e._vueTypes_name?e.type||null:e,t,!0);return"string"==typeof n&&r.push(n),!0===n}));return n||f(`oneOfType - provided value does not match any of the ${r.length} passed-in validators:\n${T(r.join("\n"))}`),n}}:{type:n})}function x(e){return m("arrayOf",{type:Array,validator(t){let r="";const n=t.every((t=>(r=O(e,t,!0),!0===r)));return n||f(`arrayOf - value validation error:\n${T(r)}`),n}})}function S(e){return m("instanceOf",{type:e})}function q(e){return m("objectOf",{type:Object,validator(t){let r="";const n=Object.keys(t).every((n=>(r=O(e,t[n],!0),!0===r)));return n||f(`objectOf - value validation error:\n${T(r)}`),n}})}function A(e){const t=Object.keys(e),r=t.filter((t=>{var r;return!(null===(r=e[t])||void 0===r||!r.required)})),n=m("shape",{type:Object,validator(n){if(!c(n))return!1;const o=Object.keys(n);if(r.length>0&&r.some((e=>-1===o.indexOf(e)))){const e=r.filter((e=>-1===o.indexOf(e)));return f(1===e.length?`shape - required property "${e[0]}" is not defined.`:`shape - required properties "${e.join('", "')}" are not defined.`),!1}return o.every((r=>{if(-1===t.indexOf(r))return!0===this._vueTypes_isLoose||(f(`shape - shape definition does not include a "${r}" property. Allowed keys: "${t.join('", "')}".`),!1);const o=O(e[r],n[r],!0);return"string"==typeof o&&f(`shape - "${r}" property validation error:\n ${T(o)}`),!0===o}))}});return Object.defineProperty(n,"_vueTypes_isLoose",{writable:!0,value:!1}),Object.defineProperty(n,"loose",{get(){return this._vueTypes_isLoose=!0,this}}),n}const N=["name","validate","getter"],E=(k=V=class{static get any(){return j("any",{})}static get func(){return j("function",{type:Function}).def(this.defaults.func)}static get bool(){return j("boolean",{type:Boolean}).def(this.defaults.bool)}static get string(){return j("string",{type:String}).def(this.defaults.string)}static get number(){return j("number",{type:Number}).def(this.defaults.number)}static get array(){return j("array",{type:Array}).def(this.defaults.array)}static get object(){return j("object",{type:Object}).def(this.defaults.object)}static get integer(){return m("integer",{type:Number,validator:e=>p(e)}).def(this.defaults.integer)}static get symbol(){return m("symbol",{validator:e=>"symbol"==typeof e})}static extend(e){if(y(e))return e.forEach((e=>this.extend(e))),this;const{name:t,validate:n=!1,getter:o=!1}=e,i=r(e,N);if(d(this,t))throw new TypeError(`[VueTypes error]: Type "${t}" already defined`);const{type:a}=i;if(h(a))return delete i.type,Object.defineProperty(this,t,o?{get:()=>_(t,a,i)}:{value(...e){const r=_(t,a,i);return r.validator&&(r.validator=r.validator.bind(r,...e)),r}});let s;return s=o?{get(){const e=Object.assign({},i);return n?j(t,e):m(t,e)},enumerable:!0}:{value(...e){const r=Object.assign({},i);let o;return o=n?j(t,r):m(t,r),r.validator&&(o.validator=r.validator.bind(o,...e)),o},enumerable:!0},Object.defineProperty(this,t,s)}},V.defaults={},V.sensibleDefaults=void 0,V.config=n,V.custom=$,V.oneOf=w,V.instanceOf=S,V.oneOfType=P,V.arrayOf=x,V.objectOf=q,V.shape=A,V.utils={validate:(e,t)=>!0===O(t,e,!0),toType:(e,t,r=!1)=>r?j(e,t):m(e,t)},k);var V,k;function D(e={func:()=>{},bool:!0,string:"",number:0,array:()=>[],object:()=>({}),integer:0}){var r,n;return n=r=class extends E{static get sensibleDefaults(){return t({},this.defaults)}static set sensibleDefaults(r){this.defaults=!1!==r?t({},!0!==r?r:e):{}}},r.defaults=t({},e),n}D();const F=D({func:void 0,bool:void 0,string:void 0,number:void 0,object:void 0,integer:void 0});F.extend([{name:"style",getter:!0,type:[String,Object],default:void 0},{name:"VNodeChild",getter:!0,type:void 0}]);export{F as p};
