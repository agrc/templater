//>>built
define("dojox/gfx/path",["./_base","dojo/_base/lang","dojo/_base/declare","./matrix","./shape"],function(e,t,a,i,r){var n=a("dojox.gfx.path.Path",r.Shape,{constructor:function(a){this.shape=t.clone(e.defaultPath),this.segments=[],this.tbbox=null,this.absolute=!0,this.last={},this.rawNode=a,this.segmented=!1},setAbsoluteMode:function(e){return this._confirmSegmented(),this.absolute="string"==typeof e?"absolute"==e:e,this},getAbsoluteMode:function(){return this._confirmSegmented(),this.absolute},getBoundingBox:function(){return this._confirmSegmented(),this.bbox&&"l"in this.bbox?{x:this.bbox.l,y:this.bbox.t,width:this.bbox.r-this.bbox.l,height:this.bbox.b-this.bbox.t}:null},_getRealBBox:function(){if(this._confirmSegmented(),this.tbbox)return this.tbbox;var e=this.bbox,t=this._getRealMatrix();this.bbox=null;for(var a=0,i=this.segments.length;a<i;++a)this._updateWithSegment(this.segments[a],t);var r=this.bbox;return this.bbox=e,this.tbbox=r?[{x:r.l,y:r.t},{x:r.r,y:r.t},{x:r.r,y:r.b},{x:r.l,y:r.b}]:null,this.tbbox},getLastPosition:function(){return this._confirmSegmented(),"x"in this.last?this.last:null},_applyTransform:function(){return this.tbbox=null,this.inherited(arguments)},_updateBBox:function(e,t,a){if(a){var r=i.multiplyPoint(a,e,t);e=r.x,t=r.y}this.bbox&&"l"in this.bbox?(this.bbox.l>e&&(this.bbox.l=e),this.bbox.r<e&&(this.bbox.r=e),this.bbox.t>t&&(this.bbox.t=t),this.bbox.b<t&&(this.bbox.b=t)):this.bbox={l:e,b:t,r:e,t:t}},_updateWithSegment:function(t,a){var i,r=t.args,n=r.length;switch(t.action){case"M":case"L":case"C":case"S":case"Q":case"T":for(i=0;i<n;i+=2)this._updateBBox(r[i],r[i+1],a);this.last.x=r[n-2],this.last.y=r[n-1],this.absolute=!0;break;case"H":for(i=0;i<n;++i)this._updateBBox(r[i],this.last.y,a);this.last.x=r[n-1],this.absolute=!0;break;case"V":for(i=0;i<n;++i)this._updateBBox(this.last.x,r[i],a);this.last.y=r[n-1],this.absolute=!0;break;case"m":var o=0;"x"in this.last||(this._updateBBox(this.last.x=r[0],this.last.y=r[1],a),o=2);for(i=o;i<n;i+=2)this._updateBBox(this.last.x+=r[i],this.last.y+=r[i+1],a);this.absolute=!1;break;case"l":case"t":for(i=0;i<n;i+=2)this._updateBBox(this.last.x+=r[i],this.last.y+=r[i+1],a);this.absolute=!1;break;case"h":for(i=0;i<n;++i)this._updateBBox(this.last.x+=r[i],this.last.y,a);this.absolute=!1;break;case"v":for(i=0;i<n;++i)this._updateBBox(this.last.x,this.last.y+=r[i],a);this.absolute=!1;break;case"c":for(i=0;i<n;i+=6)this._updateBBox(this.last.x+r[i],this.last.y+r[i+1],a),this._updateBBox(this.last.x+r[i+2],this.last.y+r[i+3],a),this._updateBBox(this.last.x+=r[i+4],this.last.y+=r[i+5],a);this.absolute=!1;break;case"s":case"q":for(i=0;i<n;i+=4)this._updateBBox(this.last.x+r[i],this.last.y+r[i+1],a),this._updateBBox(this.last.x+=r[i+2],this.last.y+=r[i+3],a);this.absolute=!1;break;case"A":for(i=0;i<n;i+=7)this._updateBBox(r[i+5],r[i+6],a);this.last.x=r[n-2],this.last.y=r[n-1],this.absolute=!0;break;case"a":for(i=0;i<n;i+=7)this._updateBBox(this.last.x+=r[i+5],this.last.y+=r[i+6],a);this.absolute=!1}var s=[t.action];for(i=0;i<n;++i)s.push(e.formatNumber(r[i],!0));if("string"==typeof this.shape.path)this.shape.path+=s.join("");else for(i=0,n=s.length;i<n;++i)this.shape.path.push(s[i])},_validSegments:{m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7,z:0},_pushSegment:function(e,t){this.tbbox=null;var a,i=this._validSegments[e.toLowerCase()];"number"==typeof i&&(i?t.length>=i&&(a={action:e,args:t.slice(0,t.length-t.length%i)},this.segments.push(a),this._updateWithSegment(a)):(a={action:e,args:[]},this.segments.push(a),this._updateWithSegment(a)))},_collectArgs:function(e,t){for(var a=0;a<t.length;++a){var i=t[a];"boolean"==typeof i?e.push(i?1:0):"number"==typeof i?e.push(i):i instanceof Array?this._collectArgs(e,i):"x"in i&&"y"in i&&e.push(i.x,i.y)}},moveTo:function(){this._confirmSegmented();var e=[];return this._collectArgs(e,arguments),this._pushSegment(this.absolute?"M":"m",e),this},lineTo:function(){this._confirmSegmented();var e=[];return this._collectArgs(e,arguments),this._pushSegment(this.absolute?"L":"l",e),this},hLineTo:function(){this._confirmSegmented();var e=[];return this._collectArgs(e,arguments),this._pushSegment(this.absolute?"H":"h",e),this},vLineTo:function(){this._confirmSegmented();var e=[];return this._collectArgs(e,arguments),this._pushSegment(this.absolute?"V":"v",e),this},curveTo:function(){this._confirmSegmented();var e=[];return this._collectArgs(e,arguments),this._pushSegment(this.absolute?"C":"c",e),this},smoothCurveTo:function(){this._confirmSegmented();var e=[];return this._collectArgs(e,arguments),this._pushSegment(this.absolute?"S":"s",e),this},qCurveTo:function(){this._confirmSegmented();var e=[];return this._collectArgs(e,arguments),this._pushSegment(this.absolute?"Q":"q",e),this},qSmoothCurveTo:function(){this._confirmSegmented();var e=[];return this._collectArgs(e,arguments),this._pushSegment(this.absolute?"T":"t",e),this},arcTo:function(){this._confirmSegmented();var e=[];return this._collectArgs(e,arguments),this._pushSegment(this.absolute?"A":"a",e),this},closePath:function(){return this._confirmSegmented(),this._pushSegment("Z",[]),this},_confirmSegmented:function(){if(!this.segmented){var e=this.shape.path;this.shape.path=[],this._setPath(e),this.shape.path=this.shape.path.join(""),this.segmented=!0}},_setPath:function(a){var i=t.isArray(a)?a:a.match(e.pathSvgRegExp);if(this.segments=[],this.absolute=!0,this.bbox={},this.last={},i){for(var r="",n=[],o=i.length,s=0;s<o;++s){var d=i[s],l=parseFloat(d);isNaN(l)?(r&&this._pushSegment(r,n),n=[],r=d):n.push(l)}this._pushSegment(r,n)}},setShape:function(t){return this.inherited(arguments,["string"==typeof t?{path:t}:t]),this.segmented=!1,this.segments=[],e.lazyPathSegmentation||this._confirmSegmented(),this},_2PI:2*Math.PI}),o=a("dojox.gfx.path.TextPath",n,{constructor:function(a){"text"in this||(this.text=t.clone(e.defaultTextPath)),"fontStyle"in this||(this.fontStyle=t.clone(e.defaultFont))},getText:function(){return this.text},setText:function(t){return this.text=e.makeParameters(this.text,"string"==typeof t?{text:t}:t),this._setText(),this},getFont:function(){return this.fontStyle},setFont:function(t){return this.fontStyle="string"==typeof t?e.splitFontString(t):e.makeParameters(e.defaultFont,t),this._setFont(),this}});return e.path={Path:n,TextPath:o}});//# sourceMappingURL=path.js.map