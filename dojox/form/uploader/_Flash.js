//>>built
define("dojox/form/uploader/_Flash",["dojo/dom-form","dojo/dom-style","dojo/dom-construct","dojo/dom-attr","dojo/_base/declare","dojo/_base/config","dojo/_base/connect","dojo/_base/lang","dojo/_base/array","dojox/embed/Flash"],function(e,t,a,i,n,r,o,d,s,l){return n("dojox.form.uploader._Flash",[],{swfPath:r.uploaderPath||require.toUrl("dojox/form/resources/uploader.swf"),preventCache:!0,skipServerCheck:!0,serverTimeout:2e3,isDebug:!1,devMode:!1,deferredUploading:0,postMixInProperties:function(){"flash"===this.uploadType&&(this._files=[],this._fileMap={},this._createInput=this._createFlashUploader,this.getFileList=this.getFlashFileList,this.reset=this.flashReset,this.upload=this.uploadFlash,this.fieldname="flashUploadFiles"),this.inherited(arguments)},onReady:function(e){},onLoad:function(e){},onFileChange:function(e){},onFileProgress:function(e){},getFlashFileList:function(){return this._files},flashReset:function(){this.flashMovie.reset(),this._files=[],this._fileMap={}},uploadFlash:function(e){this.onBegin(this.getFileList()),e=e||{},e.returnType="F",e.uploadType=this.uploadType,this.flashMovie.doUpload(e)},_change:function(e){this._files=this._files.concat(e),s.forEach(e,function(e){e.bytesLoaded=0,e.bytesTotal=e.size,this._fileMap[e.name+"_"+e.size]=e},this),this.onChange(this._files),this.onFileChange(e)},_complete:function(e){var t=this._getCustomEvent();t.type="load",this.onComplete(e)},_progress:function(e){this._fileMap[e.name+"_"+e.bytesTotal].bytesLoaded=e.bytesLoaded;var t=this._getCustomEvent();this.onFileProgress(e),this.onProgress(t)},_error:function(e){this.onError(e)},_onFlashBlur:function(e){},_getCustomEvent:function(){var e={bytesLoaded:0,bytesTotal:0,type:"progress",timeStamp:(new Date).getTime()};for(var t in this._fileMap)e.bytesTotal+=this._fileMap[t].bytesTotal,e.bytesLoaded+=this._fileMap[t].bytesLoaded;return e.decimal=e.bytesLoaded/e.bytesTotal,e.percent=Math.ceil(e.bytesLoaded/e.bytesTotal*100)+"%",e},_connectFlash:function(){this._subs=[],this._cons=[];var e=d.hitch(this,function(e,t){this._subs.push(o.subscribe(this.id+e,this,t))});e("/filesSelected","_change"),e("/filesUploaded","_complete"),e("/filesProgress","_progress"),e("/filesError","_error"),e("/filesCanceled","onCancel"),e("/stageBlur","_onFlashBlur"),this.connect(this.domNode,"focus",function(){this.flashMovie.focus(),this.flashMovie.doFocus()}),this.tabIndex>=0&&i.set(this.domNode,"tabIndex",this.tabIndex)},_createFlashUploader:function(){var e=this.btnSize.w,i=this.btnSize.h;if(!e)return void setTimeout(dojo.hitch(this,function(){this._getButtonStyle(this.domNode),this._createFlashUploader()}),200);var n=this.getUrl();if(n&&n.toLowerCase().indexOf("http")<0&&0!=n.indexOf("/")){var r=window.location.href.split("/");r.pop(),r=r.join("/")+"/",n=r+n}this.inputNode=a.create("div",{className:"dojoxFlashNode"},this.domNode,"first"),t.set(this.inputNode,{position:"absolute",top:"-2px",width:e+"px",height:i+"px",opacity:0});var o={expressInstall:!0,path:(this.swfPath.uri||this.swfPath)+(this.preventCache?"?cb_"+(new Date).getTime():""),width:e,height:i,allowScriptAccess:"always",allowNetworking:"all",vars:{uploadDataFieldName:this.flashFieldName||this.name+"Flash",uploadUrl:n,uploadOnSelect:this.uploadOnSelect,deferredUploading:this.deferredUploading||0,selectMultipleFiles:this.multiple,id:this.id,isDebug:this.isDebug,noReturnCheck:this.skipServerCheck,serverTimeout:this.serverTimeout},params:{scale:"noscale",wmode:"opaque",allowScriptAccess:"always",allowNetworking:"all"}};this.flashObject=new l(o,this.inputNode),this.flashObject.onError=d.hitch(function(e){}),this.flashObject.onReady=d.hitch(this,function(){this.onReady(this)}),this.flashObject.onLoad=d.hitch(this,function(e){this.flashMovie=e,this.flashReady=!0,this.onLoad(this)}),this._connectFlash()}})});//# sourceMappingURL=_Flash.js.map