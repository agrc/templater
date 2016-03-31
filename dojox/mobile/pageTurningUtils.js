//>>built
define("dojox/mobile/pageTurningUtils",["dojo/_base/kernel","dojo/_base/array","dojo/_base/connect","dojo/_base/event","dojo/dom-class","dojo/dom-construct","dojo/dom-style","./_css3"],function(e,t,i,a,o,r,n,s){return e.experimental("dojox.mobile.pageTurningUtils"),function(){this.w=0,this.h=0,this.turnfrom="top",this.page=1,this.dogear=1,this.duration=2,this.alwaysDogeared=!1,this._styleParams={},this._catalogNode=null,this._currentPageNode=null,this._transitionEndHandle=null,this.init=function(e,t,i,a,o,r,n){this.w=e,this.h=t,this.turnfrom=i?i:this.turnfrom,this.page=a?a:this.page,this.dogear="undefined"!=typeof o?o:this.dogear,this.duration="undefined"!=typeof r?r:this.duration,this.alwaysDogeared="undefined"!=typeof n?n:this.alwaysDogeared,"bottom"===this.turnfrom&&(this.alwaysDogeared=!0),this._calcStyleParams()},this._calcStyleParams=function(){var e,t,i,a,o,r=Math.tan(58*Math.PI/180),n=Math.cos(32*Math.PI/180),d=Math.sin(32*Math.PI/180),l=Math.tan(32*Math.PI/180),h=this.w,c=this.h,u=this.page,m=this.turnfrom,f=this._styleParams,p=h*r,g=p,y=g*d+g*n*r,v=p+h+h/r,b=.11*h*this.dogear,_=h-b,w=_*n;switch(this.turnfrom){case"top":e=y-w,t=w*r,i=y-b,a=t+_/r-7,o=t/n,f.init={page:s.add({top:-o+"px",left:-y+(2===u?h:0)+"px",width:y+"px",height:v+"px"},{transformOrigin:"100% 0%"}),front:s.add({width:h+"px",height:c+"px"},{boxShadow:"0 0"}),back:s.add({width:h+"px",height:c+"px"},{boxShadow:"0 0"}),shadow:{display:"",left:y+"px",height:1.5*c+"px"}},f.turnForward={page:s.add({},{transform:"rotate(0deg)"}),front:s.add({},{transform:"translate("+y+"px,"+o+"px) rotate(0deg)",transformOrigin:"-110px -18px"}),back:s.add({},{transform:"translate("+(y-h)+"px,"+o+"px) rotate(0deg)",transformOrigin:"0px 0px"})},f.turnBackward={page:s.add({},{transform:"rotate(-32deg)"}),front:s.add({},{transform:"translate("+e+"px,"+t+"px) rotate(32deg)",transformOrigin:"0px 0px"}),back:s.add({},{transform:"translate("+i+"px,"+a+"px) rotate(-32deg)",transformOrigin:"0px 0px"})};break;case"bottom":e=y-(c*d+h*n)-2,t=v-(c+h/l)*n,i=y,a=v-h/d-c,o=v-h/l-c,f.init={page:s.add({top:-o+50+"px",left:-y+(2===u?h:0)+"px",width:y+"px",height:v+"px"},{transformOrigin:"100% 100%"}),front:s.add({width:h+"px",height:c+"px"},{boxShadow:"0 0"}),back:s.add({width:h+"px",height:c+"px"},{boxShadow:"0 0"}),shadow:{display:"none"}},f.turnForward={page:s.add({},{transform:"rotate(0deg)"}),front:s.add({},{transform:"translate("+y+"px,"+o+"px) rotate(0deg)",transformOrigin:"-220px 35px"}),back:s.add({},{transform:"translate("+2*h+"px,"+o+"px) rotate(0deg)",transformOrigin:"0px 0px"})},f.turnBackward={page:s.add({},{transform:"rotate(32deg)"}),front:s.add({},{transform:"translate("+e+"px,"+t+"px) rotate(-32deg)",transformOrigin:"0px 0px"}),back:s.add({},{transform:"translate("+i+"px,"+a+"px) rotate(0deg)",transformOrigin:"0px 0px"})};break;case"left":e=-h,t=_/l-2,i=-_,a=o=_/d+b*d,f.init={page:s.add({top:-t+"px",left:h+"px",width:y+"px",height:v+"px"},{transformOrigin:"0% 0%"}),front:s.add({width:h+"px",height:c+"px"},{boxShadow:"0 0"}),back:s.add({width:h+"px",height:c+"px"},{boxShadow:"0 0"}),shadow:{display:"",left:"-4px",height:(2===u?1.5*c:c)+50+"px"}},f.turnForward={page:s.add({},{transform:"rotate(0deg)"}),front:s.add({},{transform:"translate("+e+"px,"+t+"px) rotate(0deg)",transformOrigin:"160px 68px"}),back:s.add({},{transform:"translate(0px,"+t+"px) rotate(0deg)",transformOrigin:"0px 0px"})},f.turnBackward={page:s.add({},{transform:"rotate(32deg)"}),front:s.add({},{transform:"translate("+-b+"px,"+a+"px) rotate(-32deg)",transformOrigin:"0px 0px"}),back:s.add({},{transform:"translate("+i+"px,"+a+"px) rotate(32deg)",transformOrigin:"top right"})}}f.init.catalog={width:(2===u?2*h:h)+"px",height:(2===u?1.5*c:c)+("top"==m?0:50)+"px"}},this.getChildren=function(e){return t.filter(e.childNodes,function(e){return 1===e.nodeType})},this.getPages=function(){return this._catalogNode?this.getChildren(this._catalogNode):null},this.getCurrentPage=function(){return this._currentPageNode},this.getIndexOfPage=function(e,t){t||(t=this.getPages());for(var i=0;i<t.length;i++)if(e===t[i])return i;return-1},this.getNextPage=function(e){for(var t=e.nextSibling;t;t=t.nextSibling)if(1===t.nodeType)return t;return null},this.getPreviousPage=function(e){for(var t=e.previousSibling;t;t=t.previousSibling)if(1===t.nodeType)return t;return null},this.isPageTurned=function(e){return"rotate(0deg)"==e.style[s.name("transform")]},this._onPageTurned=function(e){a.stop(e),o.contains(e.target,"mblPageTurningPage")&&this.onPageTurned(e.target)},this.onPageTurned=function(){},this.initCatalog=function(e){this._catalogNode!=e&&(this._transitionEndHandle&&i.disconnect(this._transitionEndHandle),this._transitionEndHandle=i.connect(e,s.name("transitionEnd"),this,"_onPageTurned"),this._catalogNode=e),o.add(e,"mblPageTurningCatalog"),n.set(e,this._styleParams.init.catalog);var a=this.getPages();t.forEach(a,function(e){this.initPage(e)},this),this.resetCatalog()},this._getBaseZIndex=function(){return this._catalogNode.style.zIndex||0},this.resetCatalog=function(){for(var e=this.getPages(),t=e.length,i=this._getBaseZIndex(),a=t-1;a>=0;a--){var o=e[a];this.showDogear(o),this.isPageTurned(o)?o.style.zIndex=i+t+1:(o.style.zIndex=i+t-a,!this.alwaysDogeared&&this.hideDogear(o),this._currentPageNode=o)}this.alwaysDogeared||this._currentPageNode==e[t-1]||this.showDogear(this._currentPageNode)},this.initPage=function(e,t){for(var i=this.getChildren(e);i.length<3;)e.appendChild(r.create("div",null)),i=this.getChildren(e);var a=!o.contains(e,"mblPageTurningPage");o.add(e,"mblPageTurningPage"),o.add(i[0],"mblPageTurningFront"),o.add(i[1],"mblPageTurningBack"),o.add(i[2],"mblPageTurningShadow");var s=this._styleParams.init;if(n.set(e,s.page),n.set(i[0],s.front),n.set(i[1],s.back),s.shadow&&n.set(i[2],s.shadow),!t)if(a&&this._currentPageNode){this.getPages();t=this.getIndexOfPage(e)<this.getIndexOfPage(this._currentPageNode)?1:-1}else t=this.isPageTurned(e)?1:-1;this._turnPage(e,t,0)},this.turnToNext=function(e){var t=this.getNextPage(this._currentPageNode);t&&(this._turnPage(this._currentPageNode,1,e),this._currentPageNode=t)},this.turnToPrev=function(e){var t=this.getPreviousPage(this._currentPageNode);t&&(this._turnPage(t,-1,e),this._currentPageNode=t)},this.goTo=function(e){var t=this.getPages();if(!(this._currentPageNode===t[e]||t.length<=e))for(var i=e<this.getIndexOfPage(this._currentPageNode,t);this._currentPageNode!==t[e];)i?this.turnToPrev(0):this.turnToNext(0)},this._turnPage=function(e,t,i){var a=this.getChildren(e),o=("undefined"!=typeof i?i:this.duration)+"s",r=1===t?this._styleParams.turnForward:this._styleParams.turnBackward;r.page[s.name("transitionDuration")]=o,n.set(e,r.page),r.front[s.name("transitionDuration")]=o,n.set(a[0],r.front),r.back[s.name("transitionDuration")]=o,n.set(a[1],r.back);var d=this.getPages(),l=this.getNextPage(e),h=d.length,c=this._getBaseZIndex();1===t?(e.style.zIndex=c+h+1,!this.alwaysDogeared&&l&&this.getNextPage(l)&&this.showDogear(l)):l&&(l.style.zIndex=c+h-this.getIndexOfPage(l,d),!this.alwaysDogeared&&this.hideDogear(l))},this.showDogear=function(e){var t=this.getChildren(e);n.set(e,"overflow",""),t[1]&&n.set(t[1],"display",""),t[2]&&n.set(t[2],"display","bottom"===this.turnfrom?"none":"")},this.hideDogear=function(e){if("bottom"!==this.turnfrom){var t=this.getChildren(e);n.set(e,"overflow","visible"),t[1]&&n.set(t[1],"display","none"),t[2]&&n.set(t[2],"display","none")}}}});//# sourceMappingURL=pageTurningUtils.js.map