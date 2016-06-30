//>>built
define("dojox/json/ref",["dojo/_base/array","dojo/_base/json","dojo/_base/kernel","dojo/_base/lang","dojo/date/stamp","dojox"],function(array,djson,dojo,lang,stamp,dojox){return lang.getObject("json",!0,dojox),dojox.json.ref={resolveJson:function(e,t){function a(p,g,y,v,b,M,w){var j,k,x,_=r in p?p[r]:y;(r in p||void 0!==_&&v)&&(_=(s+_).replace(u,"$2$3"));var T=M||p;if(void 0!==_){if(l&&(p.__id=_),!t.schemas||p instanceof Array||!(x=_.match(/^(.+\/)[^\.\[]*$/))||(b=t.schemas[x[1]]),d[_]&&p instanceof Array==d[_]instanceof Array)T=d[_],delete T.$ref,delete T._loadObject,k=!0;else{var C=b&&b.prototype;C&&(f.prototype=C,T=new f)}d[_]=T,c&&(c[_]=t.time)}for(;b;){var I=b.properties;if(I)for(j in p){var F=I[j];F&&"date-time"==F.format&&"string"==typeof p[j]&&(p[j]=stamp.fromISOString(p[j]))}b=b["extends"]}var E=p.length;for(j in p){if(j==E)break;if(p.hasOwnProperty(j)){if(x=p[j],"object"==typeof x&&x&&!(x instanceof Date)&&"__parent"!=j)if(i=x[o]||n&&x[r],p==h||i&&x.__parent||(x.__parent=w?w:T),i){delete p[j];var S=i.toString().replace(/(#)([^\.\[])/,"$1.$2").match(/(^([^\[]*\/)?[^#\.\[]*)#?([\.\[].*)?/);if(d[(s+i).replace(u,"$2$3")]?i=d[(s+i).replace(u,"$2$3")]:(i="$"==S[1]||"this"==S[1]||""==S[1]?e:d[(s+S[1]).replace(u,"$2$3")])&&S[3]&&S[3].replace(/(\[([^\]]+)\])|(\.?([^\.\[]+))/g,function(e,t,a,r,o){i=i&&i[a?a.replace(/[\"\'\\]/,""):o]}),i)x=i;else if(!g){var A;A||h.push(T),A=!0,x=a(x,!1,x[o],!0,F),x._loadObject=t.loader}}else g||(x=a(x,h==p,void 0===_?void 0:m(_,j),!1,F,T!=p&&"object"==typeof T[j]&&T[j],p));if(p[j]=x,T!=p&&!T.__isDirty){var N=T[j];T[j]=x,!k||x===N||T._loadObject||"_"==j.charAt(0)&&"_"==j.charAt(1)||"$ref"==j||x instanceof Date&&N instanceof Date&&x.getTime()==N.getTime()||"function"==typeof x&&"function"==typeof N&&x.toString()==N.toString()||!d.onUpdate||d.onUpdate(T,j,N,x)}}}if(k&&(r in p||T instanceof Array)){for(j in T)if(!T.__isDirty&&T.hasOwnProperty(j)&&!p.hasOwnProperty(j)&&("_"!=j.charAt(0)||"_"!=j.charAt(1))&&!(T instanceof Array&&isNaN(j)))for(d.onUpdate&&"_loadObject"!=j&&"_idAttr"!=j&&d.onUpdate(T,j,T[j],void 0),delete T[j];T instanceof Array&&T.length&&void 0===T[T.length-1];)T.length--}else d.onLoad&&d.onLoad(T);return T}t=t||{};var i,r=t.idAttribute||"id",o=this.refAttribute,n=t.idAsRef,s=t.idPrefix||"",l=t.assignAbsoluteIds,d=t.index||{},c=t.timeStamps,h=[],u=/^(.*\/)?(\w+:\/\/)|[^\/\.]+\/\.\.\/|^.*\/(\/)/,m=this._addProp,f=function(){};return e&&"object"==typeof e&&(e=a(e,!1,t.defaultId,!0),a(h,!1)),e},fromJson:function(str,args){function ref(e){var t={};return t[this.refAttribute]=e,t}try{var root=eval("("+str+")")}catch(e){throw new SyntaxError("Invalid JSON string: "+e.message+" parsing: "+str)}return root?this.resolveJson(root,args):root},toJson:function(e,t,a,i){function r(e,i,c){if("object"==typeof e&&e){if(e instanceof Date)return'"'+stamp.toISOString(e,{zulu:!0})+'"';var h=e.__id;if(h){if("#"!=i&&(o&&!h.match(/#/)||l[h])){var u=h;"#"!=h.charAt(0)&&(u=e.__clientId==h?"cid:"+h:h.substring(0,a.length)==a?h.substring(a.length):h);var m={};return m[s]=u,djson.toJson(m,t)}i=h}else e.__id=i,d[i]=e;l[i]=e,c=c||"";var f=t?c+djson.toJsonIndentStr:"",p=t?"\n":"",g=t?" ":"";if(e instanceof Array){var y=array.map(e,function(e,t){var a=r(e,n(i,t),f);return"string"!=typeof a&&(a="undefined"),p+f+a});return"["+y.join(","+g)+p+c+"]"}var v=[];for(var b in e)if(e.hasOwnProperty(b)){var M;if("number"==typeof b)M='"'+b+'"';else{if("string"!=typeof b||"_"==b.charAt(0)&&"_"==b.charAt(1))continue;M=djson._escapeString(b)}var w=r(e[b],n(i,b),f);if("string"!=typeof w)continue;v.push(p+f+M+":"+g+w)}return"{"+v.join(","+g)+p+c+"}"}return"function"==typeof e&&dojox.json.ref.serializeFunctions?e.toString():djson.toJson(e)}var o=this._useRefs,n=this._addProp,s=this.refAttribute;a=a||"";var l={},d={},c=r(e,"#","");if(!i)for(var h in d)delete d[h].__id;return c},_addProp:function(e,t){return e+(e.match(/#/)?1==e.length?"":".":"#")+t},refAttribute:"$ref",_useRefs:!1,serializeFunctions:!1}});//# sourceMappingURL=ref.js.map