//>>built
define("dojo/window",["./_base/lang","./sniff","./_base/window","./dom","./dom-geometry","./dom-style","./dom-construct"],function(e,t,n,i,o,r,a){t.add("rtl-adjust-position-for-verticalScrollBar",function(e,t){var i=n.body(t),r=a.create("div",{style:{overflow:"scroll",overflowX:"visible",direction:"rtl",visibility:"hidden",position:"absolute",left:"0",top:"0",width:"64px",height:"64px"}},i,"last"),s=a.create("div",{style:{overflow:"hidden",direction:"ltr"}},r,"last"),d=0!=o.position(s).x;return r.removeChild(s),i.removeChild(r),d}),t.add("position-fixed-support",function(e,t){var i=n.body(t),r=a.create("span",{style:{visibility:"hidden",position:"fixed",left:"1px",top:"1px"}},i,"last"),s=a.create("span",{style:{position:"fixed",left:"0",top:"0"}},r,"last"),d=o.position(s).x!=o.position(r).x;return r.removeChild(s),i.removeChild(r),d});var s={getBox:function(e){e=e||n.doc;var i,r,a="BackCompat"==e.compatMode?n.body(e):e.documentElement,d=o.docScroll(e);if(t("touch")){var l=s.get(e);i=l.innerWidth||a.clientWidth,r=l.innerHeight||a.clientHeight}else i=a.clientWidth,r=a.clientHeight;return{l:d.x,t:d.y,w:i,h:r}},get:function(e){if(t("ie")&&s!==document.parentWindow){e.parentWindow.execScript("document._parentWindow = window;","Javascript");var n=e._parentWindow;return e._parentWindow=null,n}return e.parentWindow||e.defaultView},scrollIntoView:function(e,a){try{e=i.byId(e);var s=e.ownerDocument||n.doc,d=n.body(s),l=s.documentElement||d.parentNode,c=t("ie")||t("trident"),u=t("webkit");if(e==d||e==l)return;if(!(t("mozilla")||c||u||t("opera")||t("trident")||t("edge"))&&"scrollIntoView"in e)return void e.scrollIntoView(!1);var h="BackCompat"==s.compatMode,f=Math.min(d.clientWidth||l.clientWidth,l.clientWidth||d.clientWidth),p=Math.min(d.clientHeight||l.clientHeight,l.clientHeight||d.clientHeight),m=u||h?d:l,g=a||o.position(e),v=e.parentNode,y=function(e){return 6>=c||7==c&&h?!1:t("position-fixed-support")&&"fixed"==r.get(e,"position").toLowerCase()},b=this,_=function(e,t,n){"BODY"==e.tagName||"HTML"==e.tagName?b.get(e.ownerDocument).scrollBy(t,n):(t&&(e.scrollLeft+=t),n&&(e.scrollTop+=n))};if(y(e))return;for(;v;){v==d&&(v=m);var j=o.position(v),w=y(v),x="rtl"==r.getComputedStyle(v).direction.toLowerCase();if(v==m)j.w=f,j.h=p,m==l&&(c||t("trident"))&&x&&(j.x+=m.offsetWidth-j.w),j.x=0,j.y=0;else{var C=o.getPadBorderExtents(v);j.w-=C.w,j.h-=C.h,j.x+=C.l,j.y+=C.t;var k=v.clientWidth,N=j.w-k;k>0&&N>0&&(x&&t("rtl-adjust-position-for-verticalScrollBar")&&(j.x+=N),j.w=k),k=v.clientHeight,N=j.h-k,k>0&&N>0&&(j.h=k)}w&&(j.y<0&&(j.h+=j.y,j.y=0),j.x<0&&(j.w+=j.x,j.x=0),j.y+j.h>p&&(j.h=p-j.y),j.x+j.w>f&&(j.w=f-j.x));var T,E,S=g.x-j.x,A=g.y-j.y,L=S+g.w-j.w,D=A+g.h-j.h;L*S>0&&(v.scrollLeft||v==m||v.scrollWidth>v.offsetHeight)&&(T=Math[0>S?"max":"min"](S,L),x&&(8==c&&!h||t("trident")>=5)&&(T=-T),E=v.scrollLeft,_(v,T,0),T=v.scrollLeft-E,g.x-=T),D*A>0&&(v.scrollTop||v==m||v.scrollHeight>v.offsetHeight)&&(T=Math.ceil(Math[0>A?"max":"min"](A,D)),E=v.scrollTop,_(v,0,T),T=v.scrollTop-E,g.y-=T),v=v!=m&&!w&&v.parentNode}}catch(R){e.scrollIntoView(!1)}}};return e.setObject("dojo.window",s),s});//# sourceMappingURL=window.js.map