//>>built
define("dijit/form/DataList",["dojo/_base/declare","dojo/dom","dojo/_base/lang","dojo/query","dojo/store/Memory","../registry"],function(e,t,i,o,n,r){function s(e){return{id:e.value,value:e.value,name:i.trim(e.innerText||e.textContent||"")}}return e("dijit.form.DataList",n,{constructor:function(e,n){this.domNode=t.byId(n),i.mixin(this,e),this.id&&r.add(this),this.domNode.style.display="none",this.inherited(arguments,[{data:o("option",this.domNode).map(s)}])},destroy:function(){r.remove(this.id)},fetchSelectedItem:function(){var e=o("> option[selected]",this.domNode)[0]||o("> option",this.domNode)[0];return e&&s(e)}})});//# sourceMappingURL=DataList.js.map