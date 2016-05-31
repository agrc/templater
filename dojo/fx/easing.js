//>>built
define("dojo/fx/easing",["../_base/lang"],function(e){var t={linear:function(e){return e},quadIn:function(e){return Math.pow(e,2)},quadOut:function(e){return e*(e-2)*-1},quadInOut:function(e){return e=2*e,1>e?Math.pow(e,2)/2:-1*(--e*(e-2)-1)/2},cubicIn:function(e){return Math.pow(e,3)},cubicOut:function(e){return Math.pow(e-1,3)+1},cubicInOut:function(e){return e=2*e,1>e?Math.pow(e,3)/2:(e-=2,(Math.pow(e,3)+2)/2)},quartIn:function(e){return Math.pow(e,4)},quartOut:function(e){return-1*(Math.pow(e-1,4)-1)},quartInOut:function(e){return e=2*e,1>e?Math.pow(e,4)/2:(e-=2,-0.5*(Math.pow(e,4)-2))},quintIn:function(e){return Math.pow(e,5)},quintOut:function(e){return Math.pow(e-1,5)+1},quintInOut:function(e){return e=2*e,1>e?Math.pow(e,5)/2:(e-=2,(Math.pow(e,5)+2)/2)},sineIn:function(e){return-1*Math.cos(e*(Math.PI/2))+1},sineOut:function(e){return Math.sin(e*(Math.PI/2))},sineInOut:function(e){return-1*(Math.cos(Math.PI*e)-1)/2},expoIn:function(e){return 0==e?0:Math.pow(2,10*(e-1))},expoOut:function(e){return 1==e?1:-1*Math.pow(2,-10*e)+1},expoInOut:function(e){return 0==e?0:1==e?1:(e=2*e,1>e?Math.pow(2,10*(e-1))/2:(--e,(-1*Math.pow(2,-10*e)+2)/2))},circIn:function(e){return-1*(Math.sqrt(1-Math.pow(e,2))-1)},circOut:function(e){return e-=1,Math.sqrt(1-Math.pow(e,2))},circInOut:function(e){return e=2*e,1>e?-0.5*(Math.sqrt(1-Math.pow(e,2))-1):(e-=2,.5*(Math.sqrt(1-Math.pow(e,2))+1))},backIn:function(e){var t=1.70158;return Math.pow(e,2)*((t+1)*e-t)},backOut:function(e){e-=1;var t=1.70158;return Math.pow(e,2)*((t+1)*e+t)+1},backInOut:function(e){var t=2.5949095;return e=2*e,1>e?Math.pow(e,2)*((t+1)*e-t)/2:(e-=2,(Math.pow(e,2)*((t+1)*e+t)+2)/2)},elasticIn:function(e){if(0==e||1==e)return e;var t=.3,a=t/4;return e-=1,-1*Math.pow(2,10*e)*Math.sin((e-a)*(2*Math.PI)/t)},elasticOut:function(e){if(0==e||1==e)return e;var t=.3,a=t/4;return Math.pow(2,-10*e)*Math.sin((e-a)*(2*Math.PI)/t)+1},elasticInOut:function(e){if(0==e)return 0;if(e=2*e,2==e)return 1;var t=.3*1.5,a=t/4;return 1>e?(e-=1,-.5*(Math.pow(2,10*e)*Math.sin((e-a)*(2*Math.PI)/t))):(e-=1,.5*(Math.pow(2,-10*e)*Math.sin((e-a)*(2*Math.PI)/t))+1)},bounceIn:function(e){return 1-t.bounceOut(1-e)},bounceOut:function(e){var t,a=7.5625,i=2.75;return 1/i>e?t=a*Math.pow(e,2):2/i>e?(e-=1.5/i,t=a*Math.pow(e,2)+.75):2.5/i>e?(e-=2.25/i,t=a*Math.pow(e,2)+.9375):(e-=2.625/i,t=a*Math.pow(e,2)+.984375),t},bounceInOut:function(e){return.5>e?t.bounceIn(2*e)/2:t.bounceOut(2*e-1)/2+.5}};return e.setObject("dojo.fx.easing",t),t});//# sourceMappingURL=easing.js.map