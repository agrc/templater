//>>built
define("dojox/lang/oo/Decorator",["dojo","dijit","dojox"],function(e,t,i){e.provide("dojox.lang.oo.Decorator"),function(){var e=i.lang.oo,t=e.Decorator=function(e,t){this.value=e,this.decorator="object"==typeof t?function(){return t.exec.apply(t,arguments)}:t};e.makeDecorator=function(e){return function(i){return new t(i,e)}}}()});//# sourceMappingURL=Decorator.js.map