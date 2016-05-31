//>>built
define("dojox/gfx/filters",["dojo/_base/lang","dojo/_base/array"],function(e,t){var i={},a={x:"0%",y:"0%",width:"100%",height:"100%"},n={};i.createFilter=function(t,i){var n=e.mixin({},a,t);return n.primitives||(n.primitives=[]),i&&Array.prototype.push.apply(n.primitives,i),n};var r=function(t,i,a){i instanceof Array&&(a=i,i=null);var n=e.mixin({},i);return n.children=a,n.tag=t,n},o=function(e,t){if("string"==typeof e){for(var a=[],n=0;n<arguments.length;++n)a.push(i.feMergeNode({"in":arguments[n]}));return r("feMerge",{},a)}return r("feMerge",e,t)};t.forEach(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","feDistantLight","fePointLight","feSpotLight","feMergeNode","feFuncA","feFuncR","feFuncG","feFuncB"],function(e){i[e]=function(t,i){return r(e,t,i)}}),i.feMerge=o;var s=i.createFilter;n.convolutions=[s({_gfxName:"boxBlur3"},[i.feConvolveMatrix({"in":"SourceGraphic",order:3,divisor:9,kernelMatrix:"1,1,1,1,1,1,1,1,1"})]),s({_gfxName:"boxBlur5"},[i.feConvolveMatrix({"in":"SourceGraphic",order:5,divisor:25,kernelMatrix:"1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1"})]),s({_gfxName:"verticalEdges",filterUnits:"objectBoundingBox"},[i.feConvolveMatrix({"in":"SourceGraphic",result:"kernel",order:3,divisor:1,kernelMatrix:"-1 0 1 -1 0 1 -1 0 1"}),i.feComponentTransfer({"in":"kernel"},[i.feFuncA({type:"table",tableValues:"1,1"})])]),s({_gfxName:"horizontalEdges",filterUnits:"objectBoundingBox"},[i.feConvolveMatrix({"in":"SourceGraphic",result:"kernel",order:3,divisor:1,kernelMatrix:"1 1 1 0 0 0 -1 -1 -1"}),i.feComponentTransfer({"in":"kernel"},[i.feFuncA({type:"table",tableValues:"1,1"})])]),s({_gfxName:"allEdges3",filterUnits:"objectBoundingBox"},[i.feConvolveMatrix({"in":"SourceGraphic",result:"kernel",order:3,divisor:1,kernelMatrix:"-1 -1 -1 -1 8 -1 -1 -1 -1"}),i.feComponentTransfer({"in":"kernel"},[i.feFuncA({type:"table",tableValues:"1,1"})])]),s({_gfxName:"edgeEnhance",filterUnits:"objectBoundingBox"},[i.feConvolveMatrix({"in":"SourceGraphic",result:"kernel",order:3,divisor:-1,kernelMatrix:"0 1 0 1 -5 1 0 1 0"}),i.feComponentTransfer({"in":"kernel"},[i.feFuncA({type:"table",tableValues:"1,1"})])])],t.forEach(n.convolutions,function(t){e.mixin(t,a)}),n.shadows=[s({_gfxName:"fastSmallDropShadow"},[i.feColorMatrix({"in":"SourceAlpha",type:"matrix",result:"grey",values:"0.2125,0.7154,0.0721,0,0,0.2125,0.7154,0.0721,0,0,0.2125,0.7154,0.0721,0,0,0,0,0,0.7,0"}),i.feOffset({dx:3,dy:3,result:"offsetBlur"}),i.feMerge("offsetBlur","SourceGraphic")]),s({_gfxName:"fastDropShadow"},[i.feColorMatrix({"in":"SourceAlpha",type:"matrix",result:"grey",values:"0.2125,0.7154,0.0721,0,0,0.2125,0.7154,0.0721,0,0,0.2125,0.7154,0.0721,0,0,0,0,0,0.7,0"}),i.feOffset({dx:5,dy:5,result:"offsetBlur"}),i.feMerge("offsetBlur","SourceGraphic")]),s({_gfxName:"fastDropShadowLight"},[i.feColorMatrix({"in":"SourceAlpha",type:"matrix",result:"grey",values:"0.2125,0.7154,0.0721,0,0,0.2125,0.7154,0.0721,0,0,0.2125,0.7154,0.0721,0,0,0,0,0,0.4,0"}),i.feOffset({dx:5,dy:5,result:"offsetBlur"}),i.feMerge("offsetBlur","SourceGraphic")]),s({_gfxName:"dropShadow"},[i.feGaussianBlur({"in":"SourceAlpha",stdDeviation:4}),i.feOffset({dx:5,dy:5,result:"offsetBlur"}),i.feMerge("offsetBlur","SourceGraphic")]),s({_gfxName:"dropShadowLight"},[i.feGaussianBlur({"in":"SourceAlpha",stdDeviation:4,result:"blur"}),i.feComponentTransfer({"in":"blur",result:"lessblur"},[i.feFuncA({type:"linear",slope:.5})]),i.feOffset({"in":"lessblur",dx:5,dy:5,result:"offsetBlur"}),i.feMerge("offsetBlur","SourceGraphic")]),s({_gfxName:"smallDropShadow"},[i.feGaussianBlur({"in":"SourceAlpha",stdDeviation:3}),i.feOffset({dx:2,dy:2,result:"offsetBlur"}),i.feMerge("offsetBlur","SourceGraphic")]),s({_gfxName:"smallDropShadowLight"},[i.feGaussianBlur({"in":"SourceAlpha",stdDeviation:3,result:"blur"}),i.feComponentTransfer({"in":"blur",result:"lessblur"},[i.feFuncA({type:"linear",slope:.5})]),i.feOffset({"in":"lessblur",dx:2,dy:2,result:"offsetBlur"}),i.feMerge("offsetBlur","SourceGraphic")])];var l={x:"-10%",y:"-10%",width:"125%",height:"125%"};t.forEach(n.shadows,function(t){e.mixin(t,l)}),n.blurs=[s({_gfxName:"blur1",x:"-5%",y:"-5%",width:"110%",height:"110%"},[i.feGaussianBlur({"in":"SourceGraphic",stdDeviation:1})]),s({_gfxName:"blur2",x:"-15%",y:"-15%",width:"130%",height:"130%"},[i.feGaussianBlur({"in":"SourceGraphic",stdDeviation:2})]),s({_gfxName:"blur4",x:"-15%",y:"-15%",width:"130%",height:"130%"},[i.feGaussianBlur({"in":"SourceGraphic",stdDeviation:4})]),s({_gfxName:"blur8",x:"-20%",y:"-20%",width:"140%",height:"140%"},[i.feGaussianBlur({"in":"SourceGraphic",stdDeviation:8})]),s({_gfxName:"glow",x:"-10%",y:"-10%",width:"120%",height:"120%"},[i.feGaussianBlur({"in":"SourceGraphic",stdDeviation:2}),i.feComponentTransfer([i.feFuncA({type:"linear",slope:10})])])],n.colors=[s({_gfxName:"negate"},[i.feComponentTransfer([i.feFuncR({type:"table",tableValues:"1,0"}),i.feFuncG({type:"table",tableValues:"1,0"}),i.feFuncB({type:"table",tableValues:"1,0"})])]),s({_gfxName:"sepia"},[i.feColorMatrix({result:"grey",values:"0.2125,0.7154,0.0721,0,0,0.2125,0.7154,0.0721,0,0,0.2125,0.7154,0.0721,0,0,0,0,0,1,0"}),i.feComponentTransfer({"in":"grey"},[i.feFuncR({type:"linear",slope:.5,intercept:.5}),i.feFuncB({type:"table",tableValues:"0,0"})])]),s({_gfxName:"grayscale"},[i.feColorMatrix({values:"0.2125,0.7154,0.0721,0,0,0.2125,0.7154,0.0721,0,0,0.2125,0.7154,0.0721,0,0,0,0,0,1,0"})]),s({_gfxName:"showRed"},[i.feComponentTransfer([i.feFuncG({type:"table",tableValues:"0,0"}),i.feFuncB({type:"table",tableValues:"0,0"})])]),s({_gfxName:"showGreen"},[i.feComponentTransfer([i.feFuncR({type:"table",tableValues:"0,0"}),i.feFuncB({type:"table",tableValues:"0,0"})])]),s({_gfxName:"showBlue"},[i.feComponentTransfer([i.feFuncR({type:"table",tableValues:"0,0"}),i.feFuncG({type:"table",tableValues:"0,0"})])]),s({_gfxName:"hueRotate60"},[i.feColorMatrix({type:"hueRotate",values:60})]),s({_gfxName:"hueRotate120"},[i.feColorMatrix({type:"hueRotate",values:120})]),s({_gfxName:"hueRotate180"},[i.feColorMatrix({type:"hueRotate",values:180})]),s({_gfxName:"hueRotate270"},[i.feColorMatrix({type:"hueRotate",values:270})])],t.forEach(n.colors,function(t){e.mixin(t,a)}),n.miscs=[s({_gfxName:"thinEmbossDropShadow",x:"-5%",y:"-5%",width:"120%",height:"120%"},[i.feGaussianBlur({"in":"SourceAlpha",stdDeviation:1,result:"blur"}),i.feOffset({"in":"blur",dx:6,dy:6,result:"offsetBlur"}),i.feSpecularLighting({"in":"blur",surfaceScale:8,specularConstant:1,specularExponent:12,result:"specOut"},[i.fePointLight({x:"-5000",y:"-10000",z:"12000"})]),i.feComposite({"in":"specOut",in2:"SourceAlpha",operator:"in",result:"specOut"}),i.feComposite({"in":"SourceGraphic",in2:"specOut",operator:"arithmetic",result:"litPaint",k1:0,k2:1,k3:1,k4:0}),i.feMerge("offsetBlur","litPaint")]),s({_gfxName:"embossDropShadow",x:"-5%",y:"-5%",width:"120%",height:"120%"},[i.feGaussianBlur({"in":"SourceAlpha",stdDeviation:"4",result:"blur"}),i.feOffset({"in":"blur",dx:4,dy:4,result:"offsetBlur"}),i.feSpecularLighting({"in":"blur",surfaceScale:5,specularConstant:.75,specularExponent:20,"lighting-color":"#bbbbbb",result:"specOut"},[i.fePointLight({x:-5e3,y:-1e4,z:2e4})]),i.feComposite({"in":"specOut",in2:"SourceAlpha",operator:"in",result:"specOut"}),i.feComposite({"in":"SourceGraphic",in2:"specOut",operator:"arithmetic",k1:0,k2:1,k3:1,k4:0,result:"litPaint"}),i.feMerge("offsetBlur","litPaint")]),s({_gfxName:"largeEmbossDropShadow",x:"-20%",y:"-20%",width:"140%",height:"140%"},[i.feGaussianBlur({"in":"SourceAlpha",stdDeviation:5,result:"blur"}),i.feOffset({"in":"blur",dx:6,dy:6,result:"offsetBlur"}),i.feSpecularLighting({"in":"blur",surfaceScale:8,specularConstant:1,specularExponent:12,result:"spec"},[i.fePointLight({x:"-5000",y:"-10000",z:"12000"})]),i.feComposite({"in":"spec",in2:"SourceGraphic",operator:"in",result:"specOut"}),i.feComposite({"in":"SourceGraphic",in2:"specOut",operator:"arithmetic",result:"litPaint",k1:0,k2:1,k3:1,k4:0}),i.feMerge("offsetBlur","litPaint")]),s({_gfxName:"thinEmbossDropShadowLight",x:"-5%",y:"-5%",width:"120%",height:"120%"},[i.feGaussianBlur({"in":"SourceAlpha",stdDeviation:1,result:"blur"}),i.feComponentTransfer({"in":"blur",result:"lessblur"},[i.feFuncA({type:"linear",slope:"0.5"})]),i.feOffset({"in":"lessblur",dx:"6",dy:"6",result:"offsetBlur"}),i.feSpecularLighting({"in":"lessblur",surfaceScale:8,specularConstant:1,specularExponent:"12",result:"specOut"},[i.fePointLight({x:"-5000",y:"-10000",z:"12000"})]),i.feComposite({"in":"specOut",in2:"SourceAlpha",operator:"in",result:"specOut"}),i.feComposite({"in":"SourceGraphic",in2:"specOut",result:"litPaint",operator:"arithmetic",k1:0,k2:1,k3:1,k4:0}),i.feMerge("offsetBlur","litPaint")]),s({_gfxName:"embossDropShadowLight",x:"-5%",y:"-5%",width:"120%",height:"120%"},[i.feGaussianBlur({"in":"SourceAlpha",stdDeviation:"3",result:"blur"}),i.feComponentTransfer({"in":"blur",result:"lessblur"},[i.feFuncA({type:"linear",slope:"0.5"})]),i.feOffset({"in":"lessblur",dx:"6",dy:"6",result:"offsetBlur"}),i.feSpecularLighting({"in":"lessblur",surfaceScale:"8",specularConstant:"1",specularExponent:"12",result:"specOut"},[i.fePointLight({x:"-5000",y:"-10000",z:"12000"})]),i.feComposite({"in":"specOut",in2:"SourceAlpha",operator:"in",result:"specOut"}),i.feComposite({"in":"SourceGraphic",in2:"specOut",result:"litPaint",operator:"arithmetic",k1:"0",k2:"1",k3:"1",k4:"0"}),i.feMerge("offsetBlur","litPaint")]),s({_gfxName:"largeEmbossDropShadowLight",x:"-20%",y:"-20%",width:"140%",height:"140%"},[i.feGaussianBlur({"in":"SourceAlpha",stdDeviation:"5",result:"blur"}),i.feComponentTransfer({"in":"blur",result:"lessblur"},[i.feFuncA({type:"linear",slope:"0.5"})]),i.feOffset({"in":"lessblur",dx:"6",dy:"6",result:"offsetBlur"}),i.feSpecularLighting({"in":"blur",surfaceScale:"8",specularConstant:"1",specularExponent:"12",result:"spec"},[i.fePointLight({x:"-5000",y:"-10000",z:"12000"})]),i.feComposite({"in":"spec",in2:"SourceGraphic",operator:"in",result:"specOut"}),i.feComposite({"in":"SourceGraphic",in2:"specOut",operator:"arithmetic",k1:"0",k2:"1",k3:"1",k4:"0",result:"litPaint"}),i.feMerge("offsetBlur","litPaint")]),s({_gfxName:"fuzzy",x:"-10%",y:"-10%",width:"120%",height:"120%"},[i.feTurbulence({type:"fractalNoise",baseFrequency:"0.1",numOctaves:"1",result:"turb2"}),i.feDisplacementMap({"in":"SourceGraphic",in2:"turb2",result:"turb2",scale:"20",xChannelSelector:"R",yChannelSelector:"G"})]),s({_gfxName:"veryFuzzy",x:"-20%",y:"-20%",width:"140%",height:"140%"},[i.feTurbulence({type:"fractalNoise",baseFrequency:"0.1",numOctaves:"1",result:"turb2"}),i.feDisplacementMap({"in":"SourceGraphic",in2:"turb2",result:"turb2",scale:"35",xChannelSelector:"R",yChannelSelector:"G"})]),s({_gfxName:"melting",x:"-10%",y:"-10%",width:"120%",height:"120%"},[i.feTurbulence({type:"fractalNoise",baseFrequency:"0.1",numOctaves:"2",result:"turb"}),i.feDisplacementMap({result:"bended","in":"SourceGraphic",in2:"turb",scale:"25",xChannelSelector:"R",yChannelSelector:"G"}),i.feGaussianBlur({"in":"bended",stdDeviation:"1",result:"bb"}),i.feComponentTransfer({"in":"bb",result:"BendedSource"},[i.feFuncA({type:"linear",slope:10,intercept:"-1"})]),i.feComponentTransfer({"in":"BendedSource",result:"BendedAlpha"},[i.feFuncR({type:"linear",slope:"0",intercept:"0"}),i.feFuncG({type:"linear",slope:"0",intercept:"0"}),i.feFuncB({type:"linear",slope:"0",intercept:"0"}),i.feFuncA({type:"linear",slope:"1",intercept:"0"})]),i.feGaussianBlur({"in":"BendedAlpha",stdDeviation:"1",result:"blur"}),i.feSpecularLighting({"in":"blur","lighting-color":"rgb(80%, 80%, 80%)",surfaceScale:"5",specularConstant:"1",specularExponent:"10",result:"specularOut"},[i.fePointLight({x:"-5000",y:"-10000",z:"20000"})]),i.feComposite({"in":"specularOut",in2:"BendedAlpha",operator:"in",result:"specularOut"}),i.feComposite({"in":"BendedSource",in2:"specularOut",operator:"arithmetic",k1:"0",k2:"1",k3:"1",k4:"0",result:"litPaint"})]),s({_gfxName:"impressionist",x:"0%",y:"0%",width:"100%",height:"100%"},[i.feMorphology({"in":"SourceGraphic",operator:"dilate",radius:"2"})]),s({_gfxName:"holes",x:"0%",y:"0%",width:"100%",height:"100%"},[i.feTurbulence({type:"fractalNoise",baseFrequency:"0.1",numOctaves:"1",result:"texture"}),i.feComponentTransfer({"in":"texture",result:"holes"},[i.feFuncA({type:"discrete",tableValues:"0,1"})]),i.feComposite({"in":"SourceGraphic",in2:"holes",operator:"out"})]),s({_gfxName:"holesComplement",x:"0%",y:"0%",width:"100%",height:"100%"},[i.feTurbulence({type:"fractalNoise",baseFrequency:"0.1",numOctaves:"1",result:"texture"}),i.feComponentTransfer({"in":"texture",result:"holes"},[i.feFuncA({type:"discrete",tableValues:"1,0"})]),i.feComposite({"in":"SourceGraphic",in2:"holes",operator:"out"})])],n.reliefs=[s({_gfxName:"bumpIn",x:"0%",y:"0%",width:"100%",height:"100%"},[i.feColorMatrix({"in":"SourceGraphic",type:"luminanceToAlpha",result:"lumalpha"}),i.feComponentTransfer({"in":"lumalpha",result:"invertedalpha"},[i.feFuncA({type:"table",tableValues:"1,0"})]),i.feDiffuseLighting({"in":"invertedalpha","lighting-color":"rgb(60%, 60%, 60%)",result:"diffuse",surfaceScale:"5"},[i.feDistantLight({azimuth:"135",elevation:"60"})]),i.feSpecularLighting({"in":"invertedalpha",result:"specular",surfaceScale:"5",specularExponent:"6"},[i.feDistantLight({azimuth:"135",elevation:"30"})]),i.feComposite({"in":"diffuse",in2:"specular",operator:"arithmetic",k2:"1.0",k3:"1.0"})]),s({_gfxName:"bumpOut",x:"0%",y:"0%",width:"100%",height:"100%"},[i.feColorMatrix({"in":"SourceGraphic",type:"luminanceToAlpha",result:"lumalpha"}),i.feDiffuseLighting({"in":"lumalpha","lighting-color":"rgb(60%, 60%, 60%)",result:"diffuse",surfaceScale:"5"},[i.feDistantLight({azimuth:"135",elevation:"60"})]),i.feSpecularLighting({"in":"lumalpha",result:"specular",surfaceScale:"5",specularExponent:"6"},[i.feDistantLight({azimuth:"135",elevation:"30"})]),i.feComposite({"in":"diffuse",in2:"specular",operator:"arithmetic",k2:"1.0",k3:"1.0"})]),s({_gfxName:"thinEmboss",x:"-5%",y:"-5%",width:"110%",height:"110%"},[i.feGaussianBlur({"in":"SourceAlpha",stdDeviation:"1",result:"blur"}),i.feSpecularLighting({"in":"blur",surfaceScale:"8",specularConstant:"1",specularExponent:"12",result:"specOut"},[i.fePointLight({x:"-5000",y:"-10000",z:"12000"})]),i.feComposite({"in":"specOut",in2:"SourceAlpha",operator:"in",result:"specOut"}),i.feComposite({"in":"SourceGraphic",in2:"specOut",operator:"arithmetic",k1:"0",k2:"1",k3:"1",k4:"0"})]),s({_gfxName:"emboss",x:"-5%",y:"-5%",width:"110%",height:"110%"},[i.feGaussianBlur({"in":"SourceAlpha",stdDeviation:"3",result:"blur"}),i.feSpecularLighting({"in":"blur",surfaceScale:"8",specularConstant:"1",specularExponent:"12",result:"specOut"},[i.fePointLight({x:"-5000",y:"-10000",z:"12000"})]),i.feComposite({"in":"specOut",in2:"SourceAlpha",operator:"in",result:"specOut"}),i.feComposite({"in":"SourceGraphic",in2:"specOut",operator:"arithmetic",k1:"0",k2:"1",k3:"1",k4:"0"})]),s({_gfxName:"largeEmboss",x:"-5%",y:"-5%",width:"110%",height:"110%"},[i.feGaussianBlur({"in":"SourceAlpha",stdDeviation:"5",result:"blur"}),i.feSpecularLighting({"in":"blur",surfaceScale:"8",specularConstant:"1",specularExponent:"12",result:"specOut"},[i.fePointLight({x:"-5000",y:"-10000",z:"12000"})]),i.feComposite({"in":"specOut",in2:"SourceAlpha",operator:"in",result:"specOut"}),i.feComposite({"in":"SourceGraphic",in2:"specOut",operator:"arithmetic",k1:"0",k2:"1",k3:"1",k4:"0"})])],n.textures=[s({_gfxName:"paper",x:"0%",y:"0%",width:"100%",height:"100%"},[i.feTurbulence({type:"turbulence",baseFrequency:"0.01",numOctaves:"5",result:"texture"}),i.feDiffuseLighting({"in":"texture",result:"diffuse",surfaceScale:"-10"},[i.feDistantLight({azimuth:"135",elevation:"60"})]),i.feComposite({"in":"diffuse",in2:"SourceGraphic",operator:"arithmetic",k1:"1",k2:"0",k3:"0",k4:"0"})]),s({_gfxName:"swirl",x:"0%",y:"0%",width:"100%",height:"100%"},[i.feTurbulence({type:"turbulence",baseFrequency:"0.05",numOctaves:"1",result:"texture"}),i.feDiffuseLighting({"in":"texture",result:"diffuse",surfaceScale:"-10"},[i.feDistantLight({azimuth:"135",elevation:"60"})]),i.feComposite({"in":"diffuse",in2:"SourceGraphic",operator:"arithmetic",k1:"1",k2:"0",k3:"0",k4:"0"})]),s({_gfxName:"swirl2",x:"0%",y:"0%",width:"100%",height:"100%"},[i.feTurbulence({type:"turbulence",baseFrequency:"0.15",numOctaves:"1",result:"texture"}),i.feDiffuseLighting({"in":"texture",result:"diffuse",surfaceScale:"-10"},[i.feDistantLight({azimuth:"135",elevation:"60"})]),i.feComposite({"in":"diffuse",in2:"SourceGraphic",operator:"arithmetic",k1:"1",k2:"0",k3:"0",k4:"0"})]),s({_gfxName:"gold",x:"-5%",y:"-5%",width:"115%",height:"110%"},[i.feTurbulence({baseFrequency:"0.2",numOctaves:"1",type:"turbulence",result:"turb"}),i.feComposite({"in":"SourceGraphic",in2:"turb",operator:"arithmetic",k2:"0.6",k3:"0.4",result:"turb"}),i.feComposite({"in":"turb",in2:"SourceGraphic",operator:"in",result:"bump"}),i.feDiffuseLighting({"in":"turb",surfaceScale:"6.0","lighting-color":"rgb(60%, 50%, 0%)",diffuseConstant:"1.0",result:"diffuse"},[i.feDistantLight({azimuth:"135",elevation:"60"})]),i.feSpecularLighting({"in":"bump",surfaceScale:"6.0",specularConstant:"1.0",specularExponent:"10.0",result:"specularOut"},[i.feDistantLight({azimuth:"135",elevation:"60"})]),i.feComposite({"in":"specularOut",in2:"SourceGraphic",operator:"in",result:"specularOut"}),i.feComposite({"in":"bump",in2:"diffuse",operator:"arithmetic",k1:"0.7",k2:"0.3",result:"litPaint"}),i.feComposite({"in":"litPaint",in2:"specularOut",operator:"arithmetic",k2:"1.0",k3:"0.7",result:"litPaint"})])];for(var d in n)if(n.hasOwnProperty(d)){i[d]={};for(var u=n[d],c=0;c<u.length;++c)!function(){var t=u[c];i[d][t._gfxName]=function(i){return e.delegate(t,i)}}()}return i});//# sourceMappingURL=filters.js.map