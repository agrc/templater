//>>built
define("dojox/charting/plot2d/common",["dojo/_base/lang","dojo/_base/array","dojo/_base/Color","dojox/gfx","dojox/lang/functional","../scaler/common"],function(e,t,a,i,r,o){var d=e.getObject("dojox.charting.plot2d.common",!0);return e.mixin(d,{doIfLoaded:o.doIfLoaded,makeStroke:function(e){return e?(("string"==typeof e||e instanceof a)&&(e={color:e}),i.makeParameters(i.defaultStroke,e)):e},augmentColor:function(e,t){var i=new a(e),r=new a(t);return r.a=i.a,r},augmentStroke:function(e,t){var a=d.makeStroke(e);return a&&(a.color=d.augmentColor(a.color,t)),a},augmentFill:function(e,t){new a(t);return"string"==typeof e||e instanceof a?d.augmentColor(e,t):e},defaultStats:{vmin:Number.POSITIVE_INFINITY,vmax:Number.NEGATIVE_INFINITY,hmin:Number.POSITIVE_INFINITY,hmax:Number.NEGATIVE_INFINITY},collectSimpleStats:function(a,i){for(var r=e.delegate(d.defaultStats),o=0;o<a.length;++o)for(var n=a[o],l=0;l<n.data.length;l++)if(!i(n.data[l])){if("number"==typeof n.data[l]){var s=r.vmin,m=r.vmax;t.forEach(n.data,function(e,t){if(!i(e)){var a=t+1,o=e;isNaN(o)&&(o=0),r.hmin=Math.min(r.hmin,a),r.hmax=Math.max(r.hmax,a),r.vmin=Math.min(r.vmin,o),r.vmax=Math.max(r.vmax,o)}}),"ymin"in n&&(r.vmin=Math.min(s,n.ymin)),"ymax"in n&&(r.vmax=Math.max(m,n.ymax))}else{var u=r.hmin,h=r.hmax,s=r.vmin,m=r.vmax;"xmin"in n&&"xmax"in n&&"ymin"in n&&"ymax"in n||t.forEach(n.data,function(e,t){if(!i(e)){var a="x"in e?e.x:t+1,o=e.y;isNaN(a)&&(a=0),isNaN(o)&&(o=0),r.hmin=Math.min(r.hmin,a),r.hmax=Math.max(r.hmax,a),r.vmin=Math.min(r.vmin,o),r.vmax=Math.max(r.vmax,o)}}),"xmin"in n&&(r.hmin=Math.min(u,n.xmin)),"xmax"in n&&(r.hmax=Math.max(h,n.xmax)),"ymin"in n&&(r.vmin=Math.min(s,n.ymin)),"ymax"in n&&(r.vmax=Math.max(m,n.ymax))}break}return r},calculateBarSize:function(e,t,a){a||(a=1);var i=t.gap,r=(e-2*i)/a;return"minBarSize"in t&&(r=Math.max(r,t.minBarSize)),"maxBarSize"in t&&(r=Math.min(r,t.maxBarSize)),r=Math.max(r,1),i=(e-r*a)/2,{size:r,gap:i}},collectStackedStats:function(t){var a=e.clone(d.defaultStats);if(t.length){a.hmin=Math.min(a.hmin,1),a.hmax=r.foldl(t,"seed, run -> Math.max(seed, run.data.length)",a.hmax);for(var i=0;i<a.hmax;++i){var o=t[0].data[i];o=o&&("number"==typeof o?o:o.y),isNaN(o)&&(o=0),a.vmin=Math.min(a.vmin,o);for(var n=1;n<t.length;++n){var l=t[n].data[i];l=l&&("number"==typeof l?l:l.y),isNaN(l)&&(l=0),o+=l}a.vmax=Math.max(a.vmax,o)}}return a},curve:function(e,a){var i=e.slice(0);return"x"==a&&(i[i.length]=i[0]),t.map(i,function(e,t){if(0==t)return"M"+e.x+","+e.y;if(!isNaN(a)){var r=e.x-i[t-1].x,o=i[t-1].y;return"C"+(e.x-r/a*(a-1))+","+o+" "+(e.x-r/a)+","+e.y+" "+e.x+","+e.y}if("X"==a||"x"==a||"S"==a){var d,n,l,s,m,u,h=i[t-1],f=i[t],c=1/6;1==t?(d="x"==a?i[i.length-2]:h,c=1/3):d=i[t-2],t==i.length-1?(n="x"==a?i[1]:f,c=1/3):n=i[t+1];var y=Math.sqrt((f.x-h.x)*(f.x-h.x)+(f.y-h.y)*(f.y-h.y)),v=Math.sqrt((f.x-d.x)*(f.x-d.x)+(f.y-d.y)*(f.y-d.y)),p=Math.sqrt((n.x-h.x)*(n.x-h.x)+(n.y-h.y)*(n.y-h.y)),M=v*c,g=p*c;M>y/2&&g>y/2?(M=y/2,g=y/2):M>y/2?(M=y/2,g=y/2*p/v):g>y/2&&(g=y/2,M=y/2*v/p),"S"==a&&(d==h&&(M=0),f==n&&(g=0)),l=h.x+M*(f.x-d.x)/v,s=h.y+M*(f.y-d.y)/v,m=f.x-g*(n.x-h.x)/p,u=f.y-g*(n.y-h.y)/p}return"C"+l+","+s+" "+m+","+u+" "+f.x+","+f.y}).join(" ")},getLabel:function(e,t,a){return o.doIfLoaded("dojo/number",function(i){return(t?i.format(e,{places:a}):i.format(e))||""},function(){return t?e.toFixed(a):e.toString()})}})});//# sourceMappingURL=common.js.map