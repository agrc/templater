//>>built
define("dojox/charting/scaler/linear",["dojo/_base/lang","./common"],function(e,t){function a(e,t){e=e.toLowerCase();for(var a=t.length-1;a>=0;--a)if(e===t[a])return!0;return!1}var i=e.getObject("dojox.charting.scaler.linear",!0),r=3,o=t.getNumericLabel,n=function(t,r,o,n,d,l,s){o=e.delegate(o),n||("major"==o.fixUpper&&(o.fixUpper="minor"),"major"==o.fixLower&&(o.fixLower="minor")),d||("minor"==o.fixUpper&&(o.fixUpper="micro"),"minor"==o.fixLower&&(o.fixLower="micro")),l||("micro"==o.fixUpper&&(o.fixUpper="none"),"micro"==o.fixLower&&(o.fixLower="none"));var m=a(o.fixLower,["major"])?Math.floor(o.min/n)*n:a(o.fixLower,["minor"])?Math.floor(o.min/d)*d:a(o.fixLower,["micro"])?Math.floor(o.min/l)*l:o.min,u=a(o.fixUpper,["major"])?Math.ceil(o.max/n)*n:a(o.fixUpper,["minor"])?Math.ceil(o.max/d)*d:a(o.fixUpper,["micro"])?Math.ceil(o.max/l)*l:o.max;o.useMin&&(t=m),o.useMax&&(r=u);var c=!n||o.useMin&&a(o.fixLower,["major"])?t:Math.ceil(t/n)*n,h=!d||o.useMin&&a(o.fixLower,["major","minor"])?t:Math.ceil(t/d)*d,f=!l||o.useMin&&a(o.fixLower,["major","minor","micro"])?t:Math.ceil(t/l)*l,y=n?(o.useMax&&a(o.fixUpper,["major"])?Math.round((r-c)/n):Math.floor((r-c)/n))+1:0,p=d?(o.useMax&&a(o.fixUpper,["major","minor"])?Math.round((r-h)/d):Math.floor((r-h)/d))+1:0,v=l?(o.useMax&&a(o.fixUpper,["major","minor","micro"])?Math.round((r-f)/l):Math.floor((r-f)/l))+1:0,M=d?Math.round(n/d):0,g=l?Math.round(d/l):0,b=n?Math.floor(Math.log(n)/Math.LN10):0,w=d?Math.floor(Math.log(d)/Math.LN10):0,k=s/(r-t);return isFinite(k)||(k=1),{bounds:{lower:m,upper:u,from:t,to:r,scale:k,span:s},major:{tick:n,start:c,count:y,prec:b},minor:{tick:d,start:h,count:p,prec:w},micro:{tick:l,start:f,count:v,prec:0},minorPerMajor:M,microPerMinor:g,scaler:i}};return e.mixin(i,{buildScaler:function(e,t,a,i,o,d){var l={fixUpper:"none",fixLower:"none",natural:!1};if(i&&("fixUpper"in i&&(l.fixUpper=String(i.fixUpper)),"fixLower"in i&&(l.fixLower=String(i.fixLower)),"natural"in i&&(l.natural=Boolean(i.natural))),d=!d||r>d?r:d,"min"in i&&(e=i.min),"max"in i&&(t=i.max),i.includeZero&&(e>0&&(e=0),0>t&&(t=0)),l.min=e,l.useMin=!0,l.max=t,l.useMax=!0,"from"in i&&(e=i.from,l.useMin=!1),"to"in i&&(t=i.to,l.useMax=!1),e>=t)return n(e,t,l,0,0,0,a);o||(o=t-e);var s,m=Math.floor(Math.log(o)/Math.LN10),u=i&&"majorTickStep"in i?i.majorTickStep:Math.pow(10,m),c=0,h=0;if(i&&"minorTickStep"in i)c=i.minorTickStep;else do{if(c=u/10,(!l.natural||c>.9)&&(s=n(e,t,l,u,c,0,a),s.bounds.scale*s.minor.tick>d))break;if(c=u/5,(!l.natural||c>.9)&&(s=n(e,t,l,u,c,0,a),s.bounds.scale*s.minor.tick>d))break;if(c=u/2,(!l.natural||c>.9)&&(s=n(e,t,l,u,c,0,a),s.bounds.scale*s.minor.tick>d))break;return n(e,t,l,u,0,0,a)}while(!1);if(i&&"microTickStep"in i)h=i.microTickStep,s=n(e,t,l,u,c,h,a);else do{if(h=c/10,(!l.natural||h>.9)&&(s=n(e,t,l,u,c,h,a),s.bounds.scale*s.micro.tick>r))break;if(h=c/5,(!l.natural||h>.9)&&(s=n(e,t,l,u,c,h,a),s.bounds.scale*s.micro.tick>r))break;if(h=c/2,(!l.natural||h>.9)&&(s=n(e,t,l,u,c,h,a),s.bounds.scale*s.micro.tick>r))break;h=0}while(!1);return h?s:n(e,t,l,u,c,0,a)},buildTicks:function(e,t){var a,i,r,n=e.major.start,d=e.minor.start,l=e.micro.start;if(t.microTicks&&e.micro.tick)a=e.micro.tick,i=l;else if(t.minorTicks&&e.minor.tick)a=e.minor.tick,i=d;else{if(!e.major.tick)return null;a=e.major.tick,i=n}var s=1/e.bounds.scale;if(e.bounds.to<=e.bounds.from||isNaN(s)||!isFinite(s)||0>=a||isNaN(a)||!isFinite(a))return null;for(var m=[],u=[],c=[];i<=e.bounds.to+s;)Math.abs(n-i)<a/2?(r={value:n},t.majorLabels&&(r.label=o(n,e.major.prec,t)),m.push(r),n+=e.major.tick,d+=e.minor.tick,l+=e.micro.tick):Math.abs(d-i)<a/2?(t.minorTicks&&(r={value:d},t.minorLabels&&e.minMinorStep<=e.minor.tick*e.bounds.scale&&(r.label=o(d,e.minor.prec,t)),u.push(r)),d+=e.minor.tick,l+=e.micro.tick):(t.microTicks&&c.push({value:l}),l+=e.micro.tick),i+=a;return{major:m,minor:u,micro:c}},getTransformerFromModel:function(e){var t=e.bounds.from,a=e.bounds.scale;return function(e){return(e-t)*a}},getTransformerFromPlot:function(e){var t=e.bounds.from,a=e.bounds.scale;return function(e){return e/a+t}}})});//# sourceMappingURL=linear.js.map