//>>built
define("dojox/grid/LazyTreeGridStoreModel",["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dijit/tree/ForestStoreModel"],function(e,t,a,i){return e("dojox.grid.LazyTreeGridStoreModel",i,{serverStore:!1,constructor:function(e){this.serverStore=!!e.serverStore},mayHaveChildren:function(e){var i=null;return t.some(this.childrenAttrs,function(t){return i=this.store.getValue(e,t),a.isString(i)?parseInt(i,10)>0||"true"===i.toLowerCase():"number"==typeof i?i>0:"boolean"==typeof i?i:!!this.store.isItem(i)&&(i=this.store.getValues(e,t),!!a.isArray(i)&&i.length>0)},this)},getChildren:function(e,t,i,r){if(r){var n=r.start||0,o=r.count,s=r.parentId,d=r.sort;if(e===this.root)this.root.size=0,this.store.fetch({start:n,count:o,sort:d,query:this.query,onBegin:a.hitch(this,function(e){this.root.size=e}),onComplete:a.hitch(this,function(e){t(e,r,this.root.size)}),onError:i});else{var l=this.store;if(!l.isItemLoaded(e)){var u=a.hitch(this,arguments.callee);return void l.loadItem({item:e,onItem:function(e){u(e,t,i,r)},onError:i})}this.serverStore&&!this._isChildrenLoaded(e)?(this.childrenSize=0,this.store.fetch({start:n,count:o,sort:d,query:a.mixin({parentId:s},this.query||{}),onBegin:a.hitch(this,function(e){this.childrenSize=e}),onComplete:a.hitch(this,function(e){t(e,r,this.childrenSize)}),onError:i})):this.inherited(arguments)}}else this.inherited(arguments)},_isChildrenLoaded:function(e){var a=null;return t.every(this.childrenAttrs,function(i){return a=this.store.getValues(e,i),t.every(a,function(e){return this.store.isItemLoaded(e)},this)},this)},onNewItem:function(e,t){},onDeleteItem:function(e){}})});//# sourceMappingURL=LazyTreeGridStoreModel.js.map