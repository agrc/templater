//>>built
define("dojox/mobile/_css3",["dojo/_base/window","dojo/_base/array","dojo/has"],function(e,t,i){var a=[],o=[],r=e.doc.createElement("div").style,n=["webkit"];i.add("css3-animations",function(e,i,a){var o=a.style;return void 0!==o.animation&&void 0!==o.transition||t.some(n,function(e){return void 0!==o[e+"Animation"]&&void 0!==o[e+"Transition"]})}),i.add("t17164",function(e,t,i){return void 0!==i.style.transition&&!("TransitionEvent"in window)});var s={name:function(e,s){var d=(s?o:a)[e];if(!d){if(/End|Start/.test(e)){var l=e.length-(e.match(/End/)?3:5),h=e.substr(0,l),c=this.name(h);d=c==h?e.toLowerCase():c+e.substr(l)}else if("keyframes"==e){var u=this.name("animation",s);d="animation"==u?e:s?u.replace(/animation/,"keyframes"):u.replace(/Animation/,"Keyframes")}else{var m=s?e.replace(/-(.)/g,function(e,t){return t.toUpperCase()}):e;void 0===r[m]||i("t17164")?(m=m.charAt(0).toUpperCase()+m.slice(1),t.some(n,function(t){void 0!==r[t+m]&&(d=s?"-"+t+"-"+e:t+m)})):d=e}d||(d=e),(s?o:a)[e]=d}return d},add:function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[s.name(i)]=t[i]);return e}};return s});//# sourceMappingURL=_css3.js.map