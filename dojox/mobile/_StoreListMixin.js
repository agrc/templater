//>>built
define("dojox/mobile/_StoreListMixin",["dojo/_base/array","dojo/_base/declare","./_StoreMixin","./ListItem","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/_StoreListMixin"],function(e,t,i,a,o,r){var n=t(o("dojo-bidi")?"dojox.mobile._NonBidiStoreListMixin":"dojox.mobile._StoreListMixin",i,{append:!1,itemMap:null,itemRenderer:a,buildRendering:function(){if(this.inherited(arguments),this.store){var e=this.store;this.store=null,this.setStore(e,this.query,this.queryOptions)}},createListItem:function(e){return new this.itemRenderer(this._createItemProperties(e))},_createItemProperties:function(e){var t={};e.label||(t.label=e[this.labelProperty]),o("dojo-bidi")&&void 0===t.dir&&(t.dir=this.isLeftToRight()?"ltr":"rtl");for(var i in e)t[this.itemMap&&this.itemMap[i]||i]=e[i];return t},_setDirAttr:function(e){return e},generateList:function(t){this.append||e.forEach(this.getChildren(),function(e){e.destroyRecursive()}),e.forEach(t,function(t,i){this.addChild(this.createListItem(t)),t[this.childrenProperty]&&e.forEach(t[this.childrenProperty],function(e,t){this.addChild(this.createListItem(e))},this)},this)},onComplete:function(e){this.generateList(e)},onError:function(){},onAdd:function(e,t){this.addChild(this.createListItem(e),t)},onUpdate:function(e,t){this.getChildren()[t].set(this._createItemProperties(e))},onDelete:function(e,t){this.getChildren()[t].destroyRecursive()}});return o("dojo-bidi")?t("dojox.mobile._StoreListMixin",[n,r]):n});//# sourceMappingURL=_StoreListMixin.js.map