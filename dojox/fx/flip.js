//>>built
define("dojox/fx/flip",["dojo/_base/kernel","dojo/_base/html","dojo/dom","dojo/dom-construct","dojo/dom-geometry","dojo/_base/connect","dojo/_base/Color","dojo/_base/sniff","dojo/_base/lang","dojo/_base/window","dojo/_base/fx","dojo/fx","./_base"],function(e,t,i,a,r,o,n,s,d,l,u,m,h){e.experimental("dojox.fx.flip");var c="border",f="Width",p="Height",g="Top",y="Right",v="Left",b="Bottom";return h.flip=function(e){var r=a.create("div"),h=e.node=i.byId(e.node),M=h.style,k=null,w=null,_=null,x=e.lightColor||"#dddddd",j=e.darkColor||"#555555",I=t.style(h,"backgroundColor"),F=e.endColor||I,T={},S=[],E=e.duration?e.duration/2:250,A=e.dir||"left",C=.9,z="transparent",G=e.whichAnim,D=e.axis||"center",N=e.depth,L=function(e){return"#000000"===new n(e).toHex()?"#000001":e};s("ie")<7&&(F=L(F),x=L(x),j=L(j),I=L(I),z="black",r.style.filter="chroma(color='#000000')");var B=function(e){return function(){var i=t.coords(e,!0);k={top:i.y,left:i.x,width:i.w,height:i.h}}}(h);B(),w={position:"absolute",top:k.top+"px",left:k.left+"px",height:"0",width:"0",zIndex:e.zIndex||M.zIndex||0,border:"0 solid "+z,fontSize:"0",visibility:"hidden"};var P=[{},{top:k.top,left:k.left}],H={left:[v,y,g,b,f,p,"end"+p+"Min",v,"end"+p+"Max"],right:[y,v,g,b,f,p,"end"+p+"Min",v,"end"+p+"Max"],top:[g,b,v,y,p,f,"end"+f+"Min",g,"end"+f+"Max"],bottom:[b,g,v,y,p,f,"end"+f+"Min",g,"end"+f+"Max"]};_=H[A],"undefined"!=typeof N?(N=Math.max(0,Math.min(1,N))/2,C=.4+(.5-N)):C=Math.min(.9,Math.max(.4,k[_[5].toLowerCase()]/k[_[4].toLowerCase()]));for(var O=P[0],q=4;6>q;q++)"center"==D||"cube"==D?(k["end"+_[q]+"Min"]=k[_[q].toLowerCase()]*C,k["end"+_[q]+"Max"]=k[_[q].toLowerCase()]/C):"shortside"==D?(k["end"+_[q]+"Min"]=k[_[q].toLowerCase()],k["end"+_[q]+"Max"]=k[_[q].toLowerCase()]/C):"longside"==D&&(k["end"+_[q]+"Min"]=k[_[q].toLowerCase()]*C,k["end"+_[q]+"Max"]=k[_[q].toLowerCase()]);"center"==D?O[_[2].toLowerCase()]=k[_[2].toLowerCase()]-(k[_[8]]-k[_[6]])/4:"shortside"==D&&(O[_[2].toLowerCase()]=k[_[2].toLowerCase()]-(k[_[8]]-k[_[6]])/2),T[_[5].toLowerCase()]=k[_[5].toLowerCase()]+"px",T[_[4].toLowerCase()]="0",T[c+_[1]+f]=k[_[4].toLowerCase()]+"px",T[c+_[1]+"Color"]=I,O[c+_[1]+f]=0,O[c+_[1]+"Color"]=j,O[c+_[2]+f]=O[c+_[3]+f]="cube"!=D?(k["end"+_[5]+"Max"]-k["end"+_[5]+"Min"])/2:k[_[6]]/2,O[_[7].toLowerCase()]=k[_[7].toLowerCase()]+k[_[4].toLowerCase()]/2+(e.shift||0),O[_[5].toLowerCase()]=k[_[6]];var R=P[1];R[c+_[0]+"Color"]={start:x,end:F},R[c+_[0]+f]=k[_[4].toLowerCase()],R[c+_[2]+f]=0,R[c+_[3]+f]=0,R[_[5].toLowerCase()]={start:k[_[6]],end:k[_[5].toLowerCase()]},d.mixin(w,T),t.style(r,w),l.body().appendChild(r);var Q=function(){a.destroy(r),M.backgroundColor=F,M.visibility="visible"};if("last"==G){for(q in O)O[q]={start:O[q]};O[c+_[1]+"Color"]={start:j,end:F},R=O}return G&&"first"!=G||S.push(u.animateProperty({node:r,duration:E,properties:O})),G&&"last"!=G||S.push(u.animateProperty({node:r,duration:E,properties:R,onEnd:Q})),o.connect(S[0],"play",function(){r.style.visibility="visible",M.visibility="hidden"}),m.chain(S)},h.flipCube=function(e){var t=[],i=r.getMarginBox(e.node),a=i.w/2,o=i.h/2,n={top:{pName:"height",args:[{whichAnim:"first",dir:"top",shift:-o},{whichAnim:"last",dir:"bottom",shift:o}]},right:{pName:"width",args:[{whichAnim:"first",dir:"right",shift:a},{whichAnim:"last",dir:"left",shift:-a}]},bottom:{pName:"height",args:[{whichAnim:"first",dir:"bottom",shift:o},{whichAnim:"last",dir:"top",shift:-o}]},left:{pName:"width",args:[{whichAnim:"first",dir:"left",shift:-a},{whichAnim:"last",dir:"right",shift:a}]}},s=n[e.dir||"left"],l=s.args;e.duration=e.duration?2*e.duration:500,e.depth=.8,e.axis="cube";for(var u=l.length-1;u>=0;u--)d.mixin(e,l[u]),t.push(h.flip(e));return m.combine(t)},h.flipPage=function(e){var i=e.node,r=t.coords(i,!0),n=r.x,s=r.y,u=r.w,h=r.h,c=t.style(i,"backgroundColor"),f=e.lightColor||"#dddddd",p=e.darkColor,g=a.create("div"),y=[],v=[],b=e.dir||"right",M={left:["left","right","x","w"],top:["top","bottom","y","h"],right:["left","left","x","w"],bottom:["top","top","y","h"]},k={right:[1,-1],left:[-1,1],top:[-1,1],bottom:[1,-1]};t.style(g,{position:"absolute",width:u+"px",height:h+"px",top:s+"px",left:n+"px",visibility:"hidden"});for(var w=[],_=0;2>_;_++){var x=_%2,j=x?M[b][1]:b,I=x?"last":"first",F=x?c:f,T=x?F:e.startColor||i.style.backgroundColor;v[_]=d.clone(g);var S=function(e){return function(){a.destroy(v[e])}}(_);l.body().appendChild(v[_]),w[_]={backgroundColor:x?T:c},w[_][M[b][0]]=r[M[b][2]]+k[b][0]*_*r[M[b][3]]+"px",t.style(v[_],w[_]),y.push(dojox.fx.flip({node:v[_],dir:j,axis:"shortside",depth:e.depth,duration:e.duration/2,shift:k[b][_]*r[M[b][3]]/2,darkColor:p,lightColor:f,whichAnim:I,endColor:F})),o.connect(y[_],"onEnd",S)}return m.chain(y)},h.flipGrid=function(e){var i=e.rows||4,r=e.cols||4,n=[],s=a.create("div"),u=e.node,h=t.coords(u,!0),c=h.x,f=h.y,p=h.w,g=h.h,y=h.w/r,v=h.h/i,b=[];t.style(s,{position:"absolute",width:y+"px",height:v+"px",backgroundColor:t.style(u,"backgroundColor")});for(var M=0;i>M;M++){var k=M%2,w=k?"right":"left",_=k?1:-1,x=d.clone(u);t.style(x,{position:"absolute",width:p+"px",height:g+"px",top:f+"px",left:c+"px",clip:"rect("+M*v+"px,"+p+"px,"+g+"px,0)"}),l.body().appendChild(x),n[M]=[];for(var j=0;r>j;j++){var I=d.clone(s),F=k?j:r-(j+1),T=function(e,i,a){return function(){i%2?t.style(e,{clip:"rect("+i*v+"px,"+p+"px,"+(i+1)*v+"px,"+(a+1)*y+"px)"}):t.style(e,{clip:"rect("+i*v+"px,"+(p-(a+1)*y)+"px,"+(i+1)*v+"px,0px)"})}}(x,M,j);l.body().appendChild(I),t.style(I,{left:c+F*y+"px",top:f+M*v+"px",visibility:"hidden"});var S=dojox.fx.flipPage({node:I,dir:w,duration:e.duration||900,shift:_*y/2,depth:.2,darkColor:e.darkColor,lightColor:e.lightColor,startColor:e.startColor||e.node.style.backgroundColor}),E=function(e){return function(){a.destroy(e)}}(I);o.connect(S,"play",this,T),o.connect(S,"play",this,E),n[M].push(S)}b.push(m.chain(n[M]))}return o.connect(b[0],"play",function(){t.style(u,{visibility:"hidden"})}),m.combine(b)},h});//# sourceMappingURL=flip.js.map