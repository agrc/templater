//>>built
define("dojox/grid/enhanced/plugins/filter/FilterBuilder",["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","./_FilterExpr"],function(e,t,i,r){var a=function(e){return i.partial(function(e,t){return new r[e](t)},e)},o=function(e){return i.partial(function(e,t){return new r.LogicNOT(new r[e](t))},e)};return e("dojox.grid.enhanced.plugins.filter.FilterBuilder",null,{buildExpression:function(e){if("op"in e)return this.supportedOps[e.op.toLowerCase()](t.map(e.data,this.buildExpression,this));var r=i.mixin(this.defaultArgs[e.datatype],e.args||{});return new this.supportedTypes[e.datatype](e.data,e.isColumn,r)},supportedOps:{equalto:a("EqualTo"),lessthan:a("LessThan"),lessthanorequalto:a("LessThanOrEqualTo"),largerthan:a("LargerThan"),largerthanorequalto:a("LargerThanOrEqualTo"),contains:a("Contains"),startswith:a("StartsWith"),endswith:a("EndsWith"),notequalto:o("EqualTo"),notcontains:o("Contains"),notstartswith:o("StartsWith"),notendswith:o("EndsWith"),isempty:a("IsEmpty"),range:function(e){return new r.LogicALL(new r.LargerThanOrEqualTo(e.slice(0,2)),new r.LessThanOrEqualTo(e[0],e[2]))},logicany:a("LogicANY"),logicall:a("LogicALL")},supportedTypes:{number:r.NumberExpr,string:r.StringExpr,"boolean":r.BooleanExpr,date:r.DateExpr,time:r.TimeExpr},defaultArgs:{"boolean":{falseValue:"false",convert:function(e,t){var r=t.falseValue,a=t.trueValue;if(i.isString(e)){if(a&&e.toLowerCase()==a)return!0;if(r&&e.toLowerCase()==r)return!1}return!!e}}}})});//# sourceMappingURL=FilterBuilder.js.map