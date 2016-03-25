//>>built
define("dojox/fx/_base",["dojo/_base/array","dojo/_base/lang","dojo/_base/fx","dojo/fx","dojo/dom","dojo/dom-style","dojo/dom-geometry","dojo/_base/connect","dojo/_base/html"],function(e,t,a,i,o,r,n,s,d){var l=t.getObject("dojox.fx",!0);return t.mixin(l,{anim:a.anim,animateProperty:a.animateProperty,fadeTo:a._fade,fadeIn:a.fadeIn,fadeOut:a.fadeOut,combine:i.combine,chain:i.chain,slideTo:i.slideTo,wipeIn:i.wipeIn,wipeOut:i.wipeOut}),l.sizeTo=function(e){var n=e.node=o.byId(e.node),s="absolute",d=e.method||"chain";e.duration||(e.duration=500),"chain"==d&&(e.duration=Math.floor(e.duration/2));var l,m,u,c,h,f=null,y=function(t){return function(){var a=r.getComputedStyle(t),i=a.position,o=a.width,n=a.height;if(l=i==s?t.offsetTop:parseInt(a.top)||0,u=i==s?t.offsetLeft:parseInt(a.left)||0,h="auto"==o?0:parseInt(o),f="auto"==n?0:parseInt(n),c=u-Math.floor((e.width-h)/2),m=l-Math.floor((e.height-f)/2),i!=s&&"relative"!=i){var d=r.coords(t,!0);l=d.y,u=d.x,t.style.position=s,t.style.top=l+"px",t.style.left=u+"px"}}}(n),p=a.animateProperty(t.mixin({properties:{height:function(){return y(),{end:e.height||0,start:f}},top:function(){return{start:l,end:m}}}},e)),g=a.animateProperty(t.mixin({properties:{width:function(){return{start:h,end:e.width||0}},left:function(){return{start:u,end:c}}}},e)),v=i["combine"==e.method?"combine":"chain"]([p,g]);return v},l.slideBy=function(e){var i,d,l=e.node=o.byId(e.node),m=function(e){return function(){var t=r.getComputedStyle(e),a=t.position;if(i="absolute"==a?e.offsetTop:parseInt(t.top)||0,d="absolute"==a?e.offsetLeft:parseInt(t.left)||0,"absolute"!=a&&"relative"!=a){var o=n.coords(e,!0);i=o.y,d=o.x,e.style.position="absolute",e.style.top=i+"px",e.style.left=d+"px"}}}(l);m();var u=a.animateProperty(t.mixin({properties:{top:i+(e.top||0),left:d+(e.left||0)}},e));return s.connect(u,"beforeBegin",u,m),u},l.crossFade=function(e){var r=e.nodes[0]=o.byId(e.nodes[0]),n=d.style(r,"opacity"),s=e.nodes[1]=o.byId(e.nodes[1]),l=(d.style(s,"opacity"),i.combine([a[0==n?"fadeIn":"fadeOut"](t.mixin({node:r},e)),a[0==n?"fadeOut":"fadeIn"](t.mixin({node:s},e))]));return l},l.highlight=function(e){var i=e.node=o.byId(e.node);e.duration=e.duration||400;var r=e.color||"#ffff99",n=d.style(i,"backgroundColor");"rgba(0, 0, 0, 0)"==n&&(n="transparent");var l=a.animateProperty(t.mixin({properties:{backgroundColor:{start:r,end:n}}},e));return"transparent"==n&&s.connect(l,"onEnd",l,function(){i.style.backgroundColor=n}),l},l.wipeTo=function(e){e.node=o.byId(e.node);var i=e.node,r=i.style,n=e.width?"width":"height",s=e[n],l={};l[n]={start:function(){if(r.overflow="hidden","hidden"==r.visibility||"none"==r.display)return r[n]="1px",r.display="",r.visibility="",1;var e=d.style(i,n);return Math.max(e,1)},end:s};var m=a.animateProperty(t.mixin({properties:l},e));return m},l});//# sourceMappingURL=_base.js.map