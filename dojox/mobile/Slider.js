//>>built
define("dojox/mobile/Slider",["dojo/_base/array","dojo/_base/connect","dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/sniff","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/keys","dojo/touch","dijit/_WidgetBase","dijit/form/_FormValueMixin","./common"],function(e,t,i,a,o,n,r,s,d,l,h,c,u,m,f){return i("dojox.mobile.Slider",[u,m],{value:0,min:0,max:100,step:1,baseClass:"mblSlider",flip:!1,orientation:"auto",halo:"8pt",buildRendering:function(){if(!this.templateString){this.focusNode=this.domNode=s.create("div",{}),this.valueNode=s.create("input",this.srcNodeRef&&this.srcNodeRef.name?{type:"hidden",name:this.srcNodeRef.name}:{type:"hidden"},this.domNode,"last");var e=s.create("div",{style:{position:"relative",height:"100%",width:"100%"}},this.domNode,"last");this.progressBar=s.create("div",{style:{position:"absolute"},"class":"mblSliderProgressBar"},e,"last"),this.touchBox=s.create("div",{style:{position:"absolute"},"class":"mblSliderTouchBox"},e,"last"),this.handle=s.create("div",{style:{position:"absolute"},"class":"mblSliderHandle"},e,"last"),this.handle.setAttribute("role","slider"),this.handle.setAttribute("tabindex",0)}this.inherited(arguments),f._setTouchAction(this.domNode,"none")},_setMinAttr:function(e){this.handle.setAttribute("aria-valuemin",e),this._set("min",e)},_setMaxAttr:function(e){this.handle.setAttribute("aria-valuemax",e),this._set("max",e)},_setValueAttr:function(e,t){e=Math.max(Math.min(e,this.max),this.min);100*(this.value-this.min)/(this.max-this.min);if(this.valueNode.value=e,this.inherited(arguments),this._started){var i=100*(e-this.min)/(this.max-this.min);"V"!=this.orientation;t===!0?(r.add(this.handle,"mblSliderTransition"),r.add(this.progressBar,"mblSliderTransition")):(r.remove(this.handle,"mblSliderTransition"),r.remove(this.progressBar,"mblSliderTransition")),l.set(this.handle,this._attrs.handleLeft,(this._reversed?100-i:i)+"%"),l.set(this.progressBar,this._attrs.width,i+"%"),this.handle.setAttribute("aria-valuenow",e)}},postCreate:function(){function i(i){function r(e){m=u?e[this._attrs.pageX]:e.touches?e.touches[0][this._attrs.pageX]:e[this._attrs.clientX],f=m-_,f=Math.min(Math.max(f,0),w);var t=this.step?(this.max-this.min)/this.step:w;(1>=t||t==1/0)&&(t=w);var i=Math.round(f*t/w);p=(this.max-this.min)*i/t,p=this._reversed?this.max-p:this.min+p}function s(e){e.preventDefault(),a.hitch(this,r)(e),this.set("value",p,!1)}function h(t){t.preventDefault(),e.forEach(j,a.hitch(this,"disconnect")),j=[],this.set("value",this.value,!0)}i.target.focus(),i.preventDefault();var u="mousedown"==i.type,y=d.position(g,!1),v=n("ie")||n("trident")>6?1:l.get(o.body(),"zoom")||1;isNaN(v)&&(v=1);var b=n("ie")||n("trident")>6?1:l.get(g,"zoom")||1;isNaN(b)&&(b=1);var _=y[this._attrs.x]*b*v+d.docScroll()[this._attrs.x],w=y[this._attrs.w]*b*v;a.hitch(this,r)(i),i.target==this.touchBox&&this.set("value",p,!0),e.forEach(j,t.disconnect);var x=o.doc.documentElement,j=[this.connect(x,c.move,s),this.connect(x,c.release,h)]}function s(e){if(!(this.disabled||this.readOnly||e.altKey||e.ctrlKey||e.metaKey)){var t,i=this.step,a=1;switch(e.keyCode){case h.HOME:t=this.min;break;case h.END:t=this.max;break;case h.RIGHT_ARROW:a=-1;case h.LEFT_ARROW:t=this.value+a*(b&&y?i:-i);break;case h.DOWN_ARROW:a=-1;case h.UP_ARROW:t=this.value+a*(!b||y?i:-i);break;default:return}e.preventDefault(),this._setValueAttr(t,!1)}}function u(e){this.disabled||this.readOnly||e.altKey||e.ctrlKey||e.metaKey||this._setValueAttr(this.value,!0)}this.inherited(arguments);var m,f,p,g=this.domNode;"auto"==this.orientation&&(this.orientation=g.offsetHeight<=g.offsetWidth?"H":"V"),r.add(this.domNode,e.map(this.baseClass.split(" "),a.hitch(this,function(e){return e+this.orientation})));var y="V"!=this.orientation,v=y?this.isLeftToRight():!1,b=!!this.flip;this._reversed=!(y&&(v&&!b||!v&&b)||!y&&b),this._attrs=y?{x:"x",w:"w",l:"l",r:"r",pageX:"pageX",clientX:"clientX",handleLeft:"left",left:this._reversed?"right":"left",width:"width"}:{x:"y",w:"h",l:"t",r:"b",pageX:"pageY",clientX:"clientY",handleLeft:"top",left:this._reversed?"bottom":"top",width:"height"},this.progressBar.style[this._attrs.left]="0px",this.connect(this.touchBox,c.press,i),this.connect(this.handle,c.press,i),this.connect(this.domNode,"onkeypress",s),this.connect(this.domNode,"onkeyup",u),this.startup(),this.set("value",this.value)}})});//# sourceMappingURL=Slider.js.map