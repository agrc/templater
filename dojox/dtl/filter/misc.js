//>>built
define("dojox/dtl/filter/misc",["dojo/_base/lang","dojo/_base/json","../_base"],function(e,t,a){var i=e.getObject("filter.misc",!0,a);return e.mixin(i,{filesizeformat:function(e){return e=parseFloat(e),e<1024?1==e?e+" byte":e+" bytes":e<1048576?(e/1024).toFixed(1)+" KB":e<1073741824?(e/1024/1024).toFixed(1)+" MB":(e/1024/1024/1024).toFixed(1)+" GB"},pluralize:function(e,t){t=t||"s",-1==t.indexOf(",")&&(t=","+t);var a=t.split(",");if(a.length>2)return"";var i=a[0],r=a[1];return 1!=parseInt(e,10)?r:i},_phone2numeric:{a:2,b:2,c:2,d:3,e:3,f:3,g:4,h:4,i:4,j:5,k:5,l:5,m:6,n:6,o:6,p:7,r:7,s:7,t:8,u:8,v:8,w:9,x:9,y:9},phone2numeric:function(e){var t=a.filter.misc;e+="";for(var i="",r=0;r<e.length;r++){var o=e.charAt(r).toLowerCase();t._phone2numeric[o]?i+=t._phone2numeric[o]:i+=e.charAt(r)}return i},pprint:function(e){return t.toJson(e)}}),i});//# sourceMappingURL=misc.js.map