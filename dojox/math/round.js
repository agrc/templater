//>>built
define("dojox/math/round",["dojo","dojox"],function(e,t){if(e.getObject("math.round",!0,t),e.experimental("dojox.math.round"),t.math.round=function(e,t,i){var a=Math.log(Math.abs(e))/Math.log(10),o=10/(i||10),r=Math.pow(10,-15+a);return(o*(+e+(e>0?r:-r))).toFixed(t)/o},0==.9.toFixed()){var i=t.math.round;t.math.round=function(e,t,a){var o=Math.pow(10,-t||0),r=Math.abs(e);return!e||r>=o?o=0:(r/=o,(.5>r||r>=.95)&&(o=0)),i(e,t,a)+(e>0?o:-o)}}return t.math.round});//# sourceMappingURL=round.js.map