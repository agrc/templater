//>>built
define("dojox/lang/observable",["dojo","dijit","dojox"],function(e,t,i){if(e.provide("dojox.lang.observable"),e.experimental("dojox.lang.observable"),i.lang.observable=function(e,t,a,o){return i.lang.makeObservable(t,a,o)(e)},i.lang.makeObservable=function(e,t,a,o){function r(e,t,i){return function(){return a(e,t,i,arguments)}}if(o=o||{},a=a||function(e,t,i,a){return t[i].apply(e,a)},i.lang.lettableWin){var n=i.lang.makeObservable;n.inc=(n.inc||0)+1;var s="gettable_"+n.inc;i.lang.lettableWin[s]=e;var l="settable_"+n.inc;i.lang.lettableWin[l]=t;var d={};return function(e){if(e.__observable)return e.__observable;if(e.data__)throw new Error("Can wrap an object that is already wrapped");var t,a,h=[];for(t in o)h.push(t);var u={type:1,event:1};for(t in e)!t.match(/^[a-zA-Z][\w\$_]*$/)||t in o||t in u||h.push(t);var c,m=h.join(","),f=d[m];if(!f){var p="dj_lettable_"+n.inc++,g=p+"_dj_getter",y=["Class "+p,"	Public data__"];for(t=0,a=h.length;a>t;t++){c=h[t];var v=typeof e[c];"function"==v||o[c]?y.push("  Public "+c):"object"!=v&&y.push("	Public Property Let "+c+"(val)","		Call "+l+'(me.data__,"'+c+'",val)',"	End Property","	Public Property Get "+c,"		"+c+" = "+s+'(me.data__,"'+c+'")',"	End Property")}y.push("End Class"),y.push("Function "+g+"()","	Dim tmp","	Set tmp = New "+p,"	Set "+g+" = tmp","End Function"),i.lang.lettableWin.vbEval(y.join("\n")),d[m]=f=function(){return i.lang.lettableWin.construct(g)}}var b=f();b.data__=e;try{e.__observable=b}catch(x){}for(t=0,a=h.length;a>t;t++){c=h[t];try{var M=e[c]}catch(x){}("function"==typeof M||o[c])&&(b[c]=r(b,e,c))}return b}}return function(i){if(i.__observable)return i.__observable;var a=i instanceof Array?[]:{};a.data__=i;for(var n in i)"_"!=n.charAt(0)&&("function"==typeof i[n]?a[n]=r(a,i,n):"object"!=typeof i[n]&&!function(o){a.__defineGetter__(o,function(){return e(i,o)}),a.__defineSetter__(o,function(e){return t(i,o,e)})}(n));for(n in o)a[n]=r(a,i,n);return i.__observable=a,a}},!{}.__defineGetter__){if(!e.isIE)throw new Error("This browser does not support getters and setters");var a;document.body?(a=document.createElement("iframe"),document.body.appendChild(a)):(document.write("<iframe id='dj_vb_eval_frame'></iframe>"),a=document.getElementById("dj_vb_eval_frame")),a.style.display="none";var o=a.contentWindow.document;i.lang.lettableWin=a.contentWindow,o.write('<html><head><script language="VBScript" type="text/VBScript">Function vb_global_eval(code)ExecuteGlobal(code)End Function</script><script type="text/javascript">function vbEval(code){ \nreturn vb_global_eval(code);}function construct(name){ \nreturn window[name]();}</script></head><body>vb-eval</body></html>'),o.close()}i.lang.ReadOnlyProxy=i.lang.makeObservable(function(e,t){return e[t]},function(e,t,i){})});//# sourceMappingURL=observable.js.map