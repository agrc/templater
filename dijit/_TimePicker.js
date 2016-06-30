//>>built
define("dijit/_TimePicker",["dojo/_base/array","dojo/date","dojo/date/locale","dojo/date/stamp","dojo/_base/declare","dojo/dom-class","dojo/dom-construct","dojo/_base/kernel","dojo/keys","dojo/_base/lang","dojo/sniff","dojo/query","dojo/mouse","dojo/on","./_WidgetBase","./form/_ListMouseMixin"],function(t,e,i,a,n,s,o,d,r,l,c,h,u,p,g,_){var j=n("dijit._TimePicker",[g,_],{baseClass:"dijitTimePicker",pickerMin:"T00:00:00",pickerMax:"T23:59:59",clickableIncrement:"T00:15:00",visibleIncrement:"T01:00:00",value:new Date,_visibleIncrement:2,_clickableIncrement:1,_totalIncrements:10,constraints:{},serialize:a.toISOString,buildRendering:function(){this.inherited(arguments),this.containerNode=this.domNode,this.timeMenu=this.domNode},setValue:function(t){d.deprecated("dijit._TimePicker:setValue() is deprecated.  Use set('value', ...) instead.","","2.0"),this.set("value",t)},_setValueAttr:function(t){this._set("value",t),this._showText()},_setFilterStringAttr:function(t){this._set("filterString",t),this._showText()},isDisabledDate:function(){return!1},_getFilteredNodes:function(t,e,i,a){for(var n=[],s=0;s<this._maxIncrement;s++){var o=this._createOption(s);o&&n.push(o)}return n},_showText:function(){var e=a.fromISOString;this.domNode.innerHTML="",this._clickableIncrementDate=e(this.clickableIncrement),this._visibleIncrementDate=e(this.visibleIncrement);var i=function(t){return 60*t.getHours()*60+60*t.getMinutes()+t.getSeconds()},n=i(this._clickableIncrementDate),s=i(this._visibleIncrementDate);(this.value||this.currentFocus).getTime();this._refDate=e(this.pickerMin),this._refDate.setFullYear(1970,0,1),this._clickableIncrement=1,this._visibleIncrement=s/n;var o=e(this.pickerMax);o.setFullYear(1970,0,1);var d=.001*(o.getTime()-this._refDate.getTime());this._maxIncrement=Math.ceil((d+1)/n);var r=this._getFilteredNodes();t.forEach(r,function(t){this.domNode.appendChild(t)},this),!r.length&&this.filterString&&(this.filterString="",this._showText())},constructor:function(){this.constraints={}},postMixInProperties:function(){this.inherited(arguments),this._setConstraintsAttr(this.constraints)},_setConstraintsAttr:function(t){for(var e in{clickableIncrement:1,visibleIncrement:1,pickerMin:1,pickerMax:1})e in t&&(this[e]=t[e]);t.locale||(t.locale=this.lang)},_createOption:function(t){var a=new Date(this._refDate),n=this._clickableIncrementDate;a.setHours(a.getHours()+n.getHours()*t,a.getMinutes()+n.getMinutes()*t,a.getSeconds()+n.getSeconds()*t),"time"==this.constraints.selector&&a.setFullYear(1970,0,1);var d=i.format(a,this.constraints);if(this.filterString&&0!==d.toLowerCase().indexOf(this.filterString))return null;var r=this.ownerDocument.createElement("div");return r.className=this.baseClass+"Item",r.date=a,r.idx=t,o.create("div",{"class":this.baseClass+"ItemInner",innerHTML:d},r),t%this._visibleIncrement<1&&t%this._visibleIncrement>-1?s.add(r,this.baseClass+"Marker"):t%this._clickableIncrement||s.add(r,this.baseClass+"Tick"),this.isDisabledDate(a)&&s.add(r,this.baseClass+"ItemDisabled"),this.value&&!e.compare(this.value,a,this.constraints.selector)&&(r.selected=!0,s.add(r,this.baseClass+"ItemSelected"),this._selectedDiv=r,s.contains(r,this.baseClass+"Marker")?s.add(r,this.baseClass+"MarkerSelected"):s.add(r,this.baseClass+"TickSelected"),this._highlightOption(r,!0)),r},onOpen:function(){this.inherited(arguments),this.set("selected",this._selectedDiv)},_onOptionSelected:function(t){var e=t.target.date||t.target.parentNode.date;e&&!this.isDisabledDate(e)&&(this._highlighted_option=null,this.set("value",e),this.onChange(e))},onChange:function(){},_highlightOption:function(t,e){if(t){if(e)this._highlighted_option&&this._highlightOption(this._highlighted_option,!1),this._highlighted_option=t;else{if(this._highlighted_option!==t)return;this._highlighted_option=null}s.toggle(t,this.baseClass+"ItemHover",e),s.contains(t,this.baseClass+"Marker")?s.toggle(t,this.baseClass+"MarkerHover",e):s.toggle(t,this.baseClass+"TickHover",e)}},handleKey:function(t){return t.keyCode==r.DOWN_ARROW?(this.selectNextNode(),t.stopPropagation(),t.preventDefault(),!1):t.keyCode==r.UP_ARROW?(this.selectPreviousNode(),t.stopPropagation(),t.preventDefault(),!1):t.keyCode==r.ENTER||t.keyCode===r.TAB?this._keyboardSelected||t.keyCode!==r.TAB?(this._highlighted_option&&this._onOptionSelected({target:this._highlighted_option}),t.keyCode===r.TAB):!0:void 0},onHover:function(t){this._highlightOption(t,!0)},onUnhover:function(t){this._highlightOption(t,!1)},onSelect:function(t){this._highlightOption(t,!0)},onDeselect:function(t){this._highlightOption(t,!1)},onClick:function(t){this._onOptionSelected({target:t})}});return j});//# sourceMappingURL=_TimePicker.js.map