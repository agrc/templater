//>>built
define("dojox/fx/flip",["dojo/_base/kernel","dojo/_base/html","dojo/dom","dojo/dom-construct","dojo/dom-geometry","dojo/_base/connect","dojo/_base/Color","dojo/_base/sniff","dojo/_base/lang","dojo/_base/window","dojo/_base/fx","dojo/fx","./_base"],function(e,t,i,a,o,r,n,s,l,d,u,m,h){e.experimental("dojox.fx.flip");var c="border",f="Width",p="Height",g="Top",y="Right",v="Left",b="Bottom";return h.flip=function(e){var o=a.create("div"),h=e.node=i.byId(e.node),M=h.style,k=null,w=null,_=null,x=e.lightColor||"#dddddd",j=e.darkColor||"#555555",I=t.style(h,"backgroundColor"),T=e.endColor||I,F={},E=[],S=e.duration?e.duration/2:250,C=e.dir||"left",A=.9,z="transparent",D=e.whichAnim,G=e.axis||"center",N=e.depth,P=function(e){return"#000000"===new n(e).toHex()?"#000001":e};s("ie")<7&&(T=P(T),x=P(x),j=P(j),I=P(I),z="black",o.style.filter="chroma(color='#000000')");var B=function(e){return function(){var i=t.coords(e,!0);k={top:i.y,left:i.x,width:i.w,height:i.h}}}(h);B(),w={position:"absolute",top:k.top+"px",left:k.left+"px",height:"0",width:"0",zIndex:e.zIndex||M.zIndex||0,border:"0 solid "+z,fontSize:"0",visibility:"hidden"};var L=[{},{top:k.top,left:k.left}],H={left:[v,y,g,b,f,p,"end"+p+"Min",v,"end"+p+"Max"],right:[y,v,g,b,f,p,"end"+p+"Min",v,"end"+p+"Max"],top:[g,b,v,y,p,f,"end"+f+"Min",g,"end"+f+"Max"],bottom:[b,g,v,y,p,f,"end"+f+"Min",g,"end"+f+"Max"]};_=H[C],"undefined"!=typeof N?(N=Math.max(0,Math.min(1,N))/2,A=.4+(.5-N)):A=Math.min(.9,Math.max(.4,k[_[5].toLowerCase()]/k[_[4].toLowerCase()]));for(var O=L[0],R=4;6>R;R++)"center"==G||"cube"==G?(k["end"+_[R]+"Min"]=k[_[R].toLowerCase()]*A,k["end"+_[R]+"Max"]=k[_[R].toLowerCase()]/A):"shortside"==G?(k["end"+_[R]+"Min"]=k[_[R].toLowerCase()],k["end"+_[R]+"Max"]=k[_[R].toLowerCase()]/A):"longside"==G&&(k["end"+_[R]+"Min"]=k[_[R].toLowerCase()]*A,k["end"+_[R]+"Max"]=k[_[R].toLowerCase()]);"center"==G?O[_[2].toLowerCase()]=k[_[2].toLowerCase()]-(k[_[8]]-k[_[6]])/4:"shortside"==G&&(O[_[2].toLowerCase()]=k[_[2].toLowerCase()]-(k[_[8]]-k[_[6]])/2),F[_[5].toLowerCase()]=k[_[5].toLowerCase()]+"px",F[_[4].toLowerCase()]="0",F[c+_[1]+f]=k[_[4].toLowerCase()]+"px",F[c+_[1]+"Color"]=I,O[c+_[1]+f]=0,O[c+_[1]+"Color"]=j,O[c+_[2]+f]=O[c+_[3]+f]="cube"!=G?(k["end"+_[5]+"Max"]-k["end"+_[5]+"Min"])/2:k[_[6]]/2,O[_[7].toLowerCase()]=k[_[7].toLowerCase()]+k[_[4].toLowerCase()]/2+(e.shift||0),O[_[5].toLowerCase()]=k[_[6]];var q=L[1];q[c+_[0]+"Color"]={start:x,end:T},q[c+_[0]+f]=k[_[4].toLowerCase()],q[c+_[2]+f]=0,q[c+_[3]+f]=0,q[_[5].toLowerCase()]={start:k[_[6]],end:k[_[5].toLowerCase()]},l.mixin(w,F),t.style(o,w),d.body().appendChild(o);var Q=function(){a.destroy(o),M.backgroundColor=T,M.visibility="visible"};if("last"==D){for(R in O)O[R]={start:O[R]};O[c+_[1]+"Color"]={start:j,end:T},q=O}return D&&"first"!=D||E.push(u.animateProperty({node:o,duration:S,properties:O})),D&&"last"!=D||E.push(u.animateProperty({node:o,duration:S,properties:q,onEnd:Q})),r.connect(E[0],"play",function(){o.style.visibility="visible",M.visibility="hidden"}),m.chain(E)},h.flipCube=function(e){var t=[],i=o.getMarginBox(e.node),a=i.w/2,r=i.h/2,n={top:{pName:"height",args:[{whichAnim:"first",dir:"top",shift:-r},{whichAnim:"last",dir:"bottom",shift:r}]},right:{pName:"width",args:[{whichAnim:"first",dir:"right",shift:a},{whichAnim:"last",dir:"left",shift:-a}]},bottom:{pName:"height",args:[{whichAnim:"first",dir:"bottom",shift:r},{whichAnim:"last",dir:"top",shift:-r}]},left:{pName:"width",args:[{whichAnim:"first",dir:"left",shift:-a},{whichAnim:"last",dir:"right",shift:a}]}},s=n[e.dir||"left"],d=s.args;e.duration=e.duration?2*e.duration:500,e.depth=.8,e.axis="cube";for(var u=d.length-1;u>=0;u--)l.mixin(e,d[u]),t.push(h.flip(e));return m.combine(t)},h.flipPage=function(e){var i=e.node,o=t.coords(i,!0),n=o.x,s=o.y,u=o.w,h=o.h,c=t.style(i,"backgroundColor"),f=e.lightColor||"#dddddd",p=e.darkColor,g=a.create("div"),y=[],v=[],b=e.dir||"right",M={left:["left","right","x","w"],top:["top","bottom","y","h"],right:["left","left","x","w"],bottom:["top","top","y","h"]},k={right:[1,-1],left:[-1,1],top:[-1,1],bottom:[1,-1]};t.style(g,{position:"absolute",width:u+"px",height:h+"px",top:s+"px",left:n+"px",visibility:"hidden"});for(var w=[],_=0;2>_;_++){var x=_%2,j=x?M[b][1]:b,I=x?"last":"first",T=x?c:f,F=x?T:e.startColor||i.style.backgroundColor;v[_]=l.clone(g);var E=function(e){return function(){a.destroy(v[e])}}(_);d.body().appendChild(v[_]),w[_]={backgroundColor:x?F:c},w[_][M[b][0]]=o[M[b][2]]+k[b][0]*_*o[M[b][3]]+"px",t.style(v[_],w[_]),y.push(dojox.fx.flip({node:v[_],dir:j,axis:"shortside",depth:e.depth,duration:e.duration/2,shift:k[b][_]*o[M[b][3]]/2,darkColor:p,lightColor:f,whichAnim:I,endColor:T})),r.connect(y[_],"onEnd",E)}return m.chain(y)},h.flipGrid=function(e){var i=e.rows||4,o=e.cols||4,n=[],s=a.create("div"),u=e.node,h=t.coords(u,!0),c=h.x,f=h.y,p=h.w,g=h.h,y=h.w/o,v=h.h/i,b=[];t.style(s,{position:"absolute",width:y+"px",height:v+"px",backgroundColor:t.style(u,"backgroundColor")});for(var M=0;i>M;M++){var k=M%2,w=k?"right":"left",_=k?1:-1,x=l.clone(u);t.style(x,{position:"absolute",width:p+"px",height:g+"px",top:f+"px",left:c+"px",clip:"rect("+M*v+"px,"+p+"px,"+g+"px,0)"}),d.body().appendChild(x),n[M]=[];for(var j=0;o>j;j++){var I=l.clone(s),T=k?j:o-(j+1),F=function(e,i,a){return function(){i%2?t.style(e,{clip:"rect("+i*v+"px,"+p+"px,"+(i+1)*v+"px,"+(a+1)*y+"px)"}):t.style(e,{clip:"rect("+i*v+"px,"+(p-(a+1)*y)+"px,"+(i+1)*v+"px,0px)"})}}(x,M,j);d.body().appendChild(I),t.style(I,{left:c+T*y+"px",top:f+M*v+"px",visibility:"hidden"});var E=dojox.fx.flipPage({node:I,dir:w,duration:e.duration||900,shift:_*y/2,depth:.2,darkColor:e.darkColor,lightColor:e.lightColor,startColor:e.startColor||e.node.style.backgroundColor}),S=function(e){return function(){a.destroy(e)}}(I);r.connect(E,"play",this,F),r.connect(E,"play",this,S),n[M].push(E)}b.push(m.chain(n[M]))}return r.connect(b[0],"play",function(){t.style(u,{visibility:"hidden"})}),m.combine(b)},h});//# sourceMappingURL=flip.js.map