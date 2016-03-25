//>>built
define("dojox/mobile/iconUtils",["dojo/_base/array","dojo/_base/config","dojo/_base/connect","dojo/_base/event","dojo/_base/lang","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/dom-style","./sniff"],function(e,t,i,o,r,n,a,s,d,l){var c=r.getObject("dojox.mobile",!0),u=function(){this.setupSpriteIcon=function(t,i){if(t&&i){var o=e.map(i.split(/[ ,]/),function(e){return e-0}),r=o[0],n=o[1]+o[2],s=o[0]+o[3],l=o[1];d.set(t,{position:"absolute",clip:"rect("+r+"px "+n+"px "+s+"px "+l+"px)",top:(t.parentNode?d.get(t,"top"):0)-r+"px",left:-l+"px"}),a.add(t,"mblSpriteIcon")}},this.createDomButton=function(e,i,o){if(!this._domButtons)if(l("webkit")){var r=function(e,t){var i,o;if(!e){var a={},s=n.doc.styleSheets;for(i=0;i<s.length;i++)s[i]&&r(s[i],a);return a}var d=e.cssRules||[];for(i=0;i<d.length;i++){var l=d[i];if(l.href&&l.styleSheet)r(l.styleSheet,t);else if(l.selectorText){var c=l.selectorText.split(/,/);for(o=0;o<c.length;o++){var u=c[o],h=u.split(/>/).length-1;if(u.match(/(mblDomButton\w+)/)){var f=RegExp.$1;(!t[f]||h>t[f])&&(t[f]=h)}}}}return t};this._domButtons=r()}else this._domButtons={};var c=e.className,u=o||e;if(c.match(/(mblDomButton\w+)/)&&-1===c.indexOf("/")){var h=RegExp.$1,f=4;c.match(/(mblDomButton\w+_(\d+))/)?f=RegExp.$2-0:void 0!==this._domButtons[h]&&(f=this._domButtons[h]);var m=null;l("bb")&&t.mblBBBoxShadowWorkaround!==!1&&(m={style:"-webkit-box-shadow:none"});for(var p=0,g=u;f>p;p++)g=g.firstChild||s.create("div",m,g);o&&(setTimeout(function(){a.remove(e,h)},0),a.add(o,h))}else{if(-1===c.indexOf("."))return null;s.create("img",{src:c},u)}return a.add(u,"mblDomButton"),!!i&&d.set(u,i),u},this.createIcon=function(e,t,r,n,l,u,h){if(n=n||"",e&&0===e.indexOf("mblDomButton"))r?r.className.match(/(mblDomButton\w+)/)&&a.remove(r,RegExp.$1):r=s.create("div",null,u||l,h),r.title=n,a.add(r,e),this.createDomButton(r);else if(e&&"none"!==e){if(r&&"IMG"===r.nodeName||(r=s.create("img",{alt:n},u||l,h)),r.src=(e||"").replace("${theme}",c.currentTheme),this.setupSpriteIcon(r,t),t&&l){var f=t.split(/[ ,]/);d.set(l,{position:"relative",width:f[2]+"px",height:f[3]+"px"}),a.add(l,"mblSpriteIconParent")}i.connect(r,"ondragstart",o,"stop")}return r},this.iconWrapper=!1,this.setIcon=function(e,t,i,o,r,n,d){return r&&(e||i)?e&&"none"!==e?(this.iconWrapper||0===e.indexOf("mblDomButton")||t?(i&&"IMG"===i.tagName&&(s.destroy(i),i=null),i&&s.empty(i),i||(i=s.create("div",null,n||r,d)),this.createIcon(e,t,null,null,i),o&&(i.title=o)):(i&&"DIV"===i.tagName&&(s.destroy(i),i=null),i=this.createIcon(e,null,i,o,r,n,d),a.add(i,"mblImageIcon")),a.remove(r,"mblNoIcon"),i):(s.destroy(i),a.add(r,"mblNoIcon"),null):null}};return new u});//# sourceMappingURL=iconUtils.js.map