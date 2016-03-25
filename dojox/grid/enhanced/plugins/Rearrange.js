//>>built
define("dojox/grid/enhanced/plugins/Rearrange",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/_base/connect","../../EnhancedGrid","../_Plugin","./_RowMapLayer"],function(e,t,a,i,r,n,o,s){var l=a("dojox.grid.enhanced.plugins.Rearrange",o,{name:"rearrange",constructor:function(e,t){this.grid=e,this.setArgs(t);var a=new s(e);dojox.grid.enhanced.plugins.wrap(e,"_storeLayerFetch",a)},setArgs:function(e){this.args=t.mixin(this.args||{},e||{}),this.args.setIdentifierForNewItem=this.args.setIdentifierForNewItem||function(e){return e}},destroy:function(){this.inherited(arguments),this.grid.unwrap("rowmap")},onSetStore:function(e){this.grid.layer("rowmap").clearMapping()},_hasIdentity:function(e){var t=this.grid,a=t.store,r=t.layout.cells;return!(!a.getFeatures()["dojo.data.api.Identity"]||!i.some(e,function(e){return a.getIdentityAttributes(t._by_idx[e.r].item)==r[e.c].field}))},moveColumns:function(e,t){var a,i,n=this.grid,o=n.layout,s=o.cells,l=0,d=!0,u={},c={};for(e.sort(function(e,t){return e-t}),i=0;i<e.length;++i)u[e[i]]=i,e[i]<t&&++l;var m=0,h=0,f=Math.max(e[e.length-1],t);f==s.length&&--f;var g=Math.min(e[0],t);for(i=g;f>=i;++i){var p=u[i];p>=0?c[i]=t-l+p:t>i?(c[i]=g+m,++m):i>=t&&(c[i]=t+e.length-l+h,++h)}for(l=0,t==s.length&&(--t,d=!1),n._notRefreshSelection=!0,i=0;i<e.length;++i)a=e[i],t>a&&(a-=l),++l,a!=t&&(o.moveColumn(s[a].view.idx,s[t].view.idx,a,t,d),s=o.cells),a>=t&&++t;delete n._notRefreshSelection,r.publish("dojox/grid/rearrange/move/"+n.id,["col",c,e])},moveRows:function(e,a){var n,o,s,l,d,u,c=this.grid,m={},h=[],f=[],g=e.length;for(n=0;g>n&&(o=e[n],!(o>=a));++n)h.push(o);if(f=e.slice(n),l=h,g=l.length)for(d={},i.forEach(l,function(e){d[e]=!0}),m[l[0]]=a-g,s=0,n=l[s]+1,u=n-1;a>n;++n)d[n]?(++s,m[n]=a-g+s):(m[n]=u,++u);if(l=f,g=l.length)for(d={},i.forEach(l,function(e){d[e]=!0}),m[l[g-1]]=a+g-1,s=g-1,n=l[s]-1,u=n+1;n>=a;--n)d[n]?(--s,m[n]=a+s):(m[n]=u,--u);var p=t.clone(m);c.layer("rowmap").setMapping(m),c.forEachLayer(function(e){return"rowmap"!=e.name()?(e.invalidate(),!0):!1},!1),c.selection.selected=[],c._noInternalMapping=!0,c._refresh(),setTimeout(function(){r.publish("dojox/grid/rearrange/move/"+c.id,["row",p,e]),c._noInternalMapping=!1},0)},moveCells:function(e,t){var a=this.grid,n=a.store;if(n.getFeatures()["dojo.data.api.Write"]){if(e.min.row==t.min.row&&e.min.col==t.min.col)return;var o,s,l,d,u=a.layout.cells,c=(e.max.row-e.min.row+1,[]),m=[];for(o=e.min.row,l=t.min.row;o<=e.max.row;++o,++l)for(s=e.min.col,d=t.min.col;s<=e.max.col;++s,++d){for(;u[s]&&u[s].hidden;)++s;for(;u[d]&&u[d].hidden;)++d;c.push({r:o,c:s}),m.push({r:l,c:d,v:u[s].get(o,a._by_idx[o].item)})}if(this._hasIdentity(c.concat(m)))return;i.forEach(c,function(e){n.setValue(a._by_idx[e.r].item,u[e.c].field,"")}),i.forEach(m,function(e){n.setValue(a._by_idx[e.r].item,u[e.c].field,e.v)}),n.save({onComplete:function(){r.publish("dojox/grid/rearrange/move/"+a.id,["cell",{from:e,to:t}])}})}},copyCells:function(e,t){var a=this.grid,n=a.store;if(n.getFeatures()["dojo.data.api.Write"]){if(e.min.row==t.min.row&&e.min.col==t.min.col)return;var o,s,l,d,u=a.layout.cells,c=(e.max.row-e.min.row+1,[]);for(o=e.min.row,l=t.min.row;o<=e.max.row;++o,++l)for(s=e.min.col,d=t.min.col;s<=e.max.col;++s,++d){for(;u[s]&&u[s].hidden;)++s;for(;u[d]&&u[d].hidden;)++d;c.push({r:l,c:d,v:u[s].get(o,a._by_idx[o].item)})}if(this._hasIdentity(c))return;i.forEach(c,function(e){n.setValue(a._by_idx[e.r].item,u[e.c].field,e.v)}),n.save({onComplete:function(){setTimeout(function(){r.publish("dojox/grid/rearrange/copy/"+a.id,["cell",{from:e,to:t}])},0)}})}},changeCells:function(e,t,a){var n=this.grid,o=n.store;if(o.getFeatures()["dojo.data.api.Write"]){var s,l,d,u,c=e,m=n.layout.cells,h=c.layout.cells,f=(t.max.row-t.min.row+1,[]);for(s=t.min.row,d=a.min.row;s<=t.max.row;++s,++d)for(l=t.min.col,u=a.min.col;l<=t.max.col;++l,++u){for(;h[l]&&h[l].hidden;)++l;for(;m[u]&&m[u].hidden;)++u;f.push({r:d,c:u,v:h[l].get(s,c._by_idx[s].item)})}if(this._hasIdentity(f))return;i.forEach(f,function(e){o.setValue(n._by_idx[e.r].item,m[e.c].field,e.v)}),o.save({onComplete:function(){r.publish("dojox/grid/rearrange/change/"+n.id,["cell",a])}})}},clearCells:function(e){var t=this.grid,a=t.store;if(a.getFeatures()["dojo.data.api.Write"]){var n,o,s=t.layout.cells,l=(e.max.row-e.min.row+1,[]);for(n=e.min.row;n<=e.max.row;++n)for(o=e.min.col;o<=e.max.col;++o){for(;s[o]&&s[o].hidden;)++o;l.push({r:n,c:o})}if(this._hasIdentity(l))return;i.forEach(l,function(e){a.setValue(t._by_idx[e.r].item,s[e.c].field,"")}),a.save({onComplete:function(){r.publish("dojox/grid/rearrange/change/"+t.id,["cell",e])}})}},insertRows:function(e,a,n){try{var o,s=this.grid,l=s.store,d=s.rowCount,u={},c={idx:0},m=[],h=0>n,f=this,g=a.length;if(h)n=0;else for(o=n;o<s.rowCount;++o)u[o]=o+g;if(l.getFeatures()["dojo.data.api.Write"]){if(e){var p,y,v=e,k=v.store;if(h)y=i.filter(i.map(s.layout.cells,function(e){return e.field}),function(e){return e});else{for(o=0;!p;++o)p=s._by_idx[o];y=l.getAttributes(p.item)}var b=[];i.forEach(a,function(e,t){var a={},r=v._by_idx[e];if(r){i.forEach(y,function(e){a[e]=k.getValue(r.item,e)}),a=f.args.setIdentifierForNewItem(a,l,d+c.idx)||a;try{l.newItem(a),m.push(n+t),u[d+c.idx]=n+t,++c.idx}catch(o){}}else b.push(e)})}else{if(!a.length||!t.isObject(a[0]))return;i.forEach(a,function(e,t){var a=f.args.setIdentifierForNewItem(e,l,d+c.idx)||e;try{l.newItem(a),m.push(n+t),u[d+c.idx]=n+t,++c.idx}catch(i){}})}s.layer("rowmap").setMapping(u),l.save({onComplete:function(){s._refresh(),setTimeout(function(){r.publish("dojox/grid/rearrange/insert/"+s.id,["row",m])},0)}})}}catch(M){}},removeRows:function(e){var t=this.grid,a=t.store;try{i.forEach(i.map(e,function(e){return t._by_idx[e]}),function(e){e&&a.deleteItem(e.item)}),a.save({onComplete:function(){r.publish("dojox/grid/rearrange/remove/"+t.id,["row",e])}})}catch(n){}},_getPageInfo:function(){var e,t,a,r=this.grid.scroller,n=r.page,o=r.page,s=r.firstVisibleRow,l=r.lastVisibleRow,d=r.rowsPerPage,u=r.pageNodes[0],c=[];return i.forEach(u,function(i,r){i&&(a=!1,e=r*d,t=(r+1)*d-1,s>=e&&t>=s&&(n=r,a=!0),l>=e&&t>=l&&(o=r,a=!0),!a&&(e>l||s>t)&&c.push(r))}),{topPage:n,bottomPage:o,invalidPages:c}}});return n.registerPlugin(l),l});//# sourceMappingURL=Rearrange.js.map