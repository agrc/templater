//>>built
define("dojox/charting/bidi/axis2d/Default",["dojo/_base/declare","dojo/dom-style"],function(e,t){return e(null,{labelTooltip:function(e,a,i,r,n,o){var d="rtl"==t.get(a.node,"direction"),s="rtl"==a.getTextDir(i);s&&!d&&(i="<span dir='rtl'>"+i+"</span>"),!s&&d&&(i="<span dir='ltr'>"+i+"</span>"),this.inherited(arguments)},_isRtl:function(){return this.chart.isRightToLeft()}})});//# sourceMappingURL=Default.js.map