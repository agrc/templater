//>>built
define("dojox/data/util/JsonQuery",["dojo","dojox"],function(e,t){return e.declare("dojox.data.util.JsonQuery",null,{useFullIdInQueries:!1,_toJsonQuery:function(t,a){function r(a,i){var s=i.__id;if(s){var l={};l[n.idAttribute]=n.useFullIdInQueries?i.__id:i[n.idAttribute],i=l}for(var m in i){var u=i[m],h=a+(/^[a-zA-Z_][\w_]*$/.test(m)?"."+m:"["+e._escapeString(m)+"]");u&&"object"==typeof u?r(h,u):"*"!=u&&(d+=(o?"":"&")+h+(!s&&"string"==typeof u&&t.queryOptions&&t.queryOptions.ignoreCase?"~":"=")+(n.simplifiedQuery?encodeURIComponent(u):e.toJson(u)),o=!1)}}var o=!0,n=this;if(t.query&&"object"==typeof t.query){var d="[?(";r("@",t.query),o?d="":d+=")]",t.queryStr=d.replace(/\\"|"/g,function(e){return'"'==e?"'":e})}else t.query&&"*"!=t.query||(t.query="");var s=t.sort;if(s){for(t.queryStr=t.queryStr||("string"==typeof t.query?t.query:""),o=!0,i=0;i<s.length;i++)t.queryStr+=(o?"[":",")+(s[i].descending?"\\":"/")+"@["+e._escapeString(s[i].attribute)+"]",o=!1;t.queryStr+="]"}return a&&(t.start||t.count)&&(t.queryStr=(t.queryStr||("string"==typeof t.query?t.query:""))+"["+(t.start||"")+":"+(t.count?(t.start||0)+t.count:"")+"]"),"string"==typeof t.queryStr?(t.queryStr=t.queryStr.replace(/\\"|"/g,function(e){return'"'==e?"'":e}),t.queryStr):t.query},jsonQueryPagination:!0,fetch:function(e){return this._toJsonQuery(e,this.jsonQueryPagination),this.inherited(arguments)},isUpdateable:function(){return!0},matchesQuery:function(e,a){return a._jsonQuery=a._jsonQuery||t.json.query(this._toJsonQuery(a)),a._jsonQuery([e]).length},clientSideFetch:function(e,a){return e._jsonQuery=e._jsonQuery||t.json.query(this._toJsonQuery(e)),this.clientSidePaging(e,e._jsonQuery(a))},querySuperSet:function(e,t){return e.query?this.inherited(arguments):t.query}})});//# sourceMappingURL=JsonQuery.js.map