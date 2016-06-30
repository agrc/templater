//>>built
define("dojox/analytics/plugins/mouseOver",["dojo/_base/lang","../_base","dojo/_base/config","dojo/_base/window","dojo/on"],function(e,t,a,i,r){return t.plugins.mouseOver=new function(){this.watchMouse=a.watchMouseOver||!0,this.mouseSampleDelay=a.sampleDelay||2500,this.addData=e.hitch(t,"addData","mouseOver"),this.targetProps=a.targetProps||["id","className","localName","href","spellcheck","lang","textContent","value"],this.textContentMaxChars=a.textContentMaxChars||50,this.toggleWatchMouse=function(){return this._watchingMouse?(this._watchingMouse.remove(),void delete this._watchingMouse):void r(i.doc,"mousemove",e.hitch(this,"sampleMouse"))},this.watchMouse&&(r(i.doc,"mouseover",e.hitch(this,"toggleWatchMouse")),r(i.doc,"mouseout",e.hitch(this,"toggleWatchMouse"))),this.sampleMouse=function(t){return this._rateLimited||(this.addData("sample",this.trimMouseEvent(t)),this._rateLimited=!0,setTimeout(e.hitch(this,function(){this._rateLimited&&(this.trimMouseEvent(this._lastMouseEvent),delete this._lastMouseEvent,delete this._rateLimited)}),this.mouseSampleDelay)),this._lastMouseEvent=t,t},this.trimMouseEvent=function(e){var t={};for(var a in e)switch(a){case"target":var i=this.targetProps;t[a]={};for(var r=0;r<i.length;r++)("object"==typeof e[a]||"function"==typeof e[a])&&i[r]in e[a]&&("text"==i[r]||"textContent"==i[r]?e[a].localName&&"HTML"!=e[a].localName&&"BODY"!=e[a].localName&&(t[a][i[r]]=e[a][i[r]].substr(0,this.textContentMaxChars)):t[a][i[r]]=e[a][i[r]]);break;case"screenX":case"screenY":case"x":case"y":if(e[a]){var n=e[a];t[a]=n+""}}return t}}});//# sourceMappingURL=mouseOver.js.map