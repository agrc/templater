//>>built
define("dojox/grid/enhanced/plugins/AutoScroll",["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/_base/html","dojo/_base/window","../_Plugin","../../_RowSelector","../../EnhancedGrid"],function(e,t,i,r,a,o,n,s){var l=e("dojox.grid.enhanced.plugins.AutoScroll",o,{name:"autoScroll",autoScrollInterval:1e3,autoScrollMargin:30,constructor:function(e,t){this.grid=e,this.readyForAutoScroll=!1,this._scrolling=!1,t=i.isObject(t)?t:{},"interval"in t&&(this.autoScrollInterval=t.interval),"margin"in t&&(this.autoScrollMargin=t.margin),this._initEvents(),this._mixinGrid()},_initEvents:function(){var e=this.grid;this.connect(e,"onCellMouseDown",function(){this.readyForAutoScroll=!0}),this.connect(e,"onHeaderCellMouseDown",function(){this.readyForAutoScroll=!0}),this.connect(e,"onRowSelectorMouseDown",function(){this.readyForAutoScroll=!0}),this.connect(a.doc,"onmouseup",function(e){this._manageAutoScroll(!0),this.readyForAutoScroll=!1}),this.connect(a.doc,"onmousemove",function(i){if(this.readyForAutoScroll){this._event=i;var a=r.position(e.domNode),o=e._getHeaderHeight(),s=this.autoScrollMargin,l=i.clientY,d=i.clientX,u=a.y,c=a.x,h=a.h,f=a.w;if(d>=c&&c+f>=d){if(l>=u+o&&u+o+s>l)return void this._manageAutoScroll(!1,!0,!1);if(l>u+h-s&&u+h>=l)return void this._manageAutoScroll(!1,!0,!0);if(l>=u&&u+h>=l){var m=t.some(e.views.views,function(e,t){if(e instanceof n)return!1;var i=r.position(e.domNode);return d<i.x+s&&d>=i.x?(this._manageAutoScroll(!1,!1,!1,e),!0):d>i.x+i.w-s&&d<i.x+i.w?(this._manageAutoScroll(!1,!1,!0,e),!0):!1},this);if(m)return}}this._manageAutoScroll(!0)}})},_mixinGrid:function(){var e=this.grid;e.onStartAutoScroll=function(){},e.onEndAutoScroll=function(){}},_fireEvent:function(e,t){var i=this.grid;switch(e){case"start":i.onStartAutoScroll.apply(i,t);break;case"end":i.onEndAutoScroll.apply(i,t)}},_manageAutoScroll:function(e,t,r,a){e?(this._scrolling=!1,clearInterval(this._handler)):this._scrolling||(this._scrolling=!0,this._fireEvent("start",[t,r,a]),this._autoScroll(t,r,a),this._handler=setInterval(i.hitch(this,"_autoScroll",t,r,a),this.autoScrollInterval))},_autoScroll:function(e,t,i){var r=this.grid,a=null;if(e){var o=r.scroller.firstVisibleRow+(t?1:-1);o>=0&&o<r.rowCount&&(r.scrollToRow(o),a=o)}else a=this._scrollColumn(t,i);null!==a&&this._fireEvent("end",[e,t,i,a,this._event])},_scrollColumn:function(e,i){var a=i.scrollboxNode,o=null;if(a.clientWidth<a.scrollWidth){var n,s,l,d,u=t.filter(this.grid.layout.cells,function(e){return!e.hidden}),c=r.position(i.domNode);if(e){for(n=a.clientWidth,d=0;d<u.length;++d)if(l=r.position(u[d].getHeaderNode()),s=l.x-c.x+l.w,s>n){o=u[d].index,a.scrollLeft+=s-n+10;break}}else for(n=0,d=u.length-1;d>=0;--d)if(l=r.position(u[d].getHeaderNode()),s=l.x-c.x,n>s){o=u[d].index,a.scrollLeft+=s-n-10;break}}return o}});return s.registerPlugin(l),l});//# sourceMappingURL=AutoScroll.js.map