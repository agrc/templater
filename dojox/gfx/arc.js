//>>built
define("dojox/gfx/arc",["./_base","dojo/_base/lang","./matrix"],function(e,t,i){function a(e){var t=Math.cos(e),i=Math.sin(e),a={x:t+4/3*(1-t),y:i-4/3*t*(1-t)/i};return{s:{x:t,y:-i},c1:{x:a.x,y:-a.y},c2:a,e:{x:t,y:i}}}var n=2*Math.PI,r=Math.PI/4,o=Math.PI/8,s=r+o,l=a(o),d=e.arc={unitArcAsBezier:a,curvePI4:l,arcAsBezier:function(e,t,d,c,u,m,h,f){u=Boolean(u),m=Boolean(m);var p=i._degToRad(c),g=t*t,v=d*d,y=i.multiplyPoint(i.rotate(-p),{x:(e.x-h)/2,y:(e.y-f)/2}),k=y.x*y.x,b=y.y*y.y,_=Math.sqrt((g*v-g*b-v*k)/(g*b+v*k));isNaN(_)&&(_=0);var M={x:_*t*y.y/d,y:-_*d*y.x/t};u==m&&(M={x:-M.x,y:-M.y});var w=i.multiplyPoint([i.translate((e.x+h)/2,(e.y+f)/2),i.rotate(p)],M),x=i.normalize([i.translate(w.x,w.y),i.rotate(p),i.scale(t,d)]),j=i.invert(x),I=i.multiplyPoint(j,e),E=i.multiplyPoint(j,h,f),A=Math.atan2(I.y,I.x),T=Math.atan2(E.y,E.x),S=A-T;m&&(S=-S),0>S?S+=n:S>n&&(S-=n);for(var C=o,F=l,z=m?C:-C,N=[],G=S;G>0;G-=r){s>G&&(C=G/2,F=a(C),z=m?C:-C,G=0);var L,P,D=i.normalize([x,i.rotate(A+z)]);m?(_=i.multiplyPoint(D,F.c1),L=i.multiplyPoint(D,F.c2),P=i.multiplyPoint(D,F.e)):(_=i.multiplyPoint(D,F.c2),L=i.multiplyPoint(D,F.c1),P=i.multiplyPoint(D,F.s)),N.push([_.x,_.y,L.x,L.y,P.x,P.y]),A+=2*z}return N}};return d});//# sourceMappingURL=arc.js.map