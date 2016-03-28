//>>built
define("dojox/form/uploader/_HTML5",["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo"],function(e,t,a,i){return e("dojox.form.uploader._HTML5",[],{errMsg:"Error uploading files. Try checking permissions",uploadType:"html5",postMixInProperties:function(){this.inherited(arguments),"html5"===this.uploadType},postCreate:function(){this.connectForm(),this.inherited(arguments),this.uploadOnSelect&&this.connect(this,"onChange",function(e){this.upload(e[0])})},_drop:function(e){i.stopEvent(e);var t=e.dataTransfer;this._files=t.files,this.onChange(this.getFileList())},upload:function(e){this.onBegin(this.getFileList()),this.uploadWithFormData(e)},addDropTarget:function(e,t){t||(this.connect(e,"dragenter",i.stopEvent),this.connect(e,"dragover",i.stopEvent),this.connect(e,"dragleave",i.stopEvent)),this.connect(e,"drop","_drop")},uploadWithFormData:function(e){if(this.getUrl()){var t=new FormData,i=this._getFileFieldName();if(a.forEach(this._files,function(e,a){t.append(i,e)},this),e){e.uploadType=this.uploadType;for(var r in e)t.append(r,e[r])}var o=this.createXhr();o.send(t)}},_xhrProgress:function(e){if(e.lengthComputable){var t={bytesLoaded:e.loaded,bytesTotal:e.total,type:e.type,timeStamp:e.timeStamp};"load"==e.type?(t.percent="100%",t.decimal=1):(t.decimal=e.loaded/e.total,t.percent=Math.ceil(e.loaded/e.total*100)+"%"),this.onProgress(t)}},createXhr:function(){var e,a=new XMLHttpRequest;return a.upload.addEventListener("progress",t.hitch(this,"_xhrProgress"),!1),a.addEventListener("load",t.hitch(this,"_xhrProgress"),!1),a.addEventListener("error",t.hitch(this,function(t){this.onError(t),clearInterval(e)}),!1),a.addEventListener("abort",t.hitch(this,function(t){this.onAbort(t),clearInterval(e)}),!1),a.onreadystatechange=t.hitch(this,function(){if(4===a.readyState){clearInterval(e);try{this.onComplete(JSON.parse(a.responseText.replace(/^\{\}&&/,"")))}catch(t){var i="Error parsing server result:";this.onError(i,t)}}}),a.open("POST",this.getUrl()),a.setRequestHeader("Accept","application/json"),e=setInterval(t.hitch(this,function(){try{}catch(t){clearInterval(e)}}),250),a}})});//# sourceMappingURL=_HTML5.js.map