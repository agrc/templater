//>>built
define("dojox/grid/enhanced/plugins/filter/_FilterExpr",["dojo/_base/declare","dojo/_base/lang","dojo/date","./_DataExprs"],function(e,t,i,a){function o(e,t,o,r){e=e.applyRow(o,r),t=t.applyRow(o,r);var n=e.getValue(),s=t.getValue();return e instanceof a.TimeExpr?i.compare(n,s,"time"):e instanceof a.DateExpr?i.compare(n,s,"date"):(e instanceof a.StringExpr&&(n=n.toLowerCase(),s=String(s).toLowerCase()),n==s?0:n<s?-1:1)}var r=e("dojox.grid.enhanced.plugins.filter.LogicAND",a._BiOpExpr,{_name:"and",_calculate:function(e,t,i,o){var r=e.applyRow(i,o).getValue()&&t.applyRow(i,o).getValue();return new a.BooleanExpr(r)}}),n=e("dojox.grid.enhanced.plugins.filter.LogicOR",a._BiOpExpr,{_name:"or",_calculate:function(e,t,i,o){var r=e.applyRow(i,o).getValue()||t.applyRow(i,o).getValue();return new a.BooleanExpr(r)}}),s=e("dojox.grid.enhanced.plugins.filter.LogicXOR",a._BiOpExpr,{_name:"xor",_calculate:function(e,t,i,o){var r=e.applyRow(i,o).getValue(),n=t.applyRow(i,o).getValue();return new a.BooleanExpr(!!r!=!!n)}}),l=e("dojox.grid.enhanced.plugins.filter.LogicNOT",a._UniOpExpr,{_name:"not",_calculate:function(e,t,i){return new a.BooleanExpr(!e.applyRow(t,i).getValue())}}),d=e("dojox.grid.enhanced.plugins.filter.LogicALL",a._OperatorExpr,{_name:"all",applyRow:function(e,t){for(var i=0,o=!0;o&&this._operands[i]instanceof a._ConditionExpr;++i)o=this._operands[i].applyRow(e,t).getValue();return new a.BooleanExpr(o)}}),u=e("dojox.grid.enhanced.plugins.filter.LogicANY",a._OperatorExpr,{_name:"any",applyRow:function(e,t){for(var i=0,o=!1;!o&&this._operands[i]instanceof a._ConditionExpr;++i)o=this._operands[i].applyRow(e,t).getValue();return new a.BooleanExpr(o)}}),c=e("dojox.grid.enhanced.plugins.filter.EqualTo",a._BiOpExpr,{_name:"equal",_calculate:function(e,t,i,r){var n=o(e,t,i,r);return new a.BooleanExpr(0===n)}}),h=e("dojox.grid.enhanced.plugins.filter.LessThan",a._BiOpExpr,{_name:"less",_calculate:function(e,t,i,r){var n=o(e,t,i,r);return new a.BooleanExpr(n<0)}}),m=e("dojox.grid.enhanced.plugins.filter.LessThanOrEqualTo",a._BiOpExpr,{_name:"lessEqual",_calculate:function(e,t,i,r){var n=o(e,t,i,r);return new a.BooleanExpr(n<=0)}}),f=e("dojox.grid.enhanced.plugins.filter.LargerThan",a._BiOpExpr,{_name:"larger",_calculate:function(e,t,i,r){var n=o(e,t,i,r);return new a.BooleanExpr(n>0)}}),g=e("dojox.grid.enhanced.plugins.filter.LargerThanOrEqualTo",a._BiOpExpr,{_name:"largerEqual",_calculate:function(e,t,i,r){var n=o(e,t,i,r);return new a.BooleanExpr(n>=0)}}),p=e("dojox.grid.enhanced.plugins.filter.Contains",a._BiOpExpr,{_name:"contains",_calculate:function(e,t,i,o){var r=String(e.applyRow(i,o).getValue()).toLowerCase(),n=String(t.applyRow(i,o).getValue()).toLowerCase();return new a.BooleanExpr(r.indexOf(n)>=0)}}),y=e("dojox.grid.enhanced.plugins.filter.StartsWith",a._BiOpExpr,{_name:"startsWith",_calculate:function(e,t,i,o){var r=String(e.applyRow(i,o).getValue()).toLowerCase(),n=String(t.applyRow(i,o).getValue()).toLowerCase();return new a.BooleanExpr(r.substring(0,n.length)==n)}}),v=e("dojox.grid.enhanced.plugins.filter.EndsWith",a._BiOpExpr,{_name:"endsWith",_calculate:function(e,t,i,o){var r=String(e.applyRow(i,o).getValue()).toLowerCase(),n=String(t.applyRow(i,o).getValue()).toLowerCase();return new a.BooleanExpr(r.substring(r.length-n.length)==n)}}),b=e("dojox.grid.enhanced.plugins.filter.Matches",a._BiOpExpr,{_name:"matches",_calculate:function(e,t,i,o){var r=String(e.applyRow(i,o).getValue()),n=new RegExp(t.applyRow(i,o).getValue());return new a.BooleanExpr(r.search(n)>=0)}}),M=e("dojox.grid.enhanced.plugins.filter.IsEmpty",a._UniOpExpr,{_name:"isEmpty",_calculate:function(e,t,i){var o=e.applyRow(t,i).getValue();return new a.BooleanExpr(""===o||null==o)}});return t.mixin({LogicAND:r,LogicOR:n,LogicXOR:s,LogicNOT:l,LogicALL:d,LogicANY:u,EqualTo:c,LessThan:h,LessThanOrEqualTo:m,LargerThan:f,LargerThanOrEqualTo:g,Contains:p,StartsWith:y,EndsWith:v,Matches:b,IsEmpty:M},a)});//# sourceMappingURL=_FilterExpr.js.map