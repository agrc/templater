//>>built
require({cache:{"url:dojox/widget/Calendar/Calendar.html":'<div class="dojoxCalendar">\n    <div tabindex="0" class="dojoxCalendarContainer" style="visibility: visible;" dojoAttachPoint="container">\n		<div style="display:none">\n			<div dojoAttachPoint="previousYearLabelNode"></div>\n			<div dojoAttachPoint="nextYearLabelNode"></div>\n			<div dojoAttachPoint="monthLabelSpacer"></div>\n		</div>\n        <div class="dojoxCalendarHeader">\n            <div>\n                <div class="dojoxCalendarDecrease" dojoAttachPoint="decrementMonth"></div>\n            </div>\n            <div class="">\n                <div class="dojoxCalendarIncrease" dojoAttachPoint="incrementMonth"></div>\n            </div>\n            <div class="dojoxCalendarTitle" dojoAttachPoint="header" dojoAttachEvent="onclick: onHeaderClick">\n            </div>\n        </div>\n        <div class="dojoxCalendarBody" dojoAttachPoint="containerNode"></div>\n        <div class="">\n            <div class="dojoxCalendarFooter" dojoAttachPoint="footer">                        \n            </div>\n        </div>\n    </div>\n</div>\n'}}),define("dojox/widget/_CalendarBase",["dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_Container","dijit/_WidgetsInTemplateMixin","dijit/typematic","dojo/_base/declare","dojo/date","dojo/date/stamp","dojo/date/locale","dojo/dom-style","dojo/dom-class","dojo/_base/fx","dojo/on","dojo/_base/array","dojo/_base/lang","dojo/text!./Calendar/Calendar.html"],function(e,t,i,a,n,o,r,s,l,d,c,u,h,m,f,p){return o("dojox.widget._CalendarBase",[e,t,i,a],{templateString:p,_views:null,useFx:!0,value:new Date,constraints:null,footerFormat:"medium",constructor:function(){this._views=[],this.value=new Date},_setConstraintsAttr:function(e){var t=this.constraints=e;t&&("string"==typeof t.min&&(t.min=s.fromISOString(t.min)),"string"==typeof t.max&&(t.max=s.fromISOString(t.max)))},postMixInProperties:function(){this.inherited(arguments),this.value=this.parseInitialValue(this.value)},parseInitialValue:function(e){return e&&-1!==e?e.getFullYear?e:(isNaN(e)||("string"==typeof this.value&&(e=parseInt(e)),e=this._makeDate(e)),e):new Date},_makeDate:function(e){return e},postCreate:function(){this.displayMonth=new Date(this.get("value")),this._isInvalidDate(this.displayMonth)&&(this.displayMonth=new Date);var e={parent:this,_getValueAttr:f.hitch(this,function(){return new Date(this._internalValue||this.value)}),_getDisplayMonthAttr:f.hitch(this,function(){return new Date(this.displayMonth)}),_getConstraintsAttr:f.hitch(this,function(){return this.constraints}),getLang:f.hitch(this,function(){return this.lang}),isDisabledDate:f.hitch(this,this.isDisabledDate),getClassForDate:f.hitch(this,this.getClassForDate),addFx:this.useFx?f.hitch(this,this.addFx):function(){}};m.forEach(this._views,function(t){var i=new t(e).placeAt(this),a=i.getHeader();a&&(this.header.appendChild(a),d.set(a,"display","none")),d.set(i.domNode,"visibility","hidden"),i.on("valueSelected",f.hitch(this,"_onDateSelected")),i.set("value",this.get("value"))},this),this._views.length<2&&d.set(this.header,"cursor","auto"),this.inherited(arguments),this._children=this.getChildren(),this._currentChild=0;var t=new Date;this.footer.innerHTML="Today: "+l.format(t,{formatLength:this.footerFormat,selector:"date",locale:this.lang}),h(this.footer,"click",f.hitch(this,"goToToday"));var i=this._children[0];d.set(i.domNode,"top","0px"),d.set(i.domNode,"visibility","visible");var a=i.getHeader();a&&d.set(i.getHeader(),"display",""),c.toggle(this.container,"no-header",!i.useHeader),i.onDisplay();var o=this,r=function(e,t,i){n.addMouseListener(o[e],o,function(e){e>=0&&o._adjustDisplay(t,i)},.8,500)};r("incrementMonth","month",1),r("decrementMonth","month",-1),this._updateTitleStyle()},addFx:function(e,t){},_isInvalidDate:function(e){return!e||isNaN(e)||"object"!=typeof e||e.toString()==this._invalidDate},_setValueAttr:function(e){return e||(e=new Date),e.getFullYear||(e=s.fromISOString(e+"")),this._isInvalidDate(e)?!1:!this.value||r.compare(e,this.value)?(e=new Date(e),this.displayMonth=new Date(e),this._internalValue=e,this.isDisabledDate(e,this.lang)||0!==this._currentChild||(this.value=e,this.onChange(e)),this._children&&this._children.length>0&&this._children[this._currentChild].set("value",this.value),!0):(this.onExecute(),!1)},isDisabledDate:function(e,t){var i=this.constraints,a=r.compare;return i&&(i.min&&a(i.min,e,"date")>0||i.max&&a(i.max,e,"date")<0)},onValueSelected:function(e){},_onDateSelected:function(e,t,i){this.displayMonth=e,this.set("value",e),this._transitionVert(-1)||(t||0===t||(t=this.get("value")),this.onValueSelected(t))},onChange:function(e){},onHeaderClick:function(e){this._transitionVert(1)},goToToday:function(){this.set("value",new Date),this.onValueSelected(this.get("value"))},_transitionVert:function(e){var t=this._children[this._currentChild],i=this._children[this._currentChild+e];if(!i)return!1;d.set(i.domNode,"visibility","visible");var a=d.get(this.containerNode,"height");i.set("value",this.displayMonth),t.header&&d.set(t.header,"display","none"),i.header&&d.set(i.header,"display",""),d.set(i.domNode,"top",-1*a+"px"),d.set(i.domNode,"visibility","visible"),this._currentChild+=e;var n=a*e,o=0;d.set(i.domNode,"top",-1*n+"px");var r=u.animateProperty({node:t.domNode,properties:{top:n},onEnd:function(){d.set(t.domNode,"visibility","hidden")}}),s=u.animateProperty({node:i.domNode,properties:{top:o},onEnd:function(){i.onDisplay()}});return c.toggle(this.container,"no-header",!i.useHeader),r.play(),s.play(),t.onBeforeUnDisplay(),i.onBeforeDisplay(),this._updateTitleStyle(),!0},_updateTitleStyle:function(){c.toggle(this.header,"navToPanel",this._currentChild<this._children.length-1)},_slideTable:function(e,t,i){var a=e.domNode,n=a.cloneNode(!0),o=d.get(a,"width");a.parentNode.appendChild(n),d.set(a,"left",o*t+"px"),i();var r=u.animateProperty({node:n,properties:{left:o*t*-1},duration:500,onEnd:function(){n.parentNode.removeChild(n)}}),s=u.animateProperty({node:a,properties:{left:0},duration:500});r.play(),s.play()},_addView:function(e){this._views.push(e)},getClassForDate:function(e,t){},_adjustDisplay:function(e,t,i){var a=this._children[this._currentChild],n=this.displayMonth=a.adjustDate(this.displayMonth,t);this._slideTable(a,t,function(){a.set("value",n)})},onExecute:function(){}})});//# sourceMappingURL=_CalendarBase.js.map