//>>built
define("dojox/dnd/Selector",["dojo","dojox","dojo/dnd/Selector"],function(e,t){return e.declare("dojox.dnd.Selector",e.dnd.Selector,{conservative:!0,isSelected:function(t){var a=e.isString(t)?t:t.id;return this.getItem(a)&&this.selected[a]},selectNode:function(t,a){a||this.selectNone();var i=e.isString(t)?t:t.id;return this.getItem(i)&&(this._removeAnchor(),this.anchor=e.byId(t),this._addItemClass(this.anchor,"Anchor"),this.selection[i]=1,this._addItemClass(this.anchor,"Selected")),this},deselectNode:function(t){var a=e.isString(t)?t:t.id;return this.getItem(a)&&this.selection[a]&&(this.anchor===e.byId(t)&&this._removeAnchor(),delete this.selection[a],this._removeItemClass(this.anchor,"Selected")),this},selectByBBox:function(t,a,i,r,o){return o||this.selectNone(),this.forInItems(function(o,d){var n=e.byId(d);n&&this._isBoundedByBox(n,t,a,i,r)&&this.selectNode(d,!0)},this),this},_isBoundedByBox:function(e,t,a,i,r){return this.conservative?this._conservativeBBLogic(e,t,a,i,r):this._liberalBBLogic(e,t,a,i,r)},shift:function(e,t){var a=this.getSelectedNodes();a&&a.length&&this.selectNode(this._getNodeId(a[a.length-1].id,e),t)},_getNodeId:function(e,t){for(var a=this.getAllNodes(),i=e,r=0,o=a.length;r<o;++r)if(a[r].id==e){var d=Math.min(o-1,Math.max(0,r+(t?1:-1)));r!=d&&(i=a[d].id);break}return i},_conservativeBBLogic:function(t,a,i,r,o){var d,n=e.coords(t);return a>r&&(d=a,a=r,r=d),i>o&&(d=i,i=o,o=d),n.x>=a&&n.x+n.w<=r&&n.y>=i&&n.y+n.h<=o},_liberalBBLogic:function(t,a,i,r,o){var d,n,l,s,m,u,f=e.position(t),h=!1,c=!1,y=f.x,v=f.y,p=f.x+f.w,M=f.y+f.h;return a<r?(l=a,s=i):(h=!0,l=r,s=o),i<o?(c=!0,m=r,u=o):(m=a,u=i,l=r,s=o),h&&c&&(m=a,u=o,l=r,s=i),d=(y>=l||p<=m)&&l<=p&&m>=y||y<=l&&p>=m,n=s<=M&&u>=v||M>=u&&v<=u,d&&n}})});//# sourceMappingURL=Selector.js.map