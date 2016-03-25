//>>built
define("dijit/form/_ExpandingTextAreaMixin",["dojo/_base/declare","dojo/dom-construct","dojo/has","dojo/_base/lang","dojo/on","dojo/_base/window","../Viewport"],function(e,t,i,o,n,r,a){return i.add("textarea-needs-help-shrinking",function(){var e=r.body(),i=t.create("textarea",{rows:"5",cols:"20",value:" ",style:{zoom:1,fontSize:"12px",height:"96px",overflow:"hidden",visibility:"hidden",position:"absolute",border:"5px solid white",margin:"0",padding:"0",boxSizing:"border-box",MsBoxSizing:"border-box",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box"}},e,"last"),o=i.scrollHeight>=i.clientHeight;return e.removeChild(i),o}),e("dijit.form._ExpandingTextAreaMixin",null,{_setValueAttr:function(){this.inherited(arguments),this.resize()},postCreate:function(){this.inherited(arguments);var e=this.textbox;e.style.overflowY="hidden",this.own(n(e,"focus, resize",o.hitch(this,"_resizeLater")))},startup:function(){this.inherited(arguments),this.own(a.on("resize",o.hitch(this,"_resizeLater"))),this._resizeLater()},_onInput:function(e){this.inherited(arguments),this.resize()},_estimateHeight:function(){var e=this.textbox;e.rows=(e.value.match(/\n/g)||[]).length+1},_resizeLater:function(){this.defer("resize")},resize:function(){function e(){var e=!1;""===t.value&&(t.value=" ",e=!0);var i=t.scrollHeight;return e&&(t.value=""),i}var t=this.textbox;if("hidden"==t.style.overflowY&&(t.scrollTop=0),!this.busyResizing){if(this.busyResizing=!0,e()||t.offsetHeight){var o=e()+Math.max(t.offsetHeight-t.clientHeight,0),n=o+"px";if(n!=t.style.height&&(t.style.height=n,t.rows=1),i("textarea-needs-help-shrinking")){var r,a=e(),s=a,d=t.style.minHeight,l=4,c=t.scrollTop;for(t.style.minHeight=n,t.style.height="auto";o>0;){t.style.minHeight=Math.max(o-l,4)+"px",r=e();var h=s-r;if(o-=h,l>h)break;s=r,l<<=1}t.style.height=o+"px",t.style.minHeight=d,t.scrollTop=c}t.style.overflowY=e()>t.clientHeight?"auto":"hidden","hidden"==t.style.overflowY&&(t.scrollTop=0)}else this._estimateHeight();this.busyResizing=!1}}})});//# sourceMappingURL=_ExpandingTextAreaMixin.js.map