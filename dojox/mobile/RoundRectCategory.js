//>>built
define("dojox/mobile/RoundRectCategory",["dojo/_base/declare","dojo/_base/window","dojo/dom-construct","dijit/_Contained","dijit/_WidgetBase","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/RoundRectCategory"],function(e,t,i,a,o,r,n){var s=e(r("dojo-bidi")?"dojox.mobile.NonBidiRoundRectCategory":"dojox.mobile.RoundRectCategory",[o,a],{label:"",tag:"h2",baseClass:"mblRoundRectCategory",buildRendering:function(){var e=this.domNode=this.containerNode=this.srcNodeRef||i.create(this.tag);this.inherited(arguments),this.label||1!==e.childNodes.length||3!==e.firstChild.nodeType||(this.label=e.firstChild.nodeValue)},_setLabelAttr:function(e){this.label=e,this.domNode.innerHTML=this._cv?this._cv(e):e}});return r("dojo-bidi")?e("dojox.mobile.RoundRectCategory",[s,n]):s});//# sourceMappingURL=RoundRectCategory.js.map