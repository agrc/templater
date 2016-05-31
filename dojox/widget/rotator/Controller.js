//>>built
define("dojox/widget/rotator/Controller",["dojo/_base/declare","dojo/_base/lang","dojo/_base/html","dojo/_base/event","dojo/_base/array","dojo/_base/connect","dojo/query"],function(e,t,i,a,o,n,r){var s="dojoxRotator",l=s+"Play",d=s+"Pause",h=s+"Number",c=s+"Tab",u=s+"Selected";return e("dojox.widget.rotator.Controller",null,{rotator:null,commands:"prev,play/pause,info,next",constructor:function(e,m){t.mixin(this,e);var f=this.rotator;if(f){for(;m.firstChild;)m.removeChild(m.firstChild);var g=this._domNode=i.create("ul",null,m),p=" "+s+"Icon",y=function(e,t,o){i.create("li",{className:t,innerHTML:'<a href="#"><span>'+e+"</span></a>",onclick:function(e){a.stop(e),f&&f.control.apply(f,o)}},g)};o.forEach(this.commands.split(","),function(e,t){switch(e){case"prev":y("Prev",s+"Prev"+p,["prev"]);break;case"play/pause":y("Play",l+p,["play"]),y("Pause",d+p,["pause"]);break;case"info":this._info=i.create("li",{className:s+"Info",innerHTML:this._buildInfo(f)},g);break;case"next":y("Next",s+"Next"+p,["next"]);break;case"#":case"titles":for(var a=0;a<f.panes.length;a++)y("#"==e?a+1:f.panes[a].title||"Tab "+(a+1),("#"==e?h:c)+" "+(a==f.idx?u:"")+" "+s+"Pane"+a,["go",a])}},this),r("li:first-child",g).addClass(s+"First"),r("li:last-child",g).addClass(s+"Last"),this._togglePlay(),this._con=n.connect(f,"onUpdate",this,"_onUpdate")}},destroy:function(){n.disconnect(this._con),i.destroy(this._domNode)},_togglePlay:function(e){var t=this.rotator.playing;r("."+l,this._domNode).style("display",t?"none":""),r("."+d,this._domNode).style("display",t?"":"none")},_buildInfo:function(e){return"<span>"+(e.idx+1)+" / "+e.panes.length+"</span>"},_onUpdate:function(e){var t=this.rotator;switch(e){case"play":case"pause":this._togglePlay();break;case"onAfterTransition":this._info&&(this._info.innerHTML=this._buildInfo(t));var a=function(e){t.idx<e.length&&i.addClass(e[t.idx],u)};a(r("."+h,this._domNode).removeClass(u)),a(r("."+c,this._domNode).removeClass(u))}}})});//# sourceMappingURL=Controller.js.map