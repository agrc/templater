//>>built
define("dojox/fx/flip",["dojo/_base/kernel","dojo/_base/html","dojo/dom","dojo/dom-construct","dojo/dom-geometry","dojo/_base/connect","dojo/_base/Color","dojo/_base/sniff","dojo/_base/lang","dojo/_base/window","dojo/_base/fx","dojo/fx","./_base"],function(e,t,a,i,r,o,n,s,l,d,u,m,h){e.experimental("dojox.fx.flip");var c="border",f="Width",g="Height",p="Top",y="Right",v="Left",b="Bottom";return h.flip=function(e){var r=i.create("div"),h=e.node=a.byId(e.node),M=h.style,k=null,w=null,_=null,x=e.lightColor||"#dddddd",j=e.darkColor||"#555555",I=t.style(h,"backgroundColor"),F=e.endColor||I,S={},T=[],E=e.duration?e.duration/2:250,z=e.dir||"left",A=.9,C="transparent",G=e.whichAnim,N=e.axis||"center",L=e.depth,D=function(e){return"#000000"===new n(e).toHex()?"#000001":e};s("ie")<7&&(F=D(F),x=D(x),j=D(j),I=D(I),C="black",r.style.filter="chroma(color='#000000')");var P=function(e){return function(){var a=t.coords(e,!0);k={top:a.y,left:a.x,width:a.w,height:a.h}}}(h);P(),w={position:"absolute",top:k.top+"px",left:k.left+"px",height:"0",width:"0",zIndex:e.zIndex||M.zIndex||0,border:"0 solid "+C,fontSize:"0",visibility:"hidden"};var B=[{},{top:k.top,left:k.left}],H={left:[v,y,p,b,f,g,"end"+g+"Min",v,"end"+g+"Max"],right:[y,v,p,b,f,g,"end"+g+"Min",v,"end"+g+"Max"],top:[p,b,v,y,g,f,"end"+f+"Min",p,"end"+f+"Max"],bottom:[b,p,v,y,g,f,"end"+f+"Min",p,"end"+f+"Max"]};_=H[z],"undefined"!=typeof L?(L=Math.max(0,Math.min(1,L))/2,A=.4+(.5-L)):A=Math.min(.9,Math.max(.4,k[_[5].toLowerCase()]/k[_[4].toLowerCase()]));for(var q=B[0],O=4;6>O;O++)"center"==N||"cube"==N?(k["end"+_[O]+"Min"]=k[_[O].toLowerCase()]*A,k["end"+_[O]+"Max"]=k[_[O].toLowerCase()]/A):"shortside"==N?(k["end"+_[O]+"Min"]=k[_[O].toLowerCase()],k["end"+_[O]+"Max"]=k[_[O].toLowerCase()]/A):"longside"==N&&(k["end"+_[O]+"Min"]=k[_[O].toLowerCase()]*A,k["end"+_[O]+"Max"]=k[_[O].toLowerCase()]);"center"==N?q[_[2].toLowerCase()]=k[_[2].toLowerCase()]-(k[_[8]]-k[_[6]])/4:"shortside"==N&&(q[_[2].toLowerCase()]=k[_[2].toLowerCase()]-(k[_[8]]-k[_[6]])/2),S[_[5].toLowerCase()]=k[_[5].toLowerCase()]+"px",S[_[4].toLowerCase()]="0",S[c+_[1]+f]=k[_[4].toLowerCase()]+"px",S[c+_[1]+"Color"]=I,q[c+_[1]+f]=0,q[c+_[1]+"Color"]=j,q[c+_[2]+f]=q[c+_[3]+f]="cube"!=N?(k["end"+_[5]+"Max"]-k["end"+_[5]+"Min"])/2:k[_[6]]/2,q[_[7].toLowerCase()]=k[_[7].toLowerCase()]+k[_[4].toLowerCase()]/2+(e.shift||0),q[_[5].toLowerCase()]=k[_[6]];var R=B[1];R[c+_[0]+"Color"]={start:x,end:F},R[c+_[0]+f]=k[_[4].toLowerCase()],R[c+_[2]+f]=0,R[c+_[3]+f]=0,R[_[5].toLowerCase()]={start:k[_[6]],end:k[_[5].toLowerCase()]},l.mixin(w,S),t.style(r,w),d.body().appendChild(r);var Q=function(){i.destroy(r),M.backgroundColor=F,M.visibility="visible"};if("last"==G){for(O in q)q[O]={start:q[O]};q[c+_[1]+"Color"]={start:j,end:F},R=q}return G&&"first"!=G||T.push(u.animateProperty({node:r,duration:E,properties:q})),G&&"last"!=G||T.push(u.animateProperty({node:r,duration:E,properties:R,onEnd:Q})),o.connect(T[0],"play",function(){r.style.visibility="visible",M.visibility="hidden"}),m.chain(T)},h.flipCube=function(e){var t=[],a=r.getMarginBox(e.node),i=a.w/2,o=a.h/2,n={top:{pName:"height",args:[{whichAnim:"first",dir:"top",shift:-o},{whichAnim:"last",dir:"bottom",shift:o}]},right:{pName:"width",args:[{whichAnim:"first",dir:"right",shift:i},{whichAnim:"last",dir:"left",shift:-i}]},bottom:{pName:"height",args:[{whichAnim:"first",dir:"bottom",shift:o},{whichAnim:"last",dir:"top",shift:-o}]},left:{pName:"width",args:[{whichAnim:"first",dir:"left",shift:-i},{whichAnim:"last",dir:"right",shift:i}]}},s=n[e.dir||"left"],d=s.args;e.duration=e.duration?2*e.duration:500,e.depth=.8,e.axis="cube";for(var u=d.length-1;u>=0;u--)l.mixin(e,d[u]),t.push(h.flip(e));return m.combine(t)},h.flipPage=function(e){var a=e.node,r=t.coords(a,!0),n=r.x,s=r.y,u=r.w,h=r.h,c=t.style(a,"backgroundColor"),f=e.lightColor||"#dddddd",g=e.darkColor,p=i.create("div"),y=[],v=[],b=e.dir||"right",M={left:["left","right","x","w"],top:["top","bottom","y","h"],right:["left","left","x","w"],bottom:["top","top","y","h"]},k={right:[1,-1],left:[-1,1],top:[-1,1],bottom:[1,-1]};t.style(p,{position:"absolute",width:u+"px",height:h+"px",top:s+"px",left:n+"px",visibility:"hidden"});for(var w=[],_=0;2>_;_++){var x=_%2,j=x?M[b][1]:b,I=x?"last":"first",F=x?c:f,S=x?F:e.startColor||a.style.backgroundColor;v[_]=l.clone(p);var T=function(e){return function(){i.destroy(v[e])}}(_);d.body().appendChild(v[_]),w[_]={backgroundColor:x?S:c},w[_][M[b][0]]=r[M[b][2]]+k[b][0]*_*r[M[b][3]]+"px",t.style(v[_],w[_]),y.push(dojox.fx.flip({node:v[_],dir:j,axis:"shortside",depth:e.depth,duration:e.duration/2,shift:k[b][_]*r[M[b][3]]/2,darkColor:g,lightColor:f,whichAnim:I,endColor:F})),o.connect(y[_],"onEnd",T)}return m.chain(y)},h.flipGrid=function(e){var a=e.rows||4,r=e.cols||4,n=[],s=i.create("div"),u=e.node,h=t.coords(u,!0),c=h.x,f=h.y,g=h.w,p=h.h,y=h.w/r,v=h.h/a,b=[];t.style(s,{position:"absolute",width:y+"px",height:v+"px",backgroundColor:t.style(u,"backgroundColor")});for(var M=0;a>M;M++){var k=M%2,w=k?"right":"left",_=k?1:-1,x=l.clone(u);t.style(x,{position:"absolute",width:g+"px",height:p+"px",top:f+"px",left:c+"px",clip:"rect("+M*v+"px,"+g+"px,"+p+"px,0)"}),d.body().appendChild(x),n[M]=[];for(var j=0;r>j;j++){var I=l.clone(s),F=k?j:r-(j+1),S=function(e,a,i){return function(){a%2?t.style(e,{clip:"rect("+a*v+"px,"+g+"px,"+(a+1)*v+"px,"+(i+1)*y+"px)"}):t.style(e,{clip:"rect("+a*v+"px,"+(g-(i+1)*y)+"px,"+(a+1)*v+"px,0px)"})}}(x,M,j);d.body().appendChild(I),t.style(I,{left:c+F*y+"px",top:f+M*v+"px",visibility:"hidden"});var T=dojox.fx.flipPage({node:I,dir:w,duration:e.duration||900,shift:_*y/2,depth:.2,darkColor:e.darkColor,lightColor:e.lightColor,startColor:e.startColor||e.node.style.backgroundColor}),E=function(e){return function(){i.destroy(e)}}(I);o.connect(T,"play",this,S),o.connect(T,"play",this,E),n[M].push(T)}b.push(m.chain(n[M]))}return o.connect(b[0],"play",function(){t.style(u,{visibility:"hidden"})}),m.combine(b)},h});//# sourceMappingURL=flip.js.map