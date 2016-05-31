//>>built
define("dojox/json/ref",["dojo/_base/array","dojo/_base/json","dojo/_base/kernel","dojo/_base/lang","dojo/date/stamp","dojox"],function(array,djson,dojo,lang,stamp,dojox){return lang.getObject("json",!0,dojox),dojox.json.ref={resolveJson:function(e,t){function i(p,g,y,v,b,_,w){var x,j,M,k=o in p?p[o]:y;(o in p||void 0!==k&&v)&&(k=(s+k).replace(u,"$2$3"));var C=_||p;if(void 0!==k){if(d&&(p.__id=k),!t.schemas||p instanceof Array||!(M=k.match(/^(.+\/)[^\.\[]*$/))||(b=t.schemas[M[1]]),l[k]&&p instanceof Array==l[k]instanceof Array)C=l[k],delete C.$ref,delete C._loadObject,j=!0;else{var T=b&&b.prototype;T&&(f.prototype=T,C=new f)}l[k]=C,h&&(h[k]=t.time)}for(;b;){var I=b.properties;if(I)for(x in p){var S=I[x];S&&"date-time"==S.format&&"string"==typeof p[x]&&(p[x]=stamp.fromISOString(p[x]))}b=b["extends"]}var F=p.length;for(x in p){if(x==F)break;if(p.hasOwnProperty(x)){if(M=p[x],"object"==typeof M&&M&&!(M instanceof Date)&&"__parent"!=x)if(a=M[r]||n&&M[o],p==c||a&&M.__parent||(M.__parent=w?w:C),a){delete p[x];var A=a.toString().replace(/(#)([^\.\[])/,"$1.$2").match(/(^([^\[]*\/)?[^#\.\[]*)#?([\.\[].*)?/);if(l[(s+a).replace(u,"$2$3")]?a=l[(s+a).replace(u,"$2$3")]:(a="$"==A[1]||"this"==A[1]||""==A[1]?e:l[(s+A[1]).replace(u,"$2$3")])&&A[3]&&A[3].replace(/(\[([^\]]+)\])|(\.?([^\.\[]+))/g,function(e,t,i,o,r){a=a&&a[i?i.replace(/[\"\'\\]/,""):r]}),a)M=a;else if(!g){var E;E||c.push(C),E=!0,M=i(M,!1,M[r],!0,S),M._loadObject=t.loader}}else g||(M=i(M,c==p,void 0===k?void 0:m(k,x),!1,S,C!=p&&"object"==typeof C[x]&&C[x],p));if(p[x]=M,C!=p&&!C.__isDirty){var N=C[x];C[x]=M,!j||M===N||C._loadObject||"_"==x.charAt(0)&&"_"==x.charAt(1)||"$ref"==x||M instanceof Date&&N instanceof Date&&M.getTime()==N.getTime()||"function"==typeof M&&"function"==typeof N&&M.toString()==N.toString()||!l.onUpdate||l.onUpdate(C,x,N,M)}}}if(j&&(o in p||C instanceof Array)){for(x in C)if(!C.__isDirty&&C.hasOwnProperty(x)&&!p.hasOwnProperty(x)&&("_"!=x.charAt(0)||"_"!=x.charAt(1))&&!(C instanceof Array&&isNaN(x)))for(l.onUpdate&&"_loadObject"!=x&&"_idAttr"!=x&&l.onUpdate(C,x,C[x],void 0),delete C[x];C instanceof Array&&C.length&&void 0===C[C.length-1];)C.length--}else l.onLoad&&l.onLoad(C);return C}t=t||{};var a,o=t.idAttribute||"id",r=this.refAttribute,n=t.idAsRef,s=t.idPrefix||"",d=t.assignAbsoluteIds,l=t.index||{},h=t.timeStamps,c=[],u=/^(.*\/)?(\w+:\/\/)|[^\/\.]+\/\.\.\/|^.*\/(\/)/,m=this._addProp,f=function(){};return e&&"object"==typeof e&&(e=i(e,!1,t.defaultId,!0),i(c,!1)),e},fromJson:function(str,args){function ref(e){var t={};return t[this.refAttribute]=e,t}try{var root=eval("("+str+")")}catch(e){throw new SyntaxError("Invalid JSON string: "+e.message+" parsing: "+str)}return root?this.resolveJson(root,args):root},toJson:function(e,t,i,a){function o(e,a,h){if("object"==typeof e&&e){if(e instanceof Date)return'"'+stamp.toISOString(e,{zulu:!0})+'"';var c=e.__id;if(c){if("#"!=a&&(r&&!c.match(/#/)||d[c])){var u=c;"#"!=c.charAt(0)&&(u=e.__clientId==c?"cid:"+c:c.substring(0,i.length)==i?c.substring(i.length):c);var m={};return m[s]=u,djson.toJson(m,t)}a=c}else e.__id=a,l[a]=e;d[a]=e,h=h||"";var f=t?h+djson.toJsonIndentStr:"",p=t?"\n":"",g=t?" ":"";if(e instanceof Array){var y=array.map(e,function(e,t){var i=o(e,n(a,t),f);return"string"!=typeof i&&(i="undefined"),p+f+i});return"["+y.join(","+g)+p+h+"]"}var v=[];for(var b in e)if(e.hasOwnProperty(b)){var _;if("number"==typeof b)_='"'+b+'"';else{if("string"!=typeof b||"_"==b.charAt(0)&&"_"==b.charAt(1))continue;_=djson._escapeString(b)}var w=o(e[b],n(a,b),f);if("string"!=typeof w)continue;v.push(p+f+_+":"+g+w)}return"{"+v.join(","+g)+p+h+"}"}return"function"==typeof e&&dojox.json.ref.serializeFunctions?e.toString():djson.toJson(e)}var r=this._useRefs,n=this._addProp,s=this.refAttribute;i=i||"";var d={},l={},h=o(e,"#","");if(!a)for(var c in l)delete l[c].__id;return h},_addProp:function(e,t){return e+(e.match(/#/)?1==e.length?"":".":"#")+t},refAttribute:"$ref",_useRefs:!1,serializeFunctions:!1}});//# sourceMappingURL=ref.js.map