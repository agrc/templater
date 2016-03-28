//>>built
define("dojox/charting/Theme",["dojo/_base/lang","dojo/_base/declare","dojo/_base/Color","./SimpleTheme","dojox/color/_base","dojox/color/Palette","dojox/gfx/gradutils"],function(e,t,a,i,r,d){var o=t("dojox.charting.Theme",i,{});return e.mixin(o,{defineColors:function(e){e=e||{};var t,a=[],i=e.num||5;if(e.colors){t=e.colors.length;for(var o=0;i>o;o++)a.push(e.colors[o%t]);return a}if(e.hue){var n=e.saturation||100,l=e.low||30,s=e.high||90;return t=(s+l)/2,d.generate(r.fromHsv(e.hue,n,t),"monochromatic").colors}return e.generator?r.Palette.generate(e.base,e.generator).colors:a},generateGradient:function(t,a,i){var r=e.delegate(t);return r.colors=[{offset:0,color:a},{offset:1,color:i}],r},generateHslColor:function(e,t){e=new a(e);var i=e.toHsl(),d=r.fromHsl(i.h,i.s,t);return d.a=e.a,d},generateHslGradient:function(e,t,i,d){e=new a(e);var n=e.toHsl(),l=r.fromHsl(n.h,n.s,i),s=r.fromHsl(n.h,n.s,d);return l.a=s.a=e.a,o.generateGradient(t,l,s)}}),o.defaultMarkers=i.defaultMarkers,o.defaultColors=i.defaultColors,o.defaultTheme=i.defaultTheme,o});//# sourceMappingURL=Theme.js.map