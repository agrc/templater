//>>built
define("dojox/layout/RadioGroup",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/html","dojo/_base/lang","dojo/_base/query","dijit/_Widget","dijit/_Templated","dijit/_Contained","dijit/layout/StackContainer","dojo/fx/easing","dojo/_base/fx","dojo/dom-construct","dojo/dom-class"],function(e,t,i,a,o,n,r,s,d,l,u,h,c){e.experimental("dojox.layout.RadioGroup");var m=t("dojox.layout.RadioGroup",[d,r],{duration:750,hasButtons:!1,buttonClass:"dojox.layout._RadioButton",templateString:'<div class="dojoxRadioGroup"> 	<div dojoAttachPoint="buttonHolder" style="display:none;">		<table class="dojoxRadioButtons"><tbody><tr class="dojoxRadioButtonRow" dojoAttachPoint="buttonNode"></tr></tbody></table>	</div>	<div class="dojoxRadioView" dojoAttachPoint="containerNode"></div></div>',startup:function(){this.inherited(arguments),this._children=this.getChildren(),this._buttons=this._children.length,this._size=i.coords(this.containerNode),this.hasButtons&&i.style(this.buttonHolder,"display","block")},_setupChild:function(e){if(i.style(e.domNode,"position","absolute"),this.hasButtons){var t=this.buttonNode.appendChild(h.create("td")),o=h.create("div",null,t),n=a.getObject(this.buttonClass),r=new n({label:e.title,page:e},o);a.mixin(e,{_radioButton:r}),r.startup()}e.domNode.style.display="none"},removeChild:function(e){this.hasButtons&&e._radioButton&&(e._radioButton.destroy(),delete e._radioButton),this.inherited(arguments)},_transition:function(e,t){this._showChild(e),t&&this._hideChild(t),this.doLayout&&e.resize&&e.resize(this._containerContentBox||this._contentBox)},_showChild:function(e){var t=this.getChildren();e.isFirstChild=e==t[0],e.isLastChild=e==t[t.length-1],e.selected=!0,e.domNode.style.display="",e._onShow?e._onShow():e.onShow&&e.onShow()},_hideChild:function(e){e.selected=!1,e.domNode.style.display="none",e.onHide&&e.onHide()}});t("dojox.layout.RadioGroupFade",m,{_hideChild:function(e){u.fadeOut({node:e.domNode,duration:this.duration,onEnd:a.hitch(this,"inherited",arguments,arguments)}).play()},_showChild:function(e){this.inherited(arguments),i.style(e.domNode,"opacity",0),u.fadeIn({node:e.domNode,duration:this.duration}).play()}}),t("dojox.layout.RadioGroupSlide",m,{easing:"dojo.fx.easing.backOut",zTop:99,constructor:function(){a.isString(this.easing)&&(this.easing=a.getObject(this.easing))},_positionChild:function(e){if(this._size){var t=!0,a=!0;switch(e.slideFrom){case"bottom":a=!a;break;case"right":t=!t,a=!a;break;case"top":break;case"left":t=!t;break;default:t=Math.round(Math.random()),a=Math.round(Math.random())}var o=t?"top":"left",n=(a?"-":"")+(this._size[t?"h":"w"]+20)+"px";i.style(e.domNode,o,n)}},_showChild:function(e){var t=this.getChildren();e.isFirstChild=e==t[0],e.isLastChild=e==t[t.length-1],e.selected=!0,i.style(e.domNode,{zIndex:this.zTop,display:""}),this._anim&&"playing"==this._anim.status()&&this._anim.gotoPercent(100,!0),this._anim=u.animateProperty({node:e.domNode,properties:{left:0,top:0},duration:this.duration,easing:this.easing,onEnd:a.hitch(e,function(){this.onShow&&this.onShow(),this._onShow&&this._onShow()}),beforeBegin:a.hitch(this,"_positionChild",e)}),this._anim.play()},_hideChild:function(e){e.selected=!1,e.domNode.style.zIndex=this.zTop-1,e.onHide&&e.onHide()}}),t("dojox.layout._RadioButton",[n,r,s],{label:"",page:null,templateString:'<div dojoAttachPoint="focusNode" class="dojoxRadioButton"><span dojoAttachPoint="titleNode" class="dojoxRadioButtonLabel">${label}</span></div>',startup:function(){this.connect(this.domNode,"onmouseenter","_onMouse")},_onMouse:function(e){this.getParent().selectChild(this.page),this._clearSelected(),c.add(this.domNode,"dojoxRadioButtonSelected")},_clearSelected:function(){o(".dojoxRadioButtonSelected",this.domNode.parentNode.parentNode).removeClass("dojoxRadioButtonSelected")}}),a.extend(n,{slideFrom:"random"})});//# sourceMappingURL=RadioGroup.js.map