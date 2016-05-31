//>>built
define("dojox/mobile/_ItemBase",["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/dom-class","dojo/touch","dijit/registry","dijit/_Contained","dijit/_Container","dijit/_WidgetBase","./TransitionEvent","./iconUtils","./sniff","./viewRegistry","dojo/has!dojo-bidi?dojox/mobile/bidi/_ItemBase"],function(e,t,i,a,n,o,r,s,d,l,h,u,c,m,f){var g=t(c("dojo-bidi")?"dojox.mobile._NonBidiItemBase":"dojox.mobile._ItemBase",[l,d,s],{icon:"",iconPos:"",alt:"",href:"",hrefTarget:"",moveTo:"",scene:"",clickable:!1,url:"",urlTarget:"",back:!1,transition:"",transitionDir:1,transitionOptions:null,callback:null,label:"",toggle:!1,selected:!1,tabIndex:"0",_setTabIndexAttr:"",paramsToInherit:"transition,icon",_selStartMethod:"none",_selEndMethod:"none",_delayedSelection:!1,_duration:800,_handleClick:!0,buildRendering:function(){this.inherited(arguments),this._isOnLine=this.inheritParams()},startup:function(){this._started||(this._isOnLine||this.inheritParams(),this._updateHandles(),this.inherited(arguments))},inheritParams:function(){var t=this.getParent();return t&&e.forEach(this.paramsToInherit.split(/,/),function(e){if(e.match(/icon/i)){var i=e+"Base",a=e+"Pos";this[e]&&t[i]&&"/"===t[i].charAt(t[i].length-1)&&(this[e]=t[i]+this[e]),this[e]||(this[e]=t[i]),this[a]||(this[a]=t[a])}this[e]||(this[e]=t[e])},this),!!t},_updateHandles:function(){this._handleClick&&"touch"===this._selStartMethod?this._onTouchStartHandle||(this._onTouchStartHandle=this.connect(this.domNode,o.press,"_onTouchStart")):this._onTouchStartHandle&&(this.disconnect(this._onTouchStartHandle),this._onTouchStartHandle=null)},getTransOpts:function(){var t=this.transitionOptions||{};return e.forEach(["moveTo","href","hrefTarget","url","target","urlTarget","scene","transition","transitionDir"],function(e){t[e]=t[e]||this[e]},this),t},userClickAction:function(){},defaultClickAction:function(e){this.handleSelection(e),this.userClickAction(e)!==!1&&this.makeTransition(e)},handleSelection:function(e){this._delayedSelection&&this.set("selected",!0),this._onTouchEndHandle&&(this.disconnect(this._onTouchEndHandle),this._onTouchEndHandle=null);var t=this.getParent();this.toggle?this.set("selected",!this._currentSel):t&&t.selectOne?this.set("selected",!0):"touch"===this._selEndMethod?this.set("selected",!1):"timer"===this._selEndMethod&&this.defer(function(){this.set("selected",!1)},this._duration)},makeTransition:function(e){if(this.back&&history)return void history.back();if(this.href&&this.hrefTarget&&"_self"!=this.hrefTarget)return a.global.open(this.href,this.hrefTarget||"_blank"),void this._onNewWindowOpened(e);var t=this.getTransOpts(),i=!!(t.moveTo||t.href||t.url||t.target||t.scene);this._prepareForTransition(e,i?t:null)!==!1&&i&&(this.setTransitionPos(e),new h(this.domNode,t,e).dispatch())},_onNewWindowOpened:function(){},_prepareForTransition:function(e,t){},_onTouchStart:function(e){if(!this.getParent().isEditing&&this.onTouchStart(e)!==!1){var t=m.getEnclosingScrollable(this.domNode);t&&n.contains(t.containerNode,"mblScrollableScrollTo2")||(this._onTouchEndHandle||"touch"!==this._selStartMethod||(this._onTouchMoveHandle=this.connect(a.body(),o.move,"_onTouchMove"),this._onTouchEndHandle=this.connect(a.body(),o.release,"_onTouchEnd")),this.touchStartX=e.touches?e.touches[0].pageX:e.clientX,this.touchStartY=e.touches?e.touches[0].pageY:e.clientY,this._currentSel=this.selected,this._delayedSelection?this._selTimer=this.defer(function(){this.set("selected",!0)},100):this.set("selected",!0))}},onTouchStart:function(){},_onTouchMove:function(e){var t=e.touches?e.touches[0].pageX:e.clientX,i=e.touches?e.touches[0].pageY:e.clientY;if(Math.abs(t-this.touchStartX)>=4||Math.abs(i-this.touchStartY)>=4){this.cancel();var a=this.getParent();a&&a.selectOne?this._prevSel&&this._prevSel.set("selected",!0):this.set("selected",!1)}},_disconnect:function(){this.disconnect(this._onTouchMoveHandle),this.disconnect(this._onTouchEndHandle),this._onTouchMoveHandle=this._onTouchEndHandle=null},cancel:function(){this._selTimer&&(this._selTimer.remove(),this._selTimer=null),this._disconnect()},_onTouchEnd:function(e){!this._selTimer&&this._delayedSelection||(this.cancel(),this._onClick(e))},setTransitionPos:function(e){for(var t=this;;)if(t=t.getParent(),!t||n.contains(t.domNode,"mblView"))break;t&&(t.clickedPosX=e.clientX,t.clickedPosY=e.clientY)},transitionTo:function(e,t,i,a){var n=e&&"object"==typeof e?e:{moveTo:e,href:t,url:i,scene:a,transition:this.transition,transitionDir:this.transitionDir};new h(this.domNode,n).dispatch()},_setIconAttr:function(e){return this._isOnLine?(this._set("icon",e),void(this.iconNode=u.setIcon(e,this.iconPos,this.iconNode,this.alt,this.iconParentNode,this.refNode,this.position))):void(this._pendingIcon=e)},_setLabelAttr:function(e){this._set("label",e),this.labelNode.innerHTML=this._cv?this._cv(e):e},_setSelectedAttr:function(t){if(t){var i=this.getParent();if(i&&i.selectOne){var a=e.filter(i.getChildren(),function(e){return e.selected});e.forEach(a,function(e){this._prevSel=e,e.set("selected",!1)},this)}}this._set("selected",t)}});return c("dojo-bidi")?t("dojox.mobile._ItemBase",[g,f]):g});//# sourceMappingURL=_ItemBase.js.map