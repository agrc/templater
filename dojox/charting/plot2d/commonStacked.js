//>>built
define("dojox/charting/plot2d/commonStacked",["dojo/_base/lang","./common"],function(e,t){var a=e.getObject("dojox.charting.plot2d.commonStacked",!0);return e.mixin(a,{collectStats:function(i){for(var r=e.delegate(t.defaultStats),o=0;o<i.length;++o)for(var d=i[o],n=0;n<d.data.length;n++){var l,s;null!==d.data[n]&&("number"!=typeof d.data[n]&&d.data[n].hasOwnProperty("x")?(l=d.data[n].x,null!==l&&(s=a.getValue(i,o,l)[0],s=null!=s&&s.y?s.y:null)):(s=a.getIndexValue(i,o,n)[0],l=n+1),r.hmin=Math.min(r.hmin,l),r.hmax=Math.max(r.hmax,l),r.vmin=Math.min(r.vmin,s),r.vmax=Math.max(r.vmax,s))}return r},getIndexValue:function(e,t,a){var i,r,o,d=0;for(r=0;t>=r;++r)e[r].hidden||(o=d,i=e[r].data[a],null!=i&&(isNaN(i)&&(i=i.y||0),d+=i));return[d,o]},getValue:function(e,t,a){var i,r,o,d,n=null;for(i=0;t>=i;++i)if(!e[i].hidden)for(r=0;r<e[i].data.length;r++)if(d=n,o=e[i].data[r],null!==o){if(o.x==a){n||(n={x:a}),null!=o.y&&(null==n.y&&(n.y=0),n.y+=o.y);break}if(o.x>a)break}return[n,d]}})});//# sourceMappingURL=commonStacked.js.map