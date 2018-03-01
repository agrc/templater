//>>built
define("dojox/gfx/renderer",["./_base","dojo/_base/lang","dojo/_base/sniff","dojo/_base/window","dojo/_base/config"],function(e,t,a,i,r){var o=null;return a.add("vml",function(e,t,a){a.innerHTML='<v:shape adj="1"/>';var i="adj"in a.firstChild;return a.innerHTML="",i}),{load:function(n,s,l){function d(){s(["dojox/gfx/"+c],function(t){e.renderer=c,o=t,l(t)})}if(o&&"force"!=n)return void l(o);for(var u,m,c=r.forceGfxRenderer,h=!c&&(t.isString(r.gfxRenderer)?r.gfxRenderer:"svg,vml,canvas,silverlight").split(",");!c&&h.length;)switch(h.shift()){case"svg":"SVGAngle"in i.global&&(c="svg");break;case"vml":a("vml")&&(c="vml");break;case"silverlight":try{a("ie")?(u=new ActiveXObject("AgControl.AgControl"))&&u.IsVersionSupported("1.0")&&(m=!0):navigator.plugins["Silverlight Plug-In"]&&(m=!0)}catch(e){m=!1}finally{u=null}m&&(c="silverlight");break;case"canvas":i.global.CanvasRenderingContext2D&&(c="canvas")}"canvas"===c&&!1!==r.canvasEvents&&(c="canvasWithEvents"),r.isDebug,"svg"==c&&void 0!==window.svgweb?window.svgweb.addOnLoad(d):d()}}});//# sourceMappingURL=renderer.js.map