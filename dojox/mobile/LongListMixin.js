//>>built
define("dojox/mobile/LongListMixin",["dojo/_base/array","dojo/_base/lang","dojo/_base/declare","dojo/sniff","dojo/dom-construct","dojo/dom-geometry","dijit/registry","./common","./viewRegistry"],function(e,t,i,a,o,r,n,s,d){return i("dojox.mobile.LongListMixin",null,{pageSize:20,maxPages:5,unloadPages:1,startup:function(){this._started||(this.inherited(arguments),this.editable||(this._sv=d.getEnclosingScrollable(this.domNode),this._sv&&(this._items=this.getChildren(),this._clearItems(),this.containerNode=o.create("div",null,this.domNode),this.connect(this._sv,"scrollTo",t.hitch(this,this._loadItems),!0),this.connect(this._sv,"slideTo",t.hitch(this,this._loadItems),!0),this._topDiv=o.create("div",null,this.domNode,"first"),this._bottomDiv=o.create("div",null,this.domNode,"last"),this._reloadItems())))},_loadItems:function(e){var t=this._sv,i=t.getDim().d.h;if(!(i<=0)){for(var a=-t.getPos().y,o=e?-e.y:a,r=Math.min(a,o),n=Math.max(a,o)+i;this._loadedYMin>r&&this._addBefore(););for(;this._loadedYMax<n&&this._addAfter(););}},_reloadItems:function(){this._clearItems(),this._loadedYMin=this._loadedYMax=0,this._firstIndex=0,this._lastIndex=-1,this._topDiv.style.height="0px",this._loadItems()},_clearItems:function(){var t=this.containerNode;e.forEach(n.findWidgets(t),function(e){t.removeChild(e.domNode)})},_addBefore:function(){var e,t,i=r.getMarginBox(this.containerNode);for(t=0,e=this._firstIndex-1;t<this.pageSize&&e>=0;t++,e--){var a=this._items[e];o.place(a.domNode,this.containerNode,"first"),a._started||a.startup(),this._firstIndex=e}var n=r.getMarginBox(this.containerNode);if(this._adjustTopDiv(i,n),this._lastIndex-this._firstIndex>=this.maxPages*this.pageSize){var s=this.unloadPages*this.pageSize;for(e=0;e<s;e++)this.containerNode.removeChild(this._items[this._lastIndex-e].domNode);this._lastIndex-=s,n=r.getMarginBox(this.containerNode)}return this._adjustBottomDiv(n),t==this.pageSize},_addAfter:function(){var e,t,i=null;for(t=0,e=this._lastIndex+1;t<this.pageSize&&e<this._items.length;t++,e++){var a=this._items[e];o.place(a.domNode,this.containerNode),a._started||a.startup(),this._lastIndex=e}if(this._lastIndex-this._firstIndex>=this.maxPages*this.pageSize){i=r.getMarginBox(this.containerNode);var n=this.unloadPages*this.pageSize;for(e=0;e<n;e++)this.containerNode.removeChild(this._items[this._firstIndex+e].domNode);this._firstIndex+=n}var s=r.getMarginBox(this.containerNode);return i&&this._adjustTopDiv(i,s),this._adjustBottomDiv(s),t==this.pageSize},_adjustTopDiv:function(e,t){this._loadedYMin-=t.h-e.h,this._topDiv.style.height=this._loadedYMin+"px"},_adjustBottomDiv:function(e){var t=this._lastIndex>0?(this._loadedYMin+e.h)/this._lastIndex:0;t*=this._items.length-1-this._lastIndex,this._bottomDiv.style.height=t+"px",this._loadedYMax=this._loadedYMin+e.h},_childrenChanged:function(){this._qs_timer||(this._qs_timer=this.defer(function(){delete this._qs_timer,this._reloadItems()}))},resize:function(){this.inherited(arguments),this._items&&this._loadItems()},addChild:function(e,t){this._items?("number"==typeof t?this._items.splice(t,0,e):this._items.push(e),this._childrenChanged()):this.inherited(arguments)},removeChild:function(e){this._items?(this._items.splice("number"==typeof e?e:this._items.indexOf(e),1),this._childrenChanged()):this.inherited(arguments)},getChildren:function(){return this._items?this._items.slice(0):this.inherited(arguments)},_getSiblingOfChild:function(e,t){if(this._items){var i=this._items.indexOf(e);return i>=0&&(i=t>0?i++:i--),this._items[i]}return this.inherited(arguments)},generateList:function(t){this._items&&!this.append&&(e.forEach(this.getChildren(),function(e){e.destroyRecursive()}),this._items=[]),this.inherited(arguments)}})});//# sourceMappingURL=LongListMixin.js.map