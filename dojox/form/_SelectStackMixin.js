//>>built
define("dojox/form/_SelectStackMixin",["dojo/_base/lang","dojo/_base/array","dijit/_base/manager","dojo/_base/connect","dojo/_base/declare"],function(e,t,a,i,r){return r("dojox.form._SelectStackMixin",null,{stackId:"",stackPrefix:"",_paneIdFromOption:function(e){return(this.stackPrefix||"")+e},_optionValFromPane:function(e){var t=this.stackPrefix;return t&&0===e.indexOf(t)?e.substring(t.length):e},_togglePane:function(e,a){if(void 0==e._shown||e._shown!=a){var i=t.filter(e.getDescendants(),"return item.name;");if(a){var r=e._savedStates||{};t.forEach(i,function(e){var t=r[e.id];void 0==t&&(t=!1),e.set("disabled",t)}),delete e._savedStates}else r={},t.forEach(i,function(e){r[e.id]=e.disabled,e.set("disabled",!0)}),e._savedStates=r;e._shown=a}},_connectTitle:function(t,a){var i=e.hitch(this,function(e){this.updateOption({value:a,label:e})});t._setTitleAttr?this.connect(t,"_setTitleAttr",i):this.connect(t,"attr",function(e,t){"title"==e&&arguments.length>1&&i(t)})},onAddChild:function(t,a){if(!this._panes[t.id]){this._panes[t.id]=t;var i=this._optionValFromPane(t.id);this.addOption({value:i,label:t.title}),this._connectTitle(t,i)}t.onShow&&t.onHide&&void 0!=t._shown||(t.onShow=e.hitch(this,"_togglePane",t,!0),t.onHide=e.hitch(this,"_togglePane",t,!1),t.onHide())},_setValueAttr:function(e){"_savedValue"in this||this.inherited(arguments)},attr:function(e,t){return"value"==e&&2==arguments.length&&"_savedValue"in this&&(this._savedValue=t),this.inherited(arguments)},onRemoveChild:function(e){this._panes[e.id]&&(delete this._panes[e.id],this.removeOption(this._optionValFromPane(e.id)))},onSelectChild:function(e){this._setValueAttr(this._optionValFromPane(e.id))},onStartup:function(i){var r=i.selected;this.addOption(t.filter(t.map(i.children,function(t){var a=this._optionValFromPane(t.id);this._connectTitle(t,a);var i=null;return this._panes[t.id]||(this._panes[t.id]=t,i={value:a,label:t.title}),t.onShow&&t.onHide&&void 0!=t._shown||(t.onShow=e.hitch(this,"_togglePane",t,!0),t.onHide=e.hitch(this,"_togglePane",t,!1),t.onHide()),"_savedValue"in this&&a===this._savedValue&&(r=t),i},this),function(e){return e}));var o=this,n=function(){delete o._savedValue,o.onSelectChild(r),r._shown||o._togglePane(r,!0)};if(r!==i.selected)var l=a.byId(this.stackId),s=this.connect(l,"_showChild",function(e){this.disconnect(s),n()});else n()},postMixInProperties:function(){this._savedValue=this.value,this.inherited(arguments),this.connect(this,"onChange","_handleSelfOnChange")},postCreate:function(){this.inherited(arguments),this._panes={},this._subscriptions=[i.subscribe(this.stackId+"-startup",this,"onStartup"),i.subscribe(this.stackId+"-addChild",this,"onAddChild"),i.subscribe(this.stackId+"-removeChild",this,"onRemoveChild"),i.subscribe(this.stackId+"-selectChild",this,"onSelectChild")];var e=a.byId(this.stackId);e&&e._started&&this.onStartup({children:e.getChildren(),selected:e.selectedChildWidget})},destroy:function(){t.forEach(this._subscriptions,i.unsubscribe),delete this._panes,this.inherited("destroy",arguments)},_handleSelfOnChange:function(e){var t=this._panes[this._paneIdFromOption(e)];if(t){var i=a.byId(this.stackId);t==i.selectedChildWidget?i._transition(t):i.selectChild(t)}}})});//# sourceMappingURL=_SelectStackMixin.js.map