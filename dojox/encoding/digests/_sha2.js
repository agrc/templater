//>>built
define("dojox/encoding/digests/_sha2",[],function(){return function(e,t,i,a){function r(i,r){r=r||e.outputTypes.Base64;var o=e.digest(e.toWord(i),8*i.length,a,t);switch(r){case e.outputTypes.Raw:return o;case e.outputTypes.Hex:return e.toHex(o);case e.outputTypes.String:return e._toString(o);default:return e.toBase64(o)}}return r.hmac=function(r,o,n){n=n||e.outputTypes.Base64;var s=e.toWord(o);s.length>16&&(s=e.digest(s,8*o.length,a,t));for(var l=i/32,d=new Array(l),h=new Array(l),u=0;l>u;u++)d[u]=909522486^s[u],h[u]=1549556828^s[u];var c=e.digest(d.concat(e.toWord(r)),i+8*r.length,a,t),m=e.digest(h.concat(c),i+t,a,t);switch(n){case e.outputTypes.Raw:return m;case e.outputTypes.Hex:return e.toHex(m);case e.outputTypes.String:return e._toString(m);default:return e.toBase64(m)}},r._hmac=r.hmac,r}});//# sourceMappingURL=_sha2.js.map