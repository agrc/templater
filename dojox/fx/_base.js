//>>built
define("dojox/fx/_base",["dojo/_base/array","dojo/_base/lang","dojo/_base/fx","dojo/fx","dojo/dom","dojo/dom-style","dojo/dom-geometry","dojo/_base/connect","dojo/_base/html"],function(e,t,a,i,r,o,n,d,s){var l=t.getObject("dojox.fx",!0);return t.mixin(l,{anim:a.anim,animateProperty:a.animateProperty,fadeTo:a._fade,fadeIn:a.fadeIn,fadeOut:a.fadeOut,combine:i.combine,chain:i.chain,slideTo:i.slideTo,wipeIn:i.wipeIn,wipeOut:i.wipeOut}),l.sizeTo=function(e){var n=e.node=r.byId(e.node),d="absolute",s=e.method||"chain";e.duration||(e.duration=500),"chain"==s&&(e.duration=Math.floor(e.duration/2));var l,u,m,h,c,f=null,y=function(t){return function(){var a=o.getComputedStyle(t),i=a.position,r=a.width,n=a.height;if(l=i==d?t.offsetTop:parseInt(a.top)||0,m=i==d?t.offsetLeft:parseInt(a.left)||0,c="auto"==r?0:parseInt(r),f="auto"==n?0:parseInt(n),h=m-Math.floor((e.width-c)/2),u=l-Math.floor((e.height-f)/2),i!=d&&"relative"!=i){var s=o.coords(t,!0);l=s.y,m=s.x,t.style.position=d,t.style.top=l+"px",t.style.left=m+"px"}}}(n),p=a.animateProperty(t.mixin({properties:{height:function(){return y(),{end:e.height||0,start:f}},top:function(){return{start:l,end:u}}}},e)),g=a.animateProperty(t.mixin({properties:{width:function(){return{start:c,end:e.width||0}},left:function(){return{start:m,end:h}}}},e)),v=i["combine"==e.method?"combine":"chain"]([p,g]);return v},l.slideBy=function(e){var i,s,l=e.node=r.byId(e.node),u=function(e){return function(){var t=o.getComputedStyle(e),a=t.position;if(i="absolute"==a?e.offsetTop:parseInt(t.top)||0,s="absolute"==a?e.offsetLeft:parseInt(t.left)||0,"absolute"!=a&&"relative"!=a){var r=n.coords(e,!0);i=r.y,s=r.x,e.style.position="absolute",e.style.top=i+"px",e.style.left=s+"px"}}}(l);u();var m=a.animateProperty(t.mixin({properties:{top:i+(e.top||0),left:s+(e.left||0)}},e));return d.connect(m,"beforeBegin",m,u),m},l.crossFade=function(e){var o=e.nodes[0]=r.byId(e.nodes[0]),n=s.style(o,"opacity"),d=e.nodes[1]=r.byId(e.nodes[1]),l=(s.style(d,"opacity"),i.combine([a[0==n?"fadeIn":"fadeOut"](t.mixin({node:o},e)),a[0==n?"fadeOut":"fadeIn"](t.mixin({node:d},e))]));return l},l.highlight=function(e){var i=e.node=r.byId(e.node);e.duration=e.duration||400;var o=e.color||"#ffff99",n=s.style(i,"backgroundColor");"rgba(0, 0, 0, 0)"==n&&(n="transparent");var l=a.animateProperty(t.mixin({properties:{backgroundColor:{start:o,end:n}}},e));return"transparent"==n&&d.connect(l,"onEnd",l,function(){i.style.backgroundColor=n}),l},l.wipeTo=function(e){e.node=r.byId(e.node);var i=e.node,o=i.style,n=e.width?"width":"height",d=e[n],l={};l[n]={start:function(){if(o.overflow="hidden","hidden"==o.visibility||"none"==o.display)return o[n]="1px",o.display="",o.visibility="",1;var e=s.style(i,n);return Math.max(e,1)},end:d};var u=a.animateProperty(t.mixin({properties:l},e));return u},l});//# sourceMappingURL=_base.js.map