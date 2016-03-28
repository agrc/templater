//>>built
define("dojox/fx/split",["dojo/_base/lang","dojo/dom","dojo/_base/window","dojo/_base/html","dojo/dom-geometry","dojo/dom-construct","dojo/dom-attr","dojo/_base/fx","dojo/fx","./_base","dojo/fx/easing","dojo/_base/connect"],function(e,t,i,a,r,o,n,d,l,s,m,u){var h=e.getObject("dojox.fx");return e.mixin(h,{_split:function(d){d.rows=d.rows||3,d.columns=d.columns||3,d.duration=d.duration||1e3;for(var s=d.node=t.byId(d.node),m=s.parentNode,h=m,c=i.body(),f="position";h&&h!=c&&"static"==a.style(h,f);)h=h.parentNode;for(var y=h!=c?r.position(h,!0):{x:0,y:0},p=r.position(s,!0),v=a.style(s,"height"),g=a.style(s,"width"),b=a.style(s,"borderLeftWidth")+a.style(s,"borderRightWidth"),M=a.style(s,"borderTopWidth")+a.style(s,"borderBottomWidth"),w=Math.ceil(v/d.rows),k=Math.ceil(g/d.columns),j=o.create(s.tagName,{style:{position:"absolute",padding:0,margin:0,border:"none",top:p.y-y.y+"px",left:p.x-y.x+"px",height:v+M+"px",width:g+b+"px",background:"none",overflow:d.crop?"hidden":"visible",zIndex:a.style(s,"zIndex")}},s,"after"),x=[],_=o.create(s.tagName,{style:{position:"absolute",border:"none",padding:0,margin:0,height:w+b+"px",width:k+M+"px",overflow:"hidden"}}),F=0,I=d.rows;I>F;F++)for(var E=0,A=d.columns;A>E;E++){var T=e.clone(_),S=e.clone(s),C=F*w,G=E*k;S.style.filter="",n.remove(S,"id"),a.style(T,{border:"none",overflow:"hidden",top:C+"px",left:G+"px"}),a.style(S,{position:"static",opacity:"1",marginTop:-C+"px",marginLeft:-G+"px"}),T.appendChild(S),j.appendChild(T);var z=d.pieceAnimation(T,E,F,p);e.isArray(z)?x=x.concat(z):x.push(z)}var P=l.combine(x);return u.connect(P,"onEnd",P,function(){j.parentNode.removeChild(j)}),d.onPlay&&u.connect(P,"onPlay",P,d.onPlay),d.onEnd&&u.connect(P,"onEnd",P,d.onEnd),P},explode:function(e){var i=e.node=t.byId(e.node);e.rows=e.rows||3,e.columns=e.columns||3,e.distance=e.distance||1,e.duration=e.duration||1e3,e.random=e.random||0,e.fade||(e.fade=!0),"undefined"==typeof e.sync&&(e.sync=!0),e.random=Math.abs(e.random),e.pieceAnimation=function(t,i,r,o){var n=o.h/e.rows,l=o.w/e.columns,s=2*e.distance,u=e.duration,h=t.style,c=parseInt(h.top),f=parseInt(h.left),y=0,p=0,v=0;if(e.random){var g=Math.random()*e.random+Math.max(1-e.random,0);s*=g,u*=g,y=e.unhide&&e.sync||!e.unhide&&!e.sync?e.duration-u:0,p=Math.random()-.5,v=Math.random()-.5}var b=(o.h-n)/2-n*r,M=(o.w-l)/2-l*i,w=Math.sqrt(Math.pow(M,2)+Math.pow(b,2)),k=parseInt(c-b*s+w*v),j=parseInt(f-M*s+w*p),x=d.animateProperty({node:t,duration:u,delay:y,easing:e.easing||(e.unhide?m.sinOut:m.circOut),beforeBegin:e.unhide?function(){e.fade&&a.style(t,{opacity:"0"}),h.top=k+"px",h.left=j+"px"}:void 0,properties:{top:e.unhide?{start:k,end:c}:{start:c,end:k},left:e.unhide?{start:j,end:f}:{start:f,end:j}}});if(e.fade){var _=d.animateProperty({node:t,duration:u,delay:y,easing:e.fadeEasing||m.quadOut,properties:{opacity:e.unhide?{start:"0",end:"1"}:{start:"1",end:"0"}}});return e.unhide?[_,x]:[x,_]}return x};var r=h._split(e);return e.unhide?u.connect(r,"onEnd",null,function(){a.style(i,{opacity:"1"})}):u.connect(r,"onPlay",null,function(){a.style(i,{opacity:"0"})}),r},converge:function(e){return e.unhide=!0,h.explode(e)},disintegrate:function(e){var i=e.node=t.byId(e.node);e.rows=e.rows||5,e.columns=e.columns||5,e.duration=e.duration||1500,e.interval=e.interval||e.duration/(e.rows+2*e.columns),e.distance=e.distance||1.5,e.random=e.random||0,"undefined"==typeof e.fade&&(e.fade=!0);var r=Math.abs(e.random),o=e.duration-(e.rows+e.columns)*e.interval;e.pieceAnimation=function(t,i,n,l){var s=Math.random()*(e.rows+e.columns)*e.interval,u=t.style,h=e.reverseOrder||e.distance<0?(i+n)*e.interval:(e.rows+e.columns-(i+n))*e.interval,c=s*r+Math.max(1-r,0)*h,f={};e.unhide?(f.top={start:parseInt(u.top)-l.h*e.distance,end:parseInt(u.top)},e.fade&&(f.opacity={start:"0",end:"1"})):(f.top={end:parseInt(u.top)+l.h*e.distance},e.fade&&(f.opacity={end:"0"}));var y=d.animateProperty({node:t,duration:o,delay:c,easing:e.easing||(e.unhide?m.sinIn:m.circIn),properties:f,beforeBegin:e.unhide?function(){e.fade&&a.style(t,{opacity:"0"}),u.top=f.top.start+"px"}:void 0});return y};var n=h._split(e);return e.unhide?u.connect(n,"onEnd",n,function(){a.style(i,{opacity:"1"})}):u.connect(n,"onPlay",n,function(){a.style(i,{opacity:"0"})}),n},build:function(e){return e.unhide=!0,h.disintegrate(e)},shear:function(e){var i=e.node=t.byId(e.node);e.rows=e.rows||6,e.columns=e.columns||6,e.duration=e.duration||1e3,e.interval=e.interval||0,e.distance=e.distance||1,e.random=e.random||0,"undefined"==typeof e.fade&&(e.fade=!0);var r=Math.abs(e.random),o=e.duration-(e.rows+e.columns)*Math.abs(e.interval);e.pieceAnimation=function(t,i,a,n){var l=!(i%2),s=!(a%2),u=Math.random()*o,h=e.reverseOrder?(e.rows+e.columns-(i+a))*e.interval:(i+a)*e.interval,c=u*r+Math.max(1-r,0)*h,f={},y=t.style;e.fade&&(f.opacity=e.unhide?{start:"0",end:"1"}:{end:"0"}),1==e.columns?l=s:1==e.rows&&(s=!l);var p=parseInt(y.left),v=parseInt(y.top),g=e.distance*n.w,b=e.distance*n.h;e.unhide?l==s?f.left=l?{start:p-g,end:p}:{start:p+g,end:p}:f.top=l?{start:v+b,end:v}:{start:v-b,end:v}:l==s?f.left=l?{end:p-g}:{end:p+g}:f.top=l?{end:v+b}:{end:v-b};var M=d.animateProperty({node:t,duration:o,delay:c,easing:e.easing||m.sinInOut,properties:f,beforeBegin:e.unhide?function(){e.fade&&(y.opacity="0"),l==s?y.left=f.left.start+"px":y.top=f.top.start+"px"}:void 0});return M};var n=h._split(e);return e.unhide?u.connect(n,"onEnd",n,function(){a.style(i,{opacity:"1"})}):u.connect(n,"onPlay",n,function(){a.style(i,{opacity:"0"})}),n},unShear:function(e){return e.unhide=!0,h.shear(e)},pinwheel:function(e){var i=e.node=t.byId(e.node);e.rows=e.rows||4,e.columns=e.columns||4,e.duration=e.duration||1e3,e.interval=e.interval||0,e.distance=e.distance||1,e.random=e.random||0,"undefined"==typeof e.fade&&(e.fade=!0);var r=e.duration-(e.rows+e.columns)*Math.abs(e.interval);e.pieceAnimation=function(t,i,o,n){var l=n.h/e.rows,s=n.w/e.columns,u=!(i%2),h=!(o%2),c=Math.random()*r,f=e.interval<0?(e.rows+e.columns-(i+o))*e.interval*-1:(i+o)*e.interval,y=c*e.random+Math.max(1-e.random,0)*f,p={},v=t.style;e.fade&&(p.opacity=e.unhide?{start:0,end:1}:{end:0}),1==e.columns?u=!h:1==e.rows&&(h=u);var g=parseInt(v.left),b=parseInt(v.top);u&&(h?p.top=e.unhide?{start:b+l*e.distance,end:b}:{start:b,end:b+l*e.distance}:p.left=e.unhide?{start:g+s*e.distance,end:g}:{start:g,end:g+s*e.distance}),u!=h?p.width=e.unhide?{start:s*(1-e.distance),end:s}:{start:s,end:s*(1-e.distance)}:p.height=e.unhide?{start:l*(1-e.distance),end:l}:{start:l,end:l*(1-e.distance)};var M=d.animateProperty({node:t,duration:r,delay:y,easing:e.easing||m.sinInOut,properties:p,beforeBegin:e.unhide?function(){e.fade&&a.style(t,"opacity",0),u?h?v.top=b+l*(1-e.distance)+"px":v.left=g+s*(1-e.distance)+"px":(v.left=g+"px",v.top=b+"px"),u!=h?v.width=s*(1-e.distance)+"px":v.height=l*(1-e.distance)+"px"}:void 0});return M};var o=h._split(e);return e.unhide?u.connect(o,"onEnd",o,function(){a.style(i,{opacity:"1"})}):u.connect(o,"play",o,function(){a.style(i,{opacity:"0"})}),o},unPinwheel:function(e){return e.unhide=!0,h.pinwheel(e)},blockFadeOut:function(e){var i=e.node=t.byId(e.node);e.rows=e.rows||5,e.columns=e.columns||5,e.duration=e.duration||1e3,e.interval=e.interval||e.duration/(e.rows+2*e.columns),e.random=e.random||0;var r=Math.abs(e.random),o=e.duration-(e.rows+e.columns)*e.interval;e.pieceAnimation=function(t,i,n,l){var s=Math.random()*e.duration,u=e.reverseOrder?(e.rows+e.columns-(i+n))*Math.abs(e.interval):(i+n)*e.interval,h=s*r+Math.max(1-r,0)*u,c=d.animateProperty({node:t,duration:o,delay:h,easing:e.easing||m.sinInOut,properties:{opacity:e.unhide?{start:"0",end:"1"}:{start:"1",end:"0"}},beforeBegin:e.unhide?function(){a.style(t,{opacity:"0"})}:function(){t.style.filter=""}});return c};var n=h._split(e);return e.unhide?u.connect(n,"onEnd",n,function(){a.style(i,{opacity:"1"})}):u.connect(n,"onPlay",n,function(){a.style(i,{opacity:"0"})}),n},blockFadeIn:function(e){return e.unhide=!0,h.blockFadeOut(e)}}),s});//# sourceMappingURL=split.js.map