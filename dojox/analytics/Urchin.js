//>>built
define("dojox/analytics/Urchin",["dojo/_base/lang","dojo/_base/declare","dojo/_base/window","dojo/_base/config","dojo/dom-construct"],function(e,t,a,i,r){return t("dojox.analytics.Urchin",null,{acct:"",constructor:function(t){this.tracker=null,e.mixin(this,t),this.acct=this.acct||i.urchin;var d=/loaded|complete/,n="https:"==a.doc.location.protocol?"https://ssl.":"http://www.",o=a.doc.getElementsByTagName("head")[0],l=r.create("script",{src:n+"google-analytics.com/ga.js"},o);l.onload=l.onreadystatechange=e.hitch(this,function(e){(e&&"load"==e.type||d.test(l.readyState))&&(l.onload=l.onreadystatechange=null,this._gotGA(),o.removeChild(l))})},_gotGA:function(){this.tracker=_gat._getTracker(this.acct),this.GAonLoad.apply(this,arguments)},GAonLoad:function(){this.trackPageView()},trackPageView:function(e){this.tracker._trackPageview.apply(this.tracker,arguments)}})});//# sourceMappingURL=Urchin.js.map