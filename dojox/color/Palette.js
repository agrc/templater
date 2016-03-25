//>>built
define("dojox/color/Palette",["dojo/_base/lang","dojo/_base/array","./_base"],function(e,t,a){function i(e,i,r){var o=new a.Palette;return o.colors=[],t.forEach(e.colors,function(e){var t="dr"==i?e.r+r:e.r,d="dg"==i?e.g+r:e.g,n="db"==i?e.b+r:e.b,l="da"==i?e.a+r:e.a;o.colors.push(new a.Color({r:Math.min(255,Math.max(0,t)),g:Math.min(255,Math.max(0,d)),b:Math.min(255,Math.max(0,n)),a:Math.min(1,Math.max(0,l))}))}),o}function r(e,i,r){var o=new a.Palette;return o.colors=[],t.forEach(e.colors,function(e){var t=e.toCmy(),d="dc"==i?t.c+r:t.c,n="dm"==i?t.m+r:t.m,l="dy"==i?t.y+r:t.y;o.colors.push(a.fromCmy(Math.min(100,Math.max(0,d)),Math.min(100,Math.max(0,n)),Math.min(100,Math.max(0,l))))}),o}function o(e,i,r){var o=new a.Palette;return o.colors=[],t.forEach(e.colors,function(e){var t=e.toCmyk(),d="dc"==i?t.c+r:t.c,n="dm"==i?t.m+r:t.m,l="dy"==i?t.y+r:t.y,s="dk"==i?t.b+r:t.b;o.colors.push(a.fromCmyk(Math.min(100,Math.max(0,d)),Math.min(100,Math.max(0,n)),Math.min(100,Math.max(0,l)),Math.min(100,Math.max(0,s))))}),o}function d(e,i,r){var o=new a.Palette;return o.colors=[],t.forEach(e.colors,function(e){var t=e.toHsl(),d="dh"==i?t.h+r:t.h,n="ds"==i?t.s+r:t.s,l="dl"==i?t.l+r:t.l;o.colors.push(a.fromHsl(d%360,Math.min(100,Math.max(0,n)),Math.min(100,Math.max(0,l))))}),o}function n(e,i,r){var o=new a.Palette;return o.colors=[],t.forEach(e.colors,function(e){var t=e.toHsv(),d="dh"==i?t.h+r:t.h,n="ds"==i?t.s+r:t.s,l="dv"==i?t.v+r:t.v;o.colors.push(a.fromHsv(d%360,Math.min(100,Math.max(0,n)),Math.min(100,Math.max(0,l))))}),o}function l(e,t,a){return a-(a-e)*((a-t)/a)}return a.Palette=function(i){this.colors=[],i instanceof a.Palette?this.colors=i.colors.slice(0):i instanceof a.Color?this.colors=[null,null,i,null,null]:e.isArray(i)?this.colors=t.map(i.slice(0),function(t){return e.isString(t)?new a.Color(t):t}):e.isString(i)&&(this.colors=[null,null,new a.Color(i),null,null])},e.extend(a.Palette,{transform:function(e){var t=i;if(e.use){var a=e.use.toLowerCase();0==a.indexOf("hs")?t="l"==a.charAt(2)?d:n:0==a.indexOf("cmy")&&(t="k"==a.charAt(3)?o:r)}else"dc"in e||"dm"in e||"dy"in e?t="dk"in e?o:r:("dh"in e||"ds"in e)&&(t="dv"in e?n:d);var l=this;for(var s in e)"use"!=s&&(l=t(l,s,e[s]));return l},clone:function(){return new a.Palette(this)}}),e.mixin(a.Palette,{generators:{analogous:function(i){var r=i.high||60,o=i.low||18,d=e.isString(i.base)?new a.Color(i.base):i.base,n=d.toHsv(),l=[(n.h+o+360)%360,(n.h+Math.round(o/2)+360)%360,n.h,(n.h-Math.round(r/2)+360)%360,(n.h-r+360)%360],s=Math.max(10,n.s<=95?n.s+5:100-(n.s-95)),m=n.s>1?n.s-1:21-n.s,u=n.v>=92?n.v-9:Math.max(n.v+9,20),f=n.v<=90?Math.max(n.v+5,20):95+Math.ceil((n.v-90)/2),h=[s,m,n.s,s,s],y=[u,f,n.v,u,f];return new a.Palette(t.map(l,function(e,t){return a.fromHsv(e,h[t],y[t])}))},monochromatic:function(t){var i=e.isString(t.base)?new a.Color(t.base):t.base,r=i.toHsv(),o=r.s-30>9?r.s-30:r.s+30,d=r.s,n=l(r.v,20,100),s=r.v-20>20?r.v-20:r.v+60,m=r.v-50>20?r.v-50:r.v+30;return new a.Palette([a.fromHsv(r.h,o,n),a.fromHsv(r.h,d,m),i,a.fromHsv(r.h,o,m),a.fromHsv(r.h,d,s)])},triadic:function(t){var i=e.isString(t.base)?new a.Color(t.base):t.base,r=i.toHsv(),o=(r.h+57+360)%360,d=(r.h-157+360)%360,n=r.s>20?r.s-10:r.s+10,l=r.s>90?r.s-10:r.s+10,s=r.s>95?r.s-5:r.s+5,m=r.v-20>20?r.v-20:r.v+20,u=r.v-30>20?r.v-30:r.v+30,f=r.v-30>70?r.v-30:r.v+30;return new a.Palette([a.fromHsv(o,n,r.v),a.fromHsv(r.h,l,u),i,a.fromHsv(d,l,m),a.fromHsv(d,s,f)])},complementary:function(t){var i=e.isString(t.base)?new a.Color(t.base):t.base,r=i.toHsv(),o=2*r.h+137<360?2*r.h+137:Math.floor(r.h/2)-137,d=Math.max(r.s-10,0),n=l(r.s,10,100),s=Math.min(100,r.s+20),m=Math.min(100,r.v+30),u=r.v>20?r.v-30:r.v+30;return new a.Palette([a.fromHsv(r.h,d,m),a.fromHsv(r.h,n,u),i,a.fromHsv(o,s,u),a.fromHsv(o,r.s,r.v)])},splitComplementary:function(t){var i=e.isString(t.base)?new a.Color(t.base):t.base,r=t.da||30,o=i.toHsv(),d=2*o.h+137<360?2*o.h+137:Math.floor(o.h/2)-137,n=(d-r+360)%360,s=(d+r)%360,m=Math.max(o.s-10,0),u=l(o.s,10,100),f=Math.min(100,o.s+20),h=Math.min(100,o.v+30),y=o.v>20?o.v-30:o.v+30;return new a.Palette([a.fromHsv(n,m,h),a.fromHsv(n,u,y),i,a.fromHsv(s,f,y),a.fromHsv(s,o.s,o.v)])},compound:function(t){var i=e.isString(t.base)?new a.Color(t.base):t.base,r=i.toHsv(),o=2*r.h+18<360?2*r.h+18:Math.floor(r.h/2)-18,d=2*r.h+120<360?2*r.h+120:Math.floor(r.h/2)-120,n=2*r.h+99<360?2*r.h+99:Math.floor(r.h/2)-99,l=r.s-40>10?r.s-40:r.s+40,s=r.s-10>80?r.s-10:r.s+10,m=r.s-25>10?r.s-25:r.s+25,u=r.v-40>10?r.v-40:r.v+40,f=r.v-20>80?r.v-20:r.v+20,h=Math.max(r.v,20);return new a.Palette([a.fromHsv(o,l,u),a.fromHsv(o,s,f),i,a.fromHsv(d,m,h),a.fromHsv(n,s,f)])},shades:function(t){var i=e.isString(t.base)?new a.Color(t.base):t.base,r=i.toHsv(),o=100==r.s&&0==r.v?0:r.s,d=r.v-50>20?r.v-50:r.v+30,n=r.v-25>=20?r.v-25:r.v+55,l=r.v-75>=20?r.v-75:r.v+5,s=Math.max(r.v-10,20);return new a.Palette([new a.fromHsv(r.h,o,d),new a.fromHsv(r.h,o,n),i,new a.fromHsv(r.h,o,l),new a.fromHsv(r.h,o,s)])}},generate:function(t,i){if(e.isFunction(i))return i({base:t});if(a.Palette.generators[i])return a.Palette.generators[i]({base:t});throw new Error("dojox.color.Palette.generate: the specified generator ('"+i+"') does not exist.")}}),a.Palette});//# sourceMappingURL=Palette.js.map