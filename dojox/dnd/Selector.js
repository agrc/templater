//>>built
define("dojox/dnd/Selector",["dojo","dojox","dojo/dnd/Selector"],function(e,t){return e.declare("dojox.dnd.Selector",e.dnd.Selector,{conservative:!0,isSelected:function(t){var a=e.isString(t)?t:t.id,i=this.getItem(a);return i&&this.selected[a]},selectNode:function(t,a){a||this.selectNone();var i=e.isString(t)?t:t.id,r=this.getItem(i);return r&&(this._removeAnchor(),this.anchor=e.byId(t),this._addItemClass(this.anchor,"Anchor"),this.selection[i]=1,this._addItemClass(this.anchor,"Selected")),this},deselectNode:function(t){var a=e.isString(t)?t:t.id,i=this.getItem(a);return i&&this.selection[a]&&(this.anchor===e.byId(t)&&this._removeAnchor(),delete this.selection[a],this._removeItemClass(this.anchor,"Selected")),this},selectByBBox:function(t,a,i,r,o){return o||this.selectNone(),this.forInItems(function(o,n){var d=e.byId(n);d&&this._isBoundedByBox(d,t,a,i,r)&&this.selectNode(n,!0)},this),this},_isBoundedByBox:function(e,t,a,i,r){return this.conservative?this._conservativeBBLogic(e,t,a,i,r):this._liberalBBLogic(e,t,a,i,r)},shift:function(e,t){var a=this.getSelectedNodes();a&&a.length&&this.selectNode(this._getNodeId(a[a.length-1].id,e),t)},_getNodeId:function(e,t){for(var a=this.getAllNodes(),i=e,r=0,o=a.length;o>r;++r)if(a[r].id==e){var n=Math.min(o-1,Math.max(0,r+(t?1:-1)));r!=n&&(i=a[n].id);break}return i},_conservativeBBLogic:function(t,a,i,r,o){var n,d=e.coords(t);return a>r&&(n=a,a=r,r=n),i>o&&(n=i,i=o,o=n),d.x>=a&&d.x+d.w<=r&&d.y>=i&&d.y+d.h<=o},_liberalBBLogic:function(t,a,i,r,o){var n,d,l,s,m,u,h=e.position(t),c=!1,f=!1,y=h.x,v=h.y,p=h.x+h.w,g=h.y+h.h;return r>a?(l=a,s=i):(c=!0,l=r,s=o),o>i?(f=!0,m=r,u=o):(m=a,u=i,l=r,s=o),c&&f&&(m=a,u=o,l=r,s=i),n=(y>=l||m>=p)&&p>=l&&m>=y||l>=y&&p>=m,d=g>=s&&u>=v||g>=u&&u>=v,n&&d}})});//# sourceMappingURL=Selector.js.map