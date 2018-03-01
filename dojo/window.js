//>>built
define("dojo/window",["./_base/lang","./sniff","./_base/window","./dom","./dom-geometry","./dom-style","./dom-construct"],function(e,t,i,n,o,r,s){t.add("rtl-adjust-position-for-verticalScrollBar",function(e,t){var n=i.body(t),r=s.create("div",{style:{overflow:"scroll",overflowX:"visible",direction:"rtl",visibility:"hidden",position:"absolute",left:"0",top:"0",width:"64px",height:"64px"}},n,"last"),a=s.create("div",{style:{overflow:"hidden",direction:"ltr"}},r,"last"),d=0!=o.position(a).x;return r.removeChild(a),n.removeChild(r),d}),t.add("position-fixed-support",function(e,t){var n=i.body(t),r=s.create("span",{style:{visibility:"hidden",position:"fixed",left:"1px",top:"1px"}},n,"last"),a=s.create("span",{style:{position:"fixed",left:"0",top:"0"}},r,"last"),d=o.position(a).x!=o.position(r).x;return r.removeChild(a),n.removeChild(r),d});var a={getBox:function(e){e=e||i.doc;var n,r,s="BackCompat"==e.compatMode?i.body(e):e.documentElement,d=o.docScroll(e);if(t("touch")){var l=a.get(e);n=l.innerWidth||s.clientWidth,r=l.innerHeight||s.clientHeight}else n=s.clientWidth,r=s.clientHeight;return{l:d.x,t:d.y,w:n,h:r}},get:function(e){if(t("ie")&&a!==document.parentWindow){e.parentWindow.execScript("document._parentWindow = window;","Javascript");var i=e._parentWindow;return e._parentWindow=null,i}return e.parentWindow||e.defaultView},scrollIntoView:function(e,s){try{e=n.byId(e);var a=e.ownerDocument||i.doc,d=i.body(a),l=a.documentElement||d.parentNode,c=t("ie")||t("trident"),h=t("webkit");if(e==d||e==l)return;if(!(t("mozilla")||c||h||t("opera")||t("trident")||t("edge"))&&"scrollIntoView"in e)return void e.scrollIntoView(!1);var u="BackCompat"==a.compatMode,f=Math.min(d.clientWidth||l.clientWidth,l.clientWidth||d.clientWidth),p=Math.min(d.clientHeight||l.clientHeight,l.clientHeight||d.clientHeight),g=h||u?d:l,m=s||o.position(e),v=e.parentNode,b=function(e){return!(c<=6||7==c&&u)&&(t("position-fixed-support")&&"fixed"==r.get(e,"position").toLowerCase())},_=this,y=function(e,t,i){"BODY"==e.tagName||"HTML"==e.tagName?_.get(e.ownerDocument).scrollBy(t,i):(t&&(e.scrollLeft+=t),i&&(e.scrollTop+=i))};if(b(e))return;for(;v;){v==d&&(v=g);var j=o.position(v),x=b(v),C="rtl"==r.getComputedStyle(v).direction.toLowerCase();if(v==g)j.w=f,j.h=p,g==l&&(c||t("trident"))&&C&&(j.x+=g.offsetWidth-j.w),j.x=0,j.y=0;else{var w=o.getPadBorderExtents(v);j.w-=w.w,j.h-=w.h,j.x+=w.l,j.y+=w.t;var k=v.clientWidth,N=j.w-k;k>0&&N>0&&(C&&t("rtl-adjust-position-for-verticalScrollBar")&&(j.x+=N),j.w=k),k=v.clientHeight,N=j.h-k,k>0&&N>0&&(j.h=k)}x&&(j.y<0&&(j.h+=j.y,j.y=0),j.x<0&&(j.w+=j.x,j.x=0),j.y+j.h>p&&(j.h=p-j.y),j.x+j.w>f&&(j.w=f-j.x));var S,T,E=m.x-j.x,A=m.y-j.y,B=E+m.w-j.w,M=A+m.h-j.h;B*E>0&&(v.scrollLeft||v==g||v.scrollWidth>v.offsetHeight)&&(S=Math[E<0?"max":"min"](E,B),C&&(8==c&&!u||t("trident")>=5)&&(S=-S),T=v.scrollLeft,y(v,S,0),S=v.scrollLeft-T,m.x-=S),M*A>0&&(v.scrollTop||v==g||v.scrollHeight>v.offsetHeight)&&(S=Math.ceil(Math[A<0?"max":"min"](A,M)),T=v.scrollTop,y(v,0,S),S=v.scrollTop-T,m.y-=S),v=v!=g&&!x&&v.parentNode}}catch(t){e.scrollIntoView(!1)}}};return e.setObject("dojo.window",a),a});//# sourceMappingURL=window.js.map