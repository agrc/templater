//>>built
define("dojox/mobile/_css3",["dojo/_base/window","dojo/_base/array","dojo/has"],function(e,t,i){var o=[],n=[],a=e.doc.createElement("div").style,r=["webkit"];i.add("css3-animations",function(e,i,o){var n=o.style;return void 0!==n.animation&&void 0!==n.transition||t.some(r,function(e){return void 0!==n[e+"Animation"]&&void 0!==n[e+"Transition"]})}),i.add("t17164",function(e,t,i){return void 0!==i.style.transition&&!("TransitionEvent"in window)});var s={name:function(e,s){var d=(s?n:o)[e];if(!d){if(/End|Start/.test(e)){var l=e.length-(e.match(/End/)?3:5),u=e.substr(0,l),c=this.name(u);d=c==u?e.toLowerCase():c+e.substr(l)}else if("keyframes"==e){var h=this.name("animation",s);d="animation"==h?e:s?h.replace(/animation/,"keyframes"):h.replace(/Animation/,"Keyframes")}else{var m=s?e.replace(/-(.)/g,function(e,t){return t.toUpperCase()}):e;void 0===a[m]||i("t17164")?(m=m.charAt(0).toUpperCase()+m.slice(1),t.some(r,function(t){void 0!==a[t+m]&&(d=s?"-"+t+"-"+e:t+m)})):d=e}d||(d=e),(s?n:o)[e]=d}return d},add:function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[s.name(i)]=t[i]);return e}};return s});//# sourceMappingURL=_css3.js.map