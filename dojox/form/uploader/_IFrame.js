//>>built
define("dojox/form/uploader/_IFrame",["dojo/query","dojo/dom-construct","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/dom-form","dojo/request/iframe"],function(e,t,a,i,r,o,n){return a("dojox.form.uploader._IFrame",[],{postMixInProperties:function(){this.inherited(arguments),"iframe"===this.uploadType&&(this.uploadType="iframe",this.upload=this.uploadIFrame)},uploadIFrame:function(e){var a,i={},o=(this.getForm(),this.getUrl()),d=this;if(e=e||{},e.uploadType=this.uploadType,a=t.place('<form enctype="multipart/form-data" method="post"></form>',this.domNode),r.forEach(this._inputs,function(e,t){""!==e.value&&(a.appendChild(e),i[e.name]=e.value)},this),e)for(nm in e)void 0===i[nm]&&t.create("input",{name:nm,value:e[nm],type:"hidden"},a);n.post(o,{form:a,handleAs:"json",content:e}).then(function(e){t.destroy(a),e.ERROR||e.error?d.onError(e):d.onComplete(e)},function(e){t.destroy(a),d.onError(e)})}})});//# sourceMappingURL=_IFrame.js.map