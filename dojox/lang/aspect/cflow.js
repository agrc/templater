//>>built
define("dojox/lang/aspect/cflow",["dojo","dijit","dojox"],function(e,t,i){e.provide("dojox.lang.aspect.cflow"),function(){var e=i.lang.aspect;e.cflow=function(t,i){arguments.length>1&&!(i instanceof Array)&&(i=[i]);for(var a=e.getContextStack(),n=a.length-1;n>=0;--n){var o=a[n];if(!t||o.instance==t){if(!i)return!0;for(var r=o.joinPoint.targetName,s=i.length-1;s>=0;--s){var d=i[s];if(d instanceof RegExp){if(d.test(r))return!0}else if(r==d)return!0}}}return!1}}()});//# sourceMappingURL=cflow.js.map