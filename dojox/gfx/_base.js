//>>built
define("dojox/gfx/_base",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/Color","dojo/_base/sniff","dojo/_base/window","dojo/_base/array","dojo/dom","dojo/dom-construct","dojo/dom-geometry"],function(e,t,a,i,r,o,n,s,d){var l=t.getObject("dojox.gfx",!0),h=l._base={};l._hasClass=function(e,t){var a=e.getAttribute("className");return a&&(" "+a+" ").indexOf(" "+t+" ")>=0},l._addClass=function(e,t){var a=e.getAttribute("className")||"";(!a||(" "+a+" ").indexOf(" "+t+" ")<0)&&e.setAttribute("className",a+(a?" ":"")+t)},l._removeClass=function(e,t){var a=e.getAttribute("className");a&&e.setAttribute("className",a.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)"),"$1$2"))},h._getFontMeasurements=function(){var e,t,a={"1em":0,"1ex":0,"100%":0,"12pt":0,"16px":0,"xx-small":0,"x-small":0,small:0,medium:0,large:0,"x-large":0,"xx-large":0};i("ie")&&(t=r.doc.documentElement.style.fontSize||"",t||(r.doc.documentElement.style.fontSize="100%"));var o=s.create("div",{style:{position:"absolute",left:"0",top:"-100px",width:"30px",height:"1000em",borderWidth:"0",margin:"0",padding:"0",outline:"none",lineHeight:"1",overflow:"hidden"}},r.body());for(e in a)o.style.fontSize=e,a[e]=16*Math.round(12*o.offsetHeight/16)/12/1e3;return i("ie")&&(r.doc.documentElement.style.fontSize=t),r.body().removeChild(o),a};var m=null;h._getCachedFontMeasurements=function(e){return!e&&m||(m=h._getFontMeasurements()),m};var u=null,c={};h._getTextBox=function(e,t,a){var i,o,n,l,h=arguments.length;if(u||(u=s.create("div",{style:{position:"absolute",top:"-10000px",left:"0",visibility:"hidden"}},r.body())),i=u,i.className="",o=i.style,o.borderWidth="0",o.margin="0",o.padding="0",o.outline="0",h>1&&t)for(n in t)n in c||(o[n]=t[n]);if(h>2&&a&&(i.className=a),i.innerHTML=e,i.getBoundingClientRect){var m=i.getBoundingClientRect();l={l:m.left,t:m.top,w:m.width||m.right-m.left,h:m.height||m.bottom-m.top}}else l=d.getMarginBox(i);return i.innerHTML="",l},h._computeTextLocation=function(e,t,a,i){var r={},o=e.align;switch(o){case"end":r.x=e.x-t;break;case"middle":r.x=e.x-t/2;break;default:r.x=e.x}var n=i?.75:1;return r.y=e.y-a*n,r},h._computeTextBoundingBox=function(e){if(!l._base._isRendered(e))return{x:0,y:0,width:0,height:0};var t,a=e.getShape(),i=e.getFont()||l.defaultFont,r=e.getTextWidth(),o=l.normalizedLength(i.size);return t=h._computeTextLocation(a,r,o,!0),{x:t.x,y:t.y,width:r,height:o}},h._isRendered=function(e){for(var t=e.parent;t&&t.getParent;)t=t.parent;return null!==t};var f=0;h._getUniqueId=function(){var t;do t=e._scopeName+"xUnique"+ ++f;while(n.byId(t));return t};var p=i("pointer-events")?"touchAction":i("MSPointer")?"msTouchAction":null;return h._fixMsTouchAction=p?function(e){e.rawNode.style[p]="none"}:function(){},t.mixin(l,{defaultPath:{type:"path",path:""},defaultPolyline:{type:"polyline",points:[]},defaultRect:{type:"rect",x:0,y:0,width:100,height:100,r:0},defaultEllipse:{type:"ellipse",cx:0,cy:0,rx:200,ry:100},defaultCircle:{type:"circle",cx:0,cy:0,r:100},defaultLine:{type:"line",x1:0,y1:0,x2:100,y2:100},defaultImage:{type:"image",x:0,y:0,width:0,height:0,src:""},defaultText:{type:"text",x:0,y:0,text:"",align:"start",decoration:"none",rotated:!1,kerning:!0},defaultTextPath:{type:"textpath",text:"",align:"start",decoration:"none",rotated:!1,kerning:!0},defaultStroke:{type:"stroke",color:"black",style:"solid",width:1,cap:"butt",join:4},defaultLinearGradient:{type:"linear",x1:0,y1:0,x2:100,y2:100,colors:[{offset:0,color:"black"},{offset:1,color:"white"}]},defaultRadialGradient:{type:"radial",cx:0,cy:0,r:100,colors:[{offset:0,color:"black"},{offset:1,color:"white"}]},defaultPattern:{type:"pattern",x:0,y:0,width:0,height:0,src:""},defaultFont:{type:"font",style:"normal",variant:"normal",weight:"normal",size:"10pt",family:"serif"},getDefault:function(){var e={};return function(t){var a=e[t];return a?new a:(a=e[t]=new Function,a.prototype=l["default"+t],new a)}}(),normalizeColor:function(e){return e instanceof a?e:new a(e)},normalizeParameters:function(e,t){var a;if(t){var i={};for(a in e)a in t&&!(a in i)&&(e[a]=t[a])}return e},makeParameters:function(e,a){var i=null;if(!a)return t.delegate(e);var r={};for(i in e)i in r||(r[i]=t.clone(i in a?a[i]:e[i]));return r},formatNumber:function(e,t){var a=e.toString();if(a.indexOf("e")>=0)a=e.toFixed(4);else{var i=a.indexOf(".");i>=0&&a.length-i>5&&(a=e.toFixed(4))}return 0>e?a:t?" "+a:a},makeFontString:function(e){return e.style+" "+e.variant+" "+e.weight+" "+e.size+" "+e.family},splitFontString:function(e){var t=l.getDefault("Font"),a=e.split(/\s+/);do{if(a.length<5)break;t.style=a[0],t.variant=a[1],t.weight=a[2];var i=a[3].indexOf("/");t.size=0>i?a[3]:a[3].substring(0,i);var r=4;0>i&&("/"==a[4]?r=6:"/"==a[4].charAt(0)&&(r=5)),r<a.length&&(t.family=a.slice(r).join(" "))}while(!1);return t},cm_in_pt:72/2.54,mm_in_pt:7.2/2.54,px_in_pt:function(){return l._base._getCachedFontMeasurements()["12pt"]/12},pt2px:function(e){return e*l.px_in_pt()},px2pt:function(e){return e/l.px_in_pt()},normalizedLength:function(e){if(0===e.length)return 0;if(e.length>2){var t=l.px_in_pt(),a=parseFloat(e);switch(e.slice(-2)){case"px":return a;case"pt":return a*t;case"in":return 72*a*t;case"pc":return 12*a*t;case"mm":return a*l.mm_in_pt*t;case"cm":return a*l.cm_in_pt*t}}return parseFloat(e)},pathVmlRegExp:/([A-Za-z]+)|(\d+(\.\d+)?)|(\.\d+)|(-\d+(\.\d+)?)|(-\.\d+)/g,pathSvgRegExp:/([A-DF-Za-df-z])|([-+]?\d*[.]?\d+(?:[eE][-+]?\d+)?)/g,equalSources:function(e,t){return e&&t&&e===t},switchTo:function(e){var t="string"==typeof e?l[e]:e;t&&(o.forEach(["Group","Rect","Ellipse","Circle","Line","Polyline","Image","Text","Path","TextPath","Surface","createSurface","fixTarget"],function(e){l[e]=t[e]}),"string"==typeof e?l.renderer=e:o.some(["svg","vml","canvas","canvasWithEvents","silverlight"],function(e){return l.renderer=l[e]&&l[e].Surface===l.Surface?e:null}))}}),l});//# sourceMappingURL=_base.js.map