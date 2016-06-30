//>>built
define("dojox/mobile/parser",["dojo/_base/kernel","dojo/_base/array","dojo/_base/config","dojo/_base/lang","dojo/_base/window","dojo/ready"],function(dojo,array,config,lang,win,ready){var dm=lang.getObject("dojox.mobile",!0),Parser=function(){var _ctorMap={},getCtor=function(e,t){if("string"==typeof t){var i=e+":"+t.replace(/ /g,"");return _ctorMap[i]||(_ctorMap[i]=getCtor(e).createSubclass(array.map(t.split(/, */),getCtor)))}return _ctorMap[e]||(_ctorMap[e]=lang.getObject(e)||require(e))},_eval=function(js){return eval(js)};this.instantiate=function(nodes,mixin,options){mixin=mixin||{},options=options||{};var i,ws=[];if(nodes){for(i=0;i<nodes.length;i++){var n=nodes[i],type=n._type,ctor=getCtor(type,n.getAttribute("data-dojo-mixins")),proto=ctor.prototype,params={},prop,v,t;lang.mixin(params,_eval.call(options.propsThis,"({"+(n.getAttribute("data-dojo-props")||"")+"})")),lang.mixin(params,options.defaults),lang.mixin(params,mixin);for(prop in proto)v=n.getAttributeNode(prop),v=v&&v.nodeValue,t=typeof proto[prop],(v||"boolean"===t&&""===v)&&(lang.isArray(proto[prop])?params[prop]=v.split(/\s*,\s*/):"string"===t?params[prop]=v:"number"===t?params[prop]=v-0:"boolean"===t?params[prop]="false"!==v:"object"===t?params[prop]=eval("("+v+")"):"function"===t&&(params[prop]=lang.getObject(v,!1)||new Function(v),n.removeAttribute(prop)));params["class"]=n.className,params.style||(params.style=n.style.cssText),v=n.getAttribute("data-dojo-attach-point"),v&&(params.dojoAttachPoint=v),v=n.getAttribute("data-dojo-attach-event"),v&&(params.dojoAttachEvent=v);var instance=new ctor(params,n);ws.push(instance);var jsId=n.getAttribute("jsId")||n.getAttribute("data-dojo-id");jsId&&lang.setObject(jsId,instance)}for(i=0;i<ws.length;i++){var w=ws[i];!options.noStart&&w.startup&&!w._started&&w.startup()}}return ws},this.parse=function(e,t){e?!t&&e.rootNode&&(t=e,e=e.rootNode):e=win.body();var i,a,r=e.getElementsByTagName("*"),o=[];for(i=0;i<r.length;i++){var n=r[i],s=n._type=n.getAttribute("dojoType")||n.getAttribute("data-dojo-type");if(s){if(n._skip){n._skip="";continue}if(getCtor(s).prototype.stopParser&&(!t||!t.template)){var l=n.getElementsByTagName("*");for(a=0;a<l.length;a++)l[a]._skip="1"}o.push(n)}}var d=t&&t.template?{template:!0}:null;return this.instantiate(o,d,t)}},parser=new Parser;return config.parseOnLoad&&ready(100,function(){try{require("dojo/parser")||parser.parse()}catch(e){parser.parse()}}),dm.parser=parser,dojo.parser=dojo.parser||parser,parser});//# sourceMappingURL=parser.js.map