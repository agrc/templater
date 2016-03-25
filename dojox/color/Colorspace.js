//>>built
define("dojox/color/Colorspace",["./_base","dojo/_base/lang","dojox/math/matrix"],function(e,t,a){return e.Colorspace=new function(){var t=this,i={2:{E:{x:1/3,y:1/3,t:5400},D50:{x:.34567,y:.3585,t:5e3},D55:{x:.33242,y:.34743,t:5500},D65:{x:.31271,y:.32902,t:6500},D75:{x:.29902,y:.31485,t:7500},A:{x:.44757,y:.40745,t:2856},B:{x:.34842,y:.35161,t:4874},C:{x:.31006,y:.31616,t:6774},9300:{x:.2848,y:.2932,t:9300},F2:{x:.37207,y:.37512,t:4200},F7:{x:.31285,y:.32918,t:6500},F11:{x:.38054,y:.37691,t:4e3}},10:{E:{x:1/3,y:1/3,t:5400},D50:{x:.34773,y:.35952,t:5e3},D55:{x:.33411,y:.34877,t:5500},D65:{x:.31382,y:.331,t:6500},D75:{x:.29968,y:.3174,t:7500},A:{x:.45117,y:.40594,t:2856},B:{x:.3498,y:.3527,t:4874},C:{x:.31039,y:.31905,t:6774},F2:{x:.37928,y:.36723,t:4200},F7:{x:.31565,y:.32951,t:6500},F11:{x:.38543,y:.3711,t:4e3}}},r={"Adobe RGB 98":[2.2,"D65",.64,.33,.297361,.21,.71,.627355,.15,.06,.075285],"Apple RGB":[1.8,"D65",.625,.34,.244634,.28,.595,.672034,.155,.07,.083332],"Best RGB":[2.2,"D50",.7347,.2653,.228457,.215,.775,.737352,.13,.035,.034191],"Beta RGB":[2.2,"D50",.6888,.3112,.303273,.1986,.7551,.663786,.1265,.0352,.032941],"Bruce RGB":[2.2,"D65",.64,.33,.240995,.28,.65,.683554,.15,.06,.075452],"CIE RGB":[2.2,"E",.735,.265,.176204,.274,.717,.812985,.167,.009,.010811],"ColorMatch RGB":[1.8,"D50",.63,.34,.274884,.295,.605,.658132,.15,.075,.066985],"DON RGB 4":[2.2,"D50",.696,.3,.27835,.215,.765,.68797,.13,.035,.03368],"ECI RGB":[1.8,"D50",.67,.33,.32025,.21,.71,.602071,.14,.08,.077679],"EktaSpace PS5":[2.2,"D50",.695,.305,.260629,.26,.7,.734946,.11,.005,.004425],"NTSC RGB":[2.2,"C",.67,.33,.298839,.21,.71,.586811,.14,.08,.11435],"PAL/SECAM RGB":[2.2,"D65",.64,.33,.222021,.29,.6,.706645,.15,.06,.071334],"Pro Photo RGB":[1.8,"D50",.7347,.2653,.28804,.1596,.8404,.711874,.0366,1e-4,86e-6],"SMPTE/C RGB":[2.2,"D65",.63,.34,.212395,.31,.595,.701049,.155,.07,.086556],sRGB:[2.2,"D65",.64,.33,.212656,.3,.6,.715158,.15,.06,.072186],"Wide Gamut RGB":[2.2,"D50",.735,.265,.258187,.115,.826,.724938,.157,.018,.016875]},o={"XYZ scaling":{ma:[[1,0,0],[0,1,0],[0,0,1]],mai:[[1,0,0],[0,1,0],[0,0,1]]},Bradford:{ma:[[.8951,-.7502,.0389],[.2664,1.7135,-.0685],[-.1614,.0367,1.0296]],mai:[[.986993,.432305,-.008529],[-.147054,.51836,.040043],[.159963,.049291,.968487]]},"Von Kries":{ma:[[.40024,-.2263,0],[.7076,1.16532,0],[-.08081,.0457,.91822]],mai:[[1.859936,.361191,0],[-1.129382,.638812,0],[.219897,-6e-6,1.089064]]}},n={XYZ:{xyY:function(e,a){a=dojo.mixin({whitepoint:"D65",observer:"10",useApproximation:!0},a||{});var i=t.whitepoint(a.whitepoint,a.observer),r=e.X+e.Y+e.Z;if(0==r)var o=i.x,n=i.y;else var o=e.X/r,n=e.Y/r;return{x:o,y:n,Y:e.Y}},Lab:function(e,a){a=dojo.mixin({whitepoint:"D65",observer:"10",useApproximation:!0},a||{});var i=t.kappa(a.useApproximation),r=t.epsilon(a.useApproximation),o=t.whitepoint(a.whitepoint,a.observer),n=e.X/o.x,d=e.Y/o.y,l=e.z/o.z,s=n>r?Math.pow(n,1/3):(i*n+16)/116,m=d>r?Math.pow(d,1/3):(i*d+16)/116,u=l>r?Math.pow(l,1/3):(i*l+16)/116,f=116*m-16,c=500*(s-m),h=200*(m-u);return{L:f,a:c,b:h}},Luv:function(e,a){a=dojo.mixin({whitepoint:"D65",observer:"10",useApproximation:!0},a||{});var i=t.kappa(a.useApproximation),r=t.epsilon(a.useApproximation),o=t.whitepoint(a.whitepoint,a.observer),n=4*e.X/(e.X+15*e.Y+3*e.Z),d=9*e.Y/(e.X+15*e.Y+3*e.Z),l=4*o.x/(o.x+15*o.y+3*o.z),s=9*o.y/(o.x+15*o.y+3*o.z),m=e.Y/o.y,u=m>r?116*Math.pow(m,1/3)-16:i*m,f=13*u*(n-l),c=13*u*(d-s);return{L:u,u:f,v:c}}},xyY:{XYZ:function(e){if(0==e.y)var t=0,a=0,i=0;else var t=e.x*e.Y/e.y,a=e.Y,i=(1-e.x-e.y)*e.Y/e.y;return{X:t,Y:a,Z:i}}},Lab:{XYZ:function(e,a){a=dojo.mixin({whitepoint:"D65",observer:"10",useApproximation:!0},a||{});var i=a.useApproximation,r=t.kappa(i),o=t.epsilon(i),n=t.whitepoint(a.whitepoint,a.observer),d=e.L>r*o?Math.pow((e.L+16)/116,3):e.L/r,l=d>o?(e.L+16)/116:(r*d+16)/116,s=e.a/500+l,m=l-e.b/200,u=Math.pow(s,3),f=Math.pow(m,3),c=u>o?u:(116*s-16)/r,h=f>o?f:(116*m-16)/r;return{X:c*n.x,Y:d*n.y,Z:h*n.z}},LCHab:function(e){var t=e.L,a=Math.pow(e.a*e.a+e.b*e.b,.5),i=Math.atan(e.b,e.a)*(180/Math.PI);return 0>i&&(i+=360),360>i&&(i-=360),{L:t,C:a,H:i}}},LCHab:{Lab:function(e){var t=e.H*(Math.PI/180),a=e.L,i=e.C/Math.pow(Math.pow(Math.tan(t),2)+1,.5);90<lchH&&e.H<270&&(i=-i);var r=Math.pow(Math.pow(e.C,2)-Math.pow(i,2),.5);return e.H>180&&(r=-r),{L:a,a:i,b:r}}},Luv:{XYZ:function(e,a){a=dojo.mixin({whitepoint:"D65",observer:"10",useApproximation:!0},a||{});var i=a.useApproximation,r=t.kappa(i),o=t.epsilon(i),n=t.whitepoint(a.whitepoint,a.observer),d=4*n.x/(n.x+15*n.y+3*n.z),l=9*n.y/(n.x+15*n.y+3*n.z),s=e.L>r*o?Math.pow((e.L+16)/116,3):e.L/r,m=1/3*(52*e.L/(e.u+13*e.L*d)-1),i=-5*s,u=-(1/3),f=s*(39*e.L/(e.v+13*e.L*l)-5),c=(f-i)/(m-u),h=c*m+i;return{X:c,Y:s,Z:h}},LCHuv:function(e){var t=e.L,a=Math.pow(e.u*e.u+e.v*e*v,.5),i=Math.atan(e.v,e.u)*(180/Math.PI);return 0>i&&(i+=360),i>360&&(i-=360),{L:t,C:a,H:i}}},LCHuv:{Luv:function(e){var t=e.H*(Math.PI/180),a=e.L,i=e.C/Math.pow(Math.pow(Math.tan(t),2)+1,.5),r=Math.pow(e.C*e.C-i*i,.5);return 90<e.H&&e.H>270&&(i*=-1),e.H>180&&(r*=-1),{L:a,u:i,v:r}}}},d={CMY:{CMYK:function(t,a){return e.fromCmy(t).toCmyk()},HSL:function(t,a){return e.fromCmy(t).toHsl()},HSV:function(t,a){return e.fromCmy(t).toHsv()},Lab:function(t,a){return n.XYZ.Lab(e.fromCmy(t).toXYZ(a))},LCHab:function(e,t){return n.Lab.LCHab(d.CMY.Lab(e))},LCHuv:function(t,a){return n.LCHuv.Luv(n.Luv.XYZ(e.fromCmy(t).toXYZ(a)))},Luv:function(t,a){return n.Luv.XYZ(e.fromCmy(t).toXYZ(a))},RGB:function(t,a){return e.fromCmy(t)},XYZ:function(t,a){return e.fromCmy(t).toXYZ(a)},xyY:function(t,a){return n.XYZ.xyY(e.fromCmy(t).toXYZ(a))}},CMYK:{CMY:function(t,a){return e.fromCmyk(t).toCmy()},HSL:function(t,a){return e.fromCmyk(t).toHsl()},HSV:function(t,a){return e.fromCmyk(t).toHsv()},Lab:function(t,a){return n.XYZ.Lab(e.fromCmyk(t).toXYZ(a))},LCHab:function(e,t){return n.Lab.LCHab(d.CMYK.Lab(e))},LCHuv:function(t,a){return n.LCHuv.Luv(n.Luv.XYZ(e.fromCmyk(t).toXYZ(a)))},Luv:function(t,a){return n.Luv.XYZ(e.fromCmyk(t).toXYZ(a))},RGB:function(t,a){return e.fromCmyk(t)},XYZ:function(t,a){return e.fromCmyk(t).toXYZ(a)},xyY:function(t,a){return n.XYZ.xyY(e.fromCmyk(t).toXYZ(a))}},HSL:{CMY:function(t,a){return e.fromHsl(t).toCmy()},CMYK:function(t,a){return e.fromHsl(t).toCmyk()},HSV:function(t,a){return e.fromHsl(t).toHsv()},Lab:function(t,a){return n.XYZ.Lab(e.fromHsl(t).toXYZ(a))},LCHab:function(e,t){return n.Lab.LCHab(d.CMYK.Lab(e))},LCHuv:function(t,a){return n.LCHuv.Luv(n.Luv.XYZ(e.fromHsl(t).toXYZ(a)))},Luv:function(t,a){return n.Luv.XYZ(e.fromHsl(t).toXYZ(a))},RGB:function(t,a){return e.fromHsl(t)},XYZ:function(t,a){return e.fromHsl(t).toXYZ(a)},xyY:function(t,a){return n.XYZ.xyY(e.fromHsl(t).toXYZ(a))}},HSV:{CMY:function(t,a){return e.fromHsv(t).toCmy()},CMYK:function(t,a){return e.fromHsv(t).toCmyk()},HSL:function(t,a){return e.fromHsv(t).toHsl()},Lab:function(t,a){return n.XYZ.Lab(e.fromHsv(t).toXYZ(a))},LCHab:function(e,t){return n.Lab.LCHab(d.CMYK.Lab(e))},LCHuv:function(t,a){return n.LCHuv.Luv(n.Luv.XYZ(e.fromHsv(t).toXYZ(a)))},Luv:function(t,a){return n.Luv.XYZ(e.fromHsv(t).toXYZ(a))},RGB:function(t,a){return e.fromHsv(t)},XYZ:function(t,a){return e.fromHsv(t).toXYZ(a)},xyY:function(t,a){return n.XYZ.xyY(e.fromHsv(t).toXYZ(a))}},Lab:{CMY:function(t,a){return e.fromXYZ(n.Lab.XYZ(t,a)).toCmy()},CMYK:function(t,a){return e.fromXYZ(n.Lab.XYZ(t,a)).toCmyk()},HSL:function(t,a){return e.fromXYZ(n.Lab.XYZ(t,a)).toHsl()},HSV:function(t,a){return e.fromXYZ(n.Lab.XYZ(t,a)).toHsv()},LCHab:function(e,t){return n.Lab.LCHab(e,t)},LCHuv:function(e,t){return n.Luv.LCHuv(n.Lab.XYZ(e,t),t)},Luv:function(e,t){return n.XYZ.Luv(n.Lab.XYZ(e,t),t)},RGB:function(t,a){return e.fromXYZ(n.Lab.XYZ(t,a))},XYZ:function(e,t){return n.Lab.XYZ(e,t)},xyY:function(e,t){return n.XYZ.xyY(n.Lab.XYZ(e,t),t)}},LCHab:{CMY:function(t,a){return e.fromXYZ(n.Lab.XYZ(n.LCHab.Lab(t),a),a).toCmy()},CMYK:function(t,a){return e.fromXYZ(n.Lab.XYZ(n.LCHab.Lab(t),a),a).toCmyk()},HSL:function(t,a){return e.fromXYZ(n.Lab.XYZ(n.LCHab.Lab(t),a),a).toHsl()},HSV:function(t,a){return e.fromXYZ(n.Lab.XYZ(n.LCHab.Lab(t),a),a).toHsv()},Lab:function(e,t){return n.Lab.LCHab(e,t)},LCHuv:function(e,t){return n.Luv.LCHuv(n.XYZ.Luv(n.Lab.XYZ(n.LCHab.Lab(e),t),t),t)},Luv:function(e,t){return n.XYZ.Luv(n.Lab.XYZ(n.LCHab.Lab(e),t),t)},RGB:function(t,a){return e.fromXYZ(n.Lab.XYZ(n.LCHab.Lab(t),a),a)},XYZ:function(e,t){return n.Lab.XYZ(n.LCHab.Lab(e,t),t)},xyY:function(e,t){return n.XYZ.xyY(n.Lab.XYZ(n.LCHab.Lab(e),t),t)}},LCHuv:{CMY:function(t,a){return e.fromXYZ(n.Luv.XYZ(n.LCHuv.Luv(t),a),a).toCmy()},CMYK:function(t,a){return e.fromXYZ(n.Luv.XYZ(n.LCHuv.Luv(t),a),a).toCmyk()},HSL:function(t,a){return e.fromXYZ(n.Luv.XYZ(n.LCHuv.Luv(t),a),a).toHsl()},HSV:function(t,a){return e.fromXYZ(n.Luv.XYZ(n.LCHuv.Luv(t),a),a).toHsv()},Lab:function(e,t){return n.XYZ.Lab(n.Luv.XYZ(n.LCHuv.Luv(e),t),t)},LCHab:function(e,t){return n.Lab.LCHab(n.XYZ.Lab(n.Luv.XYZ(n.LCHuv.Luv(e),t),t),t)},Luv:function(e,t){return n.LCHuv.Luv(e,t)},RGB:function(t,a){return e.fromXYZ(n.Luv.XYZ(n.LCHuv.Luv(t),a),a)},XYZ:function(e,t){return n.Luv.XYZ(n.LCHuv.Luv(e),t)},xyY:function(e,t){return n.XYZ.xyY(n.Luv.XYZ(n.LCHuv.Luv(e),t),t)}},Luv:{CMY:function(t,a){return e.fromXYZ(n.Luv.XYZ(t,a),a).toCmy()},CMYK:function(t,a){return e.fromXYZ(n.Luv.XYZ(t,a),a).toCmyk()},HSL:function(t,a){return e.fromXYZ(n.Luv.XYZ(t,a),a).toHsl()},HSV:function(t,a){return e.fromXYZ(n.Luv.XYZ(t,a),a).toHsv()},Lab:function(e,t){return n.XYZ.Lab(n.Luv.XYZ(e,t),t)},LCHab:function(e,t){return n.Lab.LCHab(n.XYZ.Lab(n.Luv.XYZ(e,t),t),t)},LCHuv:function(e,t){return n.Luv.LCHuv(e,t)},RGB:function(t,a){return e.fromXYZ(n.Luv.XYZ(t,a),a)},XYZ:function(e,t){return n.Luv.XYZ(e,t)},xyY:function(e,t){return n.XYZ.xyY(n.Luv.XYZ(e,t),t)}},RGB:{CMY:function(e,t){return e.toCmy()},CMYK:function(e,t){return e.toCmyk()},HSL:function(e,t){return e.toHsl()},HSV:function(e,t){return e.toHsv()},Lab:function(e,t){return n.XYZ.Lab(e.toXYZ(t),t)},LCHab:function(e,t){return n.LCHab.Lab(n.XYZ.Lab(e.toXYZ(t),t),t)},LCHuv:function(e,t){return n.LCHuv.Luv(n.XYZ.Luv(e.toXYZ(t),t),t)},Luv:function(e,t){return n.XYZ.Luv(e.toXYZ(t),t)},XYZ:function(e,t){return e.toXYZ(t)},xyY:function(e,t){return n.XYZ.xyY(e.toXYZ(t),t)}},XYZ:{CMY:function(t,a){return e.fromXYZ(t,a).toCmy()},CMYK:function(t,a){return e.fromXYZ(t,a).toCmyk()},HSL:function(t,a){return e.fromXYZ(t,a).toHsl()},HSV:function(t,a){return e.fromXYZ(t,a).toHsv()},Lab:function(e,t){return n.XYZ.Lab(e,t)},LCHab:function(e,t){return n.Lab.LCHab(n.XYZ.Lab(e,t),t)},LCHuv:function(e,t){return n.Luv.LCHuv(n.XYZ.Luv(e,t),t)},Luv:function(e,t){return n.XYZ.Luv(e,t)},RGB:function(t,a){return e.fromXYZ(t,a)},xyY:function(t,a){return n.XYZ.xyY(e.fromXYZ(t,a),a)}},xyY:{CMY:function(t,a){return e.fromXYZ(n.xyY.XYZ(t,a),a).toCmy()},CMYK:function(t,a){return e.fromXYZ(n.xyY.XYZ(t,a),a).toCmyk()},HSL:function(t,a){return e.fromXYZ(n.xyY.XYZ(t,a),a).toHsl()},HSV:function(t,a){return e.fromXYZ(n.xyY.XYZ(t,a),a).toHsv()},Lab:function(e,t){return n.Lab.XYZ(n.xyY.XYZ(e,t),t)},LCHab:function(e,t){return n.LCHab.Lab(n.Lab.XYZ(n.xyY.XYZ(e,t),t),t)},LCHuv:function(e,t){return n.LCHuv.Luv(n.Luv.XYZ(n.xyY.XYZ(e,t),t),t)},Luv:function(e,t){return n.Luv.XYZ(n.xyY.XYZ(e,t),t)},RGB:function(t,a){return e.fromXYZ(n.xyY.XYZ(t,a),a)},XYZ:function(e,t){return n.xyY.XYZ(e,t)}}};this.whitepoint=function(e,t){t=t||"10";var a=0,r=0,o=0;i[t]&&i[t][e]&&(a=i[t][e].x,r=i[t][e].y,o=i[t][e].t);var n={x:a,y:r,z:1-a-r,t:o,Y:1};return this.convert(n,"xyY","XYZ")},this.tempToWhitepoint=function(e){if(4e3>e)return{x:0,y:0};if(e>25e3)return{x:0,y:0};var t=e*e,a=t*e,i=Math.pow(10,9),r=Math.pow(10,6),o=Math.pow(10,3);if(7e3>=e)var n=-4.607*i/a+2.9678*r/t+.09911*o/e+.2444063;else var n=-2.0064*i/a+1.9018*r/t+.24748*o/e+.23704;var d=-3*n*n+2.87*n-.275;return{x:n,y:d}},this.primaries=function(e){e=dojo.mixin({profile:"sRGB",whitepoint:"D65",observer:"10",adaptor:"Bradford"},e||{});var t=[];r[e.profile]&&(t=r[e.profile].slice(0));var a={name:e.profile,gamma:t[0],whitepoint:t[1],xr:t[2],yr:t[3],Yr:t[4],xg:t[5],yg:t[6],Yg:t[7],xb:t[8],yb:t[9],Yb:t[10]};if(e.whitepoint!=a.whitepoint){var i=this.convert(this.adapt({color:this.convert({x:xr,y:yr,Y:Yr},"xyY","XYZ"),adaptor:e.adaptor,source:a.whitepoint,destination:e.whitepoint}),"XYZ","xyY"),o=this.convert(this.adapt({color:this.convert({x:xg,y:yg,Y:Yg},"xyY","XYZ"),adaptor:e.adaptor,source:a.whitepoint,destination:e.whitepoint}),"XYZ","xyY"),n=this.convert(this.adapt({color:this.convert({x:xb,y:yb,Y:Yb},"xyY","XYZ"),adaptor:e.adaptor,source:a.whitepoint,destination:e.whitepoint}),"XYZ","xyY");a=dojo.mixin(a,{xr:i.x,yr:i.y,Yr:i.Y,xg:o.x,yg:o.y,Yg:o.Y,xb:n.x,yb:n.y,Yb:n.Y,whitepoint:e.whitepoint})}return dojo.mixin(a,{zr:1-a.xr-a.yr,zg:1-a.xg-a.yg,zb:1-a.xb-a.yb})},this.adapt=function(e){!e.color||!e.source,e=dojo.mixin({adaptor:"Bradford",destination:"D65"},e);var t=this.whitepoint(e.source),i=this.whitepoint(e.destination);if(o[e.adaptor])var r=o[e.adaptor].ma,n=o[e.adaptor].mai;var d=a.multiply([[t.x,t.y,t.z]],r),l=a.multiply([[i.x,i.y,i.z]],r),s=[[l[0][0]/d[0][0],0,0],[0,l[0][1]/d[0][1],0],[0,0,l[0][2]/d[0][2]]],m=a.multiply(a.multiply(r,s),n),u=a.multiply([[e.color.X,e.color.Y,e.color.Z]],m)[0];return{X:u[0],Y:u[1],Z:u[2]}},this.matrix=function(e,t){var i=t,r=this.whitepoint(i.whitepoint),o=i.xr/i.yr,n=1,d=(1-i.xr-i.yr)/i.yr,l=i.xg/i.yg,s=1,m=(1-i.xg-i.yg)/i.yg,u=i.xb/i.yb,f=1,c=(1-i.xb-i.yb)/i.yb,h=[[o,n,d],[l,s,m],[u,f,c]],y=[[r.X,r.Y,r.Z]],v=a.multiply(y,a.inverse(h)),p=v[0][0],M=v[0][1],g=v[0][2],b=[[p*o,p*n,p*d],[M*l,M*s,M*m],[g*u,g*f,g*c]];return"RGB"==e?a.inverse(b):b},this.epsilon=function(e){return e||"undefined"==typeof e?.008856:216/24289},this.kappa=function(e){return e||"undefined"==typeof e?903.3:24389/27},this.convert=function(e,t,a,i){return d[t]&&d[t][a]?d[t][a](e,i):void 0}},dojo.mixin(e,{fromXYZ:function(t,a){a=a||{};var i=e.Colorspace.primaries(a),r=e.Colorspace.matrix("RGB",i),o=dojox.math.matrix.multiply([[t.X,t.Y,t.Z]],r),n=o[0][0],d=o[0][1],l=o[0][2];if("sRGB"==i.profile)var s=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,m=d>.0031308?1.055*Math.pow(d,1/2.4)-.055:12.92*d,u=l>.0031308?1.055*Math.pow(l,1/2.4)-.055:12.92*l;else var s=Math.pow(n,1/i.gamma),m=Math.pow(d,1/i.gamma),u=Math.pow(l,1/i.gamma);return new e.Color({r:Math.floor(255*s),g:Math.floor(255*m),b:Math.floor(255*u)})}}),dojo.extend(e.Color,{toXYZ:function(t){t=t||{};var i=e.Colorspace.primaries(t),r=e.Colorspace.matrix("XYZ",i),o=this.r/255,n=this.g/255,d=this.b/255;if("sRGB"==i.profile)var l=o>.04045?Math.pow((o+.055)/1.055,2.4):o/12.92,s=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,m=d>.04045?Math.pow((d+.055)/1.055,2.4):d/12.92;else var l=Math.pow(o,i.gamma),s=Math.pow(n,i.gamma),m=Math.pow(d,i.gamma);var u=a([[l,s,m]],r);return{X:u[0][0],Y:u[0][1],Z:u[0][2]}}}),e.Colorspace});//# sourceMappingURL=Colorspace.js.map