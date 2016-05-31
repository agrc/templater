//>>built
define("dojo/html",["./_base/kernel","./_base/lang","./_base/array","./_base/declare","./dom","./dom-construct","./parser"],function(e,t,i,n,o,r,s){var a=0,d={_secureForInnerHtml:function(e){return e.replace(/(?:\s*<!DOCTYPE\s[^>]+>|<title[^>]*>[\s\S]*?<\/title>)/gi,"")},_emptyNode:r.empty,_setNodeContent:function(e,i){if(r.empty(e),i)if("string"==typeof i&&(i=r.toDom(i,e.ownerDocument)),!i.nodeType&&t.isArrayLike(i))for(var n=i.length,o=0;o<i.length;o=n==i.length?o+1:0)r.place(i[o],e,"last");else r.place(i,e,"last");return e},_ContentSetter:n("dojo.html._ContentSetter",null,{node:"",content:"",id:"",cleanContent:!1,extractContent:!1,parseContent:!1,parserScope:e._scopeName,startup:!0,constructor:function(e,i){t.mixin(this,e||{}),i=this.node=o.byId(this.node||i),this.id||(this.id=["Setter",i?i.id||i.tagName:"",a++].join("_"))},set:function(e,t){void 0!==e&&(this.content=e),t&&this._mixin(t),this.onBegin(),this.setContent();var i=this.onEnd();return i&&i.then?i:this.node},setContent:function(){var e=this.node;if(!e)throw new Error(this.declaredClass+": setContent given no node");try{e=d._setNodeContent(e,this.content)}catch(t){var i=this.onContentError(t);try{e.innerHTML=i}catch(t){}}this.node=e},empty:function(){this.parseDeferred&&(this.parseDeferred.isResolved()||this.parseDeferred.cancel(),delete this.parseDeferred),this.parseResults&&this.parseResults.length&&(i.forEach(this.parseResults,function(e){e.destroy&&e.destroy()}),delete this.parseResults),r.empty(this.node)},onBegin:function(){var e=this.content;if(t.isString(e)&&(this.cleanContent&&(e=d._secureForInnerHtml(e)),this.extractContent)){var i=e.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);i&&(e=i[1])}return this.empty(),this.content=e,this.node},onEnd:function(){return this.parseContent&&this._parse(),this.node},tearDown:function(){delete this.parseResults,delete this.parseDeferred,delete this.node,delete this.content},onContentError:function(e){return"Error occurred setting content: "+e},onExecError:function(e){return"Error occurred executing scripts: "+e},_mixin:function(e){var t,i={};for(t in e)t in i||(this[t]=e[t])},_parse:function(){var e=this.node;try{var t={};i.forEach(["dir","lang","textDir"],function(e){this[e]&&(t[e]=this[e])},this);var n=this;this.parseDeferred=s.parse({rootNode:e,noStart:!this.startup,inherited:t,scope:this.parserScope}).then(function(e){return n.parseResults=e},function(e){n._onError("Content",e,"Error parsing in _ContentSetter#"+this.id)})}catch(o){this._onError("Content",o,"Error parsing in _ContentSetter#"+this.id)}},_onError:function(e,t,i){var n=this["on"+e+"Error"].call(this,t);i||n&&d._setNodeContent(this.node,n,!0)}}),set:function(e,i,n){if(void 0==i&&(i=""),n){var o=new d._ContentSetter(t.mixin(n,{content:i,node:e}));return o.set()}return d._setNodeContent(e,i,!0)}};return t.setObject("dojo.html",d),d});//# sourceMappingURL=html.js.map