//>>built
define("dojox/mobile/_css3",["dojo/_base/window","dojo/_base/array","dojo/has"],function(e,t,i){var o=[],r=[],n=e.doc.createElement("div").style,a=["webkit"];i.add("css3-animations",function(e,i,o){var r=o.style;return void 0!==r.animation&&void 0!==r.transition||t.some(a,function(e){return void 0!==r[e+"Animation"]&&void 0!==r[e+"Transition"]})}),i.add("t17164",function(e,t,i){return void 0!==i.style.transition&&!("TransitionEvent"in window)});var s={name:function(e,s){var l=(s?r:o)[e];if(!l){if(/End|Start/.test(e)){var d=e.length-(e.match(/End/)?3:5),u=e.substr(0,d),c=this.name(u);l=c==u?e.toLowerCase():c+e.substr(d)}else if("keyframes"==e){var h=this.name("animation",s);l="animation"==h?e:s?h.replace(/animation/,"keyframes"):h.replace(/Animation/,"Keyframes")}else{var f=s?e.replace(/-(.)/g,function(e,t){return t.toUpperCase()}):e;void 0===n[f]||i("t17164")?(f=f.charAt(0).toUpperCase()+f.slice(1),t.some(a,function(t){void 0!==n[t+f]&&(l=s?"-"+t+"-"+e:t+f)})):l=e}l||(l=e),(s?r:o)[e]=l}return l},add:function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[s.name(i)]=t[i]);return e}};return s});//# sourceMappingURL=_css3.js.map