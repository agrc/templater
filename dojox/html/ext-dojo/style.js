//>>built
define("dojox/html/ext-dojo/style",["dojo/_base/kernel","dojo/dom-style","dojo/_base/lang","dojo/_base/html","dojo/_base/sniff","dojo/_base/window","dojo/dom","dojo/dom-construct","dojo/dom-style","dojo/dom-attr"],function(e,t,i,a,o,r,n,s,l,d){e.experimental("dojox.html.ext-dojo.style");var h=(i.getObject("dojox.html.ext-dojo.style",!0),i.getObject("dojox.html"));return i.mixin(h["ext-dojo"].style,{supportsTransform:!0,_toPx:function(e){var t=a.style,i=this._conversion;return"number"==typeof e?e+"px":-1!=e.toLowerCase().indexOf("px")?e:(!i.parentNode&&s.place(i,r.body()),t(i,"margin",e),t(i,"margin"))},init:function(){var e=r.doc.documentElement.style,t=h["ext-dojo"].style,i=l.get,a=l.set;l.get=function(e,a){var o="transform"==a,r="transformOrigin"==a;return o?t.getTransform(e):r?t.getTransformOrigin(e):i.apply(this,arguments)},l.set=function(e,i,o){var r="transform"==i,s="transformOrigin"==i,l=n.byId(e);return r?t.setTransform(l,o,!0):s?t.setTransformOrigin(l,o):a.apply(this,arguments)};for(var d=0,u=["WebkitT","MozT","OT","msT","t"];d<u.length;d++)"undefined"!=typeof e[u[d]+"ransform"]&&(this.tPropertyName=u[d]+"ransform"),"undefined"!=typeof e[u[d]+"ransformOrigin"]&&(this.toPropertyName=u[d]+"ransformOrigin");this.tPropertyName?(this.setTransform=function(e,t){return a(e,this.tPropertyName,t)},this.getTransform=function(e){return i(e,this.tPropertyName)}):o("ie")&&(this.setTransform=this._setTransformFilter,this.getTransform=this._getTransformFilter),this.toPropertyName?(this.setTransformOrigin=function(e,t){return a(e,this.toPropertyName,t)},this.getTransformOrigin=function(e){return i(e,this.toPropertyName)}):o("ie")?(this.setTransformOrigin=this._setTransformOriginFilter,this.getTransformOrigin=this._getTransformOriginFilter):this.supportsTransform=!1,this._conversion=s.create("div",{style:{position:"absolute",top:"-100px",left:"-100px",fontSize:0,width:"0",backgroundPosition:"50% 50%"}})},_notSupported:function(){},_setTransformOriginFilter:function(e,t){for(var o=i.trim(t).replace(" top"," 0").replace("left ","0 ").replace(" center","50%").replace("center ","50% ").replace(" bottom"," 100%").replace("right ","100% ").replace(/\s+/," "),r=o.split(" "),s=n.byId(e),l=this.getTransform(s),d=!0,h=0;h<r.length;h++)d=d&&/^0|(\d+(%|px|pt|in|pc|mm|cm))$/.test(r[h]),-1==r[h].indexOf("%")&&(r[h]=this._toPx(r[h]));return!d||!r.length||r.length>2?t:(a.attr(s,"dojo-transform-origin",r.join(" ")),l&&this.setTransform(e,l),t)},_getTransformOriginFilter:function(e){return a.attr(e,"dojo-transform-origin")||"50% 50%"},_setTransformFilter:function(e,t){var i=t.replace(/\s/g,""),r=n.byId(e),s=i.split(")"),l=1,h=1,u="DXImageTransform.Microsoft.Matrix",c=d.has,m=a.attr,f=Math.PI,p=Math.cos,g=Math.sin,y=Math.tan,v=Math.max,b=Math.min,M=Math.abs,k=f/180,_=f/200,w="",x="",T=[],I=0,j=0,F=0,C=0,S=0,E=0,N=0,z=1,P=0,A=0,L=1,B=0,G=0,D=[z,P,A,L,B,G],H=!1,R=a.style,O="absolute"==R(r,"position")?"absolute":"relative",Q=R(r,"width")+R(r,"paddingLeft")+R(r,"paddingRight"),q=R(r,"height")+R(r,"paddingTop")+R(r,"paddingBottom"),Y=this._toPx;!c(r,"dojo-transform-origin")&&this.setTransformOrigin(r,"50% 50%");for(var W=0,X=s.length;X>W;W++){switch(T=s[W].match(/matrix|rotate|scaleX|scaleY|scale|skewX|skewY|skew|translateX|translateY|translate/),x=T?T[0]:""){case"matrix":w=s[W].replace(/matrix\(|\)/g,"");var U=w.split(",");z=D[0]*U[0]+D[1]*U[2],P=D[0]*U[1]+D[1]*U[3],A=D[2]*U[0]+D[3]*U[2],L=D[2]*U[1]+D[3]*U[3],B=D[4]+U[4],G=D[5]+U[5];break;case"rotate":w=s[W].replace(/rotate\(|\)/g,""),l=-1!=w.indexOf("deg")?k:-1!=w.indexOf("grad")?_:1,N=parseFloat(w)*l;var K=g(N),V=p(N);z=D[0]*V+D[1]*K,P=-D[0]*K+D[1]*V,A=D[2]*V+D[3]*K,L=-D[2]*K+D[3]*V;break;case"skewX":w=s[W].replace(/skewX\(|\)/g,""),l=-1!=w.indexOf("deg")?k:-1!=w.indexOf("grad")?_:1;var Z=y(parseFloat(w)*l);z=D[0],P=D[0]*Z+D[1],A=D[2],L=D[2]*Z+D[3];break;case"skewY":w=s[W].replace(/skewY\(|\)/g,""),l=-1!=w.indexOf("deg")?k:-1!=w.indexOf("grad")?_:1,Z=y(parseFloat(w)*l),z=D[0]+D[1]*Z,P=D[1],A=D[2]+D[3]*Z,L=D[3];break;case"skew":w=s[W].replace(/skew\(|\)/g,"");var $=w.split(",");$[1]=$[1]||"0",l=-1!=$[0].indexOf("deg")?k:-1!=$[0].indexOf("grad")?_:1,h=-1!=$[1].indexOf("deg")?k:-1!=$[1].indexOf("grad")?_:1;var J=y(parseFloat($[0])*l),ee=y(parseFloat($[1])*h);z=D[0]+D[1]*ee,P=D[0]*J+D[1],A=D[2]+D[3]*ee,L=D[2]*J+D[3];break;case"scaleX":w=parseFloat(s[W].replace(/scaleX\(|\)/g,""))||1,z=D[0]*w,P=D[1],A=D[2]*w,L=D[3];break;case"scaleY":w=parseFloat(s[W].replace(/scaleY\(|\)/g,""))||1,z=D[0],P=D[1]*w,A=D[2],L=D[3]*w;break;case"scale":w=s[W].replace(/scale\(|\)/g,"");var te=w.split(",");te[1]=te[1]||te[0],z=D[0]*te[0],P=D[1]*te[1],A=D[2]*te[0],L=D[3]*te[1];break;case"translateX":w=parseInt(s[W].replace(/translateX\(|\)/g,""))||1,z=D[0],P=D[1],A=D[2],L=D[3],B=Y(w),B&&m(r,"dojo-transform-matrix-tx",B);break;case"translateY":w=parseInt(s[W].replace(/translateY\(|\)/g,""))||1,z=D[0],P=D[1],A=D[2],L=D[3],G=Y(w),G&&m(r,"dojo-transform-matrix-ty",G);break;case"translate":w=s[W].replace(/translate\(|\)/g,""),z=D[0],P=D[1],A=D[2],L=D[3];var ie=w.split(",");ie[0]=parseInt(Y(ie[0]))||0,ie[1]=parseInt(Y(ie[1]))||0,B=ie[0],G=ie[1],B&&m(r,"dojo-transform-matrix-tx",B),G&&m(r,"dojo-transform-matrix-ty",G)}D=[z,P,A,L,B,G]}var ae=b(Q*z+q*P,b(b(Q*z,q*P),0)),oe=b(Q*A+q*L,b(b(Q*A,q*L),0));if(F=-ae,C=-oe,o("ie")<8){if(r.style.zoom="1","absolute"!=O){var re=R(e.parentNode,"width"),ne=M(Q*z),se=M(q*P),le=v(ne+se,v(v(se,ne),0));F-=(le-Q)/2-(re>le?0:(le-re)/2)}}else 8==o("ie")&&"auto"==R(r,"zIndex")&&(r.style.zIndex="0");try{H=!!r.filters.item(u)}catch(de){H=!1}H?(r.filters.item(u).M11=z,r.filters.item(u).M12=P,r.filters.item(u).M21=A,r.filters.item(u).M22=L,r.filters.item(u).filterType="bilinear",r.filters.item(u).Dx=0,r.filters.item(u).Dy=0,r.filters.item(u).sizingMethod="auto expand"):r.style.filter+=" progid:"+u+"(M11="+z+",M12="+P+",M21="+A+",M22="+L+",FilterType='bilinear',Dx=0,Dy=0,sizingMethod='auto expand')",B=parseInt(m(r,"dojo-transform-matrix-tx")||"0"),G=parseInt(m(r,"dojo-transform-matrix-ty")||"0");var he=m(r,"dojo-transform-origin").split(" ");for(W=0;2>W;W++)he[W]=he[W]||"50%";return S=-1!=he[0].toString().indexOf("%")?Q*parseInt(he[0])*.01:he[0],E=-1!=he[1].toString().indexOf("%")?q*parseInt(he[1])*.01:he[1],c(r,"dojo-startX")?I=parseInt(m(r,"dojo-startX")):(I=parseInt(R(r,"left")),m(r,"dojo-startX","absolute"==O?I:"0")),c(r,"dojo-startY")?j=parseInt(m(r,"dojo-startY")):(j=parseInt(R(r,"top")),m(r,"dojo-startY","absolute"==O?j:"0")),R(r,{position:O,left:I-parseInt(F)+parseInt(S)-((parseInt(S)-B)*z+(parseInt(E)-G)*P)+"px",top:j-parseInt(C)+parseInt(E)-((parseInt(S)-B)*A+(parseInt(E)-G)*L)+"px"}),t},_getTransformFilter:function(e){try{var t=n.byId(e),i=t.filters.item(0);return"matrix("+i.M11+", "+i.M12+", "+i.M21+", "+i.M22+", "+(a.attr(e,"dojo-transform-tx")||"0")+", "+(a.attr(e,"dojo-transform-ty")||"0")+")"}catch(o){return"matrix(1, 0, 0, 1, 0, 0)"}},setTransform:function(){this._notSupported()},setTransformOrigin:function(){this._notSupported()}}),h["ext-dojo"].style.init(),a.style});//# sourceMappingURL=style.js.map