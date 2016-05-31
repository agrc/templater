//>>built
define("dojo/selector/acme",["../dom","../sniff","../_base/array","../_base/lang","../_base/window"],function(e,t,a,i,r){var d=i.trim,o=a.forEach,n=function(){return r.doc},l="BackCompat"==n().compatMode,s=">~+",m=!1,u=function(){return!0},f=function(e){e+=s.indexOf(e.slice(-1))>=0?" * ":" ";for(var t,a,i=function(t,a){return d(e.slice(t,a))},r=[],o=-1,n=-1,l=-1,u=-1,f=-1,h=-1,y=-1,c="",v="",M=0,p=e.length,g=null,b=null,w=function(){if(y>=0){var e=y==M?null:i(y,M);g[s.indexOf(e)<0?"tag":"oper"]=e,y=-1}},F=function(){h>=0&&(g.id=i(h,M).replace(/\\/g,""),h=-1)},I=function(){f>=0&&(g.classes.push(i(f+1,M).replace(/\\/g,"")),f=-1)},k=function(){F(),w(),I()},_=function(){k(),u>=0&&g.pseudos.push({name:i(u+1,M)}),g.loops=g.pseudos.length||g.attrs.length||g.classes.length,g.oquery=g.query=i(a,M),g.otag=g.tag=g.oper?null:g.tag||"*",g.tag&&(g.tag=g.tag.toUpperCase()),r.length&&r[r.length-1].oper&&(g.infixOper=r.pop(),g.query=g.infixOper.query+" "+g.query),r.push(g),g=null};c=v,v=e.charAt(M),p>M;M++)if("\\"!=c)if(g||(a=M,g={query:null,pseudos:[],attrs:[],classes:[],tag:null,oper:null,id:null,getTag:function(){return m?this.otag:this.tag}},y=M),t)v==t&&(t=null);else if("'"!=v&&'"'!=v)if(o>=0){if("]"==v){b.attr?b.matchFor=i(l||o+1,M):b.attr=i(o+1,M);var j=b.matchFor;j&&('"'!=j.charAt(0)&&"'"!=j.charAt(0)||(b.matchFor=j.slice(1,-1))),b.matchFor&&(b.matchFor=b.matchFor.replace(/\\/g,"")),g.attrs.push(b),b=null,o=l=-1}else if("="==v){var E="|~^$*".indexOf(c)>=0?c:"";b.type=E+v,b.attr=i(o+1,M-E.length),l=M+1}}else n>=0?")"==v&&(u>=0&&(b.value=i(n+1,M)),u=n=-1):"#"==v?(k(),h=M+1):"."==v?(k(),f=M):":"==v?(k(),u=M):"["==v?(k(),o=M,b={}):"("==v?(u>=0&&(b={name:i(u+1,M),value:null},g.pseudos.push(b)),n=M):" "==v&&c!=v&&_();else t=v;return r},h=function(e,t){return e?t?function(){return e.apply(window,arguments)&&t.apply(window,arguments)}:e:t},y=function(e,t){var a=t||[];return e&&a.push(e),a},c=function(e){return 1==e.nodeType},v="",M=function(e,t){return e?"class"==t?e.className||v:"for"==t?e.htmlFor||v:"style"==t?e.style.cssText||v:(m?e.getAttribute(t):e.getAttribute(t,2))||v:v},p={"*=":function(e,t){return function(a){return M(a,e).indexOf(t)>=0}},"^=":function(e,t){return function(a){return 0==M(a,e).indexOf(t)}},"$=":function(e,t){return function(a){var i=" "+M(a,e),r=i.lastIndexOf(t);return r>-1&&r==i.length-t.length}},"~=":function(e,t){var a=" "+t+" ";return function(t){var i=" "+M(t,e)+" ";return i.indexOf(a)>=0}},"|=":function(e,t){var a=t+"-";return function(i){var r=M(i,e);return r==t||0==r.indexOf(a)}},"=":function(e,t){return function(a){return M(a,e)==t}}},g=n().documentElement,b=!(g.nextElementSibling||"nextElementSibling"in g),w=b?"nextSibling":"nextElementSibling",F=b?"previousSibling":"previousElementSibling",I=b?c:u,k=function(e){for(;e=e[F];)if(I(e))return!1;return!0},_=function(e){for(;e=e[w];)if(I(e))return!1;return!0},j=function(e){var a=e.parentNode;a=7!=a.nodeType?a:a.nextSibling;var i=0,r=a.children||a.childNodes,d=e._i||e.getAttribute("_i")||-1,o=a._l||("undefined"!=typeof a.getAttribute?a.getAttribute("_l"):-1);if(!r)return-1;var n=r.length;if(o==n&&d>=0&&o>=0)return d;t("ie")&&"undefined"!=typeof a.setAttribute?a.setAttribute("_l",n):a._l=n,d=-1;for(var l=a.firstElementChild||a.firstChild;l;l=l[w])I(l)&&(t("ie")?l.setAttribute("_i",++i):l._i=++i,e===l&&(d=i));return d},E=function(e){return!(j(e)%2)},A=function(e){return j(e)%2},G={checked:function(e,t){return function(e){return!!("checked"in e?e.checked:e.selected)}},disabled:function(e,t){return function(e){return e.disabled}},enabled:function(e,t){return function(e){return!e.disabled}},"first-child":function(){return k},"last-child":function(){return _},"only-child":function(e,t){return function(e){return k(e)&&_(e)}},empty:function(e,t){return function(e){for(var t=e.childNodes,a=e.childNodes.length,i=a-1;i>=0;i--){var r=t[i].nodeType;if(1===r||3==r)return!1}return!0}},contains:function(e,t){var a=t.charAt(0);return'"'!=a&&"'"!=a||(t=t.slice(1,-1)),function(e){return e.innerHTML.indexOf(t)>=0}},not:function(e,t){var a=f(t)[0],i={el:1};"*"!=a.tag&&(i.tag=1),a.classes.length||(i.classes=1);var r=S(a,i);return function(e){return!r(e)}},"nth-child":function(e,t){var a=parseInt;if("odd"==t)return A;if("even"==t)return E;if(-1!=t.indexOf("n")){var i=t.split("n",2),r=i[0]?"-"==i[0]?-1:a(i[0]):1,d=i[1]?a(i[1]):0,o=0,n=-1;if(r>0?0>d?d=d%r&&r+d%r:d>0&&(d>=r&&(o=d-d%r),d%=r):0>r&&(r*=-1,d>0&&(n=d,d%=r)),r>0)return function(e){var t=j(e);return t>=o&&(0>n||n>=t)&&t%r==d};t=d}var l=a(t);return function(e){return j(e)==l}}},T=t("ie")<9||9==t("ie")&&t("quirks")?function(e){var t=e.toLowerCase();return"class"==t&&(e="className"),function(a){return m?a.getAttribute(e):a[e]||a[t]}}:function(e){return function(t){return t&&t.getAttribute&&t.hasAttribute(e)}},S=function(e,t){if(!e)return u;t=t||{};var a=null;return"el"in t||(a=h(a,c)),"tag"in t||"*"!=e.tag&&(a=h(a,function(t){return t&&(m?t.tagName:t.tagName.toUpperCase())==e.getTag()})),"classes"in t||o(e.classes,function(e,t,i){var r=new RegExp("(?:^|\\s)"+e+"(?:\\s|$)");a=h(a,function(e){return r.test(e.className)}),a.count=t}),"pseudos"in t||o(e.pseudos,function(e){var t=e.name;G[t]&&(a=h(a,G[t](t,e.value)))}),"attrs"in t||o(e.attrs,function(e){var t,i=e.attr;e.type&&p[e.type]?t=p[e.type](i,e.matchFor):i.length&&(t=T(i)),t&&(a=h(a,t))}),"id"in t||e.id&&(a=h(a,function(t){return!!t&&t.id==e.id})),a||"default"in t||(a=u),a},z=function(e){return function(t,a,i){for(;t=t[w];)if(!b||c(t)){i&&!Z(t,i)||!e(t)||a.push(t);break}return a}},D=function(e){return function(t,a,i){for(var r=t[w];r;){if(I(r)){if(i&&!Z(r,i))break;e(r)&&a.push(r)}r=r[w]}return a}},C=function(e){return e=e||u,function(t,a,i){for(var r,d=0,o=t.children||t.childNodes;r=o[d++];)I(r)&&(!i||Z(r,i))&&e(r,d)&&a.push(r);return a}},x=function(e,t){for(var a=e.parentNode;a&&a!=t;)a=a.parentNode;return!!a},N={},H=function(t){var a=N[t.query];if(a)return a;var i=t.infixOper,r=i?i.oper:"",d=S(t,{el:1}),o=t.tag,s="*"==o,m=n().getElementsByClassName;if(r){var f={el:1};s&&(f.tag=1),d=S(t,f),"+"==r?a=z(d):"~"==r?a=D(d):">"==r&&(a=C(d))}else if(t.id)d=!t.loops&&s?u:S(t,{el:1,id:1}),a=function(a,i){var r=e.byId(t.id,a.ownerDocument||a);if(r&&d(r))return 9==a.nodeType?y(r,i):x(r,a)?y(r,i):void 0};else if(m&&/\{\s*\[native code\]\s*\}/.test(String(m))&&t.classes.length&&!l){d=S(t,{el:1,classes:1,id:1});var h=t.classes.join(" ");a=function(e,t,a){for(var i,r=y(0,t),o=0,n=e.getElementsByClassName(h);i=n[o++];)d(i,e)&&Z(i,a)&&r.push(i);return r}}else s||t.loops?(d=S(t,{el:1,tag:1,id:1}),a=function(e,a,i){for(var r,o=y(0,a),n=0,l=t.getTag(),s=l?e.getElementsByTagName(l):[];r=s[n++];)d(r,e)&&Z(r,i)&&o.push(r);return o}):a=function(e,a,i){for(var r,d=y(0,a),o=0,n=t.getTag(),l=n?e.getElementsByTagName(n):[];r=l[o++];)Z(r,i)&&d.push(r);return d};return N[t.query]=a},Q=function(e,t){for(var a,i,r,d,o,n=y(e),l=t.length,s=0;l>s;s++){o=[],a=t[s],i=n.length-1,i>0&&(d={},o.nozip=!0);for(var m=H(a),u=0;r=n[u];u++)m(r,o,d);if(!o.length)break;n=o}return o},P={},q={},L=function(e){var t=f(d(e));if(1==t.length){var a=H(t[0]);return function(e){var t=a(e,[]);return t&&(t.nozip=!0),t}}return function(e){return Q(e,t)}},O=t("ie")?"commentStrip":"nozip",R="querySelectorAll",B=!!n()[R],W=/\\[>~+]|n\+\d|([^ \\])?([>~+])([^ =])?/g,K=function(e,t,a,i){return a?(t?t+" ":"")+a+(i?" "+i:""):e},U=/([^[]*)([^\]]*])?/g,V=function(e,t,a){return t.replace(W,K)+(a||"")},$=function(e,a){if(e=e.replace(U,V),B){var i=q[e];if(i&&!a)return i}var r=P[e];if(r)return r;var d=e.charAt(0),o=-1==e.indexOf(" ");e.indexOf("#")>=0&&o&&(a=!0);var n=B&&!a&&-1==s.indexOf(d)&&(!t("ie")||-1==e.indexOf(":"))&&!(l&&e.indexOf(".")>=0)&&-1==e.indexOf(":contains")&&-1==e.indexOf(":checked")&&-1==e.indexOf("|=");if(n){var m=s.indexOf(e.charAt(e.length-1))>=0?e+" *":e;return q[e]=function(t){try{if(9!=t.nodeType&&!o)throw"";var a=t[R](m);return a[O]=!0,a}catch(i){return $(e,!0)(t)}}}var u=e.match(/([^\s,](?:"(?:\\.|[^"])+"|'(?:\\.|[^'])+'|[^,])*)/g);return P[e]=u.length<2?L(e):function(e){for(var t,a=0,i=[];t=u[a++];)i=i.concat(L(t)(e));return i}},J=0,Y=t("ie")?function(e){return m?e.getAttribute("_uid")||e.setAttribute("_uid",++J)||J:e.uniqueID}:function(e){return e._uid||(e._uid=++J)},Z=function(e,t){if(!t)return 1;var a=Y(e);return t[a]?0:t[a]=1},X="_zipIdx",ee=function(e){if(e&&e.nozip)return e;if(!e||!e.length)return[];if(e.length<2)return[e[0]];var a=[];J++;var i,r;if(t("ie")&&m){var d=J+"";for(i=0;i<e.length;i++)(r=e[i])&&r.getAttribute(X)!=d&&(a.push(r),r.setAttribute(X,d))}else if(t("ie")&&e.commentStrip)try{for(i=0;i<e.length;i++)(r=e[i])&&c(r)&&a.push(r)}catch(o){}else for(i=0;i<e.length;i++)(r=e[i])&&r[X]!=J&&(a.push(r),r[X]=J);return a},te=function(e,t){t=t||n();var a=t.ownerDocument||t;m="div"===a.createElement("div").tagName;var i=$(e)(t);return i&&i.nozip?i:ee(i)};return te.filter=function(t,i,r){for(var d,o=[],n=f(i),l=1!=n.length||/[^\w#\.]/.test(i)?function(t){return-1!=a.indexOf(te(i,e.byId(r)),t)}:S(n[0]),s=0;d=t[s];s++)l(d)&&o.push(d);return o},te});//# sourceMappingURL=acme.js.map