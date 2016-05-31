//>>built
require({cache:{"url:dojox/form/resources/UploaderFileList.html":'<div class="dojoxUploaderFileList">\n	<div data-dojo-attach-point="progressNode" class="dojoxUploaderFileListProgress">\n		<div data-dojo-attach-point="percentBarNode" class="dojoxUploaderFileListProgressBar"></div>\n		<div data-dojo-attach-point="percentTextNode" class="dojoxUploaderFileListPercentText">0%</div>\n	</div>\n	<table class="dojoxUploaderFileListTable">\n		<thead>\n			<tr class="dojoxUploaderFileListHeader">\n				<th class="dojoxUploaderIndex">${headerIndex}</th>\n				<th class="dojoxUploaderIcon">${headerType}</th>\n				<th class="dojoxUploaderFileName">${headerFilename}</th>\n				<th class="dojoxUploaderFileSize" data-dojo-attach-point="sizeHeader">${headerFilesize}</th>\n			</tr>\n		</thead>\n		<tbody class="dojoxUploaderFileListContent" data-dojo-attach-point="listNode"></tbody>\n	</table>\n<div>'}}),define("dojox/form/uploader/FileList",["dojo/_base/fx","dojo/dom-style","dojo/dom-class","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dijit/_base/manager","dojox/form/uploader/_Base","dojo/text!../resources/UploaderFileList.html"],function(e,t,a,i,r,o,n,s,l){return i("dojox.form.uploader.FileList",s,{uploaderId:"",uploader:null,headerIndex:"#",headerType:"Type",headerFilename:"File Name",headerFilesize:"Size",_upCheckCnt:0,rowAmt:0,templateString:l,postCreate:function(){this.setUploader(),this.hideProgress()},reset:function(){for(var e=0;e<this.rowAmt;e++)this.listNode.deleteRow(0);this.rowAmt=0},setUploader:function(){if(this.uploaderId||this.uploader){if(this.uploaderId&&!this.uploader)this.uploader=n.byId(this.uploaderId);else if(this._upCheckCnt>4)return}else;this.uploader?(this.connect(this.uploader,"onChange","_onUploaderChange"),this.connect(this.uploader,"reset","reset"),this.connect(this.uploader,"onBegin",function(){this.showProgress(!0)}),this.connect(this.uploader,"onProgress","_progress"),this.connect(this.uploader,"onComplete",function(){setTimeout(r.hitch(this,function(){this.hideProgress(!0)}),1250)}),(this._fileSizeAvail={html5:1,flash:1}[this.uploader.uploadType])||(this.sizeHeader.style.display="none")):(this._upCheckCnt++,setTimeout(r.hitch(this,"setUploader"),250))},hideProgress:function(e){var t=e?{ani:!0,endDisp:"none",beg:15,end:0}:{endDisp:"none",ani:!1};this._hideShowProgress(t)},showProgress:function(e){var t=e?{ani:!0,endDisp:"block",beg:0,end:15}:{endDisp:"block",ani:!1};this._hideShowProgress(t)},_progress:function(e){this.percentTextNode.innerHTML=e.percent,t.set(this.percentBarNode,"width",e.percent)},_hideShowProgress:function(a){var i=this.progressNode,r=function(){t.set(i,"display",a.endDisp)};a.ani?(t.set(i,"display","block"),e.animateProperty({node:i,properties:{height:{start:a.beg,end:a.end,units:"px"}},onEnd:r}).play()):r()},_onUploaderChange:function(e){this.reset(),o.forEach(e,function(e,t){this._addRow(t+1,this.getFileType(e.name),e.name,e.size)},this)},_addRow:function(e,t,i,r){var o,n=this.listNode.insertRow(-1);o=n.insertCell(-1),a.add(o,"dojoxUploaderIndex"),o.innerHTML=e,o=n.insertCell(-1),a.add(o,"dojoxUploaderIcon"),o.innerHTML=t,o=n.insertCell(-1),a.add(o,"dojoxUploaderFileName"),o.innerHTML=i,this._fileSizeAvail&&(o=n.insertCell(-1),a.add(o,"dojoxUploaderSize"),o.innerHTML=this.convertBytes(r).value),this.rowAmt++}})});//# sourceMappingURL=FileList.js.map