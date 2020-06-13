var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(b){var a=0;return function(){return a<b.length?{done:!1,value:b[a++]}:{done:!0}}};$jscomp.arrayIterator=function(b){return{next:$jscomp.arrayIteratorImpl(b)}};$jscomp.makeIterator=function(b){var a="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];return a?a.call(b):$jscomp.arrayIterator(b)};$jscomp.arrayFromIterator=function(b){for(var a,c=[];!(a=b.next()).done;)c.push(a.value);return c};
$jscomp.arrayFromIterable=function(b){return b instanceof Array?b:$jscomp.arrayFromIterator($jscomp.makeIterator(b))};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.objectCreate=$jscomp.ASSUME_ES5||"function"==typeof Object.create?Object.create:function(b){var a=function(){};a.prototype=b;return new a};
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(b,a,c){if(b==Array.prototype||b==Object.prototype)return b;b[a]=c.value;return b};$jscomp.getGlobal=function(b){b=["object"==typeof globalThis&&globalThis,b,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var a=0;a<b.length;++a){var c=b[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(b,a){var c=$jscomp.propertyToPolyfillSymbol[a];if(null==c)return b[a];c=b[c];return void 0!==c?c:b[a]};
$jscomp.polyfill=function(b,a,c,d){a&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(b,a,c,d):$jscomp.polyfillUnisolated(b,a,c,d))};$jscomp.polyfillUnisolated=function(b,a,c,d){c=$jscomp.global;b=b.split(".");for(d=0;d<b.length-1;d++){var e=b[d];e in c||(c[e]={});c=c[e]}b=b[b.length-1];d=c[b];a=a(d);a!=d&&null!=a&&$jscomp.defineProperty(c,b,{configurable:!0,writable:!0,value:a})};
$jscomp.polyfillIsolated=function(b,a,c,d){var e=b.split(".");b=1===e.length;d=e[0];d=!b&&d in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var f=0;f<e.length-1;f++){var g=e[f];g in d||(d[g]={});d=d[g]}e=e[e.length-1];c=$jscomp.IS_SYMBOL_NATIVE&&"es6"===c?d[e]:null;a=a(c);null!=a&&(b?$jscomp.defineProperty($jscomp.polyfills,e,{configurable:!0,writable:!0,value:a}):a!==c&&($jscomp.propertyToPolyfillSymbol[e]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(e):$jscomp.POLYFILL_PREFIX+e,e=$jscomp.propertyToPolyfillSymbol[e],
$jscomp.defineProperty(d,e,{configurable:!0,writable:!0,value:a})))};$jscomp.underscoreProtoCanBeSet=function(){var b={a:!0},a={};try{return a.__proto__=b,a.a}catch(c){}return!1};$jscomp.setPrototypeOf=$jscomp.TRUST_ES6_POLYFILLS&&"function"==typeof Object.setPrototypeOf?Object.setPrototypeOf:$jscomp.underscoreProtoCanBeSet()?function(b,a){b.__proto__=a;if(b.__proto__!==a)throw new TypeError(b+" is not extensible");return b}:null;
$jscomp.inherits=function(b,a){b.prototype=$jscomp.objectCreate(a.prototype);b.prototype.constructor=b;if($jscomp.setPrototypeOf){var c=$jscomp.setPrototypeOf;c(b,a)}else for(c in a)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(a,c);d&&Object.defineProperty(b,c,d)}else b[c]=a[c];b.superClass_=a.prototype};$jscomp.owns=function(b,a){return Object.prototype.hasOwnProperty.call(b,a)};
$jscomp.polyfill("Object.entries",function(b){return b?b:function(a){var c=[],b;for(b in a)$jscomp.owns(a,b)&&c.push([b,a[b]]);return c}},"es8","es3");var WIDGETS_DEBUG=!1,LOAD_START=Date.now();WIDGETS_DEBUG&&document.addEventListener("readystatechange",function(b){console.log(Date.now()-LOAD_START+"ms",document.readyState)});
var Widget=function(b){for(var a=[],c=0;c<arguments.length;++c)a[c-0]=arguments[c];this.tag="div";this.classes=["web-widget"];this.styles=[];this.attributes={};this.children=a;this.element=null};Widget.prototype.addClass=function(b){for(var a=[],c=0;c<arguments.length;++c)a[c-0]=arguments[c];WIDGETS_DEBUG&&console.log("CALLED addClass() with",a);this.classes.push.apply(this.classes,$jscomp.arrayFromIterable(a));return this};
Widget.prototype.addStyle=function(b,a){WIDGETS_DEBUG&&console.log("CALLED addStyle() with",b,a);this.styles[b]=a;return this};Widget.prototype.append=function(b){WIDGETS_DEBUG&&console.log("CALLED append() with",b);this.element.appendChild(b.element);return this};Widget.prototype.applyAttribute=function(b,a){WIDGETS_DEBUG&&console.log("CALLED applyAttribute() with",b,a);this.element.setAttribute(b,a);return this};
Widget.prototype.applyAttributes=function(){WIDGETS_DEBUG&&console.log("CALLED applyAttributes()");for(var b=$jscomp.makeIterator(Object.entries(this.attributes)),a=b.next();!a.done;a=b.next()){var c=$jscomp.makeIterator(a.value);a=c.next().value;c=c.next().value;this.applyAttribute(a,c)}return this};Widget.prototype.applyClass=function(b){WIDGETS_DEBUG&&console.log("CALLED applyClass() with",b);this.element.classList.add(b);return this};
Widget.prototype.applyClasses=function(){WIDGETS_DEBUG&&console.log("CALLED applyClasses()");for(var b=$jscomp.makeIterator(this.classes),a=b.next();!a.done;a=b.next())this.applyClass(a.value);return this};Widget.prototype.applyStyle=function(b,a){WIDGETS_DEBUG&&console.log("CALLED applyStyle() with",b,a);this.element.style[b]=a;return this};
Widget.prototype.applyStyles=function(){WIDGETS_DEBUG&&console.log("CALLED applyStyles()");for(var b=$jscomp.makeIterator(Object.entries(this.styles)),a=b.next();!a.done;a=b.next()){var c=$jscomp.makeIterator(a.value);a=c.next().value;c=c.next().value;this.applyStyle(a,c)}return this};
Widget.prototype.build=function(){WIDGETS_DEBUG&&console.log("\n\nBUILDING",this);this.setElement().applyAttributes().applyClasses().applyStyles();if(this.children.length)for(var b=$jscomp.makeIterator(this.children),a=b.next();!a.done;a=b.next()){a=a.value;if("string"===typeof a)a=(new TextNode(a)).build();else if(a instanceof Widget)a=a.build();else throw Error("Child of type [${typeof child}] could not be added to tree. Got: ${child}");WIDGETS_DEBUG&&console.log("APPENDING",a);this.append(a);a.clearMemory()}return this};
Widget.prototype.clearChildren=function(){WIDGETS_DEBUG&&console.log("CALLED clearChildren()");if(!this.children.length)return this;for(var b=$jscomp.makeIterator(this.children),a=b.next();!a.done;a=b.next())a.value.clearMemory();return this};Widget.prototype.clearElement=function(){WIDGETS_DEBUG&&console.log("CALLED clearElement()");if(!this.element)return this;this.element.remove();this.element=null;return this};
Widget.prototype.clearMemory=function(){delete this.element;delete this.children;delete this.attributes;return this};Widget.prototype.setAttribute=function(b,a){WIDGETS_DEBUG&&console.log("CALLED setAttribute() with",b,a);this.attributes[b]=a;return this};Widget.prototype.setChildren=function(b){WIDGETS_DEBUG&&console.log("CALLED setChildren() with",b);this.children=b;return this};
Widget.prototype.setElement=function(){WIDGETS_DEBUG&&console.log("CALLED setElement() with",this.tag);this.clearElement();this.element=document.createElement(this.tag);return this};Widget.prototype.setId=function(b){WIDGETS_DEBUG&&console.log("CALLED setId() with",b);return this.setAttribute("id",b)};Widget.prototype.setTextNode=function(b){WIDGETS_DEBUG&&console.log("CALLED setTextNode()","with",b);this.clearElement();this.element=document.createTextNode(b);return this};
Widget.prototype.render=function(b){this.build();WIDGETS_DEBUG&&console.log("RENDERED",this.element);b.replaceWith(this.element);return this};Widget.prototype.export=function(){return this.element.outerHTML};var TextNode=function(b){Widget.call(this);this.text=b};$jscomp.inherits(TextNode,Widget);TextNode.prototype.build=function(){return this.setTextNode(this.text)};
var Heading1=function(b){for(var a=[],c=0;c<arguments.length;++c)a[c-0]=arguments[c];Widget.apply(this,[].concat($jscomp.arrayFromIterable(a)));this.tag="h1"};$jscomp.inherits(Heading1,Widget);var Heading2=function(b){for(var a=[],c=0;c<arguments.length;++c)a[c-0]=arguments[c];Widget.apply(this,[].concat($jscomp.arrayFromIterable(a)));this.tag="h2"};$jscomp.inherits(Heading2,Widget);
var Flex=function(b){for(var a=[],c=0;c<arguments.length;++c)a[c-0]=arguments[c];Widget.apply(this,[].concat($jscomp.arrayFromIterable(a)));this.flex=1;this.addClass("flex")};$jscomp.inherits(Flex,Widget);Flex.prototype.setFlex=function(b){this.flex=void 0===b?1:b;this.addClass("flex-"+this.flex);return this};var Expanded=function(b){for(var a=[],c=0;c<arguments.length;++c)a[c-0]=arguments[c];(Widget.apply(this,[].concat($jscomp.arrayFromIterable(a))),this).addClass("expanded")};
$jscomp.inherits(Expanded,Widget);var Container=function(){Expanded.apply(this,arguments)};$jscomp.inherits(Container,Expanded);var Centered=function(b){for(var a=[],c=0;c<arguments.length;++c)a[c-0]=arguments[c];(Expanded.apply(this,[].concat($jscomp.arrayFromIterable(a))),this).addClass("layout-center")};$jscomp.inherits(Centered,Expanded);var Column=function(b){for(var a=[],c=0;c<arguments.length;++c)a[c-0]=arguments[c];(Expanded.apply(this,[].concat($jscomp.arrayFromIterable(a))),this).addClass("layout-column")};
$jscomp.inherits(Column,Expanded);var Row=function(b){for(var a=[],c=0;c<arguments.length;++c)a[c-0]=arguments[c];(Expanded.apply(this,[].concat($jscomp.arrayFromIterable(a))),this).addClass("layout-row")};$jscomp.inherits(Row,Expanded);
var VerticalLayout=function(b){for(var a=[],c=0;c<arguments.length;++c)a[c-0]=arguments[c];Column.apply(this,[].concat($jscomp.arrayFromIterable(a)));a=$jscomp.makeIterator(this.children);for(c=a.next();!c.done;c=a.next())c.value.addClass("expanded","layout-center","flex-1")};$jscomp.inherits(VerticalLayout,Column);
var HorizontalLayout=function(b){for(var a=[],c=0;c<arguments.length;++c)a[c-0]=arguments[c];Row.apply(this,[].concat($jscomp.arrayFromIterable(a)));a=$jscomp.makeIterator(this.children);for(c=a.next();!c.done;c=a.next())c.value.addClass("expanded","layout-center","flex-1")};$jscomp.inherits(HorizontalLayout,Row);var Slide=function(b){for(var a=[],c=0;c<arguments.length;++c)a[c-0]=arguments[c];(Expanded.apply(this,[].concat($jscomp.arrayFromIterable(a))),this).addClass("layout-bg","example-bg")};
$jscomp.inherits(Slide,Expanded);var Card=function(b){for(var a=[],c=0;c<arguments.length;++c)a[c-0]=arguments[c];(Flex.apply(this,[].concat($jscomp.arrayFromIterable(a))),this).addClass("layout-card")};$jscomp.inherits(Card,Flex);var CenteredCard=function(b){for(var a=[],c=0;c<arguments.length;++c)a[c-0]=arguments[c];(Card.apply(this,[].concat($jscomp.arrayFromIterable(a))),this).addClass("layout-center")};$jscomp.inherits(CenteredCard,Card);
var CenteredHeading1=function(b){for(var a=[],c=0;c<arguments.length;++c)a[c-0]=arguments[c];(Heading1.apply(this,[].concat($jscomp.arrayFromIterable(a))),this).addClass("expanded","layout-center")};$jscomp.inherits(CenteredHeading1,Heading1);var CenteredHeading2=function(b){for(var a=[],c=0;c<arguments.length;++c)a[c-0]=arguments[c];(Heading1.apply(this,[].concat($jscomp.arrayFromIterable(a))),this).addClass("expanded","layout-center")};$jscomp.inherits(CenteredHeading2,Heading1);
function Render(b){var a=0,c=b.length;window.requestAnimationFrame(function e(){a>=c||(document.body.appendChild(b[a++].render()),window.requestAnimationFrame(e))});console.log("Full rollout took",Date.now()-LOAD_START,"ms");return!0}function testerino(){};