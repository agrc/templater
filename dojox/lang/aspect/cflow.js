//>>built
define("dojox/lang/aspect/cflow",["dojo","dijit","dojox"],function(e,t,i){e.provide("dojox.lang.aspect.cflow"),function(){var e=i.lang.aspect;e.cflow=function(t,i){arguments.length>1&&!(i instanceof Array)&&(i=[i]);for(var a=e.getContextStack(),n=a.length-1;n>=0;--n){var r=a[n];if(!t||r.instance==t){if(!i)return!0;for(var o=r.joinPoint.targetName,s=i.length-1;s>=0;--s){var l=i[s];if(l instanceof RegExp){if(l.test(o))return!0}else if(o==l)return!0}}}return!1}}()});//# sourceMappingURL=cflow.js.map