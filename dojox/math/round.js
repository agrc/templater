//>>built
define("dojox/math/round",["dojo","dojox"],function(e,t){if(e.getObject("math.round",!0,t),e.experimental("dojox.math.round"),t.math.round=function(e,t,a){var i=Math.log(Math.abs(e))/Math.log(10),r=10/(a||10),n=Math.pow(10,-15+i);return(r*(+e+(e>0?n:-n))).toFixed(t)/r},0==.9.toFixed()){var a=t.math.round;t.math.round=function(e,t,i){var r=Math.pow(10,-t||0),n=Math.abs(e);return!e||n>=r?r=0:(n/=r,(.5>n||n>=.95)&&(r=0)),a(e,t,i)+(e>0?r:-r)}}return t.math.round});//# sourceMappingURL=round.js.map