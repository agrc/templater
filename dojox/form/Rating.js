//>>built
define("dojox/form/Rating",["dojo/_base/declare","dojo/_base/lang","dojo/dom-attr","dojo/dom-class","dojo/mouse","dojo/on","dojo/string","dojo/query","dijit/form/_FormWidget"],function(e,t,i,r,a,n,o,s,d){return e("dojox.form.Rating",d,{templateString:null,numStars:3,value:0,buildRendering:function(e){for(var t='<div dojoAttachPoint="domNode" class="dojoxRating dijitInline"><input type="hidden" value="0" dojoAttachPoint="focusNode" /><ul data-dojo-attach-point="list">${stars}</ul></div>',i='<li class="dojoxRatingStar dijitInline" value="${value}"></li>',r="",a=0;a<this.numStars;a++)r+=o.substitute(i,{value:a+1});this.templateString=o.substitute(t,{stars:r}),this.inherited(arguments)},postCreate:function(){this.inherited(arguments),this._renderStars(this.value),this.own(n(this.list,n.selector(".dojoxRatingStar","mouseover"),t.hitch(this,"_onMouse")),n(this.list,n.selector(".dojoxRatingStar","click"),t.hitch(this,"onStarClick")),n(this.list,a.leave,t.hitch(this,function(){this._renderStars(this.value)})))},_onMouse:function(e){var t=+i.get(e.target,"value");this._renderStars(t,!0),this.onMouseOver(e,t)},_renderStars:function(e,t){s(".dojoxRatingStar",this.domNode).forEach(function(i,a){a+1>e?(r.remove(i,"dojoxRatingStarHover"),r.remove(i,"dojoxRatingStarChecked")):(r.remove(i,"dojoxRatingStar"+(t?"Checked":"Hover")),r.add(i,"dojoxRatingStar"+(t?"Hover":"Checked")))})},onStarClick:function(e){var t=+i.get(e.target,"value");this.setAttribute("value",t==this.value?0:t),this._renderStars(this.value),this.onChange(this.value)},onMouseOver:function(){},setAttribute:function(e,t){this.set(e,t)},_setValueAttr:function(e){this.focusNode.value=e,this._set("value",e),this._renderStars(e),this.onChange(e)}})});//# sourceMappingURL=Rating.js.map