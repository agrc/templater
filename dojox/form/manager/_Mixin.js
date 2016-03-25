//>>built
define("dojox/form/manager/_Mixin",["dojo/_base/window","dojo/_base/lang","dojo/_base/array","dojo/on","dojo/dom-attr","dojo/dom-class","dijit/_base/manager","dijit/_Widget","dijit/form/_FormWidget","dijit/form/Button","dijit/form/CheckBox","dojo/_base/declare"],function(e,t,i,a,r,n,o,s,d,l,u,h){var c=t.getObject("dojox.form.manager",!0),m=c.actionAdapter=function(e){return function(a,r,n){t.isArray(r)?i.forEach(r,function(t){e.call(this,a,t,n)},this):e.apply(this,arguments)}},f=(c.inspectorAdapter=function(e){return function(i,a,r){return e.call(this,i,t.isArray(a)?a[0]:a,r)}},{domNode:1,containerNode:1,srcNodeRef:1,bgIframe:1}),p=c._keys=function(e){var t,i=[];for(t in e)e.hasOwnProperty(t)&&i.push(t);return i},g=function(e){var i=e.get("name");if(i&&e.isInstanceOf(d))if(i in this.formWidgets){var a=this.formWidgets[i].widget;t.isArray(a)?a.push(e):this.formWidgets[i].widget=[a,e]}else this.formWidgets[i]={widget:e,connections:[]};else i=null;return i},y=function(e){var a={};return m(function(e,r){var n=r.get("data-dojo-observer")||r.get("observer");n&&"string"==typeof n&&i.forEach(n.split(","),function(e){e=t.trim(e),e&&t.isFunction(this[e])&&(a[e]=1)},this)}).call(this,null,this.formWidgets[e].widget),p(a)},v=function(e,n){var o=this.formWidgets[e],s=o.widget,d=o.connections;if(d.length&&(i.forEach(d,function(e){e.remove()}),d=o.connections=[]),t.isArray(s))i.forEach(s,function(o){i.forEach(n,function(i){d.push(a(o,"change",t.hitch(this,function(t){this.watching&&r.get(o.focusNode,"checked")&&this[i](o.get("value"),e,o,t)})))},this)},this);else{var u=s.isInstanceOf(l)?"click":"change";i.forEach(n,function(i){d.push(a(s,u,t.hitch(this,function(t){this.watching&&this[i](s.get("value"),e,s,t)})))},this)}},b=h("dojox.form.manager._Mixin",null,{watching:!0,startup:function(){this._started||(this.formWidgets={},this.formNodes={},this.registerWidgetDescendants(this),this.inherited(arguments))},destroy:function(){for(var e in this.formWidgets)i.forEach(this.formWidgets[e].connections,function(e){e.remove()});this.formWidgets={},this.inherited(arguments)},registerWidget:function(e){"string"==typeof e?e=o.byId(e):e.tagName&&e.cloneNode&&(e=o.byNode(e));var t=g.call(this,e);return t&&v.call(this,t,y.call(this,t)),this},unregisterWidget:function(e){return e in this.formWidgets&&(i.forEach(this.formWidgets[e].connections,function(e){e.remove()}),delete this.formWidgets[e]),this},registerWidgetDescendants:function(e){"string"==typeof e?e=o.byId(e):e.tagName&&e.cloneNode&&(e=o.byNode(e));var t=i.map(e.getDescendants(),g,this);return i.forEach(t,function(e){e&&v.call(this,e,y.call(this,e))},this),this.registerNodeDescendants?this.registerNodeDescendants(e.domNode):this},unregisterWidgetDescendants:function(e){return"string"==typeof e?e=o.byId(e):e.tagName&&e.cloneNode&&(e=o.byNode(e)),i.forEach(i.map(e.getDescendants(),function(e){return e instanceof d&&e.get("name")||null}),function(e){e&&this.unregisterWidget(e)},this),this.unregisterNodeDescendants?this.unregisterNodeDescendants(e.domNode):this},formWidgetValue:function(e,a){var n,o=2==arguments.length&&void 0!==a;return"string"==typeof e&&(e=this.formWidgets[e],e&&(e=e.widget)),e?t.isArray(e)?o?(i.forEach(e,function(e){e.set("checked",!1,!this.watching)},this),i.forEach(e,function(e){e.set("checked",e.value===a,!this.watching)},this),this):(i.some(e,function(e){return r.get(e.focusNode,"checked")?(n=e,!0):!1}),n?n.get("value"):""):e.isInstanceOf&&e.isInstanceOf(u)?o?(e.set("value",Boolean(a),!this.watching),this):Boolean(e.get("value")):o?(e.set("value",a,!this.watching),this):e.get("value"):null},formPointValue:function(e,t){return e&&"string"==typeof e&&(e=this[e]),e&&e.tagName&&e.cloneNode&&n.contains(e,"dojoFormValue")?2==arguments.length&&void 0!==t?(e.innerHTML=t,this):e.innerHTML:null},inspectFormWidgets:function(e,a,r){var n,o={};if(a)if(t.isArray(a))i.forEach(a,function(t){t in this.formWidgets&&(o[t]=e.call(this,t,this.formWidgets[t].widget,r))},this);else for(n in a)n in this.formWidgets&&(o[n]=e.call(this,n,this.formWidgets[n].widget,a[n]));else for(n in this.formWidgets)o[n]=e.call(this,n,this.formWidgets[n].widget,r);return o},inspectAttachedPoints:function(e,a,r){var n,o,s={};if(a)if(t.isArray(a))i.forEach(a,function(t){o=this[t],o&&o.tagName&&o.cloneNode&&(s[t]=e.call(this,t,o,r))},this);else for(n in a)o=this[n],o&&o.tagName&&o.cloneNode&&(s[n]=e.call(this,n,o,a[n]));else for(n in this)n in f||(o=this[n],o&&o.tagName&&o.cloneNode&&(s[n]=e.call(this,n,o,r)));return s},inspect:function(e,a,r){var n=this.inspectFormWidgets(function(a,r,n){return t.isArray(r)?e.call(this,a,i.map(r,function(e){return e.domNode}),n):e.call(this,a,r.domNode,n)},a,r);return this.inspectFormNodes&&t.mixin(n,this.inspectFormNodes(e,a,r)),t.mixin(n,this.inspectAttachedPoints(e,a,r))}});return t.extend(s,{observer:""}),b});//# sourceMappingURL=_Mixin.js.map