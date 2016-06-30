//>>built
define("dojox/math/stats",["dojo","../main"],function(e,t){e.getObject("math.stats",!0,t);var i=t.math.stats;return e.mixin(i,{sd:function(e){return Math.sqrt(i.variance(e))},variance:function(t){var i=0,a=0;return e.forEach(t,function(e){i+=e,a+=Math.pow(e,2)}),a/t.length-Math.pow(i/t.length,2)},bestFit:function(t,i,a){i=i||"x",a=a||"y",void 0!==t[0]&&"number"==typeof t[0]&&(t=e.map(t,function(e,t){return{x:t,y:e}}));for(var r,n=0,o=0,s=0,l=0,d=0,u=0,c=0,h=t.length,m=0;h>m;m++)n+=t[m][i],o+=t[m][a],s+=Math.pow(t[m][i],2),l+=Math.pow(t[m][a],2),d+=t[m][i]*t[m][a];for(m=0;h>m;m++)r=t[m][i]-n/h,u+=r*r,c+=r*t[m][a];var f=c/(u||1),p=Math.sqrt((s-Math.pow(n,2)/h)*(l-Math.pow(o,2)/h));if(0===p)throw new Error("dojox.math.stats.bestFit: the denominator for Pearson's R is 0.");var g=(d-n*o/h)/p,y=Math.pow(g,2);return 0>f&&(g=-g),{slope:f,intercept:(o-n*f)/(h||1),r:g,r2:y}},forecast:function(e,t,a,r){var n=i.bestFit(e,a,r);return n.slope*t+n.intercept},mean:function(t){var i=0;return e.forEach(t,function(e){i+=e}),i/Math.max(t.length,1)},min:function(e){return Math.min.apply(null,e)},max:function(e){return Math.max.apply(null,e)},median:function(e){var t=e.slice(0).sort(function(e,t){return e-t});return(t[Math.floor(e.length/2)]+t[Math.ceil(e.length/2)])/2},mode:function(t){var i={},a=0,r=Number.MIN_VALUE;e.forEach(t,function(e){void 0!==i[e]?i[e]++:i[e]=1});for(var n in i)r<i[n]&&(r=i[n],a=n);return a},sum:function(t){var i=0;return e.forEach(t,function(e){i+=e}),i},approxLin:function(e,t){var i=t*(e.length-1),a=Math.ceil(i),r=a-1;return 0>r?e[0]:a>=e.length?e[e.length-1]:e[r]*(a-i)+e[a]*(i-r)},summary:function(e,t){t||(e=e.slice(0),e.sort(function(e,t){return e-t}));var a=i.approxLin,r={min:e[0],p25:a(e,.25),med:a(e,.5),p75:a(e,.75),max:e[e.length-1],p10:a(e,.1),p90:a(e,.9)};return r}}),t.math.stats});//# sourceMappingURL=stats.js.map