//>>built
define("dojox/mobile/dh/DataHandler",["dojo/_base/declare","dojo/_base/lang","dojo/_base/Deferred","./ContentTypeMap"],function(e,t,i,a){return e("dojox.mobile.dh.DataHandler",null,{ds:null,target:null,refNode:null,constructor:function(e,t,i){this.ds=e,this.target=t,this.refNode=i},processData:function(e,r){var o=a.getHandlerClass(e);require([o],t.hitch(this,function(e){i.when(this.ds.getData(),t.hitch(this,function(){i.when((new e).parse(this.ds.text,this.target,this.refNode),function(e){r(e)})}))}))}})});//# sourceMappingURL=DataHandler.js.map