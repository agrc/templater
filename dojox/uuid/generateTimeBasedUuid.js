//>>built
define("dojox/uuid/generateTimeBasedUuid",["dojo/_base/lang","./_base"],function(e){return dojox.uuid.generateTimeBasedUuid=function(e){var t=dojox.uuid.generateTimeBasedUuid._generator.generateUuidString(e);return t},dojox.uuid.generateTimeBasedUuid.isValidNode=function(t){var i=16,a=parseInt(t,i),o=e.isString(t)&&12==t.length&&isFinite(a);return o},dojox.uuid.generateTimeBasedUuid.setNode=function(e){dojox.uuid.assert(null===e||this.isValidNode(e)),this._uniformNode=e},dojox.uuid.generateTimeBasedUuid.getNode=function(){return this._uniformNode},dojox.uuid.generateTimeBasedUuid._generator=new function(){function t(e){e[2]+=e[3]>>>16,e[3]&=65535,e[1]+=e[2]>>>16,e[2]&=65535,e[0]+=e[1]>>>16,e[1]&=65535,dojox.uuid.assert(e[0]>>>16===0)}function i(e){var t=new Array(0,0,0,0);return t[3]=e%65536,e-=t[3],e/=65536,t[2]=e%65536,e-=t[2],e/=65536,t[1]=e%65536,e-=t[1],e/=65536,t[0]=e,t}function a(i,a){dojox.uuid.assert(e.isArray(i)),dojox.uuid.assert(e.isArray(a)),dojox.uuid.assert(4==i.length),dojox.uuid.assert(4==a.length);var o=new Array(0,0,0,0);return o[3]=i[3]+a[3],o[2]=i[2]+a[2],o[1]=i[1]+a[1],o[0]=i[0]+a[0],t(o),o}function o(i,a){dojox.uuid.assert(e.isArray(i)),dojox.uuid.assert(e.isArray(a)),dojox.uuid.assert(4==i.length),dojox.uuid.assert(4==a.length);var o=!1;i[0]*a[0]!==0&&(o=!0),i[0]*a[1]!==0&&(o=!0),i[0]*a[2]!==0&&(o=!0),i[1]*a[0]!==0&&(o=!0),i[1]*a[1]!==0&&(o=!0),i[2]*a[0]!==0&&(o=!0),dojox.uuid.assert(!o);var r=new Array(0,0,0,0);return r[0]+=i[0]*a[3],t(r),r[0]+=i[1]*a[2],t(r),r[0]+=i[2]*a[1],t(r),r[0]+=i[3]*a[0],t(r),r[1]+=i[1]*a[3],t(r),r[1]+=i[2]*a[2],t(r),r[1]+=i[3]*a[1],t(r),r[2]+=i[2]*a[3],t(r),r[2]+=i[3]*a[2],t(r),r[3]+=i[3]*a[3],t(r),r}function r(e,t){for(;e.length<t;)e="0"+e;return e}function n(){for(var e=Math.floor(Math.random()%1*Math.pow(2,32)),t=e.toString(m);t.length<8;)t="0"+t;return t}this.GREGORIAN_CHANGE_OFFSET_IN_HOURS=3394248;var s=null,l=null,d=null,h=0,u=null,c=null,m=16;this.generateUuidString=function(e){if(e)dojox.uuid.assert(dojox.uuid.generateTimeBasedUuid.isValidNode(e));else if(dojox.uuid.generateTimeBasedUuid._uniformNode)e=dojox.uuid.generateTimeBasedUuid._uniformNode;else{if(!s){var f=32768,p=Math.floor(Math.random()%1*Math.pow(2,15)),g=(f|p).toString(m);s=g+n()}e=s}if(!l){var y=32768,v=Math.floor(Math.random()%1*Math.pow(2,14));l=(y|v).toString(m)}var b=new Date,_=b.valueOf(),x=i(_);if(!u){var w=i(3600),M=i(dojox.uuid.generateTimeBasedUuid._generator.GREGORIAN_CHANGE_OFFSET_IN_HOURS),k=o(M,w),j=i(1e3);u=o(k,j),c=i(1e4)}var T=x,C=a(u,T),S=o(C,c);if(b.valueOf()==d){if(S[3]+=h,t(S),h+=1,1e4==h)for(;b.valueOf()==d;)b=new Date}else d=b.valueOf(),h=1;var I=S[2].toString(m),E=S[3].toString(m),F=r(I,4)+r(E,4),N=S[1].toString(m);N=r(N,4);var A=S[0].toString(m);A=r(A,3);var P="-",D="1",L=F+P+N+P+D+A+P+l+P+e;return L=L.toLowerCase()}},dojox.uuid.generateTimeBasedUuid});//# sourceMappingURL=generateTimeBasedUuid.js.map