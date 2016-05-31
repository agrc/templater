//>>built
define("dojox/mobile/iconUtils",["dojo/_base/array","dojo/_base/config","dojo/_base/connect","dojo/_base/event","dojo/_base/lang","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/dom-style","./sniff"],function(e,t,i,r,a,o,n,s,l,d){var u=a.getObject("dojox.mobile",!0),c=function(){this.setupSpriteIcon=function(t,i){if(t&&i){var r=e.map(i.split(/[ ,]/),function(e){return e-0}),a=r[0],o=r[1]+r[2],s=r[0]+r[3],d=r[1];l.set(t,{position:"absolute",clip:"rect("+a+"px "+o+"px "+s+"px "+d+"px)",top:(t.parentNode?l.get(t,"top"):0)-a+"px",left:-d+"px"}),n.add(t,"mblSpriteIcon")}},this.createDomButton=function(e,i,r){if(!this._domButtons)if(d("webkit")){var a=function(e,t){var i,r;if(!e){var n={},s=o.doc.styleSheets;for(i=0;i<s.length;i++)s[i]&&a(s[i],n);return n}var l=e.cssRules||[];for(i=0;i<l.length;i++){var d=l[i];if(d.href&&d.styleSheet)a(d.styleSheet,t);else if(d.selectorText){var u=d.selectorText.split(/,/);for(r=0;r<u.length;r++){var c=u[r],h=c.split(/>/).length-1;if(c.match(/(mblDomButton\w+)/)){var m=RegExp.$1;(!t[m]||h>t[m])&&(t[m]=h)}}}}return t};this._domButtons=a()}else this._domButtons={};var u=e.className,c=r||e;if(u.match(/(mblDomButton\w+)/)&&-1===u.indexOf("/")){var h=RegExp.$1,m=4;u.match(/(mblDomButton\w+_(\d+))/)?m=RegExp.$2-0:void 0!==this._domButtons[h]&&(m=this._domButtons[h]);var f=null;d("bb")&&t.mblBBBoxShadowWorkaround!==!1&&(f={style:"-webkit-box-shadow:none"});for(var p=0,g=c;m>p;p++)g=g.firstChild||s.create("div",f,g);r&&(setTimeout(function(){n.remove(e,h)},0),n.add(r,h))}else{if(-1===u.indexOf("."))return null;s.create("img",{src:u},c)}return n.add(c,"mblDomButton"),!!i&&l.set(c,i),c},this.createIcon=function(e,t,a,o,d,c,h){if(o=o||"",e&&0===e.indexOf("mblDomButton"))a?a.className.match(/(mblDomButton\w+)/)&&n.remove(a,RegExp.$1):a=s.create("div",null,c||d,h),a.title=o,n.add(a,e),this.createDomButton(a);else if(e&&"none"!==e){if(a&&"IMG"===a.nodeName||(a=s.create("img",{alt:o},c||d,h)),a.src=(e||"").replace("${theme}",u.currentTheme),this.setupSpriteIcon(a,t),t&&d){var m=t.split(/[ ,]/);l.set(d,{position:"relative",width:m[2]+"px",height:m[3]+"px"}),n.add(d,"mblSpriteIconParent")}i.connect(a,"ondragstart",r,"stop")}return a},this.iconWrapper=!1,this.setIcon=function(e,t,i,r,a,o,l){return a&&(e||i)?e&&"none"!==e?(this.iconWrapper||0===e.indexOf("mblDomButton")||t?(i&&"IMG"===i.tagName&&(s.destroy(i),i=null),i&&s.empty(i),i||(i=s.create("div",null,o||a,l)),this.createIcon(e,t,null,null,i),r&&(i.title=r)):(i&&"DIV"===i.tagName&&(s.destroy(i),i=null),i=this.createIcon(e,null,i,r,a,o,l),n.add(i,"mblImageIcon")),n.remove(a,"mblNoIcon"),i):(s.destroy(i),n.add(a,"mblNoIcon"),null):null}};return new c});//# sourceMappingURL=iconUtils.js.map