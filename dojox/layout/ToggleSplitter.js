//>>built
define("dojox/layout/ToggleSplitter",["dojo","dijit","dijit/layout/BorderContainer"],function(e,t){e.experimental("dojox.layout.ToggleSplitter");var i=e.declare("dojox.layout.ToggleSplitter",t.layout._Splitter,{container:null,child:null,region:null,state:"full",_closedSize:"0",baseClass:"dojoxToggleSplitter",templateString:'<div class="dijitSplitter dojoxToggleSplitter" dojoAttachEvent="onkeypress:_onKeyPress,onmousedown:_startDrag,onmouseenter:_onMouse,onmouseleave:_onMouse"><div dojoAttachPoint="toggleNode" class="dijitSplitterThumb dojoxToggleSplitterIcon" tabIndex="0" role="separator" dojoAttachEvent="onmousedown:_onToggleNodeMouseDown,onclick:_toggle,onmouseenter:_onToggleNodeMouseMove,onmouseleave:_onToggleNodeMouseMove,onfocus:_onToggleNodeMouseMove,onblur:_onToggleNodeMouseMove"><span class="dojoxToggleSplitterA11y" dojoAttachPoint="a11yText"></span></div></div>',postCreate:function(){this.inherited(arguments);var t=this.region;e.addClass(this.domNode,this.baseClass+t.charAt(0).toUpperCase()+t.substring(1))},startup:function(){this.inherited(arguments);var t=(this.child,this.child.domNode),i=e.style(t,this.horizontal?"height":"width");return this.domNode.setAttribute("aria-controls",t.id),e.forEach(["toggleSplitterState","toggleSplitterFullSize","toggleSplitterCollapsedSize"],function(e){var t=e.substring("toggleSplitter".length);t=t.charAt(0).toLowerCase()+t.substring(1),e in this.child&&(this[t]=this.child[e])},this),this.fullSize||(this.fullSize="full"==this.state?i+"px":"75px"),this._openStyleProps=this._getStyleProps(t,"full"),this._started=!0,this.set("state",this.state),this},_onKeyPress:function(t){"full"==this.state&&this.inherited(arguments),t.charCode!=e.keys.SPACE&&t.keyCode!=e.keys.ENTER||(this._toggle(t),e.stopEvent(t))},_onToggleNodeMouseDown:function(t){e.stopEvent(t),this.toggleNode.focus()},_startDrag:function(e){"full"==this.state&&this.inherited(arguments)},_stopDrag:function(e){this.inherited(arguments),this.toggleNode.blur()},_toggle:function(e){var t;switch(this.state){case"full":t=this.collapsedSize?"collapsed":"closed";break;case"collapsed":t="closed";break;default:t="full"}this.set("state",t)},_onToggleNodeMouseMove:function(t){var i=this.baseClass,a=this.toggleNode,o="full"==this.state||"collapsed"==this.state,r="mouseout"==t.type||"blur"==t.type;e.toggleClass(a,i+"IconOpen",r&&o),e.toggleClass(a,i+"IconOpenHover",!r&&o),e.toggleClass(a,i+"IconClosed",r&&!o),e.toggleClass(a,i+"IconClosedHover",!r&&!o)},_handleOnChange:function(t){var i,a,o=this.child.domNode,r=this.horizontal?"height":"width";if("full"==this.state){var n=e.mixin({display:"block",overflow:"auto",visibility:"visible"},this._openStyleProps);n[r]=this._openStyleProps&&this._openStyleProps[r]?this._openStyleProps[r]:this.fullSize,e.style(this.domNode,"cursor",""),e.style(o,n)}else if("collapsed"==this.state)a=e.getComputedStyle(o),i=this._getStyleProps(o,"full",a),this._openStyleProps=i,e.style(this.domNode,"cursor","auto"),e.style(o,r,this.collapsedSize);else{this.collapsedSize||(a=e.getComputedStyle(o),i=this._getStyleProps(o,"full",a),this._openStyleProps=i);var s=this._getStyleProps(o,"closed",a);e.style(this.domNode,"cursor","auto"),e.style(o,s)}this._setStateClass(),this.container._started&&this.container._layoutChildren(this.region)},_getStyleProps:function(t,i,a){a||(a=e.getComputedStyle(t));var o={},r=this.horizontal?"height":"width";o.overflow="closed"!=i?a.overflow:"hidden",o.visibility="closed"!=i?a.visibility:"hidden",o[r]="closed"!=i?t.style[r]||a[r]:this._closedSize;var n=["Top","Right","Bottom","Left"];return e.forEach(["padding","margin","border"],function(e){for(var t=0;t<n.length;t++){var r=e+n[t];"border"==e&&(r+="Width"),void 0!==a[r]&&(o[r]="closed"!=i?a[r]:0)}}),o},_setStateClass:function(){var t="&#9652",i=this.region.toLowerCase(),a=this.baseClass,o=this.toggleNode,r="full"==this.state||"collapsed"==this.state,n=this.focused;e.toggleClass(o,a+"IconOpen",r&&!n),e.toggleClass(o,a+"IconClosed",!r&&!n),e.toggleClass(o,a+"IconOpenHover",r&&n),e.toggleClass(o,a+"IconClosedHover",!r&&n),"top"==i&&r||"bottom"==i&&!r?t="&#9650":"top"==i&&!r||"bottom"==i&&r?t="&#9660":"right"==i&&r||"left"==i&&!r?t="&#9654":("right"==i&&!r||"left"==i&&r)&&(t="&#9664"),this.a11yText.innerHTML=t},_setStateAttr:function(e){if(this._started){var t=this.state;this.state=e,this._handleOnChange(t);var i;switch(e){case"full":this.domNode.setAttribute("aria-expanded",!0),i="onOpen";break;case"collapsed":this.domNode.setAttribute("aria-expanded",!0),i="onCollapsed";break;default:this.domNode.setAttribute("aria-expanded",!1),i="onClosed"}this[i](this.child)}},onOpen:function(e){},onCollapsed:function(e){},onClosed:function(e){}});return e.extend(t._Widget,{toggleSplitterState:"full",toggleSplitterFullSize:"",toggleSplitterCollapsedSize:""}),i});//# sourceMappingURL=ToggleSplitter.js.map