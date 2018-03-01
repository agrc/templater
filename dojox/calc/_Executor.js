//>>built
define("dojox/calc/_Executor",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/number","dijit/_base/manager","dijit/_WidgetBase","dijit/_TemplatedMixin","dojox/math/_base"],function(e,t,a,i,r,d,o,n){e.experimental("dojox.calc");var l,s,m=1073741789,u=t("dojox.calc._Executor",[d,o],{templateString:'<iframe src="'+require.toUrl("dojox/calc/_ExecutorIframe.html")+'" style="display:none;" onload="if(arguments[0] && arguments[0].Function)'+r._scopeName+'.byNode(this)._onLoad(arguments[0])"></iframe>',_onLoad:function(e){l=e,e.outerPrompt=window.prompt,e.dojox={math:{}};for(var t in n)e.dojox.math[t]=a.hitch(n,t);"toFrac"in s&&(e.toFracCall=a.hitch(s,"toFrac"),this.Function("toFrac","x","return toFracCall(x)")),e.isJavaScriptLanguage="1.5"==i.format(1.5,{pattern:"#.#"}),e.Ans=0,e.pi=Math.PI,e.eps=Math.E,e.powCall=a.hitch(s,"pow"),this.normalizedFunction("sqrt","x","return Math.sqrt(x)"),this.normalizedFunction("sin","x","return Math.sin(x)"),this.normalizedFunction("cos","x","return Math.cos(x)"),this.normalizedFunction("tan","x","return Math.tan(x)"),this.normalizedFunction("asin","x","return Math.asin(x)"),this.normalizedFunction("acos","x","return Math.acos(x)"),this.normalizedFunction("atan","x","return Math.atan(x)"),this.normalizedFunction("atan2","y, x","return Math.atan2(y, x)"),this.normalizedFunction("Round","x","return Math.round(x)"),this.normalizedFunction("Int","x","return Math.floor(x)"),this.normalizedFunction("Ceil","x","return Math.ceil(x)"),this.normalizedFunction("ln","x","return Math.log(x)"),this.normalizedFunction("log","x","return Math.log(x)/Math.log(10)"),this.normalizedFunction("pow","x, y","return powCall(x,y)"),this.normalizedFunction("permutations","n, r","return dojox.math.permutations(n, r);"),this.normalizedFunction("P","n, r","return dojox.math.permutations(n, r);"),this.normalizedFunction("combinations","n, r","return dojox.math.combinations(n, r);"),this.normalizedFunction("C","n, r","return dojox.math.combinations(n, r)"),this.normalizedFunction("toRadix","number, baseOut","if(!baseOut){ baseOut = 10; } if(typeof number == 'string'){ number = parseFloat(number); }return number.toString(baseOut);"),this.normalizedFunction("toBin","number","return toRadix(number, 2)"),this.normalizedFunction("toOct","number","return toRadix(number, 8)"),this.normalizedFunction("toHex","number","return toRadix(number, 16)"),this.onLoad()},onLoad:function(){},Function:function(e,t,i){return a.hitch(l,l.Function.apply(l,arguments))},normalizedFunction:function(e,t,i){return a.hitch(l,l.normalizedFunction.apply(l,arguments))},deleteFunction:function(e){l[e]=void 0,delete l[e]},eval:function(e){return l.eval.apply(l,arguments)},destroy:function(){this.inherited(arguments),l=null}});return s={pow:function(e,t){function a(e){return Math.floor(e)==e}if(e>=0||a(t))return Math.pow(e,t);var i=1/t;return a(i)&&1&i?-Math.pow(-e,t):NaN},approx:function(e){return"number"==typeof e?Math.round(e*m)/m:e},_Executor:u}});//# sourceMappingURL=_Executor.js.map